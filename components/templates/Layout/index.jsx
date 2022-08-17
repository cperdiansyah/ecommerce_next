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
import { productCartSelector } from '../../../redux/reducers/productReducers';

import cartHooks from '../../../hooksRedux/cartHooks';
import favoriteHooks from '../../../hooksRedux/favoriteHooks';

const Layout = ({ children, pageTitle = ' ' }) => {
  const dispatch = useDispatch();
  const { getCarts } = cartHooks();
  const { getFavorites } = favoriteHooks();

  const auth = useSelector((state) => state.auth);
  const { isLoading } = auth;
  const isLogin = parseInt(Cookies.get('isLogin')) || false;
  useAuth();

  const fetchProducts = async () => {
    // const { data: cartData } = await axiosPrivate.get('/cart');
  };

  const carts = useSelector(productCartSelector);

  fetchProducts();

  useEffect(() => {
    if (isLogin) {
      dispatch(setLogin(true));
      getCarts();
      getFavorites();
    } else {
      localStorage.removeItem('accessToken');
      dispatch(logout());
    }

    dispatch(setLoading(false));
  }, [isLoading, isLogin, carts.productCart, carts.productFavorite]);

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
