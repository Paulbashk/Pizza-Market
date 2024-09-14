import {
  useContext,
  type ChangeEventHandler,
  type ChangeEvent,
  type MutableRefObject,
} from 'react';
import {
  RadioGroupContext,
  type IRadioGroupContextValue,
} from '@/shared/ui/RadioGroup/context';
import { useGenerateId } from '@/shared/libs/hooks';

type TUseRadioButtonStateProps = {
  value: string | number;
  id?: string;
  propChecked?: boolean;
  nameProp?: string;
};

type TUseRadioButtonStateReturn = {
  radioGroup: IRadioGroupContextValue | undefined;
  radioId: MutableRefObject<string>;
  checked: boolean | undefined;
  name: string | undefined;
};

type TUseRadioButtonState = (
  props: TUseRadioButtonStateProps,
) => TUseRadioButtonStateReturn;

export const useRadioButtonState: TUseRadioButtonState = ({
  id,
  propChecked,
  nameProp,
  value,
}) => {
  const radioGroup = useContext(RadioGroupContext);
  const radioId = useGenerateId({ id });

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

type TUseChainedOnClickProps = {
  chained?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

type TUseChainedOnChange = (
  props: TUseChainedOnClickProps,
) => ChangeEventHandler<HTMLInputElement> | undefined;

export const useChainedOnChange: TUseChainedOnChange =
  ({ chained, onChange }) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    chained && chained(event, event.target.value);
    onChange && onChange(event);
  };
