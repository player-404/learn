/*
* for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）
  上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
* for (variable of iterable) {
    //statements
    }
* variable
  在每次迭代中，将不同属性的值分配给变量。
  iterable
  被迭代枚举其属性的对象。
*
 */
let arr = ['张三', '李四', '王五'];
for (value of arr) {
    console.log(value); // 张三 李四 王五
}


//对象不可迭代
/*Î
let obj = {name: '张三', age: 12};
for (value of obj) {
    console.lo(value); //  obj is not iterable
}
 */

//对于for...of的循环，可以由break, throw  continue    或return终止
let arr1 = ['小红', "小明", "效率"];
for (value of arr1) {
    console.log(value);
    break; // 终止循环
}
