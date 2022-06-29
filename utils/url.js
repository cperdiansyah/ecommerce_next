const isProduction = process.env.NEXT_PUBLIC_NODE_ENV || 'production';

const ROOT_URL =
  isProduction == 'development'
    ? process.env.NEXT_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL_DEV;

if (isProduction == 'development') {
  console.log('You running on development mode');
}

export default ROOT_URL;
