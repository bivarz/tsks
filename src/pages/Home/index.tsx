import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Loading from '../../components/Loading/index';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (!loading ? (
    <Container>
      <div className="content">
        <div className="title">
          <h1>Hi there.</h1>
        </div>
      </div>

    </Container>
  ) : <Loading />);
};
export default Home;