const path = require('path');

const config = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'fisk-engine.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }

  if (argv.mode === 'production') {
    config.devtool = 'cheap-source-map';
  }

  return config;
};