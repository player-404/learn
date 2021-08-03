// 节流
const throttle = (fn, time) => {
    let flag = true;
    return function() {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            console.log(arguments)
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}
/* 
    思路：
        限制函数在一段时间之后执行(必然需要创建一个异步函数)
        创建flag来标记函数是否可以执行 false不可以执行 true可以执行
        创建闭包 使flag私有化且保存作用域 
        判断flag是否为false 是则不执行 所以flag首次赋值为true 是接下来的第一次能执行
        通过判断则设置flag为false 否则前面的判断一直能通过 也就后面的代码一直执行 达不到节流的目的
        创建异步函数
*/

let n = 0;
let fn = () => {
    n++;
    console.log(`run time ${n}`)
}
let fun = throttle(fn, 1000);
setInterval(() => {
    fun(1,2,3);
}, 10);