import styled from "styled-components";

const SectionDepoiments = styled.section`
    height: auto;
    background-color: #000000f9;
`

const WrapperDepoiments = styled.div`
    padding-top: 15vh;
    padding-bottom: 15vh;
    display: flex;
    flex-direction:column;
    align-items: center;
`

const TitleContainer = styled.div`
    max-width: 1000px;
`

const TitleDepoiments = styled.h2`
    font-size: 1.8rem;
    color: #dedede;
    font-weight: 700;
    text-shadow: 1px 1px 1px #000000c5;
    letter-spacing: 1px;
    position: relative;
`

const DepoimentsContainer = styled.div`
    padding: 5vh 20px;
    margin-top: 5vh;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    width: 80%;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`



const Depoiment = styled.div`
  min-width: 300px;
  max-width: 300px;
  padding: 20px;
  margin: 0 10px;
  background-color: #d1d0d0;
  border: 4px solid #cfae68;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  flex-shrink: 0;
  scroll-snap-align: start; 
  justify-content: center;

    &:hover{
        scale: 1.05;
  }
`

const DepoimentImage = styled.img`
    width:125px;
    height: auto;
    border-radius: 4rem;
`
const DepoimentText = styled.p`
    padding-top: 20px;
    font-weight: 600;
`
const DepoimentPeople = styled.p`
    padding-top: 20px;
    font-size: 12px;
`

export default function Depoiments(){
    return(
        <SectionDepoiments id="depoiments">
                <WrapperDepoiments>
                    <TitleContainer>
                        <TitleDepoiments>O que nossos clientes dizem</TitleDepoiments>
                    </TitleContainer>
                    <DepoimentsContainer draggable="true">
                        <Depoiment>
                            <DepoimentImage src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-depoiment/depoiment-profile-1.png"></DepoimentImage>
                            <DepoimentText>A AtlasMercantil transformou a produtividade da nossa fazenda. Graças às soluções inovadoras, conseguimos aumentar nossa colheita de maneira eficiente e sustentável. A equipe técnica nos apoiou em cada etapa, tornando nossa operação mais rentável e consciente ambientalmente. </DepoimentText>
                            <DepoimentPeople>João Pereira, Proprietário da Fazenda Boa Vista</DepoimentPeople>
                        </Depoiment>


                        <Depoiment>
                            <DepoimentImage src= "https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-depoiment/depoiment-profile-2.png"></DepoimentImage>
                            <DepoimentText> A AtlasMercantil transformou a produtividade da nossa fazenda. Graças às soluções inovadoras, conseguimos aumentar nossa colheita de maneira eficiente e sustentável. A equipe técnica nos apoiou em cada etapa, tornando nossa operação mais rentável e consciente ambientalmente. </DepoimentText>
                            <DepoimentPeople>Maria Souza, Gerente de Produção na AgroSul</DepoimentPeople>
                        </Depoiment>


                        <Depoiment>
                            <DepoimentImage src="https://pedroferreirasousa.github.io/AtlasMercantil-2.0/images/images-depoiment/depoiment-profile-3.png"></DepoimentImage>
                            <DepoimentText> A parceria com a estabelecida com a Atlas foi fundamental para alcançar nossos objetivos. Além de melhorarmos nossos resultados financeiros, agora podemos praticar uma agricultura mais sustentável, o que é essencial para o futuro da nossa fazenda. </DepoimentText>
                            <DepoimentPeople>Carlos Mendes, Diretor da AgriTech Solutions</DepoimentPeople>
                        </Depoiment>

                    </DepoimentsContainer>
                </WrapperDepoiments>
        </SectionDepoiments>
    )
}