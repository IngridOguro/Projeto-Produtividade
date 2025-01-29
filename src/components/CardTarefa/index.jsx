import styled from "styled-components";
import Botao from "../Botao";
import Tarefa from "../Tarefa";
import ToLink from "../ToLink";
import { useEffect } from "react";
import axios from "axios";

//import './cardTarefa.css';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;    
    height: auto;
    padding: 1.25rem 0 2rem 0;
    border: 4px solid #87C7CF;
    border-radius: 10px;
    background-color: ${props => props.theme['--fundo-modal']};
    box-sizing: border-box;
    text-align: center;
    @media screen and (max-width: 768px) {
        padding: 1rem;
        margin-bottom: 3rem;
    }
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 90%;
    @media screen and (max-width: 1024px) {
        width: 90%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
const TituloCard = styled.h1`
    width: fit-content;
    height: 5rem;
    font-family: var(--fonte);
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 2vh;
    color: ${props => props.theme['--details']};
    @media screen and (max-width: 768px) {
        height: 3rem;
        font-size: 1.5rem;
        font-weight: 500;
    }
`
const ContentTasks = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
`
const Historico = styled.div`
    text-align: right;
    height: 46px;
    font-family: var(--fonte);
    font-weight: 700;
    color: ${props => props.theme['--destaque']};
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`
const CardButton = styled.div`
    padding: 0 2.5rem;
    height: 10%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`


export default function CardTarefa({tarefas}) {

    

    return (
        <CardContainer>
            <CardContent>
            <TituloCard>Tarefas de hoje</TituloCard>
                <ContentTasks>
                    {tarefas.map((tarefa) => (
                        <Tarefa
                            key={tarefa._id}
                            textLabel={tarefa.nome}
                            tag={tarefa.idCategoria}
                            tempo={tarefa.tempo}
                            cor={'--details'}
                        />
                    ))
                    }
                    
                    {/* <Tarefa textLabel={"Curso JS"} name={"tarefa_1"} tag={"programação"} tempo={"01:00"} cor={'--details'}/>
                    <Tarefa textLabel={"Caminhada"} name={"tarefa_2"} tag={"exercício"} tempo={"00:30"} cor={'--destaque'}/>
                    <Tarefa textLabel={"Leitura"} name={"tarefa_3"} tag={"leitura"} tempo={"00:20"} cor={'--roxo-destaque'}/>
                    <Tarefa textLabel={"Limpeza"} name={"tarefa_4"} tag={"casa"} tempo={"00:20"} cor={'--tag-clara'}/> */}
                    
                </ContentTasks>
                <Historico>
                    <ToLink>historico de tarefas</ToLink>
                </Historico>
                <CardButton>
                    <Botao children={'Iniciar Tarefa'}/>
                </CardButton>
            </CardContent>
        </CardContainer>
    )
}

// useEffect((idUser) => {
//     axios.get(`http://localhost:5175/api/tarefa${idUser}`)
//         .then(resposta => {
//             console.log(resposta);
            
//         })
//         .catch(erro => {
//             console.log(erro);
            
//         })
// }, [])