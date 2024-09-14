/* eslint-disable react/no-array-index-key */
import {
  type ReactElement,
  type ComponentPropsWithoutRef,
  memo,
  Fragment,
} from 'react';

// assets
import * as S from './styled';

export type TFormGroupSizes = 'default' | 'min' | 'full';

export interface IFormGroup {
  name: string;
  elements: ReactElement[];
  size: TFormGroupSizes;
}

type TFormGroupProps = IFormGroup & ComponentPropsWithoutRef<'div'>;

export const FormGroup = memo(
  ({ size, elements, name, ...props }: TFormGroupProps) => (
    <S.Group {...props} $size={size} title={name}>
      {elements &&
        [...elements].map((el, index) => <Fragment key={index}>{el}</Fragment>)}
    </S.Group>
  ),
);
