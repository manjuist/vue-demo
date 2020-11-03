/**
 * name: 模块功能
 * author: Deve
 * date: 2020-06-28
 */
const path = require('path');
const merge  = require('webpack-merge');
const conf  = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports=merge(conf,
  {
    module: {
      rules: [
        {test:/\.vue$/,use:'vue-loader'},
        {test:/\.js$/, use:'babel-loader'},
        {test:/\.css$/, use:[{
          loader:MiniCssExtractPlugin.loader,
            options: {
                publicPath: '../'
            }
        }, 'css-loader']}
      ]
    },
    devServer:{
      hot: true,
      open: true,
      inline: true, // inline模式
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3030,
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename:'[name].css',
        chunkFilename:'[id].css'
      })
    ]
  })
