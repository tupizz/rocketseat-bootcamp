import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  margin-top: 8px;
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  ${props =>
    props.isFocus &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  > svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    background: #232129;
    color: #f4ede8;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }
`;
