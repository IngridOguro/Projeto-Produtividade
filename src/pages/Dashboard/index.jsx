import Header from "../../components/header";
import CardTarefa from "../../components/CardTarefa";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    align-items: center;
`

export default function Dashboard() {
    return (
        <>
        <Header/>
        <Main>
        <CardTarefa />
        </Main>
        </>
    )
}