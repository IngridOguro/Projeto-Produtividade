import trophy from '/imagens-svg/trofeus.svg'
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 40vw;
    height: 45vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.theme['--fundo-modal']};

    h1 {
        height: auto;
        font-weight: 900;
        font-size: 3vw;
        text-align: center;
        color: ${props => props.theme['--texto-claro']};
    }

    strong {
        color: ${props => props.theme['--destaque']};
    }

    @media (max-width: 1024px) {
        width: 50vw;
        height: 30vh;
    }

    @media (max-width: 847px) {
        width: 80vw;
    }
`

const WeekContainer = styled.div`
    width: 100%;
    height: 25%;
    margin-top: 1rem;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme['--fundo-modal-dias']};
`

const WeekDays = styled.p`
    width: 4vw;
    height: 5vh;
    align-content: center;
    text-align: center;
    font-size: 1.5vw;
    font-weight: 900;
    color: ${props => props.theme['--texto-claro']};
    background-color: ${(props) => (props.highlight ? props.theme['--destaque'] : props.theme['--fundo-modal'])};
    border-radius: 5px;

    @media (max-width: 1024px) {
        height: 4vh;
        font-size: 3vw;
    }
`

const ModalBottomContainer = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 1vw;
    display: flex;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 1024px) {
        gap: 1rem;
    }
`

const BottomSectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 0 1rem;

    p {
        margin: 1rem;
        font-weight: 500;
        font-size: 2vw;
        flex-wrap: wrap;
        color: ${props => props.theme['--texto-claro']};
    }
`

export default function ModalSequencia() {
    return (
        <ModalContainer>
            <h1><strong>1°</strong> dia da sequência</h1>
            <WeekContainer>
                <WeekDays highlight>D</WeekDays>
                <WeekDays>S</WeekDays>
                <WeekDays>T</WeekDays>
                <WeekDays>Q</WeekDays>
                <WeekDays>Q</WeekDays>
                <WeekDays>S</WeekDays>
                <WeekDays>S</WeekDays>
            </WeekContainer>
            <ModalBottomContainer>
                <BottomSectionWrapper>
                    <img src={trophy} alt="troféis" />
                </BottomSectionWrapper>
                <BottomSectionWrapper>
                    <p>Mantenha sua sequência para <strong>ganhar mais recompensas</strong>!</p>
                </BottomSectionWrapper>
            </ModalBottomContainer>
        </ModalContainer>
    )
}