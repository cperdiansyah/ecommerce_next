import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../../organisms/Navbar';
import Loader from '../../atom/Loader';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { checkLogin, setLoading } from '../../../redux/reducers/authReducers';

const Layout = ({ children, pageTitle = ' ' }) => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLogin, setIsLogin] = useState(false);

  const auth = useSelector((state) => state.auth);
  const { isLoading, isLogin } = auth;

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  useEffect(() => {
    if (accessToken || refreshToken) {
      dispatch(checkLogin(true));
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
            <main className="min-h-max container py-28 lg:py-32">
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
