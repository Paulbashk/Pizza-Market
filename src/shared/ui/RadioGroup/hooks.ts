import { useMemo, useState, type ChangeEvent } from 'react';
import { uniqueID } from '@/shared/libs/utils';

type TUseRadioGroupValueProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
  defaultValue: string | number;
  propName?: string;
};

type TUseRadioGroupValuerReturn = {
  name: string;
  value: string | number;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

type TUseRadioGroupValue = (
  props: TUseRadioGroupValueProps,
) => TUseRadioGroupValuerReturn;

export const useRadioGroupValue: TUseRadioGroupValue = ({
  defaultValue,
  propName,
  onChange,
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);
  const name = propName ?? uniqueID().toString();

  return useMemo(
    () => ({
      name,
      value,
      onChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);

        if (onChange) {
          onChange(event, event.target.value);
        }
      },
    }),
    [name, onChange, setValue, value],
  );
};
