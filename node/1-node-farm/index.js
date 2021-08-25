//引入文件模块
const fs = require('fs');

//同步读取
const text = fs.readFileSync('./txt/index.txt', 'utf-8');
console.log(text);

//同步写入
const textOut = `this is new word create at${Date.now()}.\n${text}`;
fs.writeFileSync('./txt/fileOut.txt', textOut);

//异步读取代码
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    //这里的代码是异步执行的，后于同步代码执行
    console.log(data);
})
//这里是同步代码 由于回调函数执行
console.log('node has read file') 

//异步写入文件
fs.writeFile('./txt/newFile.txt', '这里是使用异步函数写入的内容', 'utf-8', error => {
    if (error) {
        console.log(error)
    }
})

//感受node异步回调
fs.readFile('./txt/s.txt', 'utf-8', (err, data) => {
    if (err) return console.log("error💥");
    fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data) => {
        console.log(data);
        fs.writeFile('./txt/a.txt', '这里是异步回调出阿爸宫颈癌', 'utf-8', err => {
            if (err) {
                console.log(err);
            }
        })
    })
})