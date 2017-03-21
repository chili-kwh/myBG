/**
 * Created by Liqi on 17/3/20.
 */
"use strict";

var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry: __dirname + "/src/entry.js", //入口文件
    output: {
        // path: __dirname + "/pub",  //打包后的文件存放的地方
        path: __dirname + "/build",  //打包后的文件存放的地方
        filename: "bundle.js"   //打包后输出文件的文件名
    },
    // devtool: "source-map",  //配置生成Source Maps，选择合适的选项
    devtool: "eval-source-map",
    // devtool: "cheap-module-source-map",
    // devtool: "cheap-module-eval-source-map",
    devServer: {
        port: 8081,
        contentBase: "./pub",  //本地服务器所加载的页面所在的目录
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["es2015", 'react']
                        }
                    },
                ]
            },
            //webpack2不需要json-loader

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                include: __dirname + "/src/scss/",
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "url-loader", //url-loader&file-loader
                        options: {
                            limit: 40000
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        })
    ]

    // TODO react-hot-loader
    // https://github.com/gaearon/react-hot-loader
    // url-loader
    //

};












