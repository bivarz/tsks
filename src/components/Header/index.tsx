/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import Logo from '../../assets/Logo.svg';

const Header: React.FC = () => {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <Container>
      <nav className="header-content">
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <button type="button" onClick={handleOpenNewTaskModal}>New Task</button>
      </nav>
      <Modal isOpen={isNewTaskModalOpen} onRequestClose={handleCloseNewTaskModal}>
        <h2>New Task</h2>
      </Modal>
    </Container>
  );
};

export default Header;
