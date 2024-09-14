import { type ComponentPropsWithoutRef } from 'react';
import { Wrapper, Container } from '@/shared/ui';

interface ISectionProps extends ComponentPropsWithoutRef<'section'> {
  name?: string;
}

export const Section = ({ name, children, ...otherProps }: ISectionProps) => (
  <section
    className={name ? ['section', name].join(' ') : 'section'}
    id={name !== 'section' ? `section-${name}` : undefined}
  >
    <Container>
      <Wrapper {...otherProps}>{children}</Wrapper>
    </Container>
  </section>
);
