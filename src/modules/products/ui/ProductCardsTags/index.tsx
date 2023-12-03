'use client';

// components
import { tagUI } from '@/entities/tag';
import { productFilterUI } from '@/features/product/byFiltered';

interface ProductCardsTagsProps {
  categoryId: number;
}

const { tagListWithFiltered } = productFilterUI;
const { TagList, tagListWithQuery } = tagUI;

export function ProductCardsTags({ categoryId }: ProductCardsTagsProps) {
  const TagListWithFiltered = tagListWithFiltered(TagList);
  const TagListWithQuery = tagListWithQuery(TagListWithFiltered, categoryId);

  return <TagListWithQuery />;
}
