import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productReducers';
import { categoryListReducer } from './reducers/categoryReducers';

const reducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
});

export const store = configureStore({
  reducer,
});
