import styled from "styled-components"
import Header from "../../components/header"

export default function Usuario()
{
    return(
        <>
            <Header/>
            <P> Pagina de dados do usuário </P>
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