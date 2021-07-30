//Promise then异步执行，then方法含有两个参数：onResolve处理程序(可选) onReject处理程序(可选) 这个参数是互斥的
let p10 = new Promise(((resolve, reject) => {
    //...此处的代码同步执行
    resolve('ok');
}))
p10.then(data => { //异步执行的
    console.log('data');
})
// then非函数参数会被忽略
let test = new Promise(((resolve, reject) => {
    resolve("i'm ok");
}))
test.then('123'); //忽略

//then方法会返回一个新的promise实例
let p = new Promise(() => {

})
console.log(p); // Promise  {pending };
let p2 = p.then();
console.log(p2); // Promise { pending };
// then方法的参数为空时， 返回的实例会继承原promise的状态
// fulfilled 状态
let p4 = Promise.resolve('a');
let p5 = p4.then();
console.log(p5); //Promise <fulfilled> a;
//reject 状态
let p6 = Promise.reject();
let p7 = p6.then();
//console.log(p7)// reject undefined

//then没有显式返回值，返回的promise.resolve()包装的值为undefined
let p1 = new Promise((resolve, reject) => {
    resolve()
})
console.log(p1); // Peomise { fulfilled } undefined
let p3 = p1.then(() => {
    console.log(123)
})
console.log(p3); // promise  <fulfilled> undefined

//then方法返回的值则为新primose实例包装的值
let p9 = Promise.resolve();
let p10 = p9.then(() => { return 'ok'});
console.log(p10); //Promise<fulfilled> ok;

//then方法 输出错误会 返回一个reject promise
let p11 = Promise.resolve();
let p12 = p11.then(() => {
    throw Error('error');
})
// console.log(p12); Promise<reject> error

//然而 then方法返回错误并不会 返回 reject 包装的 promise
let p12 = Promise.resolve();
let p13 = p12.then(() => {
    return new Error('error');
})
console.log(p13);// Promise<fulfilled> error

//then方法返回promise的话，则返回的新promise实例继承该promise的状态
let p14 = new Promise(((resolve, reject) => {
    resolve('ok');
}))
let p15 = p14.then(() => new Promise((resolve, reject) => {reject()}));
console.log(p15); // Promise<reject> undefined

//关于then方法reject函数参数
//then 方法中 reject函数会返回一个状态为resolve的promise实例
let p16 = Promise.reject();
let p17 = p16.then(undefined, () => {});
console.log(p17) // Promise<fulfulled> undefined

//输出error则返回reject状态的promise实例
let p18 = Promise.reject();
let p19 = p18.then(undefined, () => {
    throw Error('this is a error')
})
//console.log(p19) // Promise<reject> this is a error;

//给then方法返回promise，则新返回的promise实例继承该promise的状态
let p20 = Promise.reject();
let p21 = p20.then(undefined, () => Promise.resolve('ok'));
console.log(p21);// Promise<fulfilled> ok;