import { useState } from 'react';
import Botao from '../Botao';
import './modalform.css';

export default function ModalForm({ onSubmit, onclose }) {

    const [nome, setNome] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [tempo, setTempo] = useState('');
    const [idUsuario, setIdUsuario] = useState('e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68');

    const controlarSubmissao = (e) => {
        e.preventDefault();
        onSubmit({ nome, tempo: Number(tempo), idUsuario, idCategoria });
        onclose();
    }


    return(
        <>
            <div className='modal-overlay'>
                <div className='form_container'>
                    <form onSubmit={controlarSubmissao} className='form'>
                        <div className='container_tarefa'>
                            <label>Nome da tarefa</label>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
                        </div>
                        <div className='container_tarefa'>
                            <label>categoria</label>
                            <input type="text" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)} />
                        </div>
                        <div className='container_tarefa'>
                            <label>Tempo (minutos)</label>
                            <input type="number" value={tempo} onChange={(e) => setTempo(e.target.value)} />
                        </div>

                        <button type='submit'>Criar tarefa</button>

                    </form>
                </div>
                
            </div>
        </>
        
        
    )
}