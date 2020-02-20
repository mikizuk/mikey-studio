module.exports = {
  entry: "./script.js",
  output: {
      filename: "./script.js"
  },
  watch: true,
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          },
      ]
  },
  mode: 'none',
  devServer: {
      filename: './script.js',
  }
}