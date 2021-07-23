const path = require('path');
module.exports = {
    //模式
    mode: 'development',
    //入口文件
    entry: '/src/index.js',
    //出口文件
    output: {
        //输出目录
        path: path.resolve(__dirname, 'dist'),
        //输出文件名
        filename: 'boundle.js'
    },
    //模块
    module: {
        //模块规则
        rules: [
            {
                test: /.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/i,
                use: [
                    //3.将css添加进style标签
                    'style-loader',
                    //2.将css转换为js
                    'css-loader',
                    //1.将less转换为js
                    'less-loader'
                ]
            }
        ],
        
        //开发服务器
        /* devServer: {

        } */

    },
    //插件配置
    plugins: []

}