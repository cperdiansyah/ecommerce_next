import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
  },
});

export const { login, logout, setLoading, setLogin } = authSlice.actions;
export default authSlice.reducer;
