import styled from 'styled-components';

const TituloPadrao = styled.h1`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: var(--fonte);
    font-size: 4rem;
    color: ${props => props.theme['--text-color']};
    font-weight: 500;
`
export default function Titulo({children, cor}){
    return(
        <TituloPadrao>
            {children}
        </TituloPadrao>
    )
}