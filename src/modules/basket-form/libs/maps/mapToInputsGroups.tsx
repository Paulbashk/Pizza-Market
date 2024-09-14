import { type ReactElement } from 'react';
import {
  type UseFormRegister,
  type FieldValues,
  type FieldErrors,
} from 'react-hook-form';
import { Error } from '@/shared/ui';
import { IInputGroup } from '../../types';
import { Input } from '../../ui/BasketForm/styled';

type TInputsGroupOptions = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitted: boolean;
  registerWithMask: any;
};

interface IMapToInputsGroupsProps {
  inputGroups: IInputGroup[];
  options: TInputsGroupOptions;
}

type TInputGroupReturn = Omit<IInputGroup, 'elements'> & {
  elements: ReactElement[];
};

type TMapToInputsGroups = (
  props: IMapToInputsGroupsProps,
) => TInputGroupReturn[];

export const mapToInputsGroups: TMapToInputsGroups = ({
  inputGroups,
  options,
}) => {
  const { register, isSubmitted, errors, registerWithMask } = options;

  return [...inputGroups].map(groupProps => ({
    ...groupProps,
    elements: [...groupProps.elements].map(groupInput => {
      const { message, rules, isPhoneMask, ...other } = groupInput;

      const inputProps = {
        isError:
          Object.keys(rules).length > 0
            ? errors[groupInput.name] && isSubmitted
            : undefined,
        message: message && errors[groupInput.name] && isSubmitted && (
          <Error>{groupInput.message}</Error>
        ),
      };

      const propRegister = isPhoneMask
        ? registerWithMask(groupInput.name, ['+7 (999) 999 99-99'], {
            ...rules,
          })
        : register(groupInput.name, {
            ...rules,
          });

      return <Input {...propRegister} {...inputProps} {...other} />;
    }),
  }));
};
