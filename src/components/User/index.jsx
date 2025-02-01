import React, { useState } from 'react';
import userAvatar from '/imagens-svg/user.svg';
import styled from 'styled-components';
import DropdownMenu from '../header/dropdownMenu';

export default function User() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = (iconName) => {
    setActiveModal(iconName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <UserContainer>
      <UserCircleAnimated>
        <UserPhoto>
          <img src={userAvatar} alt="imagem do usuário" onClick={() => handleClick('user')} />
          {activeModal && (
            <>
              <DropdownMenu/>
              <Close onClick={closeModal}></Close>
            </>
          )}
        </UserPhoto>
      </UserCircleAnimated>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  width: 4.7rem;
  height: 4.7rem;
  padding: 0.5rem;
`;

const UserCircleAnimated = styled.div`
  border-radius: 50%;
`;

const UserPhoto = styled.div`
  object-fit: contain;
`;

const Close = styled.span`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`