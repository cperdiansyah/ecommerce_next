import React from 'react';
import { useState } from 'react';

import { useRouter } from 'next/router';
import Button from '../../atom/Button';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/reducers/authReducers';

const Auth = ({ login }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authSelector = useSelector((state) => state.auth);
  const { isLogin } = authSelector;

  const username = Cookies.get('username');

  const [user, setUser] = useState({
    avatar: '',
  });

  const onLogout = () => {
    Cookies.remove('username');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    dispatch(logout());
    // router.push('/');
    window.location.href = '/';
  };

  if (isLogin) {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/*  <img
            src={user.avatar}
            alt="avatar"
            className="rounded-full w-8 h-8"
          /> */}
          <span className="mx-2">{username.split(' ')[0]}</span>
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
