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
        _hover: {
          backgroundColor: 'orange.300',
        },
        _active: {
          backgroundColor: 'orange.400',
        },
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
      _active: {
        backgroundColor: 'orange.200',
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

export default Button;
