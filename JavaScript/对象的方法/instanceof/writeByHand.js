//手写onstanceof: 实例的原型链上查找是否有该构造函数的原型，有返回true 没有返回false
function newInstanceOf(left, right) {
    let leftPro = left.__proto__;
    while (true) {      //while 循环直至return
        if (!leftPro) return false;
        let rightPro = right.prototype;
        if (leftPro === rightPro) {
            return  true;
        }
        leftPro = leftPro.__proto__; // 重新赋值为下一级的__proto__   有点递归的意思
    }
}
function Person() {

}
let p = new Person;
console.log(newInstanceOf(p, p));
