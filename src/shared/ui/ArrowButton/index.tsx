import { type ComponentPropsWithoutRef } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Button } from './styled';

export function ArrowButton(props: ComponentPropsWithoutRef<'button'>) {
  const { children, ...otherProps } = props;

  return (
    <Button {...otherProps} role="button">
      <MdKeyboardArrowLeft />
    </Button>
  );
}
