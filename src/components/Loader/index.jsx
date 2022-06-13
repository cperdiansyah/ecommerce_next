import React from 'react';
import { Box } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
const Loader = () => {
  return (
    <Box className='min-h-full flex justify-center py-20'>
      <CircularProgress
        size={100}
        isIndeterminate
        thickness='12px'
        color='orange'
      />
    </Box>
  );
};

export default Loader;
