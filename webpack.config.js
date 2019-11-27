const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "app.js"
  },
  devServer: {
    port: 8080
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: require.resolve("snapsvg"),
        loader: "imports-loader?this=>window,fix=>module.exports=0"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "jail-svg"
    })
  ]
};

module.exports = config;
