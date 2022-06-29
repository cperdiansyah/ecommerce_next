import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOGIN, USER_LOGOUT } from '../constants/userConstans';
import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';


export const login = createAsyncThunk(
  USER_LOGIN,
  async ({ email, password }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${ROOT_URL}/api/user/login`,
      { email, password },
      config
    );

    localStorage.setItem('userInfo', JSON.stringify(data));

    return data;
  }
);

export const logout = createAsyncThunk(USER_LOGOUT, async () => {
  localStorage.removeItem('userInfo');
  window.location.href = '/';
});
