import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getProducts, getProductDetails } from '../actions/productActions';

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
  reducers: {
    setProductCart(state, action) {
      return {
        ...state,
        productCart: action.payload,
      };
    },
    setProductFavorites(state, action) {
      return {
        ...state,
        productFavorite: action.payload,
      };
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

export const { setProductCart } = product.actions;

/* Export reducer */
export const productListReducer = productList.reducer;
export const productDetailsReducer = productDetail.reducer;
export const productReducer = product.reducer;
