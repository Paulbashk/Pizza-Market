import {
  cloneElement,
  useRef,
  useState,
  useEffect,
  type ReactElement,
  type RefObject,
} from 'react';

type TypeArgsUseStateDropdown = {
  onOpen?: (open: boolean) => boolean;
  triggerOnClick?: () => void;
  selected?: number;
  onSelected?: (id: number) => void;
};

export const useHandleStateDropdown = ({
  onOpen,
  triggerOnClick,
  selected,
  onSelected,
}: TypeArgsUseStateDropdown) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function setOpenWithOnOpen(value: boolean) {
    setIsOpen(prevState => {
      if (prevState === value) return prevState;

      if (onOpen) {
        return onOpen(value);
      }

      return value;
    });
  }

  function handleOpen() {
    setOpenWithOnOpen(!isOpen);

    if (triggerOnClick) {
      triggerOnClick();
    }
  }

  function handleClick(id: number) {
    if (selected !== undefined && selected === id) return;

    setOpenWithOnOpen(false);

    if (onSelected) {
      onSelected(id);
    }
  }

  function renderItem(item: ReactElement, id: number) {
    const { onClick, ...otherItemProps } = item.props;

    const hanldeOnClick = (event: MouseEvent) => {
      handleClick(id);

      if (onClick) {
        onClick(event);
      }
    };

    return cloneElement(item, {
      key: id,
      role: 'option',
      onClick: hanldeOnClick,
      ...otherItemProps,
    });
  }

  return {
    dropdownRef,
    isOpen,
    setOpenWithOnOpen,
    handleOpen,
    renderItem,
  };
};

type TypeArgsUseDropdownEvents = {
  dropdownRef: RefObject<HTMLDivElement>;
  setOpenWithOnOpen: (value: boolean) => void;
};

export const useDropdownEvents = ({
  dropdownRef,
  setOpenWithOnOpen,
}: TypeArgsUseDropdownEvents) => {
  useEffect(() => {
    if (dropdownRef.current) {
      const ref = dropdownRef.current;
      let mouseLeaveTimer: ReturnType<typeof setTimeout> | undefined;

      const handleOutsideClick = (event: MouseEvent): void => {
        if (!event.composedPath().includes(ref)) {
          setOpenWithOnOpen(false);
        }
      };

      const handleMouseEnter = (): void => {
        clearTimeout(mouseLeaveTimer);
        setOpenWithOnOpen(true);
      };

      const handleMouseLeave = (): void => {
        mouseLeaveTimer = setTimeout(() => {
          setOpenWithOnOpen(false);
        }, 1500);
      };

      ref.addEventListener('mouseenter', handleMouseEnter, false);
      ref.addEventListener('mouseleave', handleMouseLeave, false);
      document.body.addEventListener('click', handleOutsideClick, false);

      return () => {
        ref.removeEventListener('mouseenter', handleMouseEnter, false);
        ref.removeEventListener('mouseleave', handleMouseLeave, false);
        document.body.removeEventListener('click', handleOutsideClick, false);

        if (mouseLeaveTimer !== undefined) {
          clearTimeout(mouseLeaveTimer);
        }
      };
    }
  }, []);
};
