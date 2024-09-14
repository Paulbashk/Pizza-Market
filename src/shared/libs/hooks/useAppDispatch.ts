'use client';

import type { AppDispatch } from '@/app/_root/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
