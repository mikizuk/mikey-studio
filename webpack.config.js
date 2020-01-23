module.exports = {
  entry: "./script.js",      // WAŻNE BY BYŁA TAM POPRAWNA ŚCIEŻKA I UTWORZONY PLIK
  output: {
      filename: "./js/out.js"
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
  devServer: {
      filename: './js/out.js',
  }
}
