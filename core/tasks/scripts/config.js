import plugins from '../../config/plugins.js';
const { isDev, terserPlugin } = plugins;

export default {
  webPack: {
    mode: isDev ? 'development' : 'production',
    output: {
      filename: 'bundle.js',
    },
    optimization: {
      minimize: true,
      minimizer: [new terserPlugin()],
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
  devtool: isDev ? 'source-map' : false,
  babel: {
    presets: ['@babel/preset-env'],
  },
};
