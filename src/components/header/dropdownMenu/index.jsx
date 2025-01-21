import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function DropdownMenu() {

  return (
    <>
      <ModalUser>
        <ModalUserList>
          <MenuItem>
            <StyledLink to="/Cadastro"> Usuario </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/historico"> Histórico </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/sobre"> Sobre </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/logout"> Sair </StyledLink>
          </MenuItem>
        </ModalUserList>
      </ModalUser>
    </>
  );
}

const ModalUser = styled.div`
  position: relative;
  background-color: #e4e4e4;
  border-radius: 0.25rem;
  width: 120px;
  height: 200px;
  top: 0.5rem;
  right: 3rem;
  z-index: 2;
`;

const ModalUserList = styled.ul`
  font-size: 1.2rem;
  display: grid;
  grid-column: 1fr;
  justify-content: center;
  padding: 0.5em;
  font-family: var(--fonte);
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Close = styled.span`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;