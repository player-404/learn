/*
* Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
* 语法：Object.getPrototypeOf(object)
* 参数： obj：要返回其原型的对象；返回值：给定对象的原型。如果没有继承属性，则返回 null
 */
function Person() {
    this.name = '张三';
}

console.log(Object.getPrototypeOf(Person));
let p = new Person();
console.log(Object.getPrototypeOf(p));