// components
import { Section } from '@/shared/ui';

// api
import { pageScreenService } from '@/shared/server/api';

// assets
import * as S from './styled';

const { getPageByName } = pageScreenService();

export const PolicyScreen = async () => {
  const { content } = await getPageByName('policy');

  return (
    <Section name="policy">
      <S.Wrapper dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  );
};
