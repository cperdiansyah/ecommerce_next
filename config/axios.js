import axios from 'axios';
import ROOT_URL from '../utils/url';

export default axios.create({
  baseURL: `${ROOT_URL}/api`,
});
let token;
if (typeof localStorage !== 'undefined') {
  token = localStorage.getItem('accessToken');
}

export const axiosPrivate = axios.create({
  baseURL: `${ROOT_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});
