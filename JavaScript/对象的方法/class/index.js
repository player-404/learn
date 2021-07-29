//继承
//class是语法语法糖， 本质还是函数
//实现继承的几种方法
//组合继承
function Person(name) {
    this.name = name;
    this.color = ['yellow', 'green']
}

Person.prototype.say = function() {
    console.log(`my name is ${this.name}, like color is ${this.color}`);
}
function Son(name) {
    Person.call(this, name);
}
Son.prototype = new Person; //构造函数Son的prototype 指向构造函数person的prototype
let p = new Son('张三');
p.color.push('blue')
p.say();
let p1 = new Son('王五');
p1.say();

//使用Object.create 优化组合式继承
function Perosn1(name) {
    this.name = name;
}
Perosn1.prototype.say = function() {
    console.log(`my name is ${this.name}`);
}
function Son1(name) {
    Perosn1.call(this, name);
}
Son1.prototype = Object.create(Perosn1.prototype);
let s1 = new Son1('zasas');
s1.say();

//原型式继承
function object(o) {
    function F() {};
    F.prototype = o;
    return F;
}


//es6继承
class Person {
    constructor() { //等同于构造函数
        this.name = '张三';
    }
    say() {  //所有方法都创建在prototype上
        console.log(`my name is ${this.name}`);
    }
}
class Son extends Person {
    constructor() {
        super(); // super指向父类的constructor 相当与调用可父类的构造函数
    }
}
