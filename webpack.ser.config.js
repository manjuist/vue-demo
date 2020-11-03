/**
 * name: 模块功能
 * author: Deve
 * date: 2020-06-28
 */
const path = require('path');
const merge  = require('webpack-merge');
const conf  = require('./webpack.config.js');

module.exports=merge(conf,
  {
    devServer:{
      hot: true,
      open: true,
      inline: true, // inline模式
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3030,
      historyApiFallback: true,
    }
  })
