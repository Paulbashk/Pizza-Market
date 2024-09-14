import styled from 'styled-components';

export const CheckboxText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;

  > a {
    font-size: inherit;
    line-height: inherit;
    color: ${props => props.theme.colors.yellow};

    &:hover {
      text-decoration: underline;
    }
  }
`;
