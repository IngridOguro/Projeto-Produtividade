import { useState } from 'react';
import Modal from '../../header-modal-function';

import task from '/imagens-svg/task.svg';
import sequence from '/imagens-svg/sequencia.svg';
import pet from '/imagens-svg/pet.svg';
import energy from '/imagens-svg/energy.svg';

export default function Icons() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = (iconName) => {
    setActiveModal(iconName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <IconContainer>
      <Icon src={task} alt="icone de tarefas" onClick={() => handleClick('task')} />
      <Icon src={sequence} alt="icone de sequencia" onClick={() => handleClick('sequence')} />
      <Icon src={pet} alt="icone do pet" onClick={() => handleClick('pet')} />
      <Icon src={energy} alt="icone de energia" onClick={() => handleClick('energy')} />

      {activeModal && <Modal iconName={activeModal} closeModal={closeModal} />}
    </IconContainer>
  );
}

import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 0.5vw;

  @media (min-width: 725px) {
    justify-content: end;
    width: 50%;
  }
`;

const Icon = styled.img`
  max-height: 45%;
  cursor: pointer;

  @media (min-width: 725px) {
    width: 3rem;
    height: 40%;
  }
`