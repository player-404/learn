class Promise {
    constructor(extructor) {
        //状态
        this.state = 'pending';
        //reslove值
        this.value;
        //reject值
        this.reson;
        //存放fulfilled状态的函数
        this.onResolveFun = [];
        //存放reject状态含糊是
        this.onRejectFun = [];
        //resolve函数
        let resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                //执行异步存入的函数
                this.onResolveFun.forEach(item => item());
            }
        };
        //reject函数
        let reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'reject';
                this.reason = reason;
                //执行异步存入的函数
                this.onRejectFun.forEach(item => item())
            }
        }

        //抛出错误直接执行reject
        try {
            extructor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onReslove, onReject) {
        //解决状态
        if (this.state === 'fulfilled') {
            onReslove(this.value);
        }
        //拒绝状态
        if (this.state === 'reject') {
            onReject(this.reason);
        }
        //异步时 同步代码优先执行 此时状态未改变 为pending 此时将各状态函数存入数组 待之后执行
        if (this.state === 'pending') {
            this.onResolveFun.push(() => {
                onReslove(this.value);
            });
            this.onRejectFun.push(() => {
                onReject(this.reason);
            })
        }
    }
}

let p = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove()
    }, 1000)
})
p.then((value) => {
    console.log('ok')
})


/* 
    实现思路：
     new Promise 需传入执行函数，有resolve reject两个出参数函数，并在之后调用其一；
    * 创建promise类，构造函数传入执行函数为餐素，在构造函数中创建状态state 初始化为pending, resolve状态的值 value，reject状态时的值 reason
    * 创建resove函数,传入参数value，改变状态为fulfilled, resolve状态值赋值为value
    * 创建reject函数，传入参数reason, 改变状态为reject, reject状态值赋值为reason
    * 如果抛出错误直接执行reject 使用try catch捕捉，没有错误则执行执行函数，将reslove reject函数传入
    * 创建then 方法，传入onResolve处理函数与onReject处理函数
    * 判断状态state值，为resolve 执行onResolve处理函数, 为reject 执行onReject处理函数
     处理异步:
     * 构造函数中创建两个数组，分别用来收集reslove时 then方法中的onResolve处理函数与onReject处理函数
     * resove、reject函数遍历数组中的函数，执行
     * state 为pending 创建两个函数，在函数中调用onResolve函数与onReject函数，push相应的数组
*/