import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 30rem;
  height: 2.4rem;
  margin-right: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 6rem;
  height: 2.6rem;
  border: none;
  outline: none;
  border-radius: 8px;
  background: lightskyblue;

  &:hover {
    background: blue;
    color: white;
  }
`;
