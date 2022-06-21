/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import Link from 'next/link';
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

import { FaLock, FaAt } from 'react-icons/fa';

const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('login');
  };

  return (
    <Layout>
      <div className='form-wrapper w-[50%] mx-auto block'>
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
                  autoComplete={false}
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
                  autoComplete={false}
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
    </Layout>
  );
};

export default Login;
