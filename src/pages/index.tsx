import {
  Navbar,
  Hero,
  ContentSection,
  ContentSlider,
  ContentImpact,
  Footer,
} from '@/components';

import { Container } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />

      <ContentSection
        title="Promover o amparo e desenvolvimento social às crianças, adolescentes e famílias."
        imageURL="/images/content_default.jpg"
        buttons={[
          {
            buttonText: 'Conheça nossa história',
            buttonLink: '/about',
          },
          {
            buttonText: 'Conheça nossa fundadora',
            buttonLink: '/about',
          },
        ]}
        hideImageOnMobile
      />

      <ContentSlider />

      <ContentImpact
        wedo="Um impacto direto na vida de"
        times="2972"
        things="pessoas."
        imageUrl="/images/impact.png"
        numbers={[
          {
            number: '1200+',
            numberColor: '#37c77f',
            numberTitle: 'Crianças e adolescentes',
            numberDescription:
              'Estamos mudando o jogo para milhares de crianças e jovens',
          },
          {
            number: '700+',
            numberColor: '#ffd666',
            numberTitle: 'Idosos',
            numberDescription:
              'Levamos mais qualidade de vida para quem mais precisa.',
          },
          {
            number: '200+',
            numberColor: '#ff669d',
            numberTitle: 'Famílias',
            numberDescription:
              'Acompanhamos o centenas de famílias todos os dias.',
          },
        ]}
      />
      <Footer />
    </Container>
  );
}
