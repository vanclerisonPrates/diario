const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./public/assets/images/*",
          to: "assets/images",
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /.(jpeg|ttf|woff|png|wav|ico)$/,
        use: ["file-loader"],
      },
      {
        test: /.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
    ],
  },

  resolve: {
    alias: {
      containers: path.resolve(__dirname, "./src/containers"),
      components: path.resolve(__dirname, ".src/components"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
