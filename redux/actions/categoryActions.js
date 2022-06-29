import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CATEGORY_GET,
  CATEGORY_DETAIL_GET,
} from '../constants/categoryConstans';
import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';

export const getCategories = createAsyncThunk(CATEGORY_GET, async () => {
  return fetch(`${ROOT_URL}/api/category`);
});

export const getCategoryDetail = createAsyncThunk(
  CATEGORY_DETAIL_GET,
  async (id) => {
    return fetch(`${ROOT_URL}/api/category/${id}`);
  }
);
