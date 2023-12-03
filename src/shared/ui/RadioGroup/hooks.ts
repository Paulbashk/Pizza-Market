import { useMemo, useState, type ChangeEvent } from 'react';
import { useGenerateId } from '@/shared/libs/hooks';

type TypeArgsUseRadioGroupValue = {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
  defaultValue: string | number;
  propName?: string;
};

export const useRadioGroupValue = ({
  defaultValue,
  propName,
  onChange,
}: TypeArgsUseRadioGroupValue) => {
  const [value, setValue] = useState<string | number>(defaultValue);
  const { current: name } = useGenerateId(propName, true);

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
