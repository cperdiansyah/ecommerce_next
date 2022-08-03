import React from 'react';
import { useState } from 'react';

import { useRouter } from 'next/router';
import Button from '../../atom/Button';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setLoading } from '../../../redux/reducers/authReducers';

const NavAuthButton = () => {
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
    // dispatch(setLoading(true));
    router.push('/');
    // window.location.href = '/';
  };

  return isLogin ? (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/*  <img
            src={user.avatar}
            alt="avatar"
            className="rounded-full w-8 h-8"
          /> */}
        <span className="mx-2">Hi, {username.split(' ')[0]}</span>
      </div>
      <Button onClick={onLogout} variant="outline" className=" ml-4">
        Logout
      </Button>
    </div>
  ) : (
    <section>
      <Button isLink href="/login" variant="primary">
        Login
      </Button>

      <Button isLink href="/register" className=" ml-4" variant="outline">
        Signup
      </Button>
    </section>
  );
};

export default NavAuthButton;