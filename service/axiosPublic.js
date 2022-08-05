import axios from 'axios';
import ROOT_URL from '../utils/url';

export const axiosPublic = axios.create({
  baseURL: ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
