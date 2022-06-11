import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { PRODUCT_GET } from '../constants/productConstans';

export const getProducts = createAsyncThunk(PRODUCT_GET, async () => {
  const { data } = await axios.get('/api/product');
  return data;
});
