module.exports = {
  entry: "./app/scripts/main.js",
  output: {
    path: __dirname + "./dist/scripts",
    publicPath: "/scripts",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./app/scss/main.scss", "./dist/css/main.css"]  
            }	
          }
        ]
      }
    ]
  }
};
