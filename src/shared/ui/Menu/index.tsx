import type { ReactElement, ComponentPropsWithoutRef } from 'react';

interface MenuProps extends ComponentPropsWithoutRef<'ul'> {
  items: any[];
  renderItem: (arg: any) => ReactElement;
}

export const Menu = ({ items, renderItem, ...otherProps }: MenuProps) => (
  <ul {...otherProps}>
    {items.map(({ name, ...other }, number) => (
      <li key={name ?? number}>{renderItem({ name, ...other })}</li>
    ))}
  </ul>
);
