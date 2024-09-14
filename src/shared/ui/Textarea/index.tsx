import { type ComponentPropsWithoutRef, type Ref, forwardRef } from 'react';

// assets
import * as S from './styled';

export const Textarea = forwardRef(
  (
    { className, ...props }: ComponentPropsWithoutRef<'textarea'>,
    ref?: Ref<HTMLTextAreaElement>,
  ) => (
    <S.TextareaControl className={className}>
      <textarea ref={ref} {...props} />
    </S.TextareaControl>
  ),
);
