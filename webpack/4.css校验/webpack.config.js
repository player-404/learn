const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bloundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
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
                use:[
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
            filename: '/css/[name].css'
        }),
        new StyleLintPlugin({
            files: ['src/css/*.{css,less,sass,scss}']
        })
    ]
}