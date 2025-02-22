
import styled from "styled-components";

const SectionContent = styled.section`
        position: relative;
        height: 100vh;
        min-height: 100%;
        width: 100%;
        max-height: 100vh;
        max-width: 100vw;
        background-image: linear-gradient(to bottom, #FDFAF3 0%, #FDFBF4 20%, #FCF8EF 40%, #FBF6E9 100%);
`

const WrapperHistory = styled.div`
    padding-top: 20vh;
    display: flex;
    flex-direction:column;
    height: calc(100vh - 10vh);
    align-items: center;
`

const InsideWrapperContainer = styled.div`
    display:flex;
    justify-content:space-around;
    background-color: red;
    height: 50%;
    gap: 20px;
    flex-wrap: wrap-reverse;
`

const LeftContainer = styled.div`
    background-color:green;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;

`

const TitleLeft = styled.h2`

font-size: 2rem;
`

const TextLeft = styled.p`
    font-size: 1.2rem;
    max-width: 1000px
`

const RightContainer = styled.div`
    background-color:blue;
    display:flex;
    align-items:center;

`

const ImageHistory = styled.img`
    width: 100%;
    height: auto;
    display: block;
`

export default function History(){
    return(
        <SectionContent id="history">
            <WrapperHistory>
                <InsideWrapperContainer>
                    <LeftContainer>
                        <TitleLeft>Nossa Ideologia</TitleLeft>
                        <TextLeft>A AtlasMercantil nasceu com a missão de transformar a agricultura, oferecendo soluções agrícolas personalizadas para maximizar a produtividade e garantir a sustentabilidade no campo. <br />
                                Com tecnologia de ponta, consultoria especializada e suporte contínuo, ajudamos produtores a otimizar processos, reduzir custos e melhorar a gestão agrícola. <br />
                                Nosso compromisso é adaptar cada solução às necessidades específicas de cada cliente, proporcionando resultados concretos e melhorando a qualidade de vida no campo. Estamos presentes em diversas regiões do Brasil, levando inovação e resultados para o agronegócio.</TextLeft>
                    </LeftContainer>
                    <RightContainer>
                        <ImageHistory src="../../../public/images/images-history/imagem-history.png"/>
                    </RightContainer>

                </InsideWrapperContainer>
            </WrapperHistory>
        </SectionContent>
    )
}