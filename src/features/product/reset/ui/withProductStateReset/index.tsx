'use client';

import { type ComponentType } from 'react';

// hooks
import { productFilterModel } from '@/features/product/@x/sortBy';

export const withProductStateReset = <Props extends {}>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithCallback = (props: Props) => {
    const action = productFilterModel.actions.resetState;

    return <Component {...props} resetAction={action} />;
  };

  return ComponentWithCallback;
};
