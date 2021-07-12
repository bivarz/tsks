import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import { Container, EditContent } from './styles';

const EditOptions: React.FC = () => (
  <div>
    <EditContent>
      <div className="edit-option">
        <button type="button">
          <AiOutlineEdit color="#272733" size={25} />
        </button>
      </div>
      <div className="delete-option">
        <button type="button">
          <AiOutlineDelete color="#272733" size={25} />
        </button>
      </div>
    </EditContent>
  </div>
);
const OptionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {isOpen ? <EditOptions /> : ''}
      <button type="button" className="button" onClick={() => setIsOpen(true)}>
        <p className="dots">...</p>
      </button>
    </Container>
  );
};

export default OptionButton;
