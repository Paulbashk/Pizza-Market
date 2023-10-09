import React, { ComponentPropsWithoutRef } from 'react';

import * as S from './styled';

interface DropdownProps extends ComponentPropsWithoutRef<'div'> {
  trigger: React.ReactElement;
  items: Array<React.ReactElement>;
  onOpen?: (open: boolean) => boolean;
  selected?: number;
  onSelected?: (id: number) => void;
}

// Dropdown menu with tracking selections
const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const { onSelected, selected, onOpen, trigger, items, ...otherProps } = props;

  const { onClick: triggerOnClick, ...otherTriggerProps } = trigger.props;

  const setOpenWithOnOpen = (value: boolean) => {
    setOpen(prevState => {
      if (prevState === value) return prevState;

      if (onOpen) {
        return onOpen(value);
      }

      return value;
    });
  };

  const handleOpen = () => {
    setOpenWithOnOpen(!open);

    if (triggerOnClick) {
      triggerOnClick();
    }
  };

  const handleClick = (id: number) => {
    if (selected !== undefined && selected === id) return;

    setOpenWithOnOpen(false);

    if (onSelected) {
      onSelected(id);
    }
  };

  const renderItem = (item: React.ReactElement, id: number) => {
    const { onClick, ...otherItemProps } = item.props;

    const hanldeOnClick = (event: MouseEvent) => {
      handleClick(id);

      if (onClick) {
        onClick(event);
      }
    };

    return React.cloneElement(item, {
      key: id,
      role: 'option',
      onClick: hanldeOnClick,
      ...otherItemProps,
    });
  };

  React.useEffect(() => {
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

  return (
    <S.Dropdown ref={dropdownRef} {...otherProps}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
        role: 'label',
        isActive: open,
        ...otherTriggerProps,
      })}
      {open && items.length > 0 ? (
        <S.DropdownInner role="listbox">
          <S.DropdownContent>
            <S.DropdownMenu>{items.map(renderItem)}</S.DropdownMenu>
          </S.DropdownContent>
        </S.DropdownInner>
      ) : null}
    </S.Dropdown>
  );
};

export default Dropdown;
