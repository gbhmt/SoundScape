module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
  devtool: 'source-maps'
};
