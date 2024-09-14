import { ProductTypes } from '@/entities/product';
import { TagVariables, type TagTypes } from '@/entities/tag';

export const filterProductsByTag = (
  items: ProductTypes.Item[],
  filter: TagTypes.Variable,
): ProductTypes.Item[] =>
  items.filter(item =>
    filter !== TagVariables.ALL ? item.tag === filter : item,
  );
