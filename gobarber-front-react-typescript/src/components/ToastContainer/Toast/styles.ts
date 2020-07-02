import styled, { css } from 'styled-components';

const toatTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
  success: css`
    background-color: #e6ffff;
    color: #2e656a;
  `,
};

interface ContainerProps {
  type?: 'info' | 'error' | 'success';
  hasDescription: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 350px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;

  ${props => toatTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 23px 0 0;
  }

  + div {
    margin-top: 8px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  div {
    flex: 1;

    strong {
      font-weight: bold;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
