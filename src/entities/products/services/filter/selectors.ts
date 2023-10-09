import { AppState } from '@/store';

const all = (state: AppState) => state.filter;

export const filtered = (state: AppState) => all(state).filtered;
export const sort = (state: AppState) => all(state).sort;
export const category = (state: AppState) => all(state).category;
