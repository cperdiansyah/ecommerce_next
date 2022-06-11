import React from 'react';

import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, pageTitle = ' ' }) => {
  return (
    <>
      <Head>
        <title>ChanStore {pageTitle}</title>
      </Head>
      <Header />
      <div className=' children-content'>
        <main className='min-h-max container lg:py-5'>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
