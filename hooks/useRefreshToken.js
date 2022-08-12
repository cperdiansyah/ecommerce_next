import axios from '../config/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/token/refresh', {
      withCredentials: true,
    });

    setAuth((prev) => {
      /*       console.log(JSON.stringify(prev));
      console.log(response.data.accessToken); */
      localStorage.setItem('accessToken', response.data.accessToken);

      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
