import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/customTheme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
