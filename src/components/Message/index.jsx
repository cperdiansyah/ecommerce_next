// import React from 'react'
import * as React from 'react';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

const Message = ({ message, status = 'info' }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
};

export default Message;
