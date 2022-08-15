import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Input from './components/Input';

const customTheme = extendTheme({
  fontSizes: {
    lg: '20px',
    base: '16px',
    sm: '14px',
    xs: '12px',
    xxs: '10px',
  },
  colors: {
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
    },
  },
  components: {
    Button,
    ...Input,
    ...Checkbox,
  },
});

export default customTheme;
