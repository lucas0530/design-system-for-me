const Dotenv = require('dotenv-webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },

  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
};

module.exports = nextConfig;
