import axios from 'axios';
import ROOT_URL from '../utils/url';

let accessToken;
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('accessToken');
}

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
