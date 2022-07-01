import callAPI from '../config/api';
import ROOT_URL from '../utils/url';
import Cookies from 'js-cookie';

export async function setLogin(data) {
  const url = `${ROOT_URL}/api/auth/login`;

  return callAPI(url, 'POST', data);
}
