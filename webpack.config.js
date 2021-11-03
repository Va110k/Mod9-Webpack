const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "my-bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  devServer: {
    port: 4444,
    open: true,
    stats: "errors-only",
  },
};
