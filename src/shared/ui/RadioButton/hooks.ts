import { useContext, type ChangeEventHandler, type ChangeEvent } from 'react';
import { RadioGroupContext } from '@/shared/ui/RadioGroup/context';
import { useGenerateId } from '@/shared/libs/hooks';

type TypeArgsUseRadioButtonState = {
  value: string | number;
  id?: string;
  propChecked?: boolean;
  nameProp?: string;
};

export const useRadioButtonState = ({
  id,
  propChecked,
  nameProp,
  value,
}: TypeArgsUseRadioButtonState) => {
  const radioGroup = useContext(RadioGroupContext);
  const radioId = useGenerateId(id);

  let checked = propChecked;
  let name = nameProp;

  if (radioGroup) {
    const { name: groupName, value: groupValue } = radioGroup;

    if (nameProp === undefined) {
      name = groupName;
    }

    if (propChecked === undefined) {
      checked = String(groupValue) === String(value);
    }
  }

  return { radioGroup, radioId, checked, name };
};

type TypeArgsUseChainedOnClick = {
  chained?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const useChainedOnChange =
  ({ chained, onChange }: TypeArgsUseChainedOnClick) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    chained && chained(event, event.target.value);
    onChange && onChange(event);
  };
