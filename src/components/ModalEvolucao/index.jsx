import Evolucao1 from '/imagens-svg/evolucao1.svg';
import Evolucao2 from '/imagens-svg/evolucao2.svg';
import Evolucao3 from '/imagens-svg/evolucao3.svg';
import Evolucao4 from '/imagens-svg/evolucao4.svg';
import styled from "styled-components";
const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vh;
    width: 39vw;    
    height: auto;
    border-radius: 15px; 
    text-align: center;
    background-color: ${props => props.theme['--fundo-modal']};

    @media (max-width: 1023px) {
    width: 60vw;
    height: 30vh;
  }
    @media (max-width: 847px) {
    width: 80vw;
    height: auto;
  }
`
const TituloModal = styled.p`
    color: ${props => props.theme['--details']};
    font-size: 4vw;
    padding:1vh;
`
const EvolucaoContainer = styled.div`
    padding: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
          & > * {
    align-self: end;
    }
`
const Evolucao1Img = styled.div`
        width: 70%;
        height: auto;
`
const Evolucao2Img = styled.div`
        width: 80%;
        height: auto;
`
const Evolucao3Img = styled.div`
        width: 90%;
        height: auto;
`
const Evolucao4Img = styled.div`
        width: 100%;
        height: auto;
`

export default function ModalEvolucao() {
    return (
        <ModalContainer>
            <TituloModal>Evolua seu pet!</TituloModal>
            <EvolucaoContainer>
                <Evolucao1Img>
                    <img src={Evolucao1}/>
                </Evolucao1Img>
                <Evolucao2Img>
                    <img src={Evolucao2}/>
                </Evolucao2Img>
                <Evolucao3Img>
                    <img src={Evolucao3}/>
                </Evolucao3Img>
                <Evolucao4Img>
                    <img src={Evolucao4}/>
                </Evolucao4Img>
            </EvolucaoContainer>
        </ModalContainer>
    )
}