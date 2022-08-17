import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setAuth as setReduxAuth } from '../redux/reducers/authReducers';

const useAuth = () => {
  const dispatch = useDispatch();
  let decodedToken;
  const [auth, setAuth] = useState(decodedToken);

  const getLocalStorage = (key) => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  };


  const token = getLocalStorage('accessToken');

  const [accessToken, setAccessToken] = useState(token);

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);

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
