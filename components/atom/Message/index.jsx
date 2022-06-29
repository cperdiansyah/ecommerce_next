// import React from 'react'
import { useToast } from '@chakra-ui/react';

const Message = ({ message, status = 'info' }) => {
  const toast = useToast();
  return toast({
    title: message,
    status: status,
    duration: 5000,
    isClosable: true,
    position: 'top-right',
  });
};

export default Message;
