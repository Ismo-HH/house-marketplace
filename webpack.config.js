const path = require('path');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const dotenv = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
//__webpack_nonce__ = "c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=";

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '...'],
  },
  plugins: [
    // Generate an HTML file and inject the bundled JS into it
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; style-src 'unsafe-inline'; style-src-elem 'unsafe-inline' https://unpkg.com https://fonts.googleapis.com; connect-src 'self' ws://localhost:* https://firebasestorage.googleapis.com https://firestore.googleapis.com https://securetoken.googleapis.com https://identitytoolkit.googleapis.com https://maps.googleapis.com; script-src 'self' 'unsafe-eval'; font-src https://unpkg.com https://fonts.gstatic.com; img-src * 'self' data: https:"
    },

    historyApiFallback: true,
    compress: false,
    hot: true,
    port: 3000,
  }
}