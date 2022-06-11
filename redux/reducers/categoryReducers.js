import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../actions/categoryActions';

const categoryEntity = createEntityAdapter({
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
      categoryEntity.setAll(state, action.payload.data);
    },
    [getCategories.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

/* Export Selector */
export const categoryListSelector = categoryEntity.getSelectors(
  (state) => state.categoryList
);

/* Export reducers */

export const categoryListReducer = categoryList.reducer;
