import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: midnightblue;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  border: 1px solid midnightblue;
  border-radius: 10px;
  width: auto;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  text-align: center;
  padding: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    flex: 1;
    padding: 8px;
    min-width: 180px;
  }
`;
