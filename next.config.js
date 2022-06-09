/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      'mongodb+srv://cperdiansyah:desawer1234@chandraperdiansyah.jk2kk.mongodb.net/ecommerce_next?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
