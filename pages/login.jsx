/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/templates/Layout';
import Loader from '../components/atom/Loader';

import { useSelector } from 'react-redux';

import LoginForm from '../components/organisms/LoginForm';
const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(auth.isLoading);
 
  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* {error && <Message status="error" message={error} />} */}
            <div className="form-wrapper mx-auto block lg:w-[40%]">
              <LoginForm />
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Login;
