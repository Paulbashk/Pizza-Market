import styled, { css } from 'styled-components';
import { Button as ButtonImport, Input as InputImport } from '@/shared/ui';
import { MdClose } from 'react-icons/md';

export const Promocode = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  > p {
    margin: 0;
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;

    b {
      font-weight: 700;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Input = styled(InputImport)`
  flex: 1;

  input {
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    text-transform: uppercase;

    &::placeholder {
      text-transform: none;
    }
  }
`;

interface IButtonProps {
  $isSale: boolean;
}

export const Button = styled(ButtonImport)<IButtonProps>`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-weight: 400;
  ${props =>
    props.$isSale &&
    css`
      background-color: ${props.theme.colors.black};
      padding: 4px 24px;
    `}

  @media (max-width: ${props => props.theme.breakpoints.LG}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 440px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const IconClose = styled(MdClose)`
  width: 28px;
  height: 28px;
`;
