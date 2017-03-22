如果是并行执行（即同时的平行执行），可以使用&符号。

$ npm run script1.js & npm run script2.js

如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。

```js
console.log(path.join(__dirname, "/src/scss/"));  // /src/scss/
console.log(path.resolve(__dirname, "/src/scss/"));  // /src/scss
console.log(__dirname + "/src/scss/");  // //src/scss/
```


```js
"scripts": {
    "build": "webpack-dev-server --hot --inline --open"
    // http://www.jianshu.com/p/976ca21c9245
    // 这里注意如果利用webpack-dev-server cli 并且加了--hot 这个选项，就不要在这里加入new webpack.HotModuleReplacementPlugin()这个插件了，否则会报Maximum call stack size exceeded错误。
    // "build": "webpack-dev-server --hot --inline --open"
  },
```