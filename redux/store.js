import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
});

export const store = configureStore({
  reducer,
});
