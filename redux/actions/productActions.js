import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  PRODUCT_GET,
  PRODUCT_DETAIL_GET,
  PRODUCT_GET_CART,
  PRODUCT_GET_FAVORITE,
  PRODUCT_UPDATE_CART,
  PRODUCT_ADD_CART,
  PRODUCT_DELETE_CART,
  PRODUCT_CART,
  PRODUCT_FAVORITE,
  PRODUCT_REMOVE_CART_TO_CHECKOUT,
  PRODUCT_ADD_CART_TO_CHECKOUT,
} from '../constants/productConstans';
import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';

// import { axiosPrivate } from '../../config/axios';

import useAxiosPrivate from '../../hooks/useAxiosPrivate';

export const getProducts = createAsyncThunk(PRODUCT_GET, async () => {
  return fetch(`${ROOT_URL}/api/product`);
});

export const getProductDetails = createAsyncThunk(
  PRODUCT_DETAIL_GET,
  async (id) => {
    return fetch(`${ROOT_URL}/api/product/${id}`);
  }
);

/* Carts */
export const getCarts = createAsyncThunk(PRODUCT_GET_CART, async () => {
  const axiosPrivate = useAxiosPrivate();

  console.log(axiosPrivate);
  const { data: cartData } = await axiosPrivate.get('/cart');
  return cartData.data;
});

export const addCarts = createAsyncThunk(PRODUCT_ADD_CART, async (data) => {
  const axiosPrivate = useAxiosPrivate();

  const accessToken = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data: cartData } = await axiosPrivate.post(
    `/cart/${data._id}`,
    {},
    config
  );
  return cartData.data;
});

export const updateQtyCarts = createAsyncThunk(
  PRODUCT_UPDATE_CART,
  async (data) => {
    // const axiosPrivate = useAxiosPrivate();
    const { data: cartData } = await axiosPrivate.put(`/cart/${data._id}`, {
      data,
    });

    return cartData;
  }
);

export const deleteCarts = createAsyncThunk(PRODUCT_DELETE_CART, async (id) => {
  // const axiosPrivate = useAxiosPrivate();

  const { data: cartData } = await axiosPrivate.delete(`/cart/${id}`);
  return cartData.data;
});

export const cartsState = createAsyncThunk(PRODUCT_CART, async (data) => {
  return data;
});

/* Favorites */

export const favoritesState = createAsyncThunk(
  PRODUCT_FAVORITE,
  async (data) => {
    return data;
  }
);

export const getFavorites = createAsyncThunk(PRODUCT_GET_FAVORITE, async () => {
  const axiosPrivate = useAxiosPrivate();

  const { data: favoriteData } = await axiosPrivate.get('/favorite');
  return favoriteData.data;
});

export const addCartToCheckout = createAsyncThunk(
  PRODUCT_ADD_CART_TO_CHECKOUT,
  async (data) => {
    return data;
  }
);
export const removeCartToCheckout = createAsyncThunk(
  PRODUCT_REMOVE_CART_TO_CHECKOUT,
  async (data) => {
    return data;
  }
);
