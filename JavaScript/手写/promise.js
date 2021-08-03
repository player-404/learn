class Promise {
    constructor(extructor) {
        this.state = 'pending';
        this.value;
        this.reason;
        this.resolveFun = [];
        this.rejectFun = [];
        let reasolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.resolveFun.forEach(item => {
                    item();
                })
            }
        }
        let reject = (reason) => {
            if (this.state = 'pending') {
                this.state = 'reject';
                this.reason = reason;
                this.rejectFun.forEach(item => {
                    item();
                })
            }
        }

        try {
            extructor(reasolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onReaslove, onReject) {
        if (this.state === 'fulfilled') {
            onReaslove(this.value);
        }
        if (this.state === 'reject') {
            onReject(this.reason);
        }
        if (this.state === 'pending') {
            this.reasolveFun.push(onReaslove);
            this.rejectFun.push(onReject);
        }
    }
}

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