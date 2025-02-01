import styled from "styled-components";
import Botao from "../Botao";
import Tarefa from "../Tarefa";
import ToLink from "../ToLink";
import { useEffect, useState } from "react";
import axios from "axios";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;    
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
    overflow: scroll;
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

export default function CardTarefa({}) {

    const [tarefas, seTarefas] = useState([]);

    useEffect(() => {
        const carregarTarefas = async() => {
            try {
                const resposta = await fetch(`https://sqpets-backend.onrender.com/api/tarefa/e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68`);
                if(resposta.ok) {
                    const dados = await resposta.json();
                    seTarefas(dados.data);
                }
            } catch(error) {
                console.log(error);
            }
        }

        carregarTarefas();
    },[]);
    
    return (
        <CardContainer>
            <CardContent>
            <TituloCard>Tarefas de hoje</TituloCard>
                <ContentTasks>
                    
                    {tarefas.length > 0 ? (tarefas.map((tarefa) => (
                        <Tarefa
                            key={tarefa.idTarefa}
                            textLabel={tarefa.nome}
                            tag={tarefa.categoria}
                            tempo={tarefa.tempo}
                            cor={'--details'}
                        />
                    ))) : (
                        <p>Sem tarefas cadastradas</p>
                    )
                    }
                    
                    
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
