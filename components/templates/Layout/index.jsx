import React, { useEffect } from 'react';

import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../../organisms/Navbar';
import Loader from '../../atom/Loader';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setLogin, setLoading } from '../../../redux/reducers/authReducers';
import { axiosPublic } from '../../../service/axiosPublic';
import { useState } from 'react';

const Layout = ({ children, pageTitle = ' ' }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLoading, isLogin } = auth;


  const refreshToken = Cookies.get('refreshToken');
  const accessToken = Cookies.get('accessToken'); 

  const token = accessToken || refreshToken;

  // Intercept request to check login status if accessToken is expired
  useEffect(() => {
    if (token) {
      dispatch(setLogin(true));
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
