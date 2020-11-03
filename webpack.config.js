const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode= process.env.NODE_ENV || 'development';

module.exports={
  mode,
  entry:{
    index: path.resolve(__dirname, 'src/app.js')
  },
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:"[name].js",
  },
  module: {
    rules: [
      {test:/\.vue$/,use:'vue-loader'},
      {test:/\.js$/, use:'babel-loader'},
      {test:/\.css$/, use:['vue-style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
  ]
}

