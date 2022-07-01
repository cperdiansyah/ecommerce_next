/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = nextConfig;
// module.exports = withBundleAnalyzer({});
