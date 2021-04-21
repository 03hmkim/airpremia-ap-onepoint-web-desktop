// const Dotenv = require('dotenv-webpack');

module.exports = ({ config, mode }) => {
  // config.plugins.push(new Dotenv());

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  },
  {
    test: /.(mp3|woff|woff2|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash:8].[ext]',
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};