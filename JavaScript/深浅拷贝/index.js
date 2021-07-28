/* 
浅拷贝: 拷贝的指针，存在引用数据类型共享的问题
深拷贝：拷贝的是对象本身的值，拷贝与被拷贝对象之间没有关系
*/

//浅拷贝
//1. Object.assign
let a = {a: '张三', b: '李四'};
let c = {d: '王五'};
let d = Object.assign(a, c);
a.a = 1;
// console.log(d);

//扩展运算符
let a1 = {name: '张三', age: 18};
let b1 = {...a1};
a1.age = 20;
console.log(b1, a1);
