import { combineReducers, configureStore } from '@reduxjs/toolkit';

import productReducer from './reducers/productReducers';

const reducer = combineReducers({
  product: productReducer,
});

export const store = configureStore({
  reducer,
});
