import React from 'react';

import Loader from '../../src/components/Loader';
import Message from '../../src/components/Message';
import Layout from '../../src/parts/Layout';

const Profile = () => {
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Profile</h1>
        </>
      )}
    </Layout>
  );
};

export default Profile;
