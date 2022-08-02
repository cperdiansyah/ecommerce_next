import React from 'react';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import nookies from 'nookies';
import Cookies from 'js-cookie';

import { useRouter } from 'next/router';
import Button from '../../atom/Button';
import { CircularProgress } from '@chakra-ui/react';

export async function getServerSideProps() {
  const token = Cookies.get('token');
  const cookies = nookies;
  if (token) {
    const decoded = atob(token);
    const payload = jwtDecode(decoded);
    return {
      props: {
        isLogin: true,
        user: payload,
        cookies,
      },
    };
  }

  return {
    props: {
      isLogin: false,
      cookies,
    },
  };
}

const Auth = (props) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    avatar: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decoded = atob(token);
      const payload = jwtDecode(decoded);
      setIsLogin(true);
      setUser(payload);
    }
    setLoading(false);
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    setIsLogin(false);
    setUser({});
    router.push('/');
  };
  if (loading) {
    return <CircularProgress isIndeterminate size="30px" color="orange.300" />;
  }
  if (isLogin) {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/*  <img
            src={user.avatar}
            alt="avatar"
            className="rounded-full w-8 h-8"
          /> */}
          <span className="ml-2">{user.name}</span>
        </div>
        <button
          onClick={onLogout}
          className="bg-transparent border-0 text-gray-600"
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <section>
      <Button isLink href="/login" className=" mr-4" variant="primary">
        Login
      </Button>

      <Button isLink href="/register" variant="outline">
        Signup
      </Button>
    </section>
  );
};

export default Auth;
