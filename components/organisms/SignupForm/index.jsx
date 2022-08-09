import React, { useState, useRef } from 'react';
import Link from 'next/link';
import nookies from 'nookies';

import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { FaUserAlt, FaLock, FaAt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Message from '../../atom/Message';
import Feedback from '../../atom/Feedback';
import { axiosPublic } from '../../../service/axiosPublic';
import { login } from '../../../redux/reducers/authReducers';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaaAt = chakra(FaAt);

const SignupForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordValidation = useRef(null);
  const { error, feedback, feedbackMessage, messageStatus } = Feedback();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      passwordValidation: passwordValidation.current.value,
    };

    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.passwordValidation
    ) {
      return feedback('error', 'Please fill all fields', email.current);
    }

    if (data.password !== data.passwordValidation) {
      return feedback(
        'error',
        'Password and Password Validation must match',
        passwordValidation.current
      );
    }

    try {
      /* fetch to signup endpoint and get accesToken Form Resoponse  */
      const response = await axiosPublic.post('/auth/register', data);

      feedback('success', 'Login Successful');

      const { accessToken, name } = response.data;

      // Set Cookies
      nookies.set(null, 'accessToken', accessToken, {
        maxAge: eval(process.env.NEXT_PUBLIC_JWT_COOKIE_IN) || 5 * 60, // 5 Minuites,
      });
      nookies.set(null, 'username', name, {
        maxAge:
          eval(process.env.NEXT_PUBLIC_JWT_COOKIE_EXPIRES_IN) ||
          7 * 24 * 60 * 60, // 7 Days
      });
      dispatch(login());

      return router.push('/');
    } catch (err) {
      const { data } = err.response;
      return feedback('error', data.massage);
    }
  };
  return (
    <>
      {error && <Message status={messageStatus} message={feedbackMessage} />}

      <form onSubmit={submitHandler}>
        <h1 className="py-5 text-center font-sans text-3xl font-bold uppercase text-primary">
          Signup
        </h1>
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
                children={<CFaUserAlt color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Full Name"
                ref={name}
                onChange={(e) => {
                  name.current.value = e.target.value;
                }}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CFaaAt color="gray.300" />}
              />
              <Input
                type="email"
                placeholder="Email Address"
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
                placeholder="Confirm Password"
                ref={passwordValidation}
                onChange={(e) => {
                  passwordValidation.current.value = e.target.value;
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
            className="e !rounded-lg"
            width="full"
          >
            Signup
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default SignupForm;
