module.exports = {
  debug: true,
  devtool: 'cheap-module-source-map',
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [
      { test: /\.css$/, exclude: /node_modules/, loader: 'typed-css-modules'}
    ],
    loaders: [
      { test: /\.tsx?$/, loaders: ['ts'] },
      { test: /\.css$/, loaders: ["style","css?modules&importLoaders=1&localIdentName=[name]__[hash:base64:5]",'postcss']},
    ]
  },
  postcss: function () {
    return [require('autoprefixer')];
  },
}