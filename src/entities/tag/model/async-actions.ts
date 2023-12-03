import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HandleReject } from '@/shared/libs/types';
import {
  TagService,
  type FetchGetAllRequest,
  type FetchGetAllResponse,
} from '@/entities/tag/api';

export const getTagsThunk = createAsyncThunk<
  FetchGetAllResponse,
  FetchGetAllRequest,
  HandleReject
>('tags/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await TagService.fetchGetAll(params);

    return data;
  } catch (error) {
    return rejectWithValue('Произошла ошибка при загрузке категорий товаров');
  }
});
