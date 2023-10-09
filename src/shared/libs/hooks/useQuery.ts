import { DependencyList, useEffect, useMemo } from 'react';
import {
  asyncActions,
  AsyncActionNames,
  AsyncActionArgs,
} from '@/store/actions';
import { bindActionCreators } from '@reduxjs/toolkit';
import useAppDispatch from './useAppDispatch';

export interface ParamUseQuery {
  actionName: AsyncActionNames;
  arg: AsyncActionArgs;
  deps?: DependencyList;
}

const useQuery = ({ actionName, arg, deps }: ParamUseQuery) => {
  const dispatch = useAppDispatch();
  const action = useMemo(
    () => bindActionCreators(asyncActions[actionName], dispatch),
    [dispatch],
  );

  useEffect(() => {
    action(arg);
  }, deps ?? []);
};

export default useQuery;
