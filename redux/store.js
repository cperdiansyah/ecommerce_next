import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userInfoReducer } from './reducers/userReducers';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import {
  categoryListReducer,
  categoryDetailsReducer,
} from './reducers/categoryReducers';

const reducer = combineReducers({
  userInfo: userInfoReducer,
  productList: productListReducer,
  productDetail: productDetailsReducer,
  categoryList: categoryListReducer,
  categoryDetail: categoryDetailsReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? false : true,
});
