import { createAsyncThunk } from '@reduxjs/toolkit';

import type { HandleReject } from '@/shared/libs/types';
import { TagsAPI } from '@/entities/products/api';
import type { Tags } from './types';

export const fetchTags = createAsyncThunk<
  Tags.FetchAllResponse,
  Tags.FetchAllRequest,
  HandleReject
>('tags/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const response = await TagsAPI.fetchAll<
      Tags.FetchAllResponse,
      Tags.FetchAllRequest
    >(params);

    console.log(response);

    return response.data;
  } catch (error) {
    return rejectWithValue('Произошла ошибка при загрузке категорий товаров');
  }
});
