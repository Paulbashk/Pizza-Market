import { useMemo, memo, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { tagUI, tagModel, type TagTypes } from '@/entities/tag';

const { TagButton } = tagUI;
const { selects } = tagModel;

const TagButtonMemo = memo(TagButton);

type TUseTagButtonsProps = {
  selectId: TagTypes.Variable;
  handleSelect: (id: TagTypes.Variable) => void;
};

type TUseTagButtons = (props: TUseTagButtonsProps) => {
  list: ReactElement[];
  isEmpty: boolean;
};

export const useTagButtons: TUseTagButtons = ({ selectId, handleSelect }) => {
  const ids = useSelector(selects.getIdsWithAll);

  return {
    list: useMemo(
      () =>
        ids.map(id => (
          <TagButtonMemo
            key={id}
            id={id}
            isActive={selectId === id}
            onClick={handleSelect}
          />
        )),
      [selectId, handleSelect],
    ),
    isEmpty: ids.length === 0,
  };
};
