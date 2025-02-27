import styled from "styled-components";

const SectionContact = styled.section`
  height: 90vh;
  background-color: #000f01ed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperContact = styled.div`
  width: 95%;
  max-width: 1500px;
  height: 60%;
  margin-top: 10vh;
  position: relative;
  border-radius: 2rem;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  letter-spacing: 1px;
  color: #dedede;
  justify-content: space-around;
`;

const DivContactTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DivContactBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactTitle = styled.h2`
  font-size: var(--font-size-titulo);
  font-weight: 600;
`;

const ContactSubTitle = styled.h3`
  font-size: var(--font-size-texto);
  font-weight: 400;
  max-width: 1000px;
  text-align: center;
  line-height: 1.5;
  width: 60%;
  min-width: 300px;
`;

const ContactTalk = styled.h4`
  font-size: var(--font-size-titulo);
  font-weight: 700;
`;

const DivContacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const EmailContact = styled.p`
  padding-bottom: 1vh;
  font-size: var(--font-size-texto);
`;

const NumberContact = styled.p`
  padding-bottom: 2vh;
  font-size: var(--font-size-texto);
`;

const ButtonContact = styled.a`
  cursor: pointer;
  padding: 15px 60px;
  border: 1px solid #df9f15;
  font-size: var(--font-size-texto);
  border-radius: 10px;
  color: #dedede;
  text-decoration: none;

  &:hover {
    scale: 0.9;
  }
`;

export default function Contact() {
  return (
    <SectionContact id="contact">
      <WrapperContact>
        <DivContactTop>
          <ContactTitle>Entre em Contato Conosco!</ContactTitle>
          <ContactSubTitle>
            Estamos aqui para ajudar você a transformar a sua produção agrícola
            com soluções inovadoras e eficazes. Se você tem dúvidas, precisa de
            mais informações sobre nossos produtos ou serviços, ou deseja
            discutir como podemos atender às suas necessidades específicas,
            nossa equipe está pronta para lhe oferecer o suporte necessário.
          </ContactSubTitle>
        </DivContactTop>
        <DivContactBottom>
          <ContactTalk>Fale Conosco:</ContactTalk>
          <DivContacts>
            <EmailContact>E-mail: contato@atlasmercantil.com</EmailContact>
            <NumberContact>Telefone: 34 99298-1963</NumberContact>
            <ButtonContact href="http://wa.me/5534992981863?text=Olá, Estou entrando em contato e gostaria de marcar uma reunião e falar sobre Soluções Agrícola para meu negocio.">
              Entrar em contato via whatsApp
            </ButtonContact>
          </DivContacts>
        </DivContactBottom>
      </WrapperContact>
    </SectionContact>
  );
}
