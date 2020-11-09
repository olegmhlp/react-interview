import React, { useState } from 'react';
import { Button, Container, Input, InputContainer } from './MainContent.style';
import TasksContainer from '../TasksContainer/TasksContainer';
import { Item } from '../types';

interface Main {
  taskList: Item[];
  addNewTask: Function;
  changeStatus: Function;
}
const MainContent: React.FC<Main> = ({
  taskList,
  addNewTask,
  changeStatus,
}) => {
  const [inputValue, setValue] = useState('');
  return (
    <Container>
      <InputContainer>
        <Input onChange={(e) => setValue(e.target.value)} />
        <Button onClick={() => addNewTask(inputValue)}>Add Task</Button>
      </InputContainer>
      <TasksContainer taskList={taskList} changeStatus={changeStatus} />
    </Container>
  );
};

export default MainContent;
