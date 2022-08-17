import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductDetails,
  getCarts,
  getFavorites,
  updateQtyCarts,
  addCarts,
  cartsState,
  favoritesState,
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
    error: null,
  },
  extraReducers: {
    /* Cart Reducers */
    [cartsState.pending.type]: (state, action) => {
      state.loading = true;
    },

    [cartsState.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productCart = action.payload;
    },

    [cartsState.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    /* Favorites Reducers */
    [favoritesState.pending.type]: (state, action) => {
      state.loading = true;
    },

    [favoritesState.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productFavorite = action.payload;
    },

    [favoritesState.rejected.type]: (state, action) => {
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
