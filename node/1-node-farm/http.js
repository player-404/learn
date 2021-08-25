const http = require('http');

//创建服务器
const server = http.createServer((req, res) => {
    res.end('my http server is running');
})

//绑定域名及端口
server.listen(8000, 'localhost', () => {
    console.log('server is running port at 8000');
})