import callAPI from '../config/api';
import { AUTH_URL } from '../utils/url';

export async function setLogin(data) {
  const url = `${AUTH_URL}/login`;

  return callAPI(url, 'POST', data);
}
