// webpack.config.js
const { DefinePlugin } = require('webpack');
const packageJson = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  return {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), // Gebruikt het volledige absolute path naar /dist/
      publicPath: '/' // Kan je gebruiken als je iets van een subfolder wilt hosten
    },
    module: {
      rules: [
        {
          test: /\.js$/, // apply babel-loader for any js file
          loader: 'babel-loader',
          exclude: /node_modules/ // except in node_modules
        },
        {
          test:  /\.(sa|sc|c)ss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=4000'
        }         
      ] // <- add your rules here
    },
    plugins: [
      new DefinePlugin({
        VERSION: JSON.stringify(packageJson.version)
      }),
      new CleanWebpackPlugin()
    ],
    devServer: {
      historyApiFallback: true, // support for html5 mode
      hot: true,
      contentBase: path.resolve(__dirname, 'src'),
      }    
  };
};