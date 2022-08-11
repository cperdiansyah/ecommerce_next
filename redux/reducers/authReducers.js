import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isLoading: true,
  auth: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    setLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setLogin(state, action) {
      return {
        ...state,
        isLogin: action.payload,
      };
    },
    login(state, action) {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
      };
    },
    logout(state, action) {
      return {
        isLogin: false,
        isLoading: false,
      };
    },
    setAuth(state, action) {
      return {
        ...state,
        auth: action.payload,
      };
    },
  },
});

export const { login, logout, setLoading, setLogin, setAuth } =
  authSlice.actions;
export default authSlice.reducer;
