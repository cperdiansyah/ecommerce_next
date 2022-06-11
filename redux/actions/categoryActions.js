import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CATEGORY_GET } from '../constants/categoryConstans';

export const getCategories = createAsyncThunk(CATEGORY_GET, async () => {
  const { data } = await axios.get('/api/category');
  return data;
});
