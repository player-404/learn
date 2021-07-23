//创建symbol
let s = Symbol(); //不需要使用new关键字
console.log(typeof (s)); //symbol


//给symbol添加描述
let s2 = Symbol('a'); //symbol可以添加一个字符串参数为symbol的参数，用以区分各个symbol
let s3 = Symbol('a');
console.log(s2 === s3); //false 参数仅用于描述symbol, 他们唯一的


//symbol参数为对象时，会调用参数对象的toString方法，将其转换为字符串
let s1 = Symbol({
    name: 'zhangsan',
    age: 18
})
console.log(s1); //Symbol([object Object])


//symbol可以接受其他类型的参数
let s4 = Symbol(true);
console.log(s4); //Symbol(1)


//symbol不可以进行运算
let s5 = Symbol('this is onn');
let s6 = Symbol('this is two');
//let sum = s5 + s6 // Cannot convert a Symbol value to a number
//console.log(`s5 is ${s5}`); // Cannot convert a Symbol value to a string
//console.log('s5 id' + s5); // Cannot convert a Symbol value to a string


//symbol的数据转换
let s7 = Symbol('name');
console.log(String(s7)); //Symbol(name)
//console.log(Number(s7)) // Cannot convert a Symbol value to a number
console.log(Boolean(s7)); //true


//Symbol.prototype.description(只读) 获取symbol的描述
const s8 = Symbol('zhangsan');
s8.description = 'lisi' //无效
console.log(s8.description);


//symbol用作对象属性
const s9 = Symbol('name');
const obj = {};
obj[s9] = '张三'; //使用[]
console.log(obj); //{ [Symbol(name)]: '张三' }
//使用.运算符会被当作字符串
const s10 = Symbol('age');
obj.s10 = 18; //仅会创建名为 s10 字符串的属性
console.log(obj) //{ s10: 18, [Symbol(name)]: '张三' }
//正确写法
obj[s10] = 20;
//或者
//obj[Symbol('age')] = 20;
console.log(obj) // { s10: 18, [Symbol(name)]: '张三', [Symbol(age)]: 20 }


//symbol用作常量数据
const name = Symbol('张三');
const who = name;
if (who === name) {
    console.log('my name is ' + who.description);
}
const temp = Symbol();
//用作对象的值
const obj1 = {
    name: Symbol('张三'),
    age: Symbol(18)
};
console.log(obj1);


//消除魔法字符串：代码冲多次出现的字符串、数值，后期代码维护时，需要多处修改，维护困难，且代码难以理解
let code = 1;
if (code === 200) {
    console.log('success')
}
if (code === 0) {
    console.log('游客模式')
}
if (code === 1) {
    console.log('管理员模式')
}
//消除它
const successCode = 200;
const guestCode = 0;
const adminCode = 1;
if (code === successCode) {
    console.log('成功');
}
if (code === guestCode) {
    console.log('游客模式');
}
if (code === adminCode) {
    console.log('管理员模式');
}
//使用symbol
const code1 = Symbol('code one');
const code2 = Symbol('code two');
const code3 = Symbol('code three')
if (code === code1) {
    //do something...
}
if (code === code2) {
    //do something...
}
if (code === code3) {
    //do something...
}


//遍历symbol
let arr = [Symbol('one'), Symbol('two'), Symbol('three')];
arr.forEach(item => {
    console.log(item);
})
//作为对象属性时，无法被遍历
let sysObj = {
    [Symbol('name')]: '张三',
    [Symbol('age')]: 20,
    [Symbol('job')]: '程序员'
};
for (key in sysObj) {
    console.log(key) //无值
}
console.log(Object.keys(sysObj)) //[]
console.log(Object.getOwnPropertyNames(sysObj))//[]
//获取对象中sysmbol属性
//Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组
console.log(Reflect.ownKeys(sysObj)) //[ Symbol(name), Symbol(age), Symbol(job) ]
//Object.getOwnPropertySymbols()  返回一个给定对象自身的所有 Symbol 属性的数组
console.log(Object.getOwnPropertySymbols(sysObj)) // [ Symbol(name), Symbol(age), Symbol(job) ]

console.log(Object.values(sysObj))


//创建symbol值 Symbol.for() 
//该法法将symbole登记在全局，无论是在那个词法作用域调用的，并且会先查找是否有以该方法传入的参数的symbol的值，有则返回该symbol值，否则创建以该参数为描述的symbol值
//Symbol() 不会查找，每次调用都会创建一个全新的symbol值，不会登记
let a1 = Symbol.for('one');
let a2 = Symbol.for('one');
console.log(a1 === a2); //true
a1 = Symbol('one');
a2 = Symbol('one');
console.log(Symbol.keyFor(a1))
console.log(a1 === a2); //false

//Symbol.keyFor() 方法返回一个已登记的 Symbol 类型值的key
let b1 = Symbol.for('a');
let b2 = Symbol('b');
console.log(Symbol.keyFor(b1)); //a
console.log(Symbol.keyFor(b2)) //undefined Symbol()不会登记symbol值


//模块的 Singleton 模式 保证每次返回的始终是同一个实例
global[Symbol.for('foo')] = {
    name: '王五'
}
global = require('./model');
 console.log(global.name);

//Symbol.isConcatSpreadable
