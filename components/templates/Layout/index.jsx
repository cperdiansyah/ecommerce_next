import React from 'react';

import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../../organisms/Navbar';

const Layout = ({ children, isLogin, pageTitle = ' ' }) => {
  return (
    <>
      <Head>
        <title>ChanStore {pageTitle}</title>
      </Head>
      <Navbar />
      <div className=" children-content">
        <main className="min-h-max container lg:py-32">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
