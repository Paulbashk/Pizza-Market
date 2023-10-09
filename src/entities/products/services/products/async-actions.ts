import { createAsyncThunk } from '@reduxjs/toolkit';

import type { HandleReject } from '@/shared/libs/types';
import { ProductsAPI } from '@/entities/products/api';
import type { Products } from './types';

export const fetchProducts = createAsyncThunk<
  Products.FetchAllResponse,
  Products.FetchAllRequest,
  HandleReject
>('products/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const response = await ProductsAPI.fetchAll<
      Products.FetchAllResponse,
      Products.FetchAllRequest
    >(params);

    return response.data;
  } catch (_) {
    return rejectWithValue('Произошла ошибка при загрузке товаров');
  }
});
