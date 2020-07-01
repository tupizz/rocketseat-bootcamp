import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 16px;
    color: #666360;
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
