import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HandleReject } from '@/shared/libs/types';
import { ProductAPI } from '@/entities/product/api';
import type { Product } from './types';

export const getProductsThunk = createAsyncThunk<
  Product.FetchAllResponse,
  Product.FetchAllRequest,
  HandleReject
>('products/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const response = await ProductAPI.fetchAll<
      Product.FetchAllResponse,
      Product.FetchAllRequest
    >(params);

    return response.data;
  } catch (_) {
    return rejectWithValue('Произошла ошибка при загрузке товаров');
  }
});
