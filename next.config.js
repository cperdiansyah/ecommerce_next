/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  /*  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  }, */
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = nextConfig;
// module.exports = withBundleAnalyzer({});
