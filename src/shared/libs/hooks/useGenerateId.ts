'use client';

import { useRef, useMemo } from 'react';
import { uniqueID } from '@/shared/libs/utils';

export const useGenerateId = (
  id: string | number | undefined,
  withRadnom: boolean = false,
) => {
  const random = uniqueID().toString();

  return useRef(
    useMemo(
      () =>
        id !== undefined
          ? withRadnom
            ? id.toString() + random
            : id.toString()
          : random,
      [],
    ),
  );
};
