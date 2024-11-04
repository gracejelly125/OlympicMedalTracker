import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(221, 253, 77);
  color: midnightblue;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: rgb(166, 250, 30);
  }
`;

export const ButtonGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  align-items: end;
`;
