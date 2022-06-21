import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CATEGORY_GET,
  CATEGORY_DETAIL_GET,
} from '../constants/categoryConstans';

const ROOT_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getCategories = createAsyncThunk(CATEGORY_GET, async () => {
  const { data } = await axios.get(`${ROOT_URL}/api/category`);
  return data;
});

export const getCategoryDetail = createAsyncThunk(
  CATEGORY_DETAIL_GET,
  async (id) => {
    const { data } = await axios.get(`${ROOT_URL}/api/category/${id}`);
    return data;
  }
);
