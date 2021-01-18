import {
  Navbar,
  Hero,
  ContentSlider,
  ContentDataImpact,
  Partners,
  Footer,
} from '@/components';

import { Container } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero
        imageUrl="/images/boy-hero.png"
        title="Amar é um ato de coragem"
        description="Uma missão em que você pode acreditar. Pessoas em que você pode confiar."
        button={{ text: 'Seja um voluntário', link: '#' }}
      />

      <ContentSlider />

      <ContentDataImpact
        upTitle="Proposta de valor"
        title="Transformamos a realidade de vidas em situação de vunerabilidade."
        status="2972 vidas"
        statusDescription="já foram impactadas com nossos projetos sociais."
        ctaTitle="O que nos faz únicos?"
        ctaDescription="Somos autênticos, simples, transparêntes e confiáveis, ajudando as pessoas a reencontrarem o caminho."
        numbers={[
          {
            color: '#37C77F',
            number: '1200+',
            title: 'Crianças e adolescentes',
            description:
              'Estamos mudando o jogo para milhares de crianças e jovens.',
          },
          {
            color: '#FFD666',
            number: '700+',
            title: 'Idosos',
            description:
              'Levamos mais qualidade de vida para quem mais precisa.',
          },
          {
            color: '#FF669D',
            number: '200+',
            title: 'Famílias',
            description: 'Acompanhamos centenas de famílias todos os dias.',
          },
          {
            color: '#15C3D6',
            number: '16',
            title: 'Projetos simultâneos',
            description: 'Impactamos realidades espalhadas por todo o estado.',
          },
        ]}
      />

      <Partners />

      <Footer />
    </Container>
  );
}
