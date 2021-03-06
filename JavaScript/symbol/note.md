# symbol
### 什么是symbol
`符号`，给对象的属性或变量添加`唯一的标记`，防止对象中的属性同名或变量值相同，symbol是唯一的，任意两个由`Symbol()方法创建的`symbol都是不相等的，symbol`属于Javascript中的基本数据类型`

### 创建symbol

不需要使用new关键字，symbol并不是构造函数

```javascript
let s = Symbol();
console.log(typeof(s)); //symbol
```

### symbol描述

symbol可以接收一个字符串参数为`symbol的描述`

```javascript
//给symbol添加描述
let s2 = Symbol('a'); //symbol可以添加一个字符串参数为symbol的参数，用以区分各个symbol
let s3 = Symbol('a');
console.log(s2 === s3); //false 参数仅用于描述symbol, 他们仍是唯一的
```

### symbol的对象参数

symbol参数为对象时，会调用参数对象的toString方法，将其转换为字符串

```javascript
let s1 = Symbol({
    name: 'zhangsan',
    age: 18
})
console.log(s1); //Symbol([object Object])
```

### symbol其他参数

symbol可以接受其他类型的参数

```javascript
let s4 = Symbol(1);
console.log(s4); //Symbol(1)
```

### symbol不可以进行运算

根据错误信息，运算的本质是：不可将symbol值进行隐式的转换；但是symbol却可以`显式转换`

```javascript
let s5 = Symbol('this is onn');
let s6 = Symbol('this is two');
let sum = s5 + s6 // Cannot convert a Symbol value to a number
console.log(`s5 is ${s5}`); // Cannot convert a Symbol value to a string
console.log('s5 id' + s5); // Cannot convert a Symbol value to a string
```

### symbol数据类型转换

可以将`symbol`数据类型转换为`字符串`与`Boolean`

不可转换为`Number`

```javascript
let s7 = Symbol('name');
console.log(String(s7)); //Symbol(name)
console.log(Number(s7)) // Cannot convert a Symbol value to a number
console.log(Boolean(s7)); //true
```

### Symbol.prototype.description(只读) 

获取symbol的描述

```javascript
const s8 = Symbol('zhangsan');
s8.description = 'lisi' //无效
console.log(s8.description); //zhangsan
```

### symbol用作常量

用作变量的值

```javascript
const name = Symbol('张三');
const who = name;
if (who === name) {
    console.log('my name is ' + who.description); //my name is zhangsan
}
const temp = Symbol();
```

用作对象属性的值

```javascript
const obj1 = {
    name: Symbol('张三'),
    age: Symbol(18)
};
console.log(obj1); //{ name: Symbol(张三), age: Symbol(18) }
```

## symbol用途

### symbol消除魔法字符串

`魔法字符串`:代码中多次出现的字符串、数值，后期代码维护时，需要多处修改，维护困难，且代码难以理解

```javascript
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
```

消除它: 后期维护时只需维护`successcode`、`guestcode`、`admincode`,且方便后期的使用

```javascript
let code = 1;
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
```

使用`symbol`:当你不在乎变量的值时

```javascript
let code = 1;
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
```

### symbol的遍历

symbol作为属性时，无法被一般的遍历方法（`for in`,`Object.keys()`,`Object.getOwnPropertyNames()`）遍历

```javascript
// for in
let sysObj = {
    [Symbol('name')]: '张三',
    [Symbol('age')]: 20,
    [Symbol('job')]: '程序员'
};
for (key in sysObj) {
    console.log(key) //无值
}

//Object.keys
console.log(Object.keys(sysObj)) //[]

//Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(sysObj))//[]

```

**同样无法获取值**

```javascript
console.log(Object.values(sysObj)) //[]
```



**可以使用以下两种方法遍历symbol属性:**

#### Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组

```javascript
console.log(Reflect.ownKeys(sysObj)) //[ Symbol(name), Symbol(age), Symbol(job) ]
```

#### Object.getOwnPropertySymbols()  返回一个给定对象自身的所有 Symbol 属性的数组

```javascript
console.log(Object.getOwnPropertySymbols(sysObj)) // [ Symbol(name), Symbol(age), Symbol(job) ]
```

### 创建symbol与获取symbol key

#### symbol.for(key) 

创建一个不存在的symbol值，调用该方法，会`先查询全局注册表中否存在该以该key(键)为参数的symbol值，有则返回该值，否则创建带key的Symbol并添加到注册表中，key会被转换成字符串`

```javascript
let a1 = Symbol.for('one');
let a2 = Symbol.for('one'); //注册表中存在对应的符号，返回该符号
console.log(a1 === a2); //true
```

Symbol()每次都创建全新的symbol，不会添加进注册表中

```javascript
a1 = Symbol('one');
a2 = Symbol('one');
console.log(a1 === a2); //false
```

#### Symbol.keyFor()

返回注册表中symbol的key值

```javascript
let b1 = Symbol.for('a');
console.log(Symbol.keyFor(b1)); //a
```

Symbol()创建的符号不会添加进注册表,所以查询不到

```javascript
let b2 = Symbol('b');
console.log(Symbol.keyFor(b2)) //undefined Symbol()不会登记symbol
```

### 模块的 Singleton 模式 保证每次返回的始终是同一个实例

创建构造函数并以吗模块的形式返回实例，可能会被无意修改

```javascript
//model.js
function A(name) {
    this.name = name
}

if (!global._foo) {  //上下文中存在相同变量，不创建实例
    global._foo = new A('张三');
}
module.exports = global._foo;

//index.js
global._foo = { /创建与实例同名的变量
    name: '李四'
}
global._foo = require('./model');
 console.log(global._foo.name); //李四
```

使用symbol可以避免无意间修改模块中的代码

```javascript
//model.js
function A(name) {
    this.name = name
}
if (!global[Symbol.for('foo')]) { //使用symbol
    global._foo = new A('张三');
}
module.exports = global._foo;

//index.js
global._foo = {
    name: '李四'
}
global._foo = require('./model');
 console.log(global._foo.name); //张三 
```

同样使用symbol可以修改

```javascript
//model.js
function A(name) {
    this.name = name
}
if (!global[Symbol.for('foo')]) {
    global[Symbol.for('foo')] = new A('张三');
}
module.exports = global[Symbol.for('foo')];

//global[Symbol.for('foo')] = {
    name: '王五'
}
global = require('./model');
 console.log(global.name); //王五
```

注意：

使用symbol()是不可修改的，因为每次使用该方法都会创建一个全新的symbol

### 内置方法

#### Symbol.hasInstance

**`Symbol.hasInstance`**用于判断某对象是否为某构造器的实例。因此你可以用它自定义 [`instanceof`](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Operators/instanceof) 操作符在某个类上的行为。也就是调用instanceof时，会调用这个方法



