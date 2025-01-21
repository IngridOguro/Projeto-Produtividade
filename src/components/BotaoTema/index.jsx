import styled from "styled-components";
import { useTheme } from "../../contexto/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const Tema = styled.button`
        background-color: transparent;
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        border: none;
        color: ${props => props.theme['--details']};
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        display: flex;
        justify-items: center;
        align-items: center;
        :hover {
            transform: scale(1.15);
        }
        :active {
            transform: scale(1.05);
        }
    `

export default function BotaoTema() {
    const { isLightMode, toggleTheme } = useTheme();

    return (
        <>
        <Tema onClick={toggleTheme}>
            {isLightMode ? <BsMoon /> : <BsSun />}
        </Tema>
        </>
    )
}