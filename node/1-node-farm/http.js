const http = require('http');
const fs = require('fs');
const url = require('url');
const slugify = require('slugify');

//⚡️使用slugify包
const str = slugify('test dada', {replacement: '-', lower: true})

const replaceTemplate = require('./modules/replaceTemplate');

//⚡️读取数据
const datas = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

//⚡️读取模版文件overview
const templateOverview = fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/template/template-product.html`, 'utf-8');



//⚡️创建服务器
const server = http.createServer((req, res) => {
    let data = JSON.parse(datas);

    const { query, pathname } = url.parse(req.url, true);
    if (pathname === '/' || pathname === '/overview') {
        //⚡️设置主页路由
        //⚡️返回模版
        res.writeHead(200, { "Content-type": "text/html" });
        //⚡️替换模版
        const template = data.map(el => replaceTemplate(templateCard, el)).join('');
        const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, template);
        res.end(output);
        
    } else if (pathname === '/product') {
        //⚡️设置product页面路由

        //根据不同id解析不同模版
        const productData = data[query.id]
        const productTemplate = replaceTemplate(templateProduct, productData);

        //⚡️返回模版
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(productTemplate);

    } else if (pathname === '/api') {
        //⚡️设置api页面路由

    } else {
        //⚡️设置404路由
        res.writeHead(404, { "Content_type": "text/html" });
        res.end('<h1> 404 not found <h1>')
    }
})

//绑定域名及端口

server.listen(8000, 'localhost', () => {
    console.log('server is running port at 8000');
})