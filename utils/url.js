const isProduction = process.env.NEXT_PUBLIC_NODE_ENV || 'production';

const ROOT_URL =
    isProduction === 'development'
        ? process.env.NEXT_PUBLIC_BASE_URL_DEV
        : process.env.NEXT_PUBLIC_BASE_URL;

if (isProduction === 'development') {
    console.log(`You running on development mode with ${ROOT_URL}`);
}

export default ROOT_URL;
