import React from 'react';
import Modal from 'react-modal';

import { Content, Title } from './styles';

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, onRequestClose }) => {
  const tasks = 0;
  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title>New Task</Title>
      <Content>
        <input type="text" placeholder="Title" />
        <textarea contentEditable={false} className="text-area" placeholder="Description" />
        <button type="button">Save</button>
      </Content>
    </Modal>

  );
};
export default NewTaskModal;
