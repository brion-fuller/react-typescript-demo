module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loaders: ['ts'] },
      { test: /\.css$/, loaders: ["style","css?modules&importLoaders=1&localIdentName=[name]__[hash:base64:5],typed-css-modules",'postcss']},
    ]
  },
  postcss: function () {
    return [require('autoprefixer')];
  },
}