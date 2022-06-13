import React from 'react'
import { Button, Link as MaterialLink, styled } from '@mui/material';

const ButtonPrimary = ({children, isOutlined}) => {
   const ButtonPrimary = styled(Button)({
     backgroundColor: '#fb923c',
     borderRadius: '.5rem',
   });
  return (
    <Button variant='contained'>
      {children}
    </Button>
  )
}

export default ButtonPrimary