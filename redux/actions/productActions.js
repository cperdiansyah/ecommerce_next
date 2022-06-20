import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { PRODUCT_GET, PRODUCT_DETAIL_GET } from '../constants/productConstans';

export const getProducts = createAsyncThunk(PRODUCT_GET, async () => {
  const { data } = await axios.get('/api/product');
  return data;
});

export const getProductDetails = createAsyncThunk(
  PRODUCT_DETAIL_GET,
  async (id) => {
    const { data } = await axios.get(`/api/product/${id}`);
    return data;
  }
);
