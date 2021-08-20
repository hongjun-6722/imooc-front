const {merge} = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');//复制
module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        contentBase: './dist',
        port: 9000,
        // proxy: {
        //     '/api': {
        //         target: 'http://10.0.38.223:3000',
        //         changeOrigin: true,
        //         secure: false,
        //     },
        // }
    },
    plugins: [
        // new webpack.NamedModulesPlugin(), // 当开启 HMR 的时候使用该插件会显示模块的相对路径
        new webpack.HotModuleReplacementPlugin(), //模块热替换插件
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
    ]
});