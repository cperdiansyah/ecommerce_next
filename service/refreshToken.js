import { axiosPublic } from './axiosPublic';
import mem from 'mem';
import Cookies from 'js-cookie';

const refreshTokenFn = async () => {
  // const session = JSON.parse(localStorage.getItem('session'));
  const refreshToken = Cookies.get('refreshToken');

  try {
    const response = await axiosPublic.post('/auth/refreshToken', {
      refreshToken: refreshToken,
    });

    const { accessToken, refreshToken, name } = response.data;

    if (!accessToken) {
      Cookies.remove('username');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
    }

    Cookies.set('username', name, {
      expires: process.env.NEXT_PUBLIC_JWT_COOKIE_IN || 20,
    });
    Cookies.set('accessToken', accessToken, {
      expires: process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN || 60 * 60 * 7,
    });
    Cookies.set('refreshToken', refreshToken, {
      expires: process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN || 60 * 60 * 7,
    });

    localStorage.setItem('session', JSON.stringify(session));

    return session;
  } catch (error) {
    Cookies.remove('username');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
