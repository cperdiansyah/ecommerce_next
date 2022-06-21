/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import Layout from '../src/parts/Layout';
import Loader from '../src/components/Loader';
import Message from '../src/components/Message';

import { FaLock, FaAt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { userInfoSelector } from '../redux/reducers/userReducers';

const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userInfo);
  const { loading, error, user } = userLogin;

  useEffect(() => {
    if (user && user.token) {
      router.push('/');
    }
  }, [user, router]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message status='error' message={error} />
      ) : (
        <div className='form-wrapper w-[40%] mx-auto block'>
          <form onSubmit={submitHandler}>
            <h1 className='text-3xl font-sans py-5 text-center text-primary font-bold'>
              Login
            </h1>
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaaAt color='gray.300' />}
                  />
                  <Input
                    type='email'
                    placeholder='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    children={<CFaLock color='gray.300' />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign='right'>
                  <Link href='/forgot-password'>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type='submit'
                variant='solid'
                className='bg-primary text-white rounded-lg py-5 text-lg'
                width='full'
              >
                Login
              </Button>
            </Stack>
          </form>
          <Box className='text-right mt-5'>
            New to us?{' '}
            <Link href='/register'>
              <a className='text-primary'>Sign Up</a>
            </Link>
          </Box>
        </div>
      )}
    </Layout>
  );
};

export default Login;
