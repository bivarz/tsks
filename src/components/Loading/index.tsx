import React from 'react';

import { Container } from './style';

const Loading: React.FC = () => (
  <Container>
    <div className="modal-loading">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </Container>
);

export default Loading;
