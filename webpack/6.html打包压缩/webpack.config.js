const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const stylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'booundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtract({
            filename: 'css/[name].css'
        }),
        new stylelintPlugin({
            files: ["src/index/*.{css,less,scss,sass}"]
        }),
        // html 打包
        new htmlWebpackPlugin({
            //打包输出文件名
            filename: 'index/index.html',
            //打包的入口html
            template: 'src/index/index.html',
            //属性
            title: '这里是主页',
            //压缩html，更多设置可以参考npm 
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'about/about.html',
            template: 'src/about/about.html',
            title: '这里是关于页面',
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
              }
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        minimize: true
    }
}