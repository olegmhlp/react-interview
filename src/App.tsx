import React, { useState, useEffect } from 'react';
import { tasks as dataTask } from './mocks/tasks.json';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import styled from 'styled-components';
import * as actions from './redux/actions';
import { Item } from './types';
import { connect } from 'react-redux';

const AppContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

function App(props: any) {
  useEffect(() => {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(resolve, 700);
    });

    promise.then(() => props.loadTasks(dataTask)); 
  }, []);

  const addNewTask = (title: string) => props.addTask(title);

  const changeStatus = (id: number) => props.changeStatus(id);

  return (
    <div className="App">
      <AppContainer>
        <Header taskList={props.tasksList} />
        <MainContent
          taskList={props.tasksList}
          addNewTask={addNewTask}
          changeStatus={changeStatus}
        />
      </AppContainer>
    </div>
  );
}

function mapStateToProps(state: any) {
  return { tasksList: state.tasksList };
}

const mapDispatchToProps = {
  addTask: actions.AddTask,
  changeStatus: actions.ChangeStatus,
  loadTasks: actions.LoadTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
