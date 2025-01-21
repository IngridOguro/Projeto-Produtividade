import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  @media (min-width: 725px) {
    top: 5rem;
    right: 0;
    justify-content: center;
  }
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0.25rem;
  width: 340px;
  height: 240px;
  margin-bottom: 14rem;


  @media (min-width: 725px) {
    width: 400px;
    height: 280px;
  }
`;

export default function Modal({ iconName, closeModal }) {
    const getContent = () => {
        switch (iconName) {
            case 'task':
                return <p>Conteúdo do modal de tarefas</p>;
            case 'sequence':
                return <ModalSequencia />;
            case 'pet':
                return <p>Conteúdo do modal do pet</p>;
            case 'energy':
                return <p>Conteúdo do modal de energia</p>;
        }
    };

    return (
        <ModalOverlay onClick={closeModal}>
            <ModalContent className="close" onClick={(evento) => evento.stopPropagation()}>
                {getContent()}
            </ModalContent>
        </ModalOverlay>
    );
}