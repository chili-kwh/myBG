/**
 * Created by Liqi on 17/3/15.
 */

module.exports = {
    //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry: __dirname + "/src/entry.js", //入口文件
    output: {
        path: __dirname + "/lib",  //打包后的文件存放的地方
        filename: "bundle.js"   //打包后输出文件的文件名
    },
    devtool: "eval-source-map"//配置生成Source Maps，选择合适的选项

};