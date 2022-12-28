/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['next-videos']);

module.exports = withTM({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp4|wav|mpe?g)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: true,
});
