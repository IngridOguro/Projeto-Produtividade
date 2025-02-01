import styled from "styled-components"
import Header from "../../components/header"

export default function Sobre()
{
    return(
        <>
            <Header/>
            <P> Pagina para info dos devs </P>
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