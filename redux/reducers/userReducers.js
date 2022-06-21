import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/userActions';

export const userEntity = createEntityAdapter({
  selectId: (user) => user._id,
});

/* Slicer*/
const getUserInfo = createSlice({
  name: 'getUserInfo',
  initialState: userEntity.getInitialState(),
  extraReducers: {
    /* User */
    [login.pending.type]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled.type]: (state, action) => {
      state.loading = false;
      userEntity.setOne(state, action.payload);
    },
    [login.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

/* Export Selector */
export const userInfoSelector = userEntity.getSelectors(
  (state) => state.userInfo
);

/* Export reducer */
export const userInfoReducer = getUserInfo.reducer;
