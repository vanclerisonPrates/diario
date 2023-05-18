const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  performance: { hints: false },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./public/assets/images/*",
          to: "",
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: { mozjpeg: { quality: 100 } },
          webp: { lossless: 1 },
          avif: { cqLevel: 0 },
        },
      },
      generator: [
        {
          preset: "webp",
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugings: ["imagemin-webp"],
          },
        },
      ],
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
        loader: "image-webpack-loader",
        enforce: "pre",
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
