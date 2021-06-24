import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import Home from './pages/Home';

import NewTaskModal from './components/NewTaskModal';
import { TaskProvider } from './TaskContext/TaskContext';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';

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
    <TaskProvider>
      <GlobalStyle />
      <Header onOpenNewTaskModal={handleOpenNewTaskModal} />
      <Home />
      <NewTaskModal isOpen={isNewTaskModalOpen} onRequestClose={handleCloseNewTaskModal} />
      <Footer />
    </TaskProvider>
  );
};

export default App;
