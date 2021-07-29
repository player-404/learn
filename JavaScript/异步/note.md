# 异步
###EventLoop
所有任务放在`执行栈`中，等待主线程执行，`同步任务优先执行`，`调用栈为空`后，就会去任务队列中`查找微任务执行`，`微任务队列为空后`，就会去`执行宏任务`，并且每次执行宏任务之前都会去查询微任务队列是否为空，如此循环；





### Promise
处理异步任务，`Promise`解决es5之前处理异步任务产生的回调地狱的问题
### Promise的三种状态
* fulfilled: 解决
* pending: 等待
* reject: 拒绝
### 创建promise
使用new关键字创建，传入一个执行期函数，状态为`pending`
```javascript
let p = new Promise(() => {
}); //传入执行器函数executor
```
### fulfilled(解决)
创建Promise fulfilled状态的两种方法
```javascript
let p3 = Promise.resolve();
let p4 = new Promise((resolve, reject) => resolve());
```
**fulfilled 可以传入一个参数 且会将这个参数转换为`PromiseResult`**
```javascript
let p5 = Promise.resolve(1);
console.log(p5) //Promise<fulfilled>: 1
//多余参数会被忽略
let p6 = new Promise(((resolve, reject) => resolve(1,2,3,4)));
console.log(p6)//Promise<fulfilled>: 1
```
**即使是error也可成为fulfilled 状态的参数**
```javascript
let p7 = Promise.resolve(new Error('foo'));
console.log(p7) //Promise<fulfilled>: Error: foo
```
**当传入的是另一个Promise则会保留该Promise的状态**
```javascript
//当传入的是另一个promise则会保留该promise的状态
let p8 = new Promise(() => {})
console.log(p8) // Promise<pending>
let p9 = Promise.resolve(p8);
console.log(p9) //Promise<pending>
```
### reject(拒绝)
创建Promise reject状态的两种方法
```javascript
let rej1 = new Promise((resolve, reject) => {
    reject();
})
console.log(rej1); // Promise {<rejected>: undefined}
let rej2 = Promise.reject();
console.log(rej2); // Promise {<rejected>: undefined}
```
**传入的参数会成为reject状态的理由**
```javascript
// 传入的参数回成为promise reject状态的理由
let rej3 = Promise.reject(1,2,3,4);
console.log(rej3);// Promise {<rejected>: 1}
let rej4 = Promise.reject(Promise.resolve(1));
console.log(rej4) // Promise {<rejected>: Promise}
```