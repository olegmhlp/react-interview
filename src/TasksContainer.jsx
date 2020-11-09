import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 10rem;
`;

const Header = styled.p`
  font-size: 30px;
  padding: 2rem 0;
  font-weight: bold;
`;

const Task = styled.p`
  font-size: 18px;
  padding-left: 0.5rem;
  ${(props) =>
    props.completed &&
    css`
      color: lightgray;
      text-decoration: line-through;
    `}
`;

const TaskContainer = styled.div`
  cursor: pointer;
  display: flex; 
  align-items: center;
  margin: 0.5rem 0;
`;

function TasksContainer({ taskList, changeStatus }) {
  return (
    <Container>
      <Header>Active tasks</Header>
      <Container>
        {taskList.length !== 0 &&
          taskList.map((task) => {
            if (task.status)
              return (
                <TaskContainer key={task.id} onClick={() => changeStatus(task.id)}>
                  <input type="checkbox" />
                  <Task >
                    {task.title}
                  </Task>
                </TaskContainer>
              );
          })}
      </Container>
      <Header>Completed tasks</Header>
      <Container>
        {taskList.length !== 0 &&
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
}

export default TasksContainer;
