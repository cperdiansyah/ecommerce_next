/* eslint-disable react/no-children-prop */

import Link from 'next/link';

import { Box } from '@chakra-ui/react';

import Layout from '../components/templates/Layout';
import SignupForm from '../components/organisms/SignupForm';

const Register = () => {
  return (
    <Layout>
      <div className="form-wrapper mx-auto block lg:w-[40%]">
        <SignupForm />
        <Box className="mt-5 text-right">
          Have an Account?{' '}
          <Link href="/login">
            <a className="text-primary">Login</a>
          </Link>
        </Box>
      </div>
    </Layout>
  );
};

export default Register;
