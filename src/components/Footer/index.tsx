import Link from 'next/link';

import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

import {
  Container,
  Menu,
  MenuContainer,
  MenuContent,
  List,
  Info,
  InfoContainer,
  InfoContent,
  SocialMedia,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Menu>
        <MenuContainer>
          <MenuContent>
            <List>
              <li>
                <h4>Instituto Maria da Hora</h4>
              </li>
              <li>
                <Link href="/about">
                  <a>O instituto</a>
                </Link>
              </li>
              <li>A causa</li>
              <li>Nossa fundadora</li>
              <li>Contato</li>
            </List>
            <List>
              <li>
                <h4>Projetos</h4>
              </li>
              <li>
                Projeto Acolhimento Institucional de Crianças e Adolescentes
              </li>
              <li>
                Qualificação de Serviços para População em Situação de Rua
              </li>
              <li>Todos os projetos</li>
            </List>
            <List>
              <li>
                <h4>Transparência</h4>
              </li>
              <li>Política de compliance</li>
              <li>Relatórios de auditoria</li>
              <li>Acordos de cooperação técnica</li>
              <li>Código de ética</li>
            </List>
            <List>
              <li>
                <h4>Veja também</h4>
              </li>
              <li>Blog</li>
              <li>Newsletter</li>
            </List>
          </MenuContent>
        </MenuContainer>
      </Menu>
      <Info>
        <InfoContainer>
          <InfoContent>
            <p>
              @2021 Instituto Maria da Hora 06.750.547/0001-63 <br />
              Rua Cel. Matos Dourado, 397 - Fortaleza, CE - 60.521-063
            </p>
          </InfoContent>
          <SocialMedia>
            <FiFacebook />
            <FiInstagram />
            <FiMail />
          </SocialMedia>
        </InfoContainer>
      </Info>
    </Container>
  );
};

export default Footer;
