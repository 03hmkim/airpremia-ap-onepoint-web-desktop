require('dotenv').config();

const withImages = require('next-images');
const path = require('path');
const VERSION = 'v0.7.55(2020.08.21)';
const PACKAGE = require('./package.json');

module.exports = withImages({
  generateEtags: true,
  env: {
    STAGE: process.env.STAGE,
    PROTOCOL: process.env.PROTOCOL,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    APG_HOST: process.env.APG_HOST,
    VERSION: `${
      PACKAGE.version
    }(${new Date().toLocaleDateString()})`,
  },
  webpack: (config) => {
    const originalEntry = config.entry;
    const { version } = PACKAGE;
    const buildTime = new Date().toLocaleString();
    const buildDate = new Date().toLocaleDateString();

    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes(
          './src/utils/polyfills.js',
        )
      ) {
        entries['main.js'].unshift(
          './src/utils/polyfills.js',
        );
      }

      return entries;
    };

    config.resolve = {
      alias: {
        '@airpremia/core': path.resolve(
          __dirname,
          './core',
        ),
        '@airpremia/cdk': path.resolve(__dirname, './cdk'),
      },
      ...config.resolve,
    };

    return config;
  },
});
