async function async1() {
  console.log("async start 1");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start"); //✨ 1

setTimeout(() => {
  console.log("settimeout0");
});

setTimeout(() => {
  console.log("settimeout2");
}, 300);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick1");
});

async1();

process.nextTick(() => {
  console.log("nextTick2");
});

new Promise((resolve) => {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(() => {
  console.log("promise3");
});

console.log("script end");
