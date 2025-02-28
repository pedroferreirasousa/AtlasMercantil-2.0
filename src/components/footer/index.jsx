import styled from "styled-components";

const SectionFooter = styled.section`
    height: 10vh;
    background-color: #dedededc;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterInfo = styled.p`
    text-align: center;
    line-height: 1.5;

    & a{
        text-decoration: none;
        color: #000;
    }
`

export default function Footer(){
    return(
        <SectionFooter>
            <FooterInfo>Copyright © 2025 AtlasMercantil. Todos os direitos reservados.  <br />   Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/pedro-ferreira-936b3624a/">Pedro Ferreira</a></FooterInfo>
        </SectionFooter>
    )
}