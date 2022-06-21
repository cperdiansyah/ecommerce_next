import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import {
  categoryListReducer,
  categoryDetailsReducer,
} from './reducers/categoryReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  categoryList: categoryListReducer,
  categoryDetail: categoryDetailsReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'production' ? false : true,
});
