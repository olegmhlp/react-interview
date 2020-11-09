import Header from './Header';
import MainContent from './MainContent';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: 'One', status: true },
    { id: 2, title: 'Two', status: true },
    { id: 3, title: 'Three', status: false },
    { id: 4, title: 'Four', status: true },
  ]);

  const addNewTask = (title) => {
    const newTask = { id: taskList.length + 1, title, status: true };
    setTaskList([...taskList, newTask]);
  };

  const changeStatus = (id) => {
    const newArr = [...taskList];
    const findTask = newArr.find((task) => task.id === +id);
    if (findTask) findTask.status = !findTask.status;
    setTaskList(newArr);
  };

  return (
    <div className="App">
      <AppContainer>
        <Header taskList={taskList} />
        <MainContent
          taskList={taskList}
          addNewTask={addNewTask}
          changeStatus={changeStatus}
        />
      </AppContainer>
    </div>
  );
}

export default App;
