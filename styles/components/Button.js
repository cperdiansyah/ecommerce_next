const Button = {
  baseStyle: {
    backgroundColor: '#fff',
    borderRadius: '0.5rem; ',
    fontSize: '14px',
    textTransform: 'capitalize',
  },
  size: {
    sm: {
      fontSize: 'sm',
      padding: '6px 10px',
    },
    base: {
      fontSize: 'base',
      padding: '10px 12px',
    },
  },
  variants: {
    primary: {
      backgroundColor: 'orange.400',
      color: 'white',

      _hover: {
        backgroundColor: 'orange.500',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'orange.400',
      border: '1px solid',
      borderColor: 'orange.400',
      _hover: {
        backgroundColor: 'orange.100',
      },
    },
  },
};

export default Button;
