import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_GET, PRODUCT_DETAIL_GET } from '../constants/productConstans';
import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';

export const getProducts = createAsyncThunk(PRODUCT_GET, async () => {
  return fetch(`${ROOT_URL}/api/product`);
});

export const getProductDetails = createAsyncThunk(
  PRODUCT_DETAIL_GET,
  async (id) => {
    return fetch(`${ROOT_URL}/api/product/${id}`);
  }
);
