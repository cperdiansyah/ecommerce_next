import React from 'react';

import Loader from '../src/components/Loader';
import Message from '../src/components/Message';
import Layout from '../src/parts/Layout';

const login = () => {
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message status='error' message={error} />
      ) : (
        <>
          <h1>Login</h1>
        </>
      )}
    </Layout>
  );
};

export default login;
