import { type ComponentPropsWithoutRef, type Ref, forwardRef } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Button } from './styled';

export const ArrowButton = forwardRef(
  (
    { children, ...props }: ComponentPropsWithoutRef<'button'>,
    ref?: Ref<HTMLButtonElement>,
  ) => (
    <Button {...props} role="button" ref={ref}>
      <MdKeyboardArrowLeft />
    </Button>
  ),
);
