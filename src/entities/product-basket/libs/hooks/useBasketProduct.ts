import { type EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selects } from '@/entities/product-basket/model';

const { getById } = selects;

export const useBasketProduct = (id: EntityId) => useSelector(getById(id));
