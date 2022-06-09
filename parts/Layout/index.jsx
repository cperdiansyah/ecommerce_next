import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children, pageTitle = ' ' }) => {
  return (
    <>
      <Head>
        <title>ChanStore | {pageTitle}</title>
      </Head>
      <Navbar />
      <div className='container children-content'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
