import styled from 'styled-components';
import Logo from '../logo'
import Icons from '../icons-modal'
import User from '../../User'
import BotaoTema from '../../BotaoTema'

//AJUSTAR EM 1 ARQUIVO APÓS CRIAÇÃO DO LOGIN.

export default function DesktopHeader () {
    return (
        <DesktopHeaderContainer>
            <Logo/>
            <DesktopHeaderDivEnd>
                <Icons/>
                <BotaoTema />
                <User/>
            </DesktopHeaderDivEnd>
        </DesktopHeaderContainer>
    )
}

const DesktopHeaderContainer = styled.header`
    display: none;

    @media (min-width: 725px) {
        position: relative;
        width: 100vw;
        height: 5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 2.5em;
    }
`

const DesktopHeaderDivEnd = styled.div`
    @media (min-width: 725px) {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
    }
`