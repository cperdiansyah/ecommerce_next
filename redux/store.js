import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  productListReducer,
  productListSelector,
} from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
});

export const store = configureStore({
  reducer,
});
