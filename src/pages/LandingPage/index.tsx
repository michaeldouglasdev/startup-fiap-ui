import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Container, Header, Wallpaper, WallpaperTitle, WallpaperDescription, ButtonBar, BoxPlansForCandidates, Menu, MenuItem, MenuItemLink, ContactBar, ContactBarComumContacts, ContactBarComumContactsText, ContactBarComumContactsSeparator, ContactBarSocialMedia, BoxPlansForCompanies, BoxPlansForCompaniesTitle, SignInSignUpBox, ContactSectionWrapper, ContactSectionTitle, ContactSectionSubtitle, ContactSectionItemWrapper, ContactSectionItemValue, ContactSectionItemName, ContactSectionFormWrapper, Footer, FooterTitle, FooterIcons, FooterCopyRight } from './styles';
import AssetImage from '../../components/AssetImage';
import VagaCertaLogo from "../../assets/vaga-certa-logo.png";
import { HBox, VSeparator, VBox } from '../../components/Position/styled';
import { FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaGooglePlusG, FaPhoneAlt } from 'react-icons/fa';
import Button from '../../components/Button';
import api from '../../services/api';
import CardAdvantage from '../../components/CardAdvantage';
import { Plan } from '../../models/Plan';
import { MdEmail, MdPlace } from 'react-icons/md';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import TextArea from '../../components/TextArea';
import { useToast } from '../../providers/ToastProvider';
import LoginModal from '../../components/Modals/LoginModal';

const LandingPage: React.FC = () => {

  const [plans, setPlans] = useState<Plan[]>([{} as Plan]);
  const [plansCandidates, setPlansCandidates] = useState<Plan[]>([{} as Plan]);
  const [showSignInSignUpModal, setShowSignInSignUpModal] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  useEffect(() => {
    async function getPlans() {
      setPlans((await api.get("plans")).data.items);
      const planCandidate: Plan = {
        name: "Plano Ilimitado",
        benefits: [
          "100% Gratuito",
          "Plataforma Moderna",
          "Pesquise e se cadastre em diversas vagas",
          "Acompanha as fases de seu processo seletivo",
          "Faça Exames Certificadores",
        ],
        description: '',
        id: 'Teste',
      };

      setPlansCandidates([planCandidate]);

    }

    getPlans();
  }, []);

  const handleLogin = useCallback(() => {
    console.log("handleLogin");

    setShowSignInSignUpModal(true);
  }, []);

  const handleCloseSignInSignUpModal = useCallback(() => {
    setShowSignInSignUpModal(false);
  }, []);

  return (
    <>
      <Container>
        <ContactBar id="home">
          <ContactBarComumContacts>
            <FiPhone />
            <ContactBarComumContactsText>11 0800 6859 4752</ContactBarComumContactsText>
            <ContactBarComumContactsSeparator />
            <FiMail />
            <ContactBarComumContactsText>contato@vagacerta.com.br</ContactBarComumContactsText>
          </ContactBarComumContacts>

          <ContactBarSocialMedia>
            <FiFacebook />
            <FiTwitter />
            <FaGooglePlusG />
            <FiInstagram />
          </ContactBarSocialMedia>
        </ContactBar>
        <Header>
          <AssetImage src={VagaCertaLogo} width="150px"></AssetImage>

          <Menu>
            <MenuItem>
              <MenuItemLink href="#home">Home</MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink href="#candidates">Para Candidatos</MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink href="#company">Para Empresas</MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink href="#contact">Contato</MenuItemLink>
            </MenuItem>
          </Menu>

        </Header>
        <Wallpaper>
          <SignInSignUpBox>
            <Button typeStyle='neutral' outline={true} rounded onClick={handleLogin}>Login</Button>
            <Button typeStyle='neutral' outline={true} rounded>Cadastro</Button>
          </SignInSignUpBox>

          <WallpaperTitle>MELHORES SOLUÇÕES DE RECRUTAMENTO PARA EMPRESAS E CANDIDATOS</WallpaperTitle>
          <WallpaperDescription>Depois me da uma ideia de texto para colocar aqui</WallpaperDescription>

          <VSeparator />

          <ButtonBar>
            <Button typeStyle='neutral' outline={true} rounded>Saiba Mais</Button>
            <Button typeStyle='primary' rounded>Entre em Contato</Button>
          </ButtonBar>
        </Wallpaper>

        {plansCandidates && plansCandidates.length > 0 &&
          <>
            <BoxPlansForCandidates id="candidates">
              <BoxPlansForCompaniesTitle>Para Candidatos</BoxPlansForCompaniesTitle>
              {
                plansCandidates.map((plan, index) => (
                  <CardAdvantage key={index} title={plan.name} description={plan.description} price={plan.price} items={plan.benefits} onTap={() => null}></CardAdvantage>
                ))
              }

            </BoxPlansForCandidates>
          </>
        }
        {plans && plans.length > 0 &&
          <>
            <BoxPlansForCompanies id="company">
              <BoxPlansForCompaniesTitle>Para Empresas</BoxPlansForCompaniesTitle>
              {
                plans.map((plan, index) => (
                  <CardAdvantage key={index} title={plan.name} description={plan.description} price={plan.price} items={plan.benefits} onTap={() => null}></CardAdvantage>

                ))
              }
            </BoxPlansForCompanies>

          </>
        }

        <ContactSectionWrapper id="contact">
          <ContactSectionTitle>
            Entre em Contato
          </ContactSectionTitle>
          <ContactSectionSubtitle>Escreva para nós, vamos trocar algumas idéias!</ContactSectionSubtitle>

          <VSeparator />
          <VSeparator />

          <HBox style={{ width: '60%' }} justifyContent="space-between">
            <ContactSectionItemWrapper>
              <FaPhoneAlt />
              <ContactSectionItemName>Telefone</ContactSectionItemName>
              <ContactSectionItemValue>11 0800 6859 4752</ContactSectionItemValue>
            </ContactSectionItemWrapper>

            <ContactSectionItemWrapper>
              <MdEmail />
              <ContactSectionItemName>E-mail</ContactSectionItemName>
              <ContactSectionItemValue>contato@vagacerta.com.br</ContactSectionItemValue>
            </ContactSectionItemWrapper>

            <ContactSectionItemWrapper>
              <MdPlace />
              <ContactSectionItemName>Localização</ContactSectionItemName>
              <ContactSectionItemValue>Av. Lins de Vasconcelos, 684, Cambucí, São Paulo - SP</ContactSectionItemValue>
            </ContactSectionItemWrapper>
          </HBox>

          <VSeparator />
          <VSeparator />

          <ContactSectionFormWrapper>
            <Form ref={formRef} onSubmit={() => null}>
              <Input name="nameContact" placeholder="Seu nome" transparent />

              <Input name="emailContact" placeholder="Seu nome" transparent />

              <TextArea name="messageContact" placeholder="Sua mensagem" rows={4} transparent />

              <Button type="submit" typeStyle="blue-classic">Enviar Mensagem</Button>
            </Form>

          </ContactSectionFormWrapper>

        </ContactSectionWrapper>

        <Footer>
          <VBox>

            <VBox alignItems="center">
              <FooterTitle>Vaga Certa</FooterTitle>

              <VSeparator />

              <FooterIcons>
                <FiFacebook />
                <FiTwitter />
                <FaGooglePlusG />
                <FiInstagram />
              </FooterIcons>
            </VBox>

            <VSeparator show />

            <FooterCopyRight>
              Vaga Certa © 2020 - Todos os Direitos Reservados.
            </FooterCopyRight>
          </VBox>
        </Footer>
        <LoginModal title="Login" onSubmit={() => null} visible={showSignInSignUpModal} onClose={handleCloseSignInSignUpModal} />
      </Container>
    </>
  )
}

export default LandingPage;