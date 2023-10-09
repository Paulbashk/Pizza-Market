import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '@/store/actions';
import useAppDispatch from './useAppDispatch';

const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  );
};

export default useActions;
