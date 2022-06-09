/* import { createReducer } from '@reduxjs/toolkit';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstans';

const productReducer = createReducer([], (builder) => {
  builder
    .addCase(PRODUCT_LIST_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(PRODUCT_LIST_SUCCESS, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(PRODUCT_LIST_FAIL, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    })
    .addDefaultCase((state, action) => {
      state;
    });
});

export default productReducer;
 */
