import { useRef, useState } from 'react';

// utils
import { callIsDefined } from '@/shared/libs/utils';

type TypeArgsUseHandleChainedModal = {
  afterOpen?: () => void;
  afterClose?: () => void;
  onEscapeKeydown?: (event?: KeyboardEvent) => void;
  isOpenProp: boolean;
};

export const useHandleChainedModal = ({
  afterOpen,
  afterClose,
  onEscapeKeydown,
  isOpenProp,
}: TypeArgsUseHandleChainedModal) => {
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
