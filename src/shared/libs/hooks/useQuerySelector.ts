import { AppState } from '@/store';
import { useSelector } from 'react-redux';
import useQuery, { type ParamUseQuery } from './useQuery';

export interface ParamUseQuerySelector<ReturnState> extends ParamUseQuery {
  selector: (state: AppState) => ReturnState;
}

const useQuerySelector = <ReturnState>({
  actionName,
  arg,
  selector,
  deps,
}: ParamUseQuerySelector<ReturnState>) => {
  useQuery({ actionName, arg, deps });

  return useSelector(selector);
};

export default useQuerySelector;
