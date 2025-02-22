
import styled from "styled-components";
import 'animate.css';

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
    height: 50%;
    gap: 20px;
    flex-wrap: wrap-reverse;
`

const LeftContainer = styled.div`
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
    max-width: 1000px;
`

const RightContainer = styled.div`
    display:flex;
    align-items:center;

`

const ImageHistory = styled.img`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 40px;
    box-shadow: 16px 16px 6px #47643e;
`

const InovationContainer = styled.div`
    margin-top: 5%;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`

const TextInovation = styled.p`
        font-size: 1.2rem;
        max-width: 1000px;
        padding: 25px 40px;
        background-color: #47643e6f;
        margin-top: 30px;
        border-radius: 1rem;
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
                        <ImageHistory src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-history/imagem-history.png"/>
                    </RightContainer>
                </InsideWrapperContainer>
                <InovationContainer>
                    <TitleLeft>Inovação e Eficiência no Campo</TitleLeft>
                    <TextInovation>Na AtlasMercantil, oferecemos soluções agrícolas inteligentes e sustentáveis, focadas em transformar os desafios do campo em oportunidades de crescimento. Com tecnologias de ponta, produtos de alta qualidade e um time especializado, garantimos que seus cultivos alcancem o máximo de produtividade e rentabilidade. Confira os benefícios que nossas soluções proporcionam:</TextInovation>
                </InovationContainer>
            </WrapperHistory>
        </SectionContent>
    )
}