import React from 'react';

import { Container } from './styles';

import TasksList from '../../components/TasksList/index';

const Home: React.FC = () => (
  <Container>
    <div className="content">
      <div className="title">
        <h1>Hi there.</h1>
      </div>
      <TasksList />
    </div>
  </Container>
);
export default Home;
