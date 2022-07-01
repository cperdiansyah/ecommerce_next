import React, { useState } from 'react';

import Loader from '../../src/components/Loader';
import Message from '../../src/components/Message';
import Layout from '../../src/parts/Layout';

const Profile = () => {
  const [loading, setLoading] = useState(false);
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
