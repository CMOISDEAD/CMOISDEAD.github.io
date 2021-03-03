const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "docs/")
  },
  entry: {
    main: "./src/index.js"
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "src/index.html"
    // }),
    new MiniCSSExtractPlugin({
      filename: "./css/main.css"
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "views", "pages", "*.hbs"),
      output: path.join(process.cwd(), "docs", "[name].html"),
      data: path.join(__dirname, "./src/views/data/project.json"),
      partials: [
        path.join(process.cwd(), "src", "views", "partials", "*", "*.hbs")
      ]
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
