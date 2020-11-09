import React, { useState } from 'react';
import styled from 'styled-components';
import TasksContainer from './TasksContainer';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 30rem;
  height: 2.4rem;
  margin-right: 1rem;
`;

const Button = styled.button`
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

function MainContent({ taskList, addNewTask, changeStatus }) {
  const [inputValue, setValue] = useState('');
  return (
    <Container>
      <InputContainer>
        <Input onChange={e => setValue(e.target.value)}/>
        <Button onClick={() => addNewTask(inputValue)}>Add Task</Button>
      </InputContainer>
      <TasksContainer taskList={taskList} changeStatus={changeStatus} />
    </Container>
  );
}

export default MainContent;
