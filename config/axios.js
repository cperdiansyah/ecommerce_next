import axios from 'axios';
import ROOT_URL from '../utils/url';

const getFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
};

const accessToken = getFromStorage('accessToken');

export default axios.create({
  baseURL: `${ROOT_URL}/api`,
});
export const axiosPrivate = axios.create({
  baseURL: `${ROOT_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
  withCredentials: true,
});
