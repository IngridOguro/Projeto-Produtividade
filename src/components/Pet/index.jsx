import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'
import ModalForm from '../ModalForm'
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Pet () {


    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    const criarTarefa = () => {
        setIsModalOpen(true)

    };

    const fecharModal = () => {
        setIsModalOpen(false)
    }

    //com o e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68 = erro 405
    //sem ele: erro 400

    const enviarTarefa = async(novaTarefa) => {
        console.log("tarefa:",novaTarefa);
        
        try {
            const resposta = await fetch('https://sqpets-backend.onrender.com/api/tarefa/',{
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify({
                    nome: novaTarefa.nome,
                    tempo: novaTarefa.tempo,
                    idUsuario: novaTarefa.idUsuario,
                    idCategoria: novaTarefa.idCategoria
                })
            });

            if(resposta.ok) {
                const dados = await resposta.json();
                setTarefas((prev) => [...prev, dados]);
            }
        } catch (err) {
            console.log("Erro ao criar a tarefa:", err);
            
        }
    }

    return (
        <PetContainer>

            <img src={PetImage}/>
            <Botao onClick={criarTarefa} >Criar Tarefa</Botao>
            { isModalOpen && <ModalForm onSubmit={enviarTarefa} onclose={fecharModal} /> }
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