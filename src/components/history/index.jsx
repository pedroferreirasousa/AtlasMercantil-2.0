import styled from "styled-components";
import "animate.css";

const SectionContent = styled.section`
  position: relative;
  height: auto;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-image: linear-gradient(
    to bottom,
    #fdfaf3 0%,
    #fdfbf4 20%,
    #fcf8ef 40%,
    #fbf6e9 100%
  );
`;

const WrapperHistory = styled.div`
  padding: 32px 0;
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  align-items: center;
  justify-content: space-around;
  min-width: 320px;
`;

const InsideWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  flex-flow: row wrap-reverse;
  gap: 24px;
  padding-top: 80px;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  width: 80%;
  min-width: 300px;
  margin: 16px 0;
`;

const TitleLeft = styled.h2`
  font-size: var(--font-size-titulo);
  font-family: var(--font-family-titulo);
  font-weight: 600;
  color: var(--color-darkGreen);
  text-align: center;
`;

const TextLeft = styled.p`
  font-size: var(--font-size-texto);
  width: 100%;
  min-width: 280px;
  line-height: 1.5;
`;

const RightContainer = styled.div`
  height: auto;
  width: 100%;
`;

const ImageHistory = styled.img`
  width: 80%;
  max-width: 450px;
  min-width: 300px;
  height: auto;
  display: block;
  border-radius: 40px;
  box-shadow: 0px 0px 10px #000000;
  margin: 0 auto;

  /* @media (max-width: 1560px) {
    width: 80%;
    box-shadow: 0px 0px 0px;
  } */

  @media (max-width: 890px) {
    width: 70%;
  }
`;

const InovationContainer = styled.div`
  margin: 32px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* @media (max-width: 1560px) {
    width: 90%;
    margin-top: 0%;
  } */
`;

const TextInovation = styled.p`
  font-size: var(--font-size-texto);
  width: 80%;
  min-width: 280px;
  padding: 25px 40px;
  background-color: #47643e6f;
  margin-top: 30px;
  border-radius: 1rem;
  margin-bottom: 20px;
  text-align: center;
`;

export default function History() {
  return (
    <SectionContent id="history">
      <WrapperHistory>
        <InsideWrapperContainer>
          <LeftContainer>
            <TitleLeft>Nossa Ideologia</TitleLeft>
            <TextLeft>
              A AtlasMercantil nasceu com a missão de transformar a agricultura,
              oferecendo soluções agrícolas personalizadas para maximizar a
              produtividade e garantir a sustentabilidade no campo. <br />
              Com tecnologia de ponta, consultoria especializada e suporte
              contínuo, ajudamos produtores a otimizar processos, reduzir custos
              e melhorar a gestão agrícola. <br />
              Nosso compromisso é adaptar cada solução às necessidades
              específicas de cada cliente, proporcionando resultados concretos e
              melhorando a qualidade de vida no campo. Estamos presentes em
              diversas regiões do Brasil, levando inovação e resultados para o
              agronegócio.
            </TextLeft>
          </LeftContainer>
          <RightContainer>
            <ImageHistory src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-history/imagem-history.png" />
          </RightContainer>
        </InsideWrapperContainer>
        <InovationContainer>
          <TitleLeft>Inovação e Eficiência no Campo</TitleLeft>
          <TextInovation>
            Na AtlasMercantil, oferecemos soluções agrícolas inteligentes e
            sustentáveis, focadas em transformar os desafios do campo em
            oportunidades de crescimento. Com tecnologias de ponta, produtos de
            alta qualidade e um time especializado, garantimos que seus cultivos
            alcancem o máximo de produtividade e rentabilidade. Confira os
            benefícios que nossas soluções proporcionam:
          </TextInovation>
        </InovationContainer>
      </WrapperHistory>
    </SectionContent>
  );
}
