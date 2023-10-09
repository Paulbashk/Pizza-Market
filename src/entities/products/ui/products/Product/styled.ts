import styled from 'styled-components';
import { Button } from '@/shared/ui';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperImage = styled.div`
  margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  margin-top: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  margin-bottom: 16px;
`;

export const Prices = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

export const Price = styled.span`
  display: block;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.015em;
  color: ${props => props.theme.colors.black};
  margin-right: 8px;
`;

export const ButtonBasket = styled(Button)`
  display: flex;
  align-items: center;
  min-width: 142px;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;

  &:hover span {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.yellow};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.yellow};
    min-width: 18px;
    min-height: 18px;
    font-size: 12px;
    line-height: 12px;
    padding-top: 1px;
    font-weight: 700;
    letter-spacing: 0.015em;
    color: ${props => props.theme.colors.white};
    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;

// import
export const Variables = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lightgray};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 16px;
`;
