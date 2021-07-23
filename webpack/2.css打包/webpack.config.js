// 将css 打包到独立的文件
const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /.(css|less)$/i,
                use:[
                    //style-loader 替换为minicssextract.loader：将css提取为单独的css文件
                    MiniCssExtract.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        //实例化插件
        new MiniCssExtract({
            //[name]使用原来css文件的名称
            filename: 'css/[name].css'
        })
    ]
}