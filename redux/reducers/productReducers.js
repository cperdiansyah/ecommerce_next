import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductDetails,
  getCarts,
  getFavorites,
  updateQtyCarts,
  addCarts,
} from '../actions/productActions';

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
      productEntity.setAll(state, action.payload);
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
      productEntity.setOne(state, action.payload);
    },
    [getProductDetails.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const product = createSlice({
  name: 'product',
  initialState: {
    productCart: [],
    productFavorite: [],
  },
  extraReducers: {
    /* Cart Reducers */
    [getCarts.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getCarts.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productCart = action.payload;
    },
    [getCarts.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    /* Add Cart Reducers */
    [addCarts.pending.type]: (state, action) => {
      state.loading = true;
    },
    [addCarts.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productCart = action.payload;
    },
    [addCarts.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    /* Update Cart Reducers */
    [updateQtyCarts.pending.type]: (state, action) => {
      state.loading = true;
    },
    [updateQtyCarts.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productCart = action.payload;
    },
    [updateQtyCarts.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    /* Favorites Reducers */
    [getFavorites.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getFavorites.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productFavorite = action.payload;
    },
    [getFavorites.rejected.type]: (state, action) => {
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
export const productCartSelector = (state) => state.products.productCart;
export const productFavoriteSelector = (state) =>
  state.products.productFavorite;

/* Export reducer */
export const productListReducer = productList.reducer;
export const productDetailsReducer = productDetail.reducer;
export const productReducer = product.reducer;
