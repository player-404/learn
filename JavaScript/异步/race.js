// Promise.race 接受可迭代对象为参数 返回一个新的promise
let p = Promise.race([1, 2]);
console.log(p);

//返回的promise状态，取决于传递的Promise中状态先确定的实例
let p1 = Promise.race([
    Promise.resolve('ok'), // 该实例状态先确定，返回promise的状态即为该实例的状态
    Promise.reject('not ok')
]);
console.log(p1); //Promise<fulfilled> ok;

let p2 = Promise.race([
    Promise.reject('not ok'), // 该实例状态先确定，返回promise的状态即为该实例的状态
    Promise.resolve('ok')
]);
console.log(p2);// Promise<reject> not ok

let p3 = Promise.race([
    Promise.reject('not ok'), // 该实例状态先确定，返回promise的状态即为该实例的状态
    setTimeout(() => Promise.resolve('ok'), 1000)
]);
console.log(p3); // Promise<reject> not ok

//虽然promise状态有 promise参数最先落定的状态决定，但是，其他的promise也会被静默处理
let p4 = Promise.race([
    Promise.reject(1),
   new Promise(((resolve, reject) => setTimeout(reject, 1000)))
])
p4.catch((value) => {
    console.log('error value is', value);
})