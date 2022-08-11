import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setAuth as setReduxAuth } from '../redux/reducers/authReducers';

const useAuth = () => {
  const dispatch = useDispatch();
  let decodedToken;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      decodedToken = jwtDecode(accessToken);
      dispatch(setReduxAuth(decodedToken));
    }
  }, [decodedToken]);

  const [auth, setAuth] = useState(decodedToken);

  return { auth, setAuth };
};

export default useAuth;
