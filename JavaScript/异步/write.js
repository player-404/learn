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
