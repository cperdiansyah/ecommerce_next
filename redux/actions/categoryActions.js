import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CATEGORY_GET,
  CATEGORY_DETAIL_GET,
} from '../constants/categoryConstans';

export const getCategories = createAsyncThunk(CATEGORY_GET, async () => {
  const { data } = await axios.get('/api/category');
  return data;
});

export const getCategoryDetail = createAsyncThunk(
  CATEGORY_DETAIL_GET,
  async (id) => {
    const { data } = await axios.get(`/api/category/${id}`);
    return data;
  }
);
