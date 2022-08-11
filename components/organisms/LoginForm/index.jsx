import React, { useState, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import nookies from 'nookies';
import jwtDecode from 'jwt-decode';

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

import { FaLock, FaAt } from 'react-icons/fa';

import Message from '../../atom/Message';
import Loader from '../../atom/Loader';
import Feedback from '../../atom/Feedback';

import { login, setAuth } from '../../../redux/reducers/authReducers';
import { axiosPublic } from '../../../service/axiosPublic';

const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const LoginForm = () => {
  const router = useRouter();

  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const { error, loading, feedback, feedbackMessage, messageStatus } =
    Feedback();

  /* State for password field */
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    if (!email.current.value || !password.current.value) {
      return feedback('error', 'Please fill all fields', email.current);
    }

    try {
      /* fetch to login endpoint and get accesToken Form Resoponse  */
      const response = await axiosPublic.post('/auth/login', data);

      feedback('success', 'Login Successful');

      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      const decodedToken = jwtDecode(accessToken);

      dispatch(setAuth(decodedToken));

      dispatch(login());

      return router.push('/');
    } catch (err) {
      const { data } = err.response;
      if (data) {
        return feedback('error', data.massage);
      }
      return console.log(err);
    }
  };

  return (
    <>
      {error && <Message status={messageStatus} message={feedbackMessage} />}

      <form onSubmit={submitHandler}>
        <h1 className="py-5 text-center font-sans text-3xl font-bold text-primary">
          Login
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaaAt color="gray.300" />}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  ref={email}
                  onChange={(e) => {
                    email.current.value = e.target.value;
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  ref={password}
                  onChange={(e) => {
                    password.current.value = e.target.value;
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link href="/forgot-password">forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="primary"
              className="!rounded-lg bg-primary py-5 text-lg "
              width="full"
            >
              Login
            </Button>
          </Stack>
        )}
      </form>
      <Box className="mt-5 text-right">
        New to us?{' '}
        <Link href="/register">
          <a className="text-primary">Sign Up</a>
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
