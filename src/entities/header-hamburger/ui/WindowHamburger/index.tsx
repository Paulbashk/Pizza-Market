'use client';

import { type Dispatch, type SetStateAction, type ReactNode } from 'react';

// assets
import * as S from './styled';

type TStateActionVisible = Dispatch<SetStateAction<boolean>>;

interface IWindowHamburgerProps {
  handleClickClose?: () => void;
  visibleHamburger: boolean;
  setVisibleHamburger: TStateActionVisible;
  renderContent?: (setVisibleHamburger: TStateActionVisible) => ReactNode;
}

export const WindowHamburger = ({
  handleClickClose,
  visibleHamburger,
  setVisibleHamburger,
  renderContent = undefined,
}: IWindowHamburgerProps) => (
  <S.Window $visible={visibleHamburger}>
    <S.WrapContainer>
      <S.WrapContent>
        <S.WrapClose>
          <S.CloseIcon onClick={handleClickClose} />
        </S.WrapClose>
        {renderContent && renderContent(setVisibleHamburger)}
      </S.WrapContent>
    </S.WrapContainer>
  </S.Window>
);
