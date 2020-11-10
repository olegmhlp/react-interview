import React from 'react';
import { Container, Header, Task, TaskContainer } from './TaskContainer.style';
import { Item } from '../types';

interface Tasks {
  taskList: Item[];
  changeStatus: Function;
}

const TasksContainer: React.FC<Tasks> = ({ taskList, changeStatus }) => {
  return (
    <Container>
      <Header>Active tasks</Header>
      <Container>
        {taskList && taskList.length !== 0 &&
          taskList.map((task) => {
            if (task.status)
              return (
                <TaskContainer
                  key={task.id}
                  onClick={() => changeStatus(task.id)}
                >
                  <input type="checkbox" />
                  <Task>{task.title}</Task>
                </TaskContainer>
              );
          })}
      </Container>
      <Header>Completed tasks</Header>
      <Container>
        {taskList && taskList.length !== 0 &&
          taskList.map((task) => {
            if (!task.status)
              return (
                <TaskContainer key={task.id}>
                  <Task onClick={() => changeStatus(task.id)} completed>
                    {task.title}
                  </Task>
                </TaskContainer>
              );
          })}
      </Container>
    </Container>
  );
};

export default TasksContainer;
