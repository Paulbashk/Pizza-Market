import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
