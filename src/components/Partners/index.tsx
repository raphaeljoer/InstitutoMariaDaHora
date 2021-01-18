import { useCallback, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { v4 as uuid } from 'uuid';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import {
  Container,
  Content,
  Header,
  Title,
  Nav,
  ArrowButton,
  Borders,
  LogoContainer,
  Logo,
} from './styles';

const Partners = () => {
  const partnersRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = useCallback(() => {
    const logoWidth = partnersRef.current.children[0].clientWidth;
    partnersRef.current.scrollBy(logoWidth, 0);
  }, []);

  const handleScrollLeft = useCallback(() => {
    const logoWidth = partnersRef.current.children[0].clientWidth;
    partnersRef.current.scrollBy(-logoWidth, 0);
  }, []);

  const partnersList = [
    {
      name: 'Prefeitura de Fortaleza',
      imageUrl: '/images/partners/prefeitura.png',
      link: '#',
    },
    {
      name: 'Governo do Estado do Ceará',
      imageUrl: '/images/partners/gov-ce.svg',
      link: '#',
    },
    {
      name: 'SESC',
      imageUrl: '/images/partners/sesc.svg',
      link: '#',
    },
    {
      name: 'Mesa Brasil Sesc',
      imageUrl: '/images/partners/mesabr-sesc.svg',
      link: '#',
    },
    {
      name: 'Mauricio de Nassau',
      imageUrl: '/images/partners/mauricio-de-nassau.svg',
      link: '#',
    },
    {
      name: 'AIESEC',
      imageUrl: '/images/partners/aiesec.svg',
      link: '#',
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <Title>
            <span>São dezenas de parceiros, conheça alguns:</span>
          </Title>
          <Nav>
            <ArrowButton onClick={handleScrollLeft}>
              <IoIosArrowBack size={32} />
            </ArrowButton>

            <ArrowButton onClick={handleScrollRight}>
              <IoIosArrowForward size={32} />
            </ArrowButton>
          </Nav>
        </Header>

        <Borders>
          <LogoContainer ref={partnersRef}>
            {partnersList.map(({ name, imageUrl, link }) => (
              <Link key={uuid()} href={link}>
                <a>
                  <Logo>
                    <Image
                      src={imageUrl}
                      alt={name}
                      layout="fill"
                      objectFit="contain"
                      className="partnerLogo"
                    />
                  </Logo>
                </a>
              </Link>
            ))}
          </LogoContainer>
        </Borders>
      </Content>
    </Container>
  );
};

export default Partners;
