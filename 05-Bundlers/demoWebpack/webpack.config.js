module.exports = {
    entry: './src/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
  };