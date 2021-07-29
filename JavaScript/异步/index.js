//创建一个Promise 使用new关键字 需要传入一个执行器函数
let p = new Promise(() => {
}); //传入执行器函数executor
console.log(p); //Promise {pending}

//promise的三种状态
// pending: 等待
let pending = new Promise(() => {
});
//fulfilled: 解决
//let rej = new Promise((resolve, reject) => {reject() });
//reject: 拒绝
let res = new Promise((resolve, reject) => { resolve() });

//promise状态一旦改变不可在修改
let p2 = new Promise((resolve, reject) => {
    resolve();
    reject();//状态还是resolve, promise状态一旦改变不可再修改
});

//promise reslove的两种写法 返回一个状态为resolve的promise
let p3 = Promise.resolve();
let p4 = new Promise((resolve, reject) => resolve());
//resolve可以接受一个参数  将参数参数都转换为一个解决状态期约
let p5 = Promise.resolve(1);
console.log(p5) //Promise<fulfilled>: 1
//多余参数会被忽略
let p6 = new Promise(((resolve, reject) => resolve(1,2,3,4)));
console.log(p6)//Promise<fulfilled>: 1
//即使是error 也可转换为解决状态的promise
let p7 = Promise.resolve(new Error('foo'));
console.log(p7) //Promise<fulfilled>: Error: foo
//当传入的是另一个promise则会保留该promise的状态
let p8 = new Promise(() => {})
console.log(p8) // Promise<pending>
let p9 = Promise.resolve(p8);
console.log(p9) //Promise<pending>

//reject的两种方法 返回一个拒绝状态的promise
let rej1 = new Promise((resolve, reject) => {
    reject();
})
console.log(rej1); // Promise {<rejected>: undefined}
let rej2 = Promise.reject();
console.log(rej2); // Promise {<rejected>: undefined}
// 传入的参数回成为promise reject状态的理由
let rej3 = Promise.reject(1,2,3,4);
console.log(rej3);// Promise {<rejected>: 1}
let rej4 = Promise.reject(Promise.resolve(1));
console.log(rej4) // Promise {<rejected>: Promise}