const { resolve } = require('path');

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');
// Used to create the index.html with scripts injected in
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  devtool: "inline-source-map",
  output: {
    path: resolve('dist'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
    ],
  },
  plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        title: 'TypeScript Base',
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
        },
      }),
  ],
};
