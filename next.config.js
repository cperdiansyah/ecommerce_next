/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  /* env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  }, */
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = nextConfig;
// module.exports = withBundleAnalyzer({});
