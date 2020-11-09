import React from 'react';
import { HeaderText, NavBar, TasksStat } from './Header.style';
import { TaskList, Item } from '../types';

const Header: React.FC<TaskList> = ({ taskList }) => {
  let completed = 0;
  taskList.length !== 0 &&
    taskList.forEach((item: Item) => {
      !item.status && completed++;
    });

  return (
    <NavBar>
      <HeaderText>Doist</HeaderText>
      <TasksStat>
        <HeaderText>Completed/All</HeaderText>
        <HeaderText>
          {completed}/{taskList.length}
        </HeaderText>
      </TasksStat>
    </NavBar>
  );
};

export default Header;
