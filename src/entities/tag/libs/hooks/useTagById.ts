import { AppState } from '@/app/_root/store';
import { type Tag, TagVariables } from '@/entities/tag/model/types';
import { useSelector } from 'react-redux';
import { byId } from '@/entities/tag/model/selectors';

type TUseTagById = (id: Tag.Variable) =>
  | Tag.Item
  | {
      name: string;
    }
  | undefined;

export const useTagById: TUseTagById = id => {
  const item = useSelector((state: AppState) => byId(state, id));

  return id === TagVariables.ALL ? { name: 'Все' } : item;
};
