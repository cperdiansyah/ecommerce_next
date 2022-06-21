import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCategories, getCategoryDetail } from '../actions/categoryActions';

export const categoryEntity = createEntityAdapter({
  selectId: (category) => category._id,
});

const categoryList = createSlice({
  name: 'categoryList',
  initialState: categoryEntity.getInitialState(),
  extraReducers: {
    [getCategories.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getCategories.fulfilled.type]: (state, action) => {
      state.loading = false;
      categoryEntity.setAll(state, action.payload);
    },
    [getCategories.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const categoryDetail = createSlice({
  name: 'categoryDetail',
  initialState: categoryEntity.getInitialState(),
  extraReducers: {
    [getCategoryDetail.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getCategoryDetail.fulfilled.type]: (state, action) => {
      state.loading = false;
      categoryEntity.setOne(state, action.payload);
    },
    [getCategoryDetail.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

/* Export Selector */
export const categoryListSelector = categoryEntity.getSelectors(
  (state) => state.categoryList
);
export const categoryDetailsSelector = categoryEntity.getSelectors(
  (state) => state.categoryDetail
);

/* Export reducers */

export const categoryListReducer = categoryList.reducer;
export const categoryDetailsReducer = categoryDetail.reducer;
