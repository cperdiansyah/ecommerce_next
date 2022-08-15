const Input = {
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
    outline: {
      color: 'orange.400',
      border: '1px solid',
      textAlign: 'center',
      borderColor: 'orange.100',

      _hover: {
        borderColor: 'orange.100',
      },
      _active: {
        borderColor: 'orange.200',
      },
      _focus: {
        borderColor: 'orange.200',
      },
    },
    outline_gray: {
      backgroundColor: 'white',
      color: 'gray.500',
      border: '1px solid',
      borderColor: 'gray.400',
      borderRadius: '12px; ',
      _hover: {
        backgroundColor: 'gray.100',
      },
      _active: {
        backgroundColor: 'gray.200',
      },
    },
    no_border: {
      backgroundColor: 'transparent',
      color: 'gray.500',
      _hover: {
        backgroundColor: 'gray.100',
      },
      _active: {
        backgroundColor: 'gray.200',
      },
    },
  },
};

export default Input;
