// shared config (dev and prod)
const paths = require("../paths");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const StylelintPlugin = require("stylelint-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";
console.log("+ process.env.NODE_ENV:", process.env.NODE_ENV);
console.log("+ __dirname:", __dirname);

module.exports = {
  context: paths.src,
  entry: [
    "./index.tsx", // the entry point of our app
  ],
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
    assetModuleFilename: "assest/images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // css code splitting
          {
            loader: "css-loader", // import css into react component
            options: {
              modules: {
                localIdentName: devMode
                  ? "[local]_[hash:base64]"
                  : "[hash:base64]", // define name of css module
              },
            },
          },
          "postcss-loader", // config autoprefixer
          "sass-loader", // using scss
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    // new ESLintPlugin({
    //   failOnError: false,
    //   // context: __dirname,
    //   // eslintPath: `${__dirname}/node_modules/.bin/eslint`,
    //   extensions: ["ts", "tsx"],
    //   // files: "./src/**",
    //   // fix: true,
    //   // exclude: "node_modules",
    // }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    }), // code splitting css
    // new StylelintPlugin({
    //   fix: true,
    //   configBasedir: "src",
    // }),
    // new FaviconsWebpackPlugin(`${paths.src}/favicon.png`),
    new HtmlWebpackPlugin({ template: `${paths.static}/index.html` }),
    new CleanWebpackPlugin(),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: `${paths.client}/assets/images`,
    //       to: `${paths.build}/assets/images`,
    //     },
    //   ],
    // }),
  ],
  // externals: {
  //   "react/lib/ExecutionEnvironment": true,
  //   "react/lib/ReactContext": true,
  // },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "~": paths.src,
    },
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
