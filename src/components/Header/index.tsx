/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';

import { Container } from './styles';
import Logo from '../../assets/Logo.svg';

const Header: React.FC = () => {
  const [hasFavorites, setHasFavorite] = useState(false);

  return (
    <Container>
      <nav className="header-content">
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <aside>
          <button type="button">New Task</button>
        </aside>
      </nav>
    </Container>
  );
};

export default Header;
