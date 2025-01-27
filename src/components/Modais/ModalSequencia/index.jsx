import trophy from '/imagens-svg/trofeus.svg'
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 85vw;
    max-width: 600px;
    height: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.theme['--fundo-modal']};

    h1 {
        font-weight: 900;
        font-size: 1.5rem;
        text-align: center;
        color: ${props => props.theme['--text-color']};
    }

    strong {
        color: ${props => props.theme['--destaque']};
    }

    @media (min-width: 768px) {
        width: 100%;
        h1 {
            font-size: 2rem;
        }
    }

    @media (min-width: 1024px) {
        width: 40vw;
        h1 {
            font-size: 2.5rem;
        }
    }
`

const WeekContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme['--fundo-modal-dias']};

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`

const WeekDays = styled.p`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 900;
    color: ${props => props.theme['--text-color']};
    background-color: ${(props) => (props.highlight ? props.theme['--destaque'] : props.theme['--fundo-modal'])};
    border-radius: 5px;

    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
        font-size: 0.8rem;
    }

    @media (max-width: 426px) {
        width: 30px;
        height: 30px;
        font-size: 0.7rem;
    }
`

const ModalBottomContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 768px) {
        gap: 2rem;
        align-items: center;
    }
`

const BottomSectionWrapper = styled.div`
    flex: 1;
    text-align: center;

    p {
        font-size: 1rem;
        color: ${props => props.theme['--text-color']};
    }

    strong {
        font-weight: 700;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media (min-width: 768px) {
        p {
            padding: 1rem;
            font-size: 1.2rem;
        }
    }

    @media (min-width: 1440px) {
        p {
            font-size: 1.5rem;
        }
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