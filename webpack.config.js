const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist/") 
  },
  entry: {
    main: "./src/index.js" 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/main.css"
    })
  ],
  module: {
        rules: [
            {
              test: /\.(c|sc|sa)ss$/,
            use: [
            {
             loader: MiniCSSExtractPlugin.loader
            },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
