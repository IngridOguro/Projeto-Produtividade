import styled from 'styled-components';

const BotaoPadrao = styled.button`
    width: 100%;
    max-width: 580px;
    height: 4rem;
    border: 2px solid ${props => props.theme['--button-bg']};
    outline: none;
    border-radius: 10px;
    background-color: ${props => props.theme['--button-bg']};
    font-size: 2.25rem;
    font-weight: bold;
    color: #ffffff;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    &:hover {
        background-color: ${props => props.theme['--button-hover']};
        color: ${props => props.theme['--button-bg']};
        border-color: ${props => props.theme['--button-hover']};
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    @media screen and (max-width: 768px) {
        height: 3rem;
        font-size: 1.5rem;
    }

`

export default function Botao({onClick ,children}) {
    return (
        <BotaoPadrao onClick={onClick}>{children}</BotaoPadrao>
    )
}