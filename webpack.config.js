const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: https://jestjs.io/docs/tutorial-react#setup-without-create-react-app
module.exports = {
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  stats: {
    warnings: false,
  },
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[ext]',
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'production',
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
      title: 'Covid Frama',
      favicon: './public/favicon.png',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};
