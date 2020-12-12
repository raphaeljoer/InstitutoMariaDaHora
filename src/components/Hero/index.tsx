import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Container, Content, Info, Media } from './styles';

const Hero = () => {
  return (
    <Container>
      <Content>
        <Info>
          <h1>Amar é um ato de coragem.</h1>
          <p>
            Uma missão em que você pode acreditar. Pessoas em que você pode
            confiar.
          </p>
          <Link href="/about" passHref>
            <a>Conheça</a>
          </Link>
        </Info>
        <Media>
          <Image
            key="/images/main.jpg"
            src="/images/main.jpg"
            layout="fill"
            alt="Instituto Maria da Hora"
            objectFit="cover"
            quality={50}
            priority
          />
        </Media>
      </Content>
    </Container>
  );
};

export default Hero;
