import React, { useState } from 'react';

import Loader from '../../components/atom/Loader';
import Message from '../../components/atom/Message';
import Layout from '../../components/templates/Layout';

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
