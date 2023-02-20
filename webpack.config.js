const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // webpack 본체를 읽어들임 새롭게 추가된 부분

module.exports = {
  watch: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use:
          [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env', '@babel/react']
              }
            }
          ],
        //node_modules 아래의 파일은 loader 대상에서 제외
        exclude: /node_modules/
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      extractComments: true // 플러그인 옵션을 지정
    }),
    new HtmlwebpackPlugin({
      title: 'Plugin generate page',
      template: 'src/root.html'
    }),
    new webpack.HotModuleReplacementPlugin({
    }),
  ],
  optimization: {
    moduleIds: 'named'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};