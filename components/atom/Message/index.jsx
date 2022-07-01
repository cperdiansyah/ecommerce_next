// import React from 'react'
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

const Message = ({ message, status = 'info' }) => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: message,
      status: status,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  }, [message]);
};

export default Message;
