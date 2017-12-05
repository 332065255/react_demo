var webpack = require('webpack');
var path=require('path')
var _config = {
    entry: { //入口文件
    'compents':  path.resolve('./compents/index.js') ,
    },
    output: {
        path: path.resolve("./dist"), //输出文件夹
        filename: 'bound.js' //最终打包生成的文件名(只是文件名，不带路径的哦)
        },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:[/node_modules/],
                loader:['babel-loader']
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ],
    },
    resolve: {},
    devtool: 'inline-source-map'
};
// var compiler = webpack(_config);
// compiler.run(function(err, status) {
// if (err) {
//  console.warn(err);
//  }
// });
module.exports=_config;
