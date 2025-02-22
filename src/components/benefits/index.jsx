import styled from "styled-components";

const SectionBenefit = styled.section`
        position: relative;
        height: auto;
        min-height: 100%;
        width: 100%;
        max-width: 100vw;
        background: #000f01ed;
`

const WrapperBenefit = styled.div`
    padding-top: 15vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-bottom: 10vh;
    `

const TitleContainer = styled.div`
    max-width: 1000px;
`

const TitleBenefit = styled.h2`
    font-size: 1.8rem;
    color: #df9f15;
    font-weight: 700;
    text-shadow: 1px 1px 1px #000000c7;
    letter-spacing: 1px;
`

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
`

const BenefitRightText = styled.div`
    display: flex;
    gap: 20px;
    align-items:center;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align:left;
`
const BenefitLeftText = styled.div`
    display: flex;
    gap: 20px;
    align-items:center;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    text-align: right;
`

const BenefitText = styled.h3`
    max-width: 600px;
    font-size: 1.5rem;
    color: #dedede;
    text-shadow: 0px 0px 5px #df9f15;
`

const BenefitImageLeft = styled.img`
    width: 400px;
    height: auto;
    box-shadow: 0px 0px 15px #df9f15;
    border-radius: 40px;
`

const BefefitImageRight = styled.img`
    width: 400px;
    height: auto;
    box-shadow: 0px 0px 10px #df9f15;
    border-radius: 40px;
`




export default function Benefits(){
    return (
        <SectionBenefit id="benefits">
            <WrapperBenefit>
                <TitleContainer>
                    <TitleBenefit>Beneficios que nós da AtlasMercantil podemos te proporcionar</TitleBenefit>
                </TitleContainer>
                <ContainerBenefits>

                    <BenefitRightText>
                        <BenefitImageLeft src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-1.png"></BenefitImageLeft>
                        <BenefitText>Aumento da Produtividade: Nossa tecnologia avançada ajuda a otimizar o uso de recursos e a melhorar o desempenho das culturas, maximizando os resultados e garantindo colheitas mais eficientes. </BenefitText>
                    </BenefitRightText>

                    <BenefitLeftText>                        
                        <BenefitText>Sustentabilidade: Priorizamos práticas agrícolas sustentáveis que minimizam o impacto ambiental, promovendo a saúde do solo e a preservação dos recursos naturais.</BenefitText>
                        <BefefitImageRight src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-2.png"></BefefitImageRight>
                    </BenefitLeftText>


                    <BenefitRightText>
                        <BenefitImageLeft src="public/images/images-benefits/benefit-3.png"></BenefitImageLeft>
                        <BenefitText>Aumento da Produtividade: Nossa tecnologia avançada ajuda a otimizar o uso de recursos e a melhorar o desempenho das culturas, maximizando os resultados e garantindo colheitas mais eficientes. </BenefitText>
                    </BenefitRightText>

                    
                    <BenefitLeftText>                        
                        <BenefitText>Sustentabilidade: Priorizamos práticas agrícolas sustentáveis que minimizam o impacto ambiental, promovendo a saúde do solo e a preservação dos recursos naturais.</BenefitText>
                        <BefefitImageRight src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-4.png"></BefefitImageRight>
                    </BenefitLeftText>

                    <BenefitRightText>
                        <BenefitImageLeft src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-benefits/benefit-5.png"></BenefitImageLeft>
                        <BenefitText>Suporte Especializado: Contamos com uma equipe técnica pronta para fornecer suporte contínuo e consultoria personalizada, ajudando a resolver desafios específicos e garantir o sucesso do seu negócio.</BenefitText>
                    </BenefitRightText>







                </ContainerBenefits>
            </WrapperBenefit>
        </SectionBenefit>
    )
} 