import './modalform.css';

export default function ModalForm({ }) {
    return(
        <>
            <div className='modal-overlay'>
                <div className='form_container'>
                    <form className='form'>
                        <div className='container_tarefa'>
                            <label>Nome da tarefa</label>
                            <input type="text" />
                        </div>
                        <div className='container_tarefa'>
                            <label>categoria</label>
                            <input type="text" />
                        </div>
                        <div className='container_tarefa'>
                            <label>Tag</label>
                            <input type="text" />
                        </div>

                    </form>
                </div>
                
            </div>
        </>
        
        
    )
}