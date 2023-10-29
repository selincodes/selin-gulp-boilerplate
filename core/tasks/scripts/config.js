import pl from '../../config/plugins.js';

export default {
  webPack: {
    mode: pl.isDev ? 'development' : 'production',
    output: {
      filename: 'bundle.js',
    },
    optimization: {
      minimize: true,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              comments: false,
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  devtool: pl.isDev ? 'source-map' : false,
  babel: {
    presets: ['@babel/preset-env'],
  },
};
