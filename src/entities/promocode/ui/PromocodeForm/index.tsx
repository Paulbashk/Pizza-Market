import { createRef, type RefObject, type ReactNode } from 'react';

// components
import { ButtonColors } from '@/shared/ui';

// assets
import * as S from './styled';

interface IPromocodeFormProps {
  onClick?: (inputRef: RefObject<HTMLInputElement>) => void;
  message: string | ReactNode | undefined;
  isActive: boolean;
  inputValue?: string | undefined;
}

export const PromocodeForm = ({
  onClick,
  message = undefined,
  isActive = false,
  inputValue = undefined,
}: IPromocodeFormProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const handleClick = () => {
    if (onClick) {
      onClick(inputRef);
    }
  };

  return (
    <S.Promocode>
      <S.Wrapper>
        <S.Input
          ref={inputRef}
          placeholder="Промокод"
          defaultValue={inputValue}
          readOnly={isActive}
        />
        <S.Button
          onClick={handleClick}
          isActive={false}
          color={ButtonColors.yellow}
          $isSale={isActive}
          type="button"
        >
          {isActive ? <S.IconClose /> : 'Применить'}
        </S.Button>
      </S.Wrapper>
      {message && message}
    </S.Promocode>
  );
};
