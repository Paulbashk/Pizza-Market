import { useRef, useState, type MutableRefObject } from 'react';

// libs
import { callIsDefined } from '@/shared/libs/utils';

type TUseHandleChainedModalProps = {
  afterOpen?: () => void;
  afterClose?: () => void;
  onEscapeKeydown?: (event?: KeyboardEvent) => void;
  isOpenProp: boolean;
};

type TUseHandleChaienedModalReturn = {
  prevBodyOverflowStyle: MutableRefObject<string | null>;
  isTransitioning: MutableRefObject<boolean>;
  isOpen: boolean;
  handleChange: (callback: (() => void | Promise<void>) | undefined) => void;
  handleKeydown: (event: KeyboardEvent) => void;
};

type TUseHandleChaienedModal = (
  props: TUseHandleChainedModalProps,
) => TUseHandleChaienedModalReturn;

export const useHandleChainedModal: TUseHandleChaienedModal = ({
  afterOpen,
  afterClose,
  onEscapeKeydown,
  isOpenProp,
}) => {
  const prevBodyOverflowStyle = useRef<null | string>(null);
  const isTransitioning = useRef<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleIsOpenChange(value: boolean) {
    setIsOpen(value);

    value ? callIsDefined(afterOpen) : callIsDefined(afterClose);
  }

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

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onEscapeKeydown && onEscapeKeydown(event);
    }
  }

  return {
    prevBodyOverflowStyle,
    isTransitioning,
    isOpen,
    handleChange,
    handleKeydown,
  };
};
