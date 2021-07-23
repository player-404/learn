const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'boundle.js',
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
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/, // 排除该文件夹下的所有文件，该文件夹下的文件都不会转译
                use: {
                    loader: 'babel-loader',
                    options: {
                        //预设： 指示babel做怎样的兼容性处理
                       /*  presets: [
                            ['@babel/preset-env',// @babel/preset-env 转译环境 包含所有最新的ES语法
                                {
                                    "targets":  "defaults",  // terget: 指定什么环境运行 浏览器或nodejs
                                    "useBuiltIns": 'usage', //按需引入 
                                    "corejs": {
                                        "version": 3,
                                        "proposals": true
                                    }
                                }
                            ]
                        ]    */                                               
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtract({
            filename: 'css/[name].css'
        }),
        new StylelintPlugin({
            files: ['src/css/*.{css,less,scss,sass}']
        }),
        new htmlWebpackPlugin({
            filename: 'inde.html',
            template: 'src/index.html',
            title: '主页',
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