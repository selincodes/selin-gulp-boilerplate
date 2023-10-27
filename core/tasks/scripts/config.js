export default {
  webPack: {
    mode: 'development',
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
  babel: {
    presets: ['@babel/preset-env'],
  },
};
