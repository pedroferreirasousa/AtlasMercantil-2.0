import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

// Animações com keyframes
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SectionBenefit = styled.section`
  position: relative;
  height: auto;
  min-height: 100%;
  width: 100%;
  max-width: 100vw;
  background: #000f01ed;
`;

const WrapperBenefit = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`;

const TitleContainer = styled.div`
  max-width: 100%;
`;

const TitleBenefit = styled.h2`
  font-size: var(--font-size-titulo);
  color: #df9f15;
  font-weight: 700;
  text-shadow: 1px 1px 1px #000000c7;
  letter-spacing: 0px;
`;

const ContainerBenefits = styled.div`
  padding-top: 10vh;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 1400px;
  gap: 50px;
`;

const BenefitRightText = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: left;

  @media (max-width: 1133px) {
    text-align: center;
  }
`;

const BenefitLeftText = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  text-align: right;

  @media (max-width: 777px) {
    text-align: center;
  }
`;

const BenefitTextRight = styled.h3`
  width: 50%;
  min-width: 280px;
  line-height: 1.2;
  font-size: clamp(0.875rem, 0.6964rem + 0.8929vw, 1.5rem);
  color: #dedede;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease;
  
  &.slideInLeft {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInFromRight} 1s ease-out forwards;
  }
`;

const BenefitTextLeft = styled.h3`
  width: 50%;
  min-width: 280px;
  line-height: 1.2;
  font-size: clamp(0.875rem, 0.6964rem + 0.8929vw, 1.5rem);
  color: #dedede;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  
  &.slideInLeft {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }
`;

const BenefitImageLeft = styled.img`
  width: 30%;
  min-width: 300px;
  height: auto;
  box-shadow: -16px 16px 6px #df9f15;
  border-radius: 40px;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  
  &.slideInLeft {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }

  @media (max-width: 777px) {
    box-shadow: 0px 0px 10px #df9f15;
  }
`;

const BenefitImageRight = styled.img`
  width: 30%;
  min-width: 300px;
  height: auto;
  box-shadow: 16px 16px 6px #df9f15;
  border-radius: 40px;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease;
  
  &.slideInLeft {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInFromRight} 1s ease-out forwards;
  }

  @media (max-width: 777px) {
    box-shadow: 0px 0px 10px #df9f15;
  }
`;

export default function Benefits() {
  const { ref: textRef1, inView: textInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef1, inView: imageInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef2, inView: textInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef2, inView: imageInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef3, inView: textInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef3, inView: imageInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef4, inView: textInView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef4, inView: imageInView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef5, inView: textInView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef5, inView: imageInView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionBenefit id="benefits">
      <WrapperBenefit>
        <TitleContainer>
          <TitleBenefit>Nossos benefícios</TitleBenefit>
        </TitleContainer>
        <ContainerBenefits>
          <BenefitRightText>
            <BenefitImageLeft
              ref={imageRef1}
              className={imageInView1 ? "slideInLeft" : ""}
              src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-1.png">
            </BenefitImageLeft>

            <BenefitTextRight
              ref={textRef1}
              className={textInView1 ? "slideInLeft" : ""}>
              Aumento da Produtividade: Nossa tecnologia avançada ajuda a
              otimizar o uso de recursos e a melhorar o desempenho das culturas,
              maximizando os resultados e garantindo colheitas mais eficientes.
            </BenefitTextRight>
          </BenefitRightText>

          <BenefitLeftText>
            <BenefitTextLeft
              ref={textRef2}
              className={textInView2 ? "slideInLeft" : ""}>
              Sustentabilidade: Priorizamos práticas agrícolas sustentáveis que
              minimizam o impacto ambiental, promovendo a saúde do solo e a
              preservação dos recursos naturais.
            </BenefitTextLeft>
            <BenefitImageRight
              ref={imageRef2}
              className={imageInView2 ? "slideInLeft" : ""}
              src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-2.png">
            </BenefitImageRight>
          </BenefitLeftText>

          <BenefitRightText>
            <BenefitImageLeft
              ref={imageRef3}
              className={imageInView3 ? "slideInLeft" : ""}
              src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-3.png">
            </BenefitImageLeft>
            <BenefitTextRight
              ref={textRef3}
              className={textInView3 ? "slideInLeft" : ""}>
              Aumento da Produtividade: Nossa tecnologia avançada ajuda a
              otimizar o uso de recursos e a melhorar o desempenho das culturas,
              maximizando os resultados e garantindo colheitas mais eficientes.{" "}
            </BenefitTextRight>
          </BenefitRightText>

          <BenefitLeftText>
            <BenefitTextLeft
              ref={textRef4}
              className={textInView4 ? "slideInLeft" : ""}>
              Sustentabilidade: Priorizamos práticas agrícolas sustentáveis que
              minimizam o impacto ambiental, promovendo a saúde do solo e a
              preservação dos recursos naturais.
            </BenefitTextLeft>
            <BenefitImageRight
              ref={imageRef4}
              className={imageInView4 ? "slideInLeft" : ""}
              src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-4.png">
            </BenefitImageRight>
          </BenefitLeftText>

          <BenefitRightText>
            <BenefitImageLeft
              ref={imageRef5}
              className={imageInView5 ? "slideInLeft" : ""}
              src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-5.png">
            </BenefitImageLeft>
            <BenefitTextRight
              ref={textRef5}
              className={textInView5 ? "slideInLeft" : ""}>
              Suporte Especializado: Nossa equipe de especialistas oferece
              suporte contínuo para garantir que os clientes aproveitem ao máximo
              as tecnologias e práticas implementadas.
            </BenefitTextRight>
          </BenefitRightText>
        </ContainerBenefits>
      </WrapperBenefit>
    </SectionBenefit>
  );
}
