import { type ComponentPropsWithoutRef } from 'react';
import { Wrapper, Container } from '@/shared/ui';

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  name?: string;
}

export const Section = ({ name, children, ...otherProps }: SectionProps) => (
  <section
    className={name ? ['section', name].join(' ') : 'section'}
    id={name !== 'section' ? `section-${name}` : undefined}
  >
    <Container>
      <Wrapper {...otherProps}>{children}</Wrapper>
    </Container>
  </section>
);
