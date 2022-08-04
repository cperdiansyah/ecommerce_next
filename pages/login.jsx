/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/templates/Layout';
import Loader from '../components/atom/Loader';

import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../components/organisms/LoginForm';
const Login = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(auth.isLoading);
  /* Redux Selector */

  useEffect(() => {
    if (auth.isLogin) {
      router.push('/');
    }
  }, [auth.isLogin]);

  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* {error && <Message status="error" message={error} />} */}
            <div className="form-wrapper mx-auto block w-[40%]">
              <LoginForm />
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Login;
