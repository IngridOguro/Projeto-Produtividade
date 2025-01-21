import { Link } from 'react-router-dom';
import sQpetsLogo from '/imagens-svg/sQpets.svg';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Link to="/">
      <LogoImage src={sQpetsLogo} alt="logo" />
    </Link>
  )
}

const LogoImage = styled.img`
  height: 4rem;
  width: 13rem;
  padding: 0.5rem;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`