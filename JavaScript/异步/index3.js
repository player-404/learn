//catch 默认返回reslove状态的promise
let p = Promise.reject();
p.catch(() => {
    console.log('error 1');
    return Promise.reject()
}).catch(() => {
    console.log('error2')
    return Promise.resolve()
}).then(() => {
    console.log("ok");
    return Promise.reject();
}).catch(() => {
    console.log('error3');
})
//then 默认返回relove状态的promise
let p1 = Promise.resolve();
p1.then(() => {
    console.log(123);
}).then(() => {
    console.log(456)
}).then(() => {
    console.log(789)
})

//改写一个异步函数
function  delayFun() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('run')
        }, 1000)
    }))
}
let p99 = new Promise(((resolve, reject) => {
   setTimeout(() => {
       console.log('run')
       resolve()
   }, 1000)
}))
p99.then(() => {
    //... do something here
    delayFun();
}).then(() => {
    //... do something here
    delayFun()
}).then(delayFun).then(delayFun)