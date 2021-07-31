// async声明异步函数
async function run() {
    console.log(1); //函数中的代码是同步执行的
    return 2;
}
run();
console.log(3); // 1 3

//async函数默认返回promise.resolve状态的promise实例
async function run1() {
    console.log(1);
}
console.log(run1()) // Promise<fulfilled> undefined
run1().then(() => {
    console.log(2);
});
console.log(3); //1 3 2

//async 可以return一个值 该值会被返回的promise实例包装
async function run2() {
    return 1;
}
console.log(run2());// Promise<fulfilled> 1
run2().then((value) => {
    console.log('run2', value); // run2 1
})

//返回promise pending 则新返回的promise实例状态也为pending resolve同样如此
async function r() {
    return new Promise(() => {});
}
console.log(r()); // Promise<pending> undefined

//同样显示返回reject 或 输出错误则会返回peomise.reject
async function run3() {
    return Promise.reject('this is a error');
}
//console.log(run3()); // Promise<reject> this is a error
run3().catch((error) => {
    console.log(error); // this is a error
})

async function run4() {
    throw 'this is a another error';
}
// console.log(run4()); // Promise<reject> this is a another error
run4().catch((error) => {
    console.log(error); // this is a another error
})

// await会暂停代码的执行，让出js的线程，待同步代码执行完毕，awit后的promise状态改变后继续执行后面的代码，若await普通值则不必等待，返回peomise包装的值/普通值
async function  run5() {
    console.log(123);
    let a = await Promise.resolve('ok'); //awiat 会暂停执行
    console.log(a); // ok
}
console.log(run5()); // Promise<fulfilled> ok
run5();
// awiat promise状态未改变 则会中断执行
async function run6() {
    console.log(123);
    let a = await new Promise(() => {}); //状态为pending 后面的代码永远不会执行
    console.log(a);
    console.log("'it's not a await");
}
run6(); //promise<pending> undefined

//await 等待的promise为reject状态，则返回reject
async function run7() {
    return  await reject('not ok'); // 返回reject 之后的代码不会再执行

}
// console.log(run7()); Promise<reject> not ok
run7().catch((error) => {
    console.log(`my error is ${error}`)
})
