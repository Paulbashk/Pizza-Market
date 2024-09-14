import { createAsyncThunk } from '@reduxjs/toolkit';
import type { THandleReject } from '@/shared/types';
import {
  ProductService,
  type TFetchGetAllRequest,
  type TFetchGetAllResponse,
} from '@/shared/api/productService';

export const getProductsThunk = createAsyncThunk<
  TFetchGetAllResponse,
  TFetchGetAllRequest,
  THandleReject
>('products/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await ProductService.fetchGetAll(params);

    return data;
  } catch (_) {
    return rejectWithValue('Произошла ошибка при загрузке товаров');
  }
});
