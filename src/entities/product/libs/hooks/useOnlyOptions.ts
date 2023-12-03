import { type EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// services
import { getByIdOnlyOptions } from '@/entities/product/model/selectors';

export const useOnlyOptions = (id: EntityId) =>
  useSelector(getByIdOnlyOptions(id));
