const server=require('webpack-dev-server');
const webpack=require('webpack');
var _config=require('./webpack.config');
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
const compiler=webpack(_config);
var se=new server(compiler)
se.listen(8080);