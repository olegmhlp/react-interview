import styled, { css } from 'styled-components';

interface Status {
  completed?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 10rem;
`;

export const Header = styled.p`
  font-size: 30px;
  padding: 2rem 0;
  font-weight: bold;
`;

export const Task = styled.p`
  font-size: 18px;
  padding-left: 0.5rem;
  ${(props: Status) =>
    props.completed &&
    css`
      color: lightgray;
      text-decoration: line-through;
    `}
`;

export const TaskContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
