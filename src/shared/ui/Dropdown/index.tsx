'use client';

import {
  type ComponentPropsWithoutRef,
  type ReactElement,
  cloneElement,
  useMemo,
} from 'react';

// hooks
import { useHandleStateDropdown, useDropdownEvents } from './hooks';

import * as S from './styled';

interface DropdownProps extends ComponentPropsWithoutRef<'div'> {
  trigger: ReactElement;
  items: Array<ReactElement>;
  onOpen?: (open: boolean) => boolean;
  selected?: number;
  onSelected?: (id: number) => void;
}

// Dropdown menu with tracking selections
export const Dropdown = (props: DropdownProps) => {
  const { onSelected, selected, onOpen, trigger, items, ...otherProps } = props;
  const { onClick: triggerOnClick, ...otherTriggerProps } = trigger.props;

  const { dropdownRef, isOpen, setOpenWithOnOpen, handleOpen, renderItem } =
    useHandleStateDropdown({
      onOpen,
      triggerOnClick,
      selected,
      onSelected,
    });

  useDropdownEvents({
    dropdownRef,
    setOpenWithOnOpen,
  });

  const triggerMemo = useMemo(
    () => ({
      render: cloneElement(trigger, {
        onClick: handleOpen,
        role: 'label',
        isActive: isOpen,
        ...otherTriggerProps,
      }),
    }),
    [onSelected],
  );

  return (
    <S.Dropdown ref={dropdownRef} {...otherProps}>
      {triggerMemo.render}
      {isOpen && items.length > 0 ? (
        <S.DropdownInner role="listbox">
          <S.DropdownContent>
            <S.DropdownMenu>{items.map(renderItem)}</S.DropdownMenu>
          </S.DropdownContent>
        </S.DropdownInner>
      ) : null}
    </S.Dropdown>
  );
};
