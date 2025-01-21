import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import styled from 'styled-components';
import { createTarefas } from '../../Services/api';


function criarTarefa () {
    const novaTarefa = { nome: "abubaba" };
    createTarefas(novaTarefa)
        .then(resposta => {
            console.log("Sucesso", resposta.data);
            
        })
        .catch(erro => {
            console.log("erro ao criar a tarefa:", erro);
            
        });
}
export default function Pet () {

    return (
        <PetContainer>

            <img src={PetImage}/>
            <Botao onClick={criarTarefa}>Criar Tarefa</Botao>
        
        </PetContainer>
    )
}

const PetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;

    img {
        max-width: 70%;
        height: 80%;
    }
`