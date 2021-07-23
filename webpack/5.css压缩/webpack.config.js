const { dirname } = require('path');
const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const stylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
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
                    "css-loader",
                    "postcss-loader"
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
            files: ['src/css/*.{css,less,sass,scss}']
        })
    ],
    // 优化选项，一般压缩之类的功能放在这里
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        minimize: true
    },

}