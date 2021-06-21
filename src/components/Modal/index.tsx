import React, { useState } from 'react';

import { Container } from './styles';

const Modal: React.FC = () => {
  const [hasConfirmated, setHasConfirmated] = useState<boolean | null>(false);

  return (
    <Container>
      <form>
        <input />
        <textarea />
      </form>
    </Container>

  );
};

export default Modal;
