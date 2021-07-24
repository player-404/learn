/*
* instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
* 语法：object instanceof constructor
* 参数：
*   object 某个实例对象
*   constructor 某个构造函数
* 翻译：instanceof(的实例)
 */
const Person = function () {
    this.name = '张三'
}
let p = new Person();
console.log(p instanceof Person); //true
console.log(p instanceof Object); //true
console.log(Person instanceof Object); //true

//instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
function Person1() {
}

function Person2() {
}

let p1 = new Person1();
console.log(p1 instanceof Person1); //true
Person1.prototype = Person2.prototype;
console.log(p1 instanceof Person2);

