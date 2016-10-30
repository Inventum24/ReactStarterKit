var webpack = require('webpack')

module.exports = {  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: ['./src/client/app/index.jsx'],
  output: {
    path: __dirname + '/src/client/public',
    filename: 'bundle.js'
  },
  devTool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

