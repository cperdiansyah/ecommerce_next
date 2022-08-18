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
  addCartToCheckout,
  removeCartToCheckout,
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
    productCartToCheckout: [],
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

    /* PRODUCT_CART_TO_CHECKOUT Reducers */
    [addCartToCheckout.pending.type]: (state, action) => {
      state.loading = true;
    },

    [addCartToCheckout.fulfilled.type]: (state, action) => {
      return {
        ...state,
        productCartToCheckout: [...state.productCartToCheckout, action.payload],
      };
    },

    [addCartToCheckout.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    /* REMOVE_CART_TO_CHECKOUT Reducers */
    [removeCartToCheckout.pending.type]: (state, action) => {
      state.loading = true;
    },
    [removeCartToCheckout.fulfilled.type]: (state, action) => {
      return {
        ...state,
        loading: false,
        productCartToCheckout: [...action.payload],
      };
    },
    [removeCartToCheckout.rejected.type]: (state, action) => {
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

export const productCartToCheckoutSelector = (state) =>
  state.products.productCartToCheckout;

/* Export reducer */
export const productListReducer = productList.reducer;
export const productDetailsReducer = productDetail.reducer;
export const productReducer = product.reducer;
