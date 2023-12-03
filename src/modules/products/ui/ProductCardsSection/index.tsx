// components
import { productFilterUI } from '@/features/product/byFiltered';
import { ProductCards, ProductCardsTags } from '@/modules/products/ui';

// types
import { ICategory } from '@/shared/types/interfaces';

// assets
import * as S from './styled';

interface ProductCardsSectionProps {
  category: ICategory;
}

const { ProductCardsSort, ProductCardsTitle } = productFilterUI;

export function ProductCardsSection({ category }: ProductCardsSectionProps) {
  const { id, name } = category;

  return (
    <S.Section name="products">
      <S.Header>
        <ProductCardsTags categoryId={id} />
        <ProductCardsSort />
      </S.Header>
      <ProductCardsTitle categoryName={name} />
      <ProductCards categoryId={id} />
    </S.Section>
  );
}
