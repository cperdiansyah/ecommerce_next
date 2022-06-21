import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { login, logout } from '../actions/userActions';

let userInfoFormStorage = [];

if (typeof window !== 'undefined') {
  console.log('You are on the browser');
  // 👉️ can use localStorage here
  userInfoFormStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : [];
}
/* Slicer*/
const getUserInfo = createSlice({
  name: 'getUserInfo',
  initialState: { user: userInfoFormStorage, loading: false },
  extraReducers: {
    /* User */
    [login.pending.type]: (state, action) => {
      return (state = {
        ...state,
        loading: true,
      });
    },
    [login.fulfilled.type]: (state, action) => {
      return (state = {
        loading: false,
        user: action.payload,
      });
    },
    [login.rejected.type]: (state, action) => {
      return (state = {
        loading: false,
        error: action.payload,
      });
    },

    [logout.fulfilled.type]: (state, action) => {
      return (state = {
        loading: false,
        user: {},
      });
    },
  },
});

/* Export Selector */
/* export const userInfoSelector = userEntity.getSelectors(
  (state) => state.userInfo
); */

/* Export reducer */
export const userInfoReducer = getUserInfo.reducer;
