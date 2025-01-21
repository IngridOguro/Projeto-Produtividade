import InputCheckbox from "../InputCheckBox";
import styled from 'styled-components';

const TarefaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    border: 3px solid ${(props) => props.theme[props.$cor]}; //recebe a cor da borda via props dinamicamente
    border-radius: 0.625rem;
    padding: 0 1.25rem 0 1.25rem;
    align-items: center;
    @media screen and (max-width: 1024px) {
        height: 70px;
    }
    @media screen and (max-width: 768px) {
        height: 60px;
    }
`
const CheckboxContainer = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme['--details']};
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 1024px){
        font-size: 1.5rem;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
const TarefaCategoria = styled.p`
color: ${(props) => props.theme[props.$cor]};
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    border: none;
    align-items: center;
    @media screen and (max-width: 1024px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
const ContainerTempo = styled(TarefaCategoria)`
    width: fit-content;
`

export default function Tarefa({name, textLabel, tag, tempo, cor}) {
    return (
        <TarefaContainer $cor={cor}>
            <CheckboxContainer> 
                <InputCheckbox type={"checkbox"} id={name} htmlFor={name} textLabel={textLabel}/>
            </CheckboxContainer>
            <TarefaCategoria $cor={cor}>{tag}</TarefaCategoria>
            <ContainerTempo $cor={cor}>{tempo}</ContainerTempo>
        </TarefaContainer>
    )
}