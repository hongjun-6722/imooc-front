const path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.base');
const CopyWebpackPlugin = require('copy-webpack-plugin');//复制
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');// 压缩JavaScript
const OptimizeCss = require('optimize-css-assets-webpack-plugin');// 压缩css


module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: './js/[name].bundle.js',
        chunkFilename: './js/[name].bundle.js',
        publicPath: ""
    },
    plugins:[
        new CopyWebpackPlugin([ //支持输入一个数组
            {
              from: base.context+'/src/assets', //将src/assets下的文件
              to: base.context+'/dist/assets' // 复制到publiv
            },
            {
              from: base.context+'/src/common', //将src/assets下的文件
              to: base.context+'/dist/common' // 复制到publiv
            }
          ]),
    ],
    optimization: {
        minimizer: [
            new OptimizeCss(),
            new UglifyJsPlugin({
                cache: true, //缓存
                parallel: true, //并发构建
                sourceMap: false //源码映射
            })
        ]
    }
});