import { createSelector } from '@reduxjs/toolkit';
import { type AppState } from '@/app/_root/store';
import type { TQueryState } from '../../types';

export const makeSelectHandleState = <ReturnState>(
  all: (state: AppState) => ReturnState & TQueryState,
) => {
  const isLoading = (state: AppState) => all(state).isLoading;
  const isError = (state: AppState) => all(state).isError;
  const error = (state: AppState) => all(state).error;

  const handleState = createSelector(
    [isLoading, isError, error],
    (IsLoading, IsError, Error) => ({
      isLoading: IsLoading,
      isError: IsError,
      error: Error,
    }),
  );

  return handleState;
};
