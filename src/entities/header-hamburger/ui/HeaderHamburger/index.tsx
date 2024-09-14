'use client';

import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  useState,
  memo,
  type Dispatch,
  type SetStateAction,
} from 'react';

// components
import { ButtonHamburger } from '../ButtonHamburger';
import { WindowHamburger } from '../WindowHamburger';

type TStateActionVisible = Dispatch<SetStateAction<boolean>>;

interface IHeaderHamburgerProps extends ComponentPropsWithoutRef<'div'> {
  renderContent: (setVisibleHamburger: TStateActionVisible) => ReactNode;
}

const ButtonHamburgerMemo = memo(ButtonHamburger);
const WindowHamburgerMemo = memo(WindowHamburger);

export const HeaderHamburger = memo(
  ({ renderContent, ...otherProps }: IHeaderHamburgerProps) => {
    const [visibleHamburger, setVisibleHamburger] = useState<boolean>(false);

    const handleClickWindow = () => {
      setVisibleHamburger(prev => !prev);
    };

    const handleClickClose = () => {
      setVisibleHamburger(false);
    };

    return (
      <div {...otherProps}>
        <ButtonHamburgerMemo handleClick={handleClickWindow} />
        <WindowHamburgerMemo
          visibleHamburger={visibleHamburger}
          handleClickClose={handleClickClose}
          setVisibleHamburger={setVisibleHamburger}
          renderContent={renderContent}
        />
      </div>
    );
  },
);
