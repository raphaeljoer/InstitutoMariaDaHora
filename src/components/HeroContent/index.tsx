import Image from 'next/image';

import { Container, Content, Title, Media, Scroll, Menu } from './styles';

const HeroContent = () => {
  return (
    <Container>
      <Content>
        <Title>
          <span>Quem somos</span>
          <h1>Conheça o instituto</h1>
        </Title>
        <Media>
          <Image
            src="/images/o_instituto.jpg"
            alt="o instito"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Media>
      </Content>

      <Menu>
        <h3>Impacto</h3>
        <span />
        <h3>Quem somos</h3>
        <span />
        <h3>Trabalhe conosco</h3>
        <span />
        <h3>Parceiros</h3>
        <span />
        <h3>Contato</h3>
      </Menu>

      <Scroll>
        <Image
          key="/images/scroll.svg"
          src="/images/scroll.svg"
          alt="shape"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Scroll>
    </Container>
  );
};

export default HeroContent;
