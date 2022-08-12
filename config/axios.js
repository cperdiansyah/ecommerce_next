import axios from 'axios';
import ROOT_URL from '../utils/url';

export default axios.create({
  baseURL: `${ROOT_URL}/api`,
});

export const axiosPrivate = axios.create({
  baseURL: `${ROOT_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
