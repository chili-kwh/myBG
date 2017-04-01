/**
 * Created by Liqi on 17/3/15.
 */


var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css.[contenthash].css');
const extractSCSS = new ExtractTextPlugin('scss.[contenthash].css');

console.log(__dirname);

module.exports = {
    //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry: {
        main: "./src/entry.js",  // __dirname + "/src/entry.js", //入口文件
        vendor: "./src/_vendor.js"
    },

    output: {
        path: path.resolve(__dirname, 'build'),  //打包后的文件存放的地方 TODO 不在目录结构里
        // path: path.join(__dirname, 'build'),  //打包后的文件存放的地方 TODO 不在目录结构里
        publicPath: '/', //TODO !!!!!!!没加这个路由会失效，为什么！！！！！！！！
        //https://webpack.js.org/configuration/output/#output-publicpath
        filename: '[name].[hash].js',   //打包后输出文件的文件名
    },
    devtool: "source-map",  //配置生成Source Maps，选择合适的选项
    // devtool: "eval-source-map",
    // devtool: false,
    // devtool: "cheap-module-source-map",
    // devtool: "cheap-module-eval-source-map",
    devServer: {
        port: 8081,
        // contentBase: "./pub",  //本地服务器所加载的页面所在的目录
        historyApiFallback: true,  //不跳转??
        inline: true,  //实时刷新
        hot: true
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
                            presets: ["es2015", 'react'],
                            // plugins: [
                            //     // "react-hot-loader"
                            //     // Enables React code to work with HMR.
                            // ]
                            //http://www.jianshu.com/p/42e11515c10f
                            // 使用react-transform-hmr
                            // 可以实现不刷新页面的react的HMR
                            //but what && why??
                            //https://www.npmjs.com/package/react-transform-hmr
                            "env": {
                                // only enable it when process.env.NODE_ENV is 'development' or undefined
                                "development": {
                                    "plugins": [["react-transform", {
                                        "transforms": [{
                                            "transform": "react-transform-hmr",
                                            // if you use React Native, pass "react-native" instead:
                                            "imports": ["react"],
                                            // this is important for Webpack HMR:
                                            "locals": ["module"]
                                        }]
                                        // note: you can put more transforms into array
                                        // this is just one of them!
                                    }]]
                                }
                            }
                            // Make sure you process files with babel-loader,
                            // and that you don’t use React Hot Loader (it’s not needed with this transform).
                            /////////////
                        }
                    },
                ]
            },
            //webpack2不需要json-loader


            {
                test: /\.css$/,
                include: path.join(__dirname, "/src/css/"),
                use: extractCSS.extract({
                    use: [
                        'css-loader',
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("precss"), // 文档中有加，不知道为什么，不加autoprefixer不起作用
                                    require("autoprefixer")
                                ]
                            }
                        },
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, "/src/scss/"),
                use: extractSCSS.extract({
                    use: [
                        'css-loader',
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("autoprefixer")
                                ]
                                // plugins: function() {
                                //     return [
                                //         require("autoprefixer")
                                //     ]
                                // }
                            }
                        },
                        'sass-loader',
                    ]
                })

            },


            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.scss$/,
            //     include: __dirname + "/src/scss/",
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
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
            // template: __dirname + "/src/index.html"
            template: "src/index.html",
            hash: true
        }),


        new webpack.optimize.CommonsChunkPlugin({
            names: [
                "vendor",
                "manifest" //extract out the runtime into a separate manifest file
            ],//https://webpack.js.org/guides/code-splitting-libraries/#manifest-file
        }),

        extractCSS,
        extractSCSS,


        // new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        // "build": "webpack-dev-server --hot --inline --open"
        // http://www.jianshu.com/p/976ca21c9245
        // Uncaught RangeError: Maximum call stack size exceeded
        // 这里注意如果利用webpack-dev-server cli 并且加了--hot 这个选项，
        // 就不要在这里加入new webpack.HotModuleReplacementPlugin()这个插件了，
        // 否则会报Maximum call stack size exceeded错误。

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("development")
        })

    ]

    // TODO react-hot-loader
    // https://github.com/gaearon/react-hot-loader
    // url-loader
    //TODO node_env
    //按需加载https://webpack.js.org/guides/code-splitting-require/
    //热加载
    //TODO react-transform-hmr
    //https://www.npmjs.com/package/react-transform-hmr

};






















