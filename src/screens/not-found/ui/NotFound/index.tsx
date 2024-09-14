// components
import { OrangeLink, Section } from '@/shared/ui';

// assets
import * as S from './styled';

export const NotFoundScreen = () => (
  <Section name="not-found">
    <S.Wrapper>
      <h1>
        <b>Ошибка 404</b>
        Такой страницы не существует
      </h1>
      <OrangeLink href="/">Вернуться на главную</OrangeLink>
    </S.Wrapper>
  </Section>
);
