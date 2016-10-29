var webpack = require('webpack')

module.exports = {  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: ['webpack-hot-middleware/client', './src/client/app/index.jsx'],
  output: {
    path: __dirname + '/src/client/public',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devTool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react-hmre']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

