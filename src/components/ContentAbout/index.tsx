import Image from 'next/image';

import { Button } from 'components';

import {
  Section,
  Container,
  About,
  Depoinment,
  Media,
  Quote,
  QuoteMedia,
} from './styles';

const ContentAbout = () => {
  return (
    <Section>
      <Container>
        <About>
          <h2>Quem somos</h2>
          <p>
            Desenvolvemos há 50 anos o amparo e a inclusão social em periferias
            e favelas. Nossos projetos estão focados na transformação das
            multiplas realidades de crianças, adolescentes e idosos em situação
            de vulnerabilidades.
          </p>
          <Button link="/">Conheça nossa história</Button>
        </About>

        <Depoinment>
          <Media>
            <Image
              src="/images/project-01.jpg"
              alt="Projeto Maria da Hora"
              layout="fill"
              objectFit="cover"
            />
          </Media>

          <Quote>
            <QuoteMedia>
              <Image
                src="/images/avatar-maria-da-hora.jpg"
                alt="Maria da Hora"
                layout="fill"
                className="avatar"
              />

              <Image
                src="/images/quote.svg"
                alt="quote"
                layout="fixed"
                width={20}
                height={20}
              />
            </QuoteMedia>

            <p>Amar é um ato de coragem</p>
            <strong>Maria da Hora</strong>
            <span>Fundadora</span>
          </Quote>
        </Depoinment>
      </Container>
    </Section>
  );
};

export default ContentAbout;
