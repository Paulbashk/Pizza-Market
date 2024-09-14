'use client';

import { useRef, useMemo, type MutableRefObject } from 'react';
import { uniqueID } from '@/shared/libs/utils';

type TUseGenerateIdProps = {
  id: string | number | undefined;
  withRadnom?: boolean;
};

type TUseGenerateId = (props: TUseGenerateIdProps) => MutableRefObject<string>;

export const useGenerateId: TUseGenerateId = ({ id, withRadnom = false }) => {
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
