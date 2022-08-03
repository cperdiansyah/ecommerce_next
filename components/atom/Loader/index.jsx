import React from 'react';
import { Box } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
const Loader = () => {
  return (
    <Box className="min-h- lg:min-h-[100vh] flex justify-center items-center py-20">
      <CircularProgress
        size={100}
        isIndeterminate
        thickness="12px"
        color="orange"
      />
    </Box>
  );
};

export default Loader;
