/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    const { dir } = options;
    /**
     * resolve
     */
    config.resolve.modules.push(path.resolve(__dirname, 'src'));

    /**
     * module
     */
    const tsloaderOptions = {
      configFile: path.resolve(dir, 'tsconfig.json'),
    };
    config.module.rules.push({
      test: /\.(?:ts|tsx)$/,
      include: [dir],
      exclude: /node_modules/,
      enforce: 'pre', // babel よりも先に適用させることで Next.js のTS処理をさせないようにする
      use: [
        {
          loader: 'ts-loader',
          options: { ...tsloaderOptions },
        },
      ],
    });

    /**
     * plugins
     */
    // env File
    const envFile =
      process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.prod';
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, envFile),
        systemvars: true,
      })
    );

    return config;
  },
};
