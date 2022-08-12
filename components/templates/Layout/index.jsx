import React, { useEffect } from 'react';

import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../../organisms/Navbar';
import Loader from '../../atom/Loader';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import {
  setLogin,
  setLoading,
  logout,
} from '../../../redux/reducers/authReducers';
import useAuth from '../../../hooks/useAuth';

const Layout = ({ children, pageTitle = ' ' }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLoading } = auth;
  const isLogin = parseInt(Cookies.get('isLogin')) || false;
  useAuth();

  useEffect(() => {
    if (isLogin) {
      dispatch(setLogin(true));
    } else {
      localStorage.removeItem('accessToken');
      dispatch(logout());
    }

    dispatch(setLoading(false));
  }, [isLoading, isLogin]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>ChanStore {pageTitle}</title>
          </Head>
          <Navbar />
          <div className=" children-content">
            <main className="container min-h-max py-28 lg:py-32">
              {children}
            </main>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
