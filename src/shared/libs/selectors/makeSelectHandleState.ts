import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@/store';
import type { QueryState } from '@/shared/libs/types';

export const makeSelectHandleState = <ReturnState>(
  all: (state: AppState) => ReturnState & QueryState,
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
