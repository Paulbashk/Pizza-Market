import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HandleReject } from '@/shared/libs/types';
import {
  ProductService,
  type FetchGetAllRequest,
  type FetchGetAllResponse,
} from '@/entities/product/api';

export const getProductsThunk = createAsyncThunk<
  FetchGetAllResponse,
  FetchGetAllRequest,
  HandleReject
>('products/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await ProductService.fetchGetAll(params);

    return data;
  } catch (_) {
    return rejectWithValue('Произошла ошибка при загрузке товаров');
  }
});
