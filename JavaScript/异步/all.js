//primise all 方法 接收一个可迭代的对象(多个primise实例数组)
let all1 = Promise.all([1,2]);
console.log(all1); // promise<fulfilled> [1,2]

// 不可迭代或不传入参数则会报错
let all2 = Promise.all();
// console.log(all2) error => undefined is not iterable
let all3 = Promise.all([]);
console.log(all3) // promise<fulfilled> [];



// promise all 回返回一个promise
// 当参数数组中的promise实例又一个为pending 则返回primise<pending>
let all4 = Promise.all([
    new Promise(() => {}),
    Promise.resolve(2)
]);
console.log(all4) //Promise<pending> undefined

// 有一个为reject 则返回promise<reject> 包装的值只以第一个reject为准
let all5 = Promise.all([
    Promise.reject(),
    Promise.resolve(1),
    Promise.reject(2)
]);
console.log(all5) // Promise<reject> undefined

//只有全部为resolve状态 则返回Promise<resolve>
let all6 = Promise.all([
    Promise.resolve(1),
    Promise.resolve(),
    Promise.resolve(2),
    Promise.resolve(3)
]);
console.log(all6)// Promise<fulfilled> [1, undefined, 2, 3]
