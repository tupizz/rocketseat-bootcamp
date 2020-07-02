import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: none;
  padding: 0 16px;
  width: 100%;
  color: #312e38;
  height: 56px;
  margin-top: 16px;
  transition: background 0.2s;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
