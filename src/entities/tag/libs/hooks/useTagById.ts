import { useSelector } from 'react-redux';
import { type Tag } from '@/entities/tag/model/types';
import { getById } from '@/entities/tag/model/selectors';

export const useTagById = (id: Tag.Variable) => useSelector(getById(id));
