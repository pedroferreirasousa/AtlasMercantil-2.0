import styled from "styled-components";

const Section = styled.section`

    height: 100vh;
    min-height: 100vh;
    background-color: black;
    display:flex;

    img{
        height: 100%;
        width: 100%;
        opacity: 0.3;
        object-fit: cover;
        z-index: 0;
        position: fixed;
    }

`
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TitleDiv = styled.div`
    width: 60%;
    display: flex;
    align-items:center;
    flex-direction: column;


`

const TitleH1 = styled.h1`
    font-size: 2rem;
    color: #dedede;
    letter-spacing: 1px;
`

const SubTitle = styled.h2`
    font-size: 1.3rem;
    margin-top: 20px;
    color: #dedede;
    letter-spacing: 1px;

`

const BtnContato = styled.a`
    padding: 15px 60px;
    border: 1px solid #df9f15;
    border-radius: 10px;
    color: #dedede;
    cursor: pointer;
    margin-top: 20px;
    text-decoration: none;

    &:hover{
        scale: 0.9;

    }
    
`


export default function Home(){
    return   (
        <Section id="home">
            <img src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/Background AtlasMercantil.jpg" alt="Imagem de background" />
            <Wrapper>
            <TitleDiv>
                <TitleH1>Potencialize sua produção <br /> com nossas soluções agrícolas.</TitleH1>
                <SubTitle>Conectando Oportunidades no Mercado de Grãos</SubTitle>
                <BtnContato href="#">ENTRAR EM CONTATO</BtnContato> 
            </TitleDiv>
            </Wrapper>
        </Section>
    )
}