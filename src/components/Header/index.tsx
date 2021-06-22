/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/Logo.svg';

interface HeaderProps {
  onOpenNewTaskModal: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpenNewTaskModal }) => (
  <Container>
    <nav className="header-content">
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
      <button type="button" onClick={onOpenNewTaskModal}>New Task</button>
    </nav>
  </Container>
);

export default Header;
