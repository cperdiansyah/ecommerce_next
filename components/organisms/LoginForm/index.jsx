import React, { useState, useRef, useCallback, useEffect } from 'react';

import axios from 'axios';
import nookies from 'nookies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

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
import { AUTH_URL } from '../../../utils/url';

import { login } from '../../../redux/reducers/authReducers';
import Cookies from 'js-cookie';

const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const LoginForm = () => {
  const router = useRouter();
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  /* State for password field */
  const [showPassword, setShowPassword] = useState(false);
  /* State for feedbackMessage */
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  /* Action method */
  const handleShowClick = () => setShowPassword(!showPassword);

  /* Feedback Method */
  const feedbackReset = useCallback(() => {
    setError(false);
    setLoading(false);
    setMessageStatus('');
    setFeedbackMessage('');
  }, [error, loading, feedbackMessage, messageStatus]);

  const feedback = useCallback(
    (
      messageStatus = 'info',
      messageFeedback = 'Something Went Wrong',
      focusElement
    ) => {
      if (focusElement) {
        focusElement.focus();
      }

      setLoading(true);
      setError(true);
      setMessageStatus(messageStatus);
      setFeedbackMessage(messageFeedback);
    }
  );

  useEffect(() => {
    feedbackReset();
  }, [feedbackMessage]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    if (!email.current.value || !password.current.value) {
      return feedback('error', 'Please fill all fields', email.current);
    }

    /* Response if data  */
    const response = await axios.post(`${AUTH_URL}/login`, data);

    if (response.error) {
      return feedback('error', response.error);
    }
    feedback('success', 'Login Successful');

    const { accessToken, refreshToken, name } = response.data;

    // Set Cookies
    nookies.set(null, 'accessToken', accessToken, {
      maxAge: process.env.NEXT_PUBLIC_JWT_COOKIE_IN || 20, // 20 seconds
    });
    nookies.set(null, 'refreshToken', refreshToken, {
      maxAge: process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN || 60 * 60 * 7, // 7 Days
    });
    nookies.set(null, 'username', name, {
      maxAge: process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN || 60 * 60 * 7, // 7 Days
    });

    /* Cookies.set('username', name, {
      expires: process.env.NEXT_PUBLIC_JWT_COOKIE_IN || 20,
    });
    Cookies.set('accessToken', accessToken, {
      expires: process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN || 60 * 60 * 7,
    });
    Cookies.set('refreshToken', refreshToken, {
      expires: process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN || 60 * 60 * 7,
    }); */

    dispatch(login());

    return router.push('/');
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
        New to us?
{' '}
        <Link href="/register">
          <a className="text-primary">Sign Up</a>
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
