import { type ReactNode, memo } from 'react';

// components
import { ContentTitle } from '../ContentTitle';

// assets
import * as S from './styled';

interface IWrapperContentProps {
  renderContent: ReactNode;
  title?: string | null;
}

const TitleMemo = memo(ContentTitle);

export const WrapperContent = ({
  title,
  renderContent,
}: IWrapperContentProps) => (
  <S.WrapperContent>
    {title && <TitleMemo title={title} />}
    {renderContent}
  </S.WrapperContent>
);
