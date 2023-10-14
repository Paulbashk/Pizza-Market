import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HandleReject } from '@/shared/libs/types';
import { tagAPI } from '@/entities/tag/api';
import type { Tag } from './types';

export const getTagsThunk = createAsyncThunk<
  Tag.FetchAllResponse,
  Tag.FetchAllRequest,
  HandleReject
>('tags/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const response = await tagAPI.fetchAll<
      Tag.FetchAllResponse,
      Tag.FetchAllRequest
    >(params);

    return response.data;
  } catch (error) {
    return rejectWithValue('Произошла ошибка при загрузке категорий товаров');
  }
});
