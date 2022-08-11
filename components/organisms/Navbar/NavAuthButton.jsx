import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Button from '../../atom/Button';
import { axiosPublic } from '../../../service/axiosPublic';
import { logout } from '../../../redux/reducers/authReducers';

const NavAuthButton = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authSelector = useSelector((state) => state.auth);
  const { isLogin, auth } = authSelector;

  const username = auth?.name.split(' ')[0] || null;

  const [user, setUser] = useState({
    avatar: '',
  });

  const className = [props.className].join(' ');

  const onLogout = async () => {
    Cookies.remove('isLogin');
    await axiosPublic.post('/auth/logout');

    localStorage.removeItem('accessToken');

    dispatch(logout());
    router.push('/');
  };

  return isLogin ? (
    <div className={`${className} flex items-center justify-between`}>
      <div className="flex w-full items-center lg:w-fit">
        {/*  <img
            src={user.avatar}
            alt="avatar"
            className="rounded-full w-8 h-8"
          /> */}
        <Link href="/profile" passHref>
          <a className="mx-2 w-full py-3 capitalize hover:bg-slate-100 lg:w-fit">
            Hi, {username}
          </a>
        </Link>
      </div>
      <Button
        onClick={onLogout}
        variant="outline"
        className=" ml-4 mt-2 w-full lg:mt-0 lg:ml-4 lg:w-fit"
      >
        Logout
      </Button>
    </div>
  ) : (
    <section className={`${className} flex items-center justify-between`}>
      <Button
        isLink
        href="/login"
        variant="primary"
        className=" w-full lg:w-fit"
      >
        Login
      </Button>

      <Button
        isLink
        href="/register"
        className=" mt-2 w-full lg:mt-0 lg:ml-4 lg:w-fit"
        variant="outline"
      >
        Signup
      </Button>
    </section>
  );
};

export default NavAuthButton;
