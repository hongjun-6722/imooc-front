const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//引入css
const HtmlWithimgLoader = require("html-withimg-loader");
let { entry, pages } = require('./page.config')//引入html
const abPath = path.resolve(__dirname,'..')
module.exports = {
    context:abPath,
    entry,
    resolve: {
        alias: {
            'css': path.resolve(__dirname, '../', 'src/common/css/'),
            'font': path.resolve(__dirname, '../', 'src/common/font/'),
            'img': path.resolve(__dirname, '../', 'src/assets/img/'),
            'js': path.resolve(__dirname, '../', 'src/common/js/'),
        }
    },
    stats: {
        children: false//减少输出信息
    },
    module: {
        noParse: /jquery/,//不解析
        rules: [{
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development', // 热更新
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
    　　    {
    　　　　　　test: /\.(htm|html)$/,
    　　　　　　loader: 'html-withimg-loader'
        　　},
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font',
                    },
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        esModule: false,
                        outputPath: 'img'
                    },
                }]
            },
    // 　　　　{
    // 　　　　　　test: /\.(png|jpg)$/,
    // 　　　　　　loader: 'url-loader?limit=8192&name=img/[name].[ext]'
    // 　　　　},
            // {
            //     loader: 'image-webpack-loader',//大的图片 压缩图片
            //     options: {
            //     bypassOnDebug: true,
            //     }
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        ...pages
    ],
};