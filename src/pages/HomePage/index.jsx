import Header from "../../components/header"
import CardTarefa from "../../components/CardTarefa";
import Pet from "../../components/Pet";
import styled from "styled-components";

const Section = styled.section`
    padding: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 85vh;
    @media screen and (max-width: 1024px){
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding: 1.5rem;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem;
        height: auto;
    }
`

export default function HomePage() {

    // const AsideImg = AsideImagem();

    return (
        <>
            <Header/>
            <Section>
                <CardTarefa />
                <Pet/>
            </Section>
        </>
    )
    
}