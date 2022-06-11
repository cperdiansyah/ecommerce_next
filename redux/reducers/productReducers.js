import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../actions/productActions';

const productEntity = createEntityAdapter({
  selectId: (product) => product._id,
});

const productList = createSlice({
  name: 'product',
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled.type]: (state, action) => {
      state.loading = false;
      productEntity.setAll(state, action.payload.data);
    },
    [getProducts.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

/* Export Selector */
export const productListSelector = productEntity.getSelectors(
  (state) => state.productList
);

/* Export reducer */
export const productListReducer = productList.reducer;
