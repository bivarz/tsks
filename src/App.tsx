import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import NewTaskModal from './components/NewTaskModal';

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTaskModal={handleOpenNewTaskModal} />
      <Home />
      <NewTaskModal isOpen={isNewTaskModalOpen} onRequestClose={handleCloseNewTaskModal} />
    </>
  );
};

export default App;
