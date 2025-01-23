import trophy from '/imagens-svg/trofeus.svg'
import styled from 'styled-components';

const ModalContainer = styled.div`
    padding: 1rem;
    border-radius: 15px;
    background-color: ${props => props.theme['--fundo-modal']};
`

const ModalContent = styled.div`
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 900;
        font-size: 1.5rem;
        text-align: center;
        color: ${props => props.theme['--texto-claro']};
    }

    strong {
        color: ${props => props.theme['--destaque']};
    }
`

const WeekContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme['--fundo-modal-dias']};
`

const WeekDays = styled.p`
    width: 2.5rem;
    height: 2.5rem;
    align-content: center;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme['--texto-claro']};
    background-color: ${(props) => (props.highlight ? props.theme['--destaque'] : props.theme['--fundo-modal'])};
    border-radius: 5px;
`

const ModalBottomSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
`

const BottomSectionImg = styled.div`
    width: 15rem;
    height: 15rem;
    padding: 1rem 1rem 0 1rem;

    img {
        width: 90%;
        height: 90%;
    }
`

const BottomSectionText = styled.div`
    width: 15rem;
    height: 15rem;
    padding: 1rem 1rem 0 1rem;

    p {
        width: 100%;
        height: 100%;
        margin: 1rem;
        font-weight: 500;
        font-size: 1.5rem;
        flex-wrap: wrap;
        color: ${props => props.theme['--texto-claro']};
    }
`

export default function ModalSequencia() {
    return (
        <ModalContainer>
            <ModalContent>
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
                <ModalBottomSection>
                    <BottomSectionImg>
                        <img src={trophy} alt="troféis" />
                    </BottomSectionImg>
                    <BottomSectionText>
                        <p>Mantenha sua sequência para <strong>ganhar mais recompensas</strong>!</p>
                    </BottomSectionText>
                </ModalBottomSection>
            </ModalContent>
        </ModalContainer>
    )
}