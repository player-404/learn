//catch: 处理reject状态的promise 其实就是then方法中的reject处理程序的语法糖
let p1 = Promise.reject('not');
p1.catch((err) => {
    console.log('it is a error', err);
})
//等同于
p1.then(undefined, (err) => {
    console.log('it is a error', err);
})


//finally: 无论promise为fulfilled或reject状态都会执行 无法父promise包装的值
let p2 = Promise.resolve('ok');
let p3 = Promise.reject('not ok');
p2.finally(() => {
    console.log(`fulfilled`)
});
p3.finally((value) => {
    console.log(`reject`)
}).catch(() => {});

//finally 继承父级Promise的状态 包装的值也回继承 忽略finally返回的参数
let p4 = Promise.resolve("i'm ok");
let newP4 = p4.finally(() =>{});
console.log(newP4) // Promise<fulfilled> i'm ok
//finally 显示的返回reject 或 抛出一个错误 则返回的Promise实例变为reject
let newP5 = p4.finally(() => Promise.reject());
console.log(newP5) // Peomise<reject> undefined
