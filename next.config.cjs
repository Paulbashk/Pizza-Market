/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;