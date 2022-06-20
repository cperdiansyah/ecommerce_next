import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getProducts, getProductDetails } from '../actions/productActions';

import { categoryEntity } from './categoryReducers';

const productEntity = createEntityAdapter({
  selectId: (product) => product._id,
});

/* Slicer*/
const productList = createSlice({
  name: 'productList',
  initialState: productEntity.getInitialState(),
  extraReducers: {
    /* List Products */
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

const productDetail = createSlice({
  name: 'productDetail',
  initialState: productEntity.getInitialState(),
  extraReducers: {
    /* Product Details */
    [getProductDetails.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled.type]: (state, action) => {
      state.loading = false;
      productEntity.setOne(state, action.payload.data);
    },
    [getProductDetails.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const categoryDetail = createSlice({
  name: 'categoryDetail',
  initialState: categoryEntity.getInitialState(),
  extraReducers: {
    [getProductDetails.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled.type]: (state, action) => {
      state.loading = false;
      categoryEntity.setOne(state, action.payload.category);
    },
    [getProductDetails.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

/* Export Selector */
export const productListSelector = productEntity.getSelectors(
  (state) => state.productList
);
export const productDetailsSelector = productEntity.getSelectors(
  (state) => state.productDetail
);

/* Export reducer */
export const productListReducer = productList.reducer;
export const productDetailsReducer = productDetail.reducer;

/* Get Category Product*/
export const categoryDetailsSelector = categoryEntity.getSelectors(
  (state) => state.categoryDetail
);
export const categoryDetailsReducer = categoryDetail.reducer;
