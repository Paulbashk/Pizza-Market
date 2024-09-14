'use client';

// components
import { tagListUI } from '@/modules/tag-list';

const { TagList, withQueryTagList, withFilteredTagList } = tagListUI;

interface ITagsProps {
  categoryId: number;
}

export function Tags({ categoryId }: ITagsProps) {
  const TagListWithFiltered = withFilteredTagList(TagList);
  const TagListWithQuery = withQueryTagList(TagListWithFiltered, categoryId);

  return <TagListWithQuery />;
}
