import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'

import ModalForm from '../ModalForm'

import { useState } from 'react';

// function criarTarefa () {
    
// }

export default function Pet () {

    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const criarTarefa = () => {
        setIsModalOpen(true)

    };

    const fecharModal = () => {
        setIsModalOpen(false)
    }


    return (
        <div className='pet_container'>
            <img src={PetImage}/>
            <Botao onClick={criarTarefa} >Criar Tarefa</Botao>
            { isModalOpen && <ModalForm onClose={fecharModal} /> }
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