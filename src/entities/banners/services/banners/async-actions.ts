import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HandleReject } from '@/shared/libs/types';
import { bannersAPI } from '@/entities/banners/api';
import { Banners } from './types';

export const fetchBanners = createAsyncThunk<
  Banners.FetchAllResponse,
  Banners.FetchAllRequest,
  HandleReject
>('banners/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await bannersAPI.fetchAll<
      Banners.FetchAllResponse,
      Banners.FetchAllRequest
    >();

    return response.data;
  } catch (error) {
    return rejectWithValue('Произошла ошибка при загрузке баннеров');
  }
});
