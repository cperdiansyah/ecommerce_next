import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isLoading: true,
  user: {
    name: '',
  },
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
    checkLogin(state, action) {
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
    logout: (state, action) => {
      state.isLogin = false;
      state.isLoading = false;
    },
  },
});

export const { login, logout, setLoading, checkLogin } = authSlice.actions;
export default authSlice.reducer;
