import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'

import ModalForm from '../ModalForm'

import { useEffect, useState } from 'react';
import CardTarefa from '../CardTarefa';

// function criarTarefa () {
    
// }

export default function Pet () {

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        const carregarTarefas = async() => {
            try {
                const resposta = await fetch('https://sqpets-backend.onrender.com/api/tarefa/e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68');
                if(resposta.ok) {
                    const dados = await resposta.json();
                    setTarefas(dados);
                }
            } catch(error) {
                console.log(err);
            }
        }

        carregarTarefas();
    },[]);

    const criarTarefa = () => {
        setIsModalOpen(true)

    };

    const fecharModal = () => {
        setIsModalOpen(false)
    }

    const enviarTarefa = async(novaTarefa) => {
        try {
            const resposta = await fetch('https://sqpets-backend.onrender.com/api/tarefa/e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68',{
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(novaTarefa)
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
        <div className='pet_container'>
            <img src={PetImage}/>
            <Botao onClick={criarTarefa} >Criar Tarefa</Botao>
            { isModalOpen && <ModalForm onSubmit={enviarTarefa} onClose={fecharModal} /> }
            <CardTarefa tarefas={tarefas} />
        </div>
    )
}

// axios.post('http://localhost:5175/api/tarefa', {
//     nome: "Lucas 2",
//     tempo: 20,
//     idUsuario: "e1b7f8a6-12e7-4a7e-b6d3-021d676d9a681",
//     idCategoria: "861fd8de-416a-492f-b2fc-82b6bcef6991"
// },{
//     headers: {
//         'Content-Type':'application/json'
//     }
// })
//     .then((resposta) => {
//         console.log(resposta);
//     })
//     .catch((erro) => {
//         console.error('Erro ao criar tarefa:', erro.response?.data || erro.message);
        
//     })