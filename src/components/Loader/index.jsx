import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box className='min-h-full flex justify-center py-20'>
      <CircularProgress disableShrink size={100} color='warning' />
    </Box>
  );
};

export default Loader;
