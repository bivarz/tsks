import React, { useContext, useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { TasksContext } from '../../TaskContext/TaskContext';

import { Container, EditContent } from './styles';

interface EditOptionsProps {
  drop: (id: number) => void;
  id: number;
}

interface OptionButtonProps {
  id: number;
}

const EditOptions: React.FC<EditOptionsProps> = ({ drop, id }) => (
  <div>
    <EditContent>
      <div className="edit-option">
        <button type="button">
          <AiOutlineEdit color="#272733" size={25} />
        </button>
      </div>
      <div className="delete-option">
        <button type="button" onClick={() => drop(id)}>
          <AiOutlineDelete color="#272733" size={25} />
        </button>
      </div>
    </EditContent>
  </div>
);
const OptionButton: React.FC<OptionButtonProps> = ({ id }) => {
  const { deleteTask } = useContext(TasksContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {isOpen ? <EditOptions drop={deleteTask} id={id} /> : ''}
      <button type="button" className="button" onClick={() => setIsOpen(!isOpen)}>
        <p className="dots">...</p>
      </button>
    </Container>
  );
};

export default OptionButton;
