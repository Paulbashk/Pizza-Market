import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  TagService,
  type TFetchGetAllRequest,
  type TFetchGetAllResponse,
} from '@/shared/api/tagService';
import type { THandleReject } from '@/shared/types';

export const getTagsThunk = createAsyncThunk<
  TFetchGetAllResponse,
  TFetchGetAllRequest,
  THandleReject
>('tags/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await TagService.fetchGetAll(params);

    return data;
  } catch (error) {
    return rejectWithValue('Произошла ошибка при загрузке категорий товаров');
  }
});
