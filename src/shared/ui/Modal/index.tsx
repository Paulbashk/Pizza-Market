import React, {
  useRef,
  useEffect,
  useState,
  ComponentPropsWithoutRef,
} from 'react';
import ReactDOM from 'react-dom';

// utils
import { callIsDefined } from '@/shared/libs/utils';

// assets
import { MainModal, ModalOverlay, ModalWindow } from './styled';

interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  isOpen: boolean;
  onEscapeKeydown?: (event?: KeyboardEvent) => void;
  allowScroll?: boolean;
  beforeOpen?: () => void;
  afterOpen?: () => void;
  beforeClose?: () => void;
  afterClose?: () => void;
}

const Modal = ({
  children,
  isOpen: isOpenProp,
  onEscapeKeydown,
  allowScroll,
  beforeOpen,
  afterOpen,
  beforeClose,
  afterClose,
  ...modalProps
}: ModalProps) => {
  const prevBodyOverflowStyle = useRef<null | string>(null);
  const isTransitioning = useRef<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handle opening and closing
  useEffect(() => {
    const handleIsOpenChange = (value: boolean) => {
      setIsOpen(value);

      value ? callIsDefined(afterOpen) : callIsDefined(afterClose);
    };

    function handleChange(callback: (() => void | Promise<void>) | undefined) {
      if (!callback) return handleIsOpenChange(isOpenProp);

      const maybePromise = callback();

      if (typeof maybePromise?.then !== 'function') {
        return handleIsOpenChange(isOpenProp);
      }

      isTransitioning.current = true;

      maybePromise.then(() => {
        handleIsOpenChange(isOpenProp);

        isTransitioning.current = false;
      });
    }

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
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onEscapeKeydown && onEscapeKeydown(event);
      }
    }

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
export default Modal;
