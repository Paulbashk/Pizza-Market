import React, { ComponentPropsWithoutRef } from 'react';
import { Wrapper, Container } from '@/shared/ui';

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  name?: string;
}

const Section = ({
  name = 'section',
  children,
  ...otherProps
}: SectionProps) => (
  <section className={name}>
    <Container>
      <Wrapper {...otherProps}>{children}</Wrapper>
    </Container>
  </section>
);

export default Section;
