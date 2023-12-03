import { type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useScrollToAnchor } from '@/shared/libs/hooks';
import { formatSlugAndIsCurrentPath } from '../utils';

type CategorySlugParams = {
  id: number;
  slug: string;
  anchorTag: string;
  callbackClick: (id: number, event: MouseEvent<HTMLElement>) => void;
};

export const useCategorySlug = ({
  id,
  slug,
  anchorTag,
  callbackClick,
}: CategorySlugParams) => {
  const pathname = usePathname();
  const scrollToAnchor = useScrollToAnchor();

  const { slug: formatSlug, isPath } = formatSlugAndIsCurrentPath(
    slug,
    pathname,
  );

  const onClick = (event: MouseEvent<HTMLElement>) => {
    callbackClick(id, event);
    scrollToAnchor(anchorTag);
  };

  return {
    linkName: `${formatSlug}/${anchorTag}`,
    isPath,
    onClick,
  };
};
