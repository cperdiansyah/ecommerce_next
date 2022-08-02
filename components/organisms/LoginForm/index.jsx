import React, { useState, useRef, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import nookies from 'nookies';

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
  useToast,
} from '@chakra-ui/react';

import { FaLock, FaAt } from 'react-icons/fa';
import Message from '../../atom/Message';
import Loader from '../../atom/Loader';
import { setLogin } from '../../../service/auth';
import { decode } from '../../../utils/encoding';

const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const LoginForm = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const email = useRef(null);
  const password = useRef(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

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

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    if (!email.current.value || !password.current.value) {
      feedback('error', 'Please fill all fields', email.current);
    } else {
      /* Response if data  */
      const response = setLogin(data);
      if (response.error) {
        feedback('error', response.error);
      } else {
        feedback('success', 'Login Berhasil');

        response.then((res) => {
          const { token, refreshToken } = res.data;
          const tokenBase64 = btoa(token);
          const refreshTokenBase64 = btoa(refreshToken);

          // Set Cookies
          nookies.set(null, 'token', tokenBase64, {
            maxAge: 3 * 24 * 60 * 60,
            path: '/',
          });
          nookies.set(null, 'refreshToken', refreshTokenBase64, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });

          router.push('/');
        });
      }
    }
  };

  return (
    <>
      {error && <Message status={messageStatus} message={feedbackMessage} />}

      <form onSubmit={submitHandler}>
        <h1 className="text-3xl font-sans py-5 text-center text-primary font-bold">
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
              variant="solid"
              className="bg-primary text-white rounded-lg py-5 text-lg"
              width="full"
            >
              Login
            </Button>
          </Stack>
        )}
      </form>
      <Box className="text-right mt-5">
        New to us?{' '}
        <Link href="/register">
          <a className="text-primary">Sign Up</a>
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
