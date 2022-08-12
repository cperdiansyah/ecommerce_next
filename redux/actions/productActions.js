import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  PRODUCT_GET,
  PRODUCT_DETAIL_GET,
  PRODUCT_GET_CART,
  PRODUCT_GET_FAVORITE,
} from '../constants/productConstans';
import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';
import { axiosPrivate } from '../../config/axios';

export const getProducts = createAsyncThunk(PRODUCT_GET, async () => {
  return fetch(`${ROOT_URL}/api/product`);
});

export const getProductDetails = createAsyncThunk(
  PRODUCT_DETAIL_GET,
  async (id) => {
    return fetch(`${ROOT_URL}/api/product/${id}`);
  }
);

export const getCarts = createAsyncThunk(PRODUCT_GET_CART, async () => {
  const { data: cartData } = await axiosPrivate.get('/cart');
  return cartData.data;
});

export const getFavorites = createAsyncThunk(PRODUCT_GET_FAVORITE, async () => {
  const { data: favoriteData } = await axiosPrivate.get('/favorite');
  return favoriteData.data;
});
