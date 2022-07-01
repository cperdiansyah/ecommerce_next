/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/templates/Layout';
import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { userInfoSelector } from '../redux/reducers/userReducers';

import LoginForm from '../components/organisms/LoginForm';
const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          {/* {error && <Message status="error" message={error} />} */}
          <div className="form-wrapper w-[40%] mx-auto block">
            <LoginForm />
          </div>
        </Layout>
      )}
    </>
  );
};

export default Login;
