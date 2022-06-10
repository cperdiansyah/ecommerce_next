
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../actions/productActions';

const productEntity = createEntityAdapter({
  selectId: (product) => product._id,
});

const productSlice = createSlice({
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
      state.errors = action.payload;
    },
  },
});

export const productSelector = productEntity.getSelectors(
  (state) => state.product
);

export default productSlice.reducer;
