import { type ComponentType } from 'react';

// types
import { type IPromocode } from '@/shared/types/interfaces';

// hooks
import { useTogglePromocode } from '../../libs/hooks';

interface IInjectProps {
  onClick?: () => void;
}

type TOmitProps<T> = Omit<T, 'isActive' | 'onClick' | 'message' | 'inputValue'>;

export const withPromocodeToggle = <Props extends {}>(
  Form: ComponentType<Props>,
  promocodes: IPromocode[] | undefined,
) => {
  const Component = ({
    onClick,
    ...otherProps
  }: TOmitProps<Props> & IInjectProps) => {
    const { message, isActive, promocode, onPromocode } = useTogglePromocode({
      promocodes,
      onClick,
    });

    return (
      <Form
        message={message}
        onClick={onPromocode}
        isActive={isActive}
        inputValue={promocode}
        {...(otherProps as never as Props)}
      />
    );
  };

  return Component;
};
