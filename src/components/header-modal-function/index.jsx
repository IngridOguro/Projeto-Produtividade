import React from 'react';
import styled from 'styled-components';
import ModalEvolucao from '../ModalEvolucao';
import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 0% { top: -30%;}
100% { top: 0%; }
`

const ModalOverlay = styled.div`
  position: fixed;
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  padding-right: 5vw;

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
  margin-bottom: 14rem;
  width:auto;
  height:auto;
  border-radius: 15px; 
  animation-name: ${breatheAnimation};
 animation-duration: 0.5s;
  `;

export default function Modal({ iconName, closeModal }) {
    const getContent = () => {
        switch (iconName) {
            case 'task':
                return <p>Conteúdo do modal de tarefas</p>;
            case 'sequence':
                return <p>Conteúdo do modal de sequência</p>;
            case 'pet':
                return <ModalEvolucao></ModalEvolucao>;
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