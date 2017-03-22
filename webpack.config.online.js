/**
 * Created by Liqi on 17/3/20.
 */
"use strict";


var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css.[contenthash].css');
const extractSCSS = new ExtractTextPlugin('scss.[contenthash].css');
var CleanPlugin = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";


module.exports = {
    //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry: {
        main: "./src/entry.js",  // __dirname + "/src/entry.js", //入口文件
        vendor: "./src/_vendor.js"
    },

    output: {
        path: path.join(__dirname, 'dist'),  //打包后的文件存放的地方
        filename: '[name].[hash].js',   //打包后输出文件的文件名
    },
    devtool: false,

    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: "/node_modules/",
                exclude: path.join(__dirname, "/node_modules/"),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["es2015", 'react'],
                        }
                    },
                ]
            },

            {
                test: /\.css$/,
                include: path.join(__dirname, "/src/css/"),
                use: extractCSS.extract(['css-loader'])
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, "/src/scss/"),
                use: extractSCSS.extract(['css-loader', 'sass-loader'])
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
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: [
                "vendor",
                "manifest" //extract out the runtime into a separate manifest file
            ],//https://webpack.js.org/guides/code-splitting-libraries/#manifest-file
        }),

        extractCSS,
        extractSCSS,

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),

        // 这个插件搜索相似的块与文件并合并它们
        new webpack.optimize.DedupePlugin(),

        // 这个插件通过计算子块和模块的使用次数进行优化
        new webpack.optimize.OccurrenceOrderPlugin(),

        // 这个插件在子块文件太小时，会阻止生成，因为不值得独立加载
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200, // ~50kb
        }),

        // 这个插件对最终生成的 JS 代码进行 Uglify
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
            },
        }),

        new CleanPlugin('./dist')
    ]
};












