import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  height: 40px;
  background: red;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const HeaderText = styled.p`
  font-size: 18px;
  padding: 0 1rem;
`;

const TasksStat = styled.div`
  display: flex;
`;

function Header({ taskList }) {
  let completed = 0;

  taskList.length !== 0 &&
    taskList.forEach((item) => {
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
}

export default Header;
