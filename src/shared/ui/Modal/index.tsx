'use client';

import {
  useEffect,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import ReactDOM from 'react-dom';

// hooks
import { useHandleChainedModal } from './hooks';

// assets
import { MainModal, ModalOverlay, ModalWindow } from './styled';

interface IModalProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  isOpen: boolean;
  onEscapeKeydown?: (event?: KeyboardEvent) => void;
  allowScroll?: boolean;
  beforeOpen?: () => void;
  afterOpen?: () => void;
  beforeClose?: () => void;
  afterClose?: () => void;
}

export const Modal = ({
  children,
  isOpen: isOpenProp,
  onEscapeKeydown,
  allowScroll,
  beforeOpen,
  afterOpen,
  beforeClose,
  afterClose,
  ...modalProps
}: IModalProps) => {
  const {
    prevBodyOverflowStyle,
    isTransitioning,
    isOpen,
    handleChange,
    handleKeydown,
  } = useHandleChainedModal({
    afterOpen,
    afterClose,
    onEscapeKeydown,
    isOpenProp,
  });

  // Handle opening and closing
  useEffect(() => {
    if (isOpen !== isOpenProp && !isTransitioning.current) {
      if (isOpen) {
        handleChange(beforeOpen && beforeOpen);
      } else {
        handleChange(beforeClose && beforeClose);
      }
    }
  }, [
    isTransitioning,
    isOpen,
    isOpenProp,
    beforeOpen,
    beforeClose,
    afterClose,
    afterOpen,
  ]);

  // Handle Escape keydown
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onEscapeKeydown]);

  // Handle changing document.body styles based on isOpen state
  useEffect(() => {
    if (isOpen && !allowScroll) {
      prevBodyOverflowStyle.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (!allowScroll) {
        document.body.style.overflow = prevBodyOverflowStyle.current || '';
      }
    };
  }, [isOpen, allowScroll]);

  if (isOpen) {
    return ReactDOM.createPortal(
      <MainModal role="dialog" {...modalProps}>
        {children}
      </MainModal>,
      document.body,
    );
  }

  return null;
};

export { ModalOverlay, ModalWindow };
