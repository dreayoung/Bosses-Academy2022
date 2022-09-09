/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withVideos = require('next-videos');

module.exports = withVideos({
  assetPrefix: 'https://youtu.be/ZTe9vHF_aLg',

  webpack(config, options) {
    return config
  }
})


module.exports = nextConfig;
