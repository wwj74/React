// webpack.config.js
//__dirname代表的是当前文件（webpack.config.js）的绝对路径
// path.resolve(__dirname, '../src/main.js') ../src/main.js是指当前文件的绝对路径最后一节路径不要,直接拼接 /src/main.js
/* 
同样的,
path.resolve(__dirname, '/src/main.js') return  /src/main.js
path.resolve(__dirname, './src/main.js') return  当前文件路径/src/main.js
path.resolve(__dirname, 'src/main.js') return  当前文件路径/src/main.js
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* 每次执行npm run build 会发现dist文件夹里会残留上次打包的文件，
这里我们用一个plugin来帮我们在打包输出前清空文件夹clean-webpack-plugin 
*/
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* 拆分多个css */
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const mainLess = new ExtractTextWebpackPlugin('main.less');
const mainCss = new ExtractTextWebpackPlugin('main.css');
module.exports = {
  mode: 'development', // 开发模式
  // babel-loader只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)
  // 此时我们需要借助babel-polyfill来帮助我们转换
  // entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')], // 入口文件
  entry: {
    main: path.resolve(__dirname, '../src/main.js'), // 入口文件
    header: path.resolve(__dirname, '../src/header.js') // 入口文件
  },

  output: {
    filename: '[name].[hash:8].js', // 打包后的文件名称
    path: path.resolve(__dirname, '../dist') // 打包后的目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), //index文件内自动引用main.[hash:8].js
      filename: 'index.html',
      chunks: ['main'] //与入口文件对应的文件名
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/header.html'),
      filename: 'header.html',
      chunks: ['header']
    }),
    new CleanWebpackPlugin(),
    require('autoprefixer'), //添加浏览器前缀
    new MiniCssExtractPlugin({
      //拆分css
      filename: '[name].[hash:8].css',
      chunkfileName: '[id].css'
    }),
    mainLess
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 从右向左解析原则 引用css配置
      },
      /* less的style 版本1
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析原则 postcss-loader与autoprefixer结合给css添加浏览器前缀
      } 
      */

      /* 拆分css : MiniCssExtractPlugin.loader 版本2 
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
      
      */
      /* 拆分多个css: ExtractTextWebpackPlugin 版本3 */
      {
        test: /\.css$/,
        use: mainLess.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      // url-loader 一般与file-loader搭配使用，功能与 file-loader 类似，如果文件小于限制的大小,
      // 则会返回 base64 编码，否则使用 file-loader 将文件移动到输出的目录中
      {
        test: /\.(jpe?g|png|gif)$/i, //图片
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]'
              }
            }
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'media/[name].[hash:8].[ext]'
              }
            }
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, //字体
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[hash:8].[ext]'
              }
            }
          }
        }
      }
    ]
  }
};
