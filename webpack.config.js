module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: __dirname + "/src/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      excluse: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy', 'react-html-attrs']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
  historyApiFallback: true,
  contentBase: './'
}
}
