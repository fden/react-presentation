module.exports = {
  entry: ['./app.js'],
  output: {
    path: './build',
    filename: 'all.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};