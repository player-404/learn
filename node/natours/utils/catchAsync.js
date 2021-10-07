module.exports = (fn) => {
  // async 在此处没有实际意义
  return async (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};
