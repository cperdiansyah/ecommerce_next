const isProduction = process.env.NEXT_PUBLIC_NODE_ENV || 'production';

const ROOT_URL =
  isProduction === 'development'
    ? process.env.NEXT_PUBLIC_BASE_URL_DEV
    : process.env.NEXT_PUBLIC_BASE_URL;

export const AUTH_URL = `${ROOT_URL}/api/auth`;
export const PRODUCTS_URL = `${ROOT_URL}/api/products`;

if (isProduction === 'development') {
  console.log(`You running on development mode with backend url ${ROOT_URL}`);
}

export default ROOT_URL;
