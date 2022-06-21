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
import { FaUserAlt, FaLock, FaAt } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [showPasswordValidation, setShowPasswordValidation] = useState(false);
  const handleShowValidationClick = () =>
    setShowPasswordValidation(!showPasswordValidation);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Signup');
  };

  return (
    <Layout>
      <div className='form-wrapper w-[40%] mx-auto block'>
        <form onSubmit={submitHandler}>
          <h1 className='uppercase text-3xl font-sans py-5 text-center text-primary font-bold'>
            Signup
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
                  children={<CFaUserAlt color='gray.300' />}
                />
                <Input
                  type='text'
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<CFaaAt color='gray.300' />}
                />
                <Input
                  type='email'
                  placeholder='Email Address'
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
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.300'
                  children={<CFaLock color='gray.300' />}
                />
                <Input
                  type={showPasswordValidation ? 'text' : 'password'}
                  placeholder='Password'
                  value={passwordValidation}
                  onChange={(e) => setPasswordValidation(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={handleShowValidationClick}
                  >
                    {showPasswordValidation ? 'Hide' : 'Show'}
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
              Signup
            </Button>
          </Stack>
        </form>
        <Box className='text-right mt-5'>
          Have an Account?{' '}
          <Link href='/login'>
            <a className='text-primary'>Login</a>
          </Link>
        </Box>
      </div>
    </Layout>
  );
};

export default Register;
