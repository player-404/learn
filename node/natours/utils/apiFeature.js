//api属性方法
class ApiFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //条件查询
  filter() {
    let reqObj = { ...this.queryString };
    //过滤特殊字段
    const filterStr = ["page", "limit", "sort", "filter"];
    filterStr.forEach((item) => delete reqObj[item]);

    //条件查询
    let queryStr = JSON.stringify(reqObj);
    reqObj = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    );
    this.query = this.query.find(reqObj);
    return this;
  }

  //排序查询
  sort() {
    //排序
    const sort = this.queryString.sort || "price"; // price 升序排序  -price 降序排序
    const sortBy = sort.split(",").join(" ");
    // 查询数据排序： 使用了实例 query 的 sort 方法
    this.query = this.query.sort(sortBy);
    return this;
  }

  //限制字段
  limit() {
    //过滤
    let filter = this.queryString.filter || "-createAt";
    filter = filter.split(",").join(" ");
    this.query = this.query.select(filter);
    return this;
  }

  //分页
  paging() {
    //分页
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = ApiFeature;
