import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    height: 70px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    ${(props) =>
      props.hasError &&
      css`
        border: 1px solid #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    border: 0;
    font-weight: bold;
    transition: background-color ease-in-out 0.2s;

    &:hover {
      background-color: ${darken(0.05, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all ease-in-out 0.3s;

    & + a {
      margin-top: 15px;
    }

    &:hover {
      transform: scale(1.025);
      box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.1);
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;
