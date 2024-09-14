import {
  cloneElement,
  useRef,
  useState,
  useEffect,
  type ReactElement,
  type RefObject,
} from 'react';

type TUseStateDropdownProps = {
  onOpen?: (open: boolean) => boolean;
  triggerOnClick?: () => void;
  selected?: number;
  onSelected?: (id: number) => void;
};

type TUseStateDropdownReturn = {
  dropdownRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  setOpenWithOnOpen: (value: boolean) => void;
  handleOpen: () => void;
  renderItem: (item: ReactElement, id: number) => ReactElement;
};

type TUseHandleStateDropdown = (
  props: TUseStateDropdownProps,
) => TUseStateDropdownReturn;

export const useHandleStateDropdown: TUseHandleStateDropdown = ({
  onOpen,
  triggerOnClick,
  selected,
  onSelected,
}) => {
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

type TUseDropdownEventsProps = {
  dropdownRef: RefObject<HTMLDivElement>;
  setOpenWithOnOpen: (value: boolean) => void;
};

type TUseDropdownEvents = (props: TUseDropdownEventsProps) => void;

export const useDropdownEvents: TUseDropdownEvents = ({
  dropdownRef,
  setOpenWithOnOpen,
}) => {
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
