import styled from 'styled-components'
import Logo from '../logo'
import User from '../../User'
import Icons from '../icons-modal'
import BotaoTema from '../../BotaoTema'

//AJUSTAR EM 1 ARQUIVO APÓS CRIAÇÃO DO LOGIN.

export default function MobileHeader () {

    return (
        <>

            <HeaderMobileDiv>
                <Logo/>
                <BotaoTema />
                <User/>
            </HeaderMobileDiv>

            <HeaderMobileAbsolute>
                <Icons/>
            </HeaderMobileAbsolute>
        
        </>
    )
}

const HeaderMobileDiv = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 5rem;
    justify-content: space-between;
    padding: 0.6rem;

@media(min-width: 725px) {
    display: none;
}
`

const HeaderMobileAbsolute = styled.div`
    position: fixed;
    bottom: 0;
    height: 3.7rem;
    background-color: var(--bg-color-dark);
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.2);

@media(min-width: 725px) {
    display: none;
}

`