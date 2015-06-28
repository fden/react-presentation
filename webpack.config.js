module.exports = {
  entry: ['./slides.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};