const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

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
  ]
};