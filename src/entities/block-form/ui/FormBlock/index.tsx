import { type ComponentPropsWithoutRef, memo } from 'react';

// components
import { FormGroup, type IFormGroup } from '../FormGroup';
import { BlockTitle } from '../BlockTitle';

// assets
import * as S from './styled';

interface IFormBlockProps extends ComponentPropsWithoutRef<'div'> {
  blockTitle: string | null;
  groups: IFormGroup[];
}

const TitleMemo = memo(BlockTitle);

export const FormBlock = memo(
  ({ blockTitle, groups, ...props }: IFormBlockProps) => (
    <S.Block {...props}>
      {blockTitle && <TitleMemo title={blockTitle} />}
      {groups && groups.map(group => <FormGroup key={group.name} {...group} />)}
    </S.Block>
  ),
);
