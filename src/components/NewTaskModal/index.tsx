import React, {
  FormEvent, useContext, useState,
} from 'react';
import Modal from 'react-modal';

import { TasksContext } from '../../TaskContext/TaskContext';
import Vector from '../../assets/Vector.png';

import { Content, Title } from './styles';

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, onRequestClose }) => {
  const { createTask } = useContext(TasksContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const id = Number((10000 * Math.random()).toFixed(0));
    const data = ({
      id,
      taskTitle,
      taskDescription,
      createdAt: new Date().toDateString(),
      isClosed: false,
    });
    createTask(data);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={Vector} alt="Close Modal" />
      </button>
      <Title>New Task</Title>
      <Content onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => setTaskTitle(event.target.value)}
        />
        <textarea
          contentEditable={false}
          className="text-area"
          placeholder="Description"
          onChange={(event) => setTaskDescription(event.target.value)}
        />
        <button type="submit">Save</button>
      </Content>
    </Modal>

  );
};
export default NewTaskModal;
