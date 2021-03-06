# 异步
##EventLoop
所有任务放在`执行栈`中，等待主线程执行，`同步任务优先执行`，`调用栈为空`后，就会去任务队列中`查找微任务执行`，`微任务队列为空后`，就会去`执行宏任务`，并且每次执行宏任务之前都会去查询微任务队列是否为空，如此循环；





## Promisexw
处理异步任务，`Promise`解决es5之前处理异步任务产生的回调地狱的问题
### Promise的三种状态
* fulfilled(resolve): 解决
* pending: 等待
* reject: 拒绝
### 创建promise
使用new关键字创建，传入一个`执行期函数(同步执行)`，状态为`pending`
```javascript
let p = new Promise(() => {
}); //传入执行器函数executor
```
### fulfilled(解决)
创建Promise fulfilled状态的两种方法
```javascript
let p3 = Promise.resolve();
let p4 = new Promise((resolve, reject) => resolve());
```
**fulfilled 可以传入一个参数 且会将这个参数转换为`PromiseResult`**
```javascript
let p5 = Promise.resolve(1);
console.log(p5) //Promise<fulfilled>: 1
//多余参数会被忽略
let p6 = new Promise(((resolve, reject) => resolve(1,2,3,4)));
console.log(p6)//Promise<fulfilled>: 1
```
**即使是error也可成为fulfilled 状态的参数**
```javascript
let p7 = Promise.resolve(new Error('foo'));
console.log(p7) //Promise<fulfilled>: Error: foo
```
**当传入的是另一个Promise则会保留该Promise的状态**
```javascript
//当传入的是另一个promise则会保留该promise的状态
let p8 = new Promise(() => {})
console.log(p8) // Promise<pending>
let p9 = Promise.resolve(p8);
console.log(p9) //Promise<pending>
```
### reject(拒绝)
创建Promise reject状态的两种方法
```javascript
let rej1 = new Promise((resolve, reject) => {
    reject();
})
console.log(rej1); // Promise {<rejected>: undefined}
let rej2 = Promise.reject();
console.log(rej2); // Promise {<rejected>: undefined}
```
**传入的参数会成为reject状态的理由**
```javascript
// 传入的参数回成为promise reject状态的理由
let rej3 = Promise.reject(1,2,3,4);
console.log(rej3);// Promise {<rejected>: 1}
let rej4 = Promise.reject(Promise.resolve(1));
console.log(rej4) // Promise {<rejected>: Promise}
```

### Promise.then（）
**then接受两个参数: onResolve处理程序(可选) onReject处理程序(可选) 这个参数是互斥的**
```javascript
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
```
**then方法会返回一个新的promise实例，一般状态为resolve**

**下面是then方法返回promise实例的几种情况:**

**then未传入任何参数: 返回promise实例状态继承原promise状态**
```javascript
//例子1
let p = new Promise(() => {

})
console.log(p); // Promise  {pending };
let p2 = p.then();
console.log(p2); // Promise { pending }; 继承原promise状态
//例子2
let p4 = Promise.resolve('a');
let p5 = p4.then();
console.log(p5); //Promise <fulfilled> a;
```
**then: 传入reslove处理程序参数返回promise实例状态的几种情况：**

* 未显式返回任何参数，返回Promise.resolve包装的值为undefined包装的promise实例
```javascript
//then没有显式返回值，返回的promise.resolve()包装的值为undefined
let p1 = new Promise((resolve, reject) => {
    resolve()
})
console.log(p1); // Peomise { fulfilled } undefined
let p3 = p1.then(() => {
    console.log(123)
})
console.log(p3); // promise  <fulfilled> undefined
```
* 显示的返回了值，则then返回返回promise.reslove包装的该值的实例
```javascript
//then方法返回的值则为新primose实例包装的值
let p9 = Promise.resolve();
let p10 = p9.then(() => { return 'ok'});
console.log(p10); //Promise<fulfilled> ok;
```
* 即使返回error,同样返回的是fulfilled(resolve)状态的promise实例
```javascript
let p12 = Promise.resolve();
let p13 = p12.then(() => {
    return new Error('error');
})
console.log(p13);// Promise<fulfilled> error
```
* 输出错误时, then方法则返回的是reject状态的promise实例
```javascript
let p11 = Promise.resolve();
let p12 = p11.then(() => {
    throw Error('error');
})
console.log(p12); // Promise<reject> error
```
* 返回promise时，then返回的promise实例状态则会继承该promise的状态
```javascript
let p14 = new Promise(((resolve, reject) => {
    resolve('ok');
}))
let p15 = p14.then(() => new Promise((resolve, reject) => {reject()}));
console.log(p15); // Promise<reject> undefined
```
**then: 传入reslove处理程序参数返回promise实例状态的几种情况**
* then一般返回的仍是reslove状态的promise实例
```javascript
let p16 = Promise.reject();
let p17 = p16.then(undefined, () => {});
console.log(p17) // Promise<fulfulled> undefined
```
* 返回promise、error、输出error、不返回值、返回值与传入resolve处理函数结果一致

### catch
catch实际上就是then方法的reject处理函数的语法糖
```javascript
//catch: 处理reject状态的promise 其实就是then方法中的reject处理程序的语法糖
let p1 = Promise.reject('not');
p1.catch((err) => {
    console.log('it is a error', err);
})
//等同于
p1.then(undefined, (err) => {
    console.log('it is a error', err);
})
```

**catch 默认同样回返回reslove状态的promise**
### finally
无论promise为fulfilled或reject状态都会执行 无法父promise包装的值
```javascript
let p2 = Promise.resolve('ok');
let p3 = Promise.reject('not ok');
p2.finally(() => {
    console.log(`fulfilled`)
});
p3.finally((value) => {
    console.log(`reject`)
}).catch(() => {});
```

finally 继承父级Promise的状态 包装的值也回继承 忽略finally返回的参数
```javascript
let p4 = Promise.resolve("i'm ok");
let newP4 = p4.finally(() =>{});
console.log(newP4) // Promise<fulfilled> i'm ok
```

finally 显示的返回reject 或 抛出一个错误 则返回的Promise实例变为reject
```javascript
let newP5 = p4.finally(() => Promise.reject());
console.log(newP5) // Peomise<reject> undefined
```

**then catch finally都是异步处理，后于同步代码执行，他们彼此之间的执行顺序则按照他们定义的位置执行**

### 每个then、catch、finally方法都会返回一个promise 这使得promise可以链式调用
```javascript
let p1 = Promise.resolve();
p1.then(() => {
    console.log(123);
}).then(() => {
    console.log(456)
}).then(() => {
    console.log(789)
})
```
我们可以改写成真正的异步函数:
```javascript
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
```

### Promise.all
primise all 方法 接收一个可迭代的对象(多个primise实例数组)
```javascript
let all1 = Promise.all([1,2]);
console.log(all1); // promise<fulfilled> [1,2]

let all3 = Promise.all([]);
console.log(all3) // promise<fulfilled> [];
```
不可迭代或不传入参数则会报错
```javascript
let all2 = Promise.all();
// console.log(all2) error => undefined is not iterable
```

**promise all 回返回一个promise**

当参数数组中的promise实例又一个为pending 则返回primise<pending>

```javascript
let all4 = Promise.all([
    new Promise(() => {}),
    Promise.resolve(2)
]);
console.log(all4) //Promise<pending> undefined
```

有一个为reject 则返回promise<reject> 包装的值只以第一个reject为准

```javascript
let all5 = Promise.all([
    Promise.reject(),
    Promise.resolve(1),
    Promise.reject(2)
]);
console.log(all5) // Promise<reject> undefined
```

只有全部为resolve状态 则返回Promise<resolve>

```javascript
let all6 = Promise.all([
    Promise.resolve(1),
    Promise.resolve(),
    Promise.resolve(2),
    Promise.resolve(3)
]);
console.log(all6)// Promise<fulfilled> [1, undefined, 2, 3]
```
其他promise会被静默处理
```javascript
let p1 = Promise.race([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3)
]);

p1.then((value) => {
    console.log(value);
}) //并未抛出错误
```

### Promise.race()
race方法同all方法一般，接受迭代对象为参数,同样水返回一个新的promise实例
```javascript
// Promise.race 接受可迭代对象为参数 返回一个新的promise
let p = Promise.race([1, 2]);
console.log(p);
```

返回promise实例的状态，取决与参数中最先落定状态的promise实例的状态
```javascript
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
```

其他promise也会被静默处理
```javascript
//虽然promise状态有 promise参数最先落定的状态决定，但是，其他的promise也会被静默处理
let p4 = Promise.race([
    Promise.reject(1),
   new Promise(((resolve, reject) => setTimeout(reject, 1000)))
])
p4.catch((value) => {
    console.log('error value is', value);
})
```

## async await

### async 关键字

async声明异步函数, 函数中的代码是同步执行的
```javascript
async function run() {
    console.log(1); //函数中的代码是同步执行的
    return 2;
}
run();
console.log(3); // 1 3
```

async函数默认返回promise.resolve状态的promise实例

```javascript
async function run1() {
    console.log(1);
}
console.log(run1()) // Promise<fulfilled> undefined
run1().then(() => {
    console.log(2);
});
console.log(3); //1 3 2
```

async 可以return一个值 该值会被返回的promise实例包装

```javascript
async function run2() {
    return 1;
}
console.log(run2());// Promise<fulfilled> 1
run2().then((value) => {
    console.log('run2', value); // run2 1
})
```

返回promise pending 则新返回的promise实例状态也为pending resolve同样如此
```javascript
async function r() {
    return new Promise(() => {});
}
console.log(r()); // Promise<pending> undefined
```

同样显示返回reject 或 输出错误则会返回peomise.reject

```javascript
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

```

### await关键字
* await 会时代码暂停代码的执行，让出代码的执行线程，先执行其他同步代码，再待await promise状态改变再继续执行，若await为普通值，则不必等待promise状态改变
* await 会将promise的状态结果返回
```javascript
async function  run5() {
    console.log(123);
    let a = await Promise.resolve('ok'); //awiat 会暂停执行
    console.log(a); // ok
}
console.log(run5()); // Promise<fulfilled> ok
run5();
```
awiat promise状态未确定 则会一直暂停代码执行， async声明的异步函数则返回promise pending状态
```javascript
async function run6() {
    console.log(123);
    let a = await new Promise(() => {}); //状态为pending 后面的代码永远不会执行
    console.log(a);
    console.log("'it's not a await");
}
run6(); //promise<pending> undefined
```
await promise为reject状态: await之后的代码不会在执行，异步函数也返回promise 为reject状态
```javascript
async function run7() {
    return await reject('not ok'); // 返回reject 之后的代码不会再执行 

}
// console.log(run7()); Promise<reject> not ok
run7().catch((error) => {
    console.log(`my error is ${error}`) //尝试再异步函数返回 awiat值，无效 异步函数reject 值无法传递过来
})
```

**借用`红宝书`解释总结await一波**

> JavaScript运行是再碰到await关键字时，会记录再哪里暂停，等到右边的值可用了，Javasctipt
> 运行时会向消息对列中推送一个任务，这个任务会恢复异步函数的执行（待同步代码执行完毕）。因此，即使await后面跟着一个立即可用的值，函数
> 的其余部分也会被异步求值。

```javascript
//依次执行
function randomDelay(id) {
    const rand = Math.random() * 1000;
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log(`${id} finished`)
        }, rand)
    }))
}
async function run() {
    const t = Date.now();
    await randomDelay(1);
    await randomDelay(2);
    await randomDelay(3);
    console.log(`spend ${Date.now() - t}`);
}
run().then(() => {
    console.log('all ok')
})
//随机执行
async function run1() {
    let p = randomDelay(1);
    let p1 = randomDelay(2);
    let p2 = randomDelay(3);
    await  p;
    await p1;
    await p2;
}
run1().then(() => {
    console.log('all ok')
});

```