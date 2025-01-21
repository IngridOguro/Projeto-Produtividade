import styled from "styled-components"
import Header from "../../components/header"

export default function Historico()
{
    return(
        <>
            <Header/>
            <P> Pagina pra Histórico das tarefas </P>
        </>
    )
}

const P = styled.p`
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`