const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

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
                    MiniCssExtractPlugin.loader, //提取css文件
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-env",
                                {
                                    "targets":  "defaults",
                                    "useBuiltIns": "usage", //按需引入 
                                    "corejs": {
                                        "version": 3,
                                        "proposals": true
                                    }
                                }
                            ] // terget: 指定什么环境运行 浏览器或nodejs
                        ] 
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new StylelintPlugin({
            files: '[css/*.{css,less,sass,scss}]'
        }),
        new htmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            title: "主页",
            minify: {  //各种压缩选项
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        //js格式校验插件
        new EslintPlugin({
            fix: true //自动修复格式错误
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        minimize: true //压缩css代码，无论什么环境
    }
}