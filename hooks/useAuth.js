import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setAuth as setReduxAuth } from '../redux/reducers/authReducers';

const useAuth = () => {
  const dispatch = useDispatch();
  let decodedToken;
  const [auth, setAuth] = useState(decodedToken);

  const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key);
    }
  };

  const [accessToken, setAccessToken] = useState(getFromStorage('accessToken'));

  useEffect(() => {
    if (accessToken) {
      decodedToken = jwtDecode(accessToken);
      dispatch(setReduxAuth(decodedToken));
      setAuth({ ...decodedToken, accessToken });
    }
  }, [accessToken]);

  return { auth, setAuth };
};

export default useAuth;
