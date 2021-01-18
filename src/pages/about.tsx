import { Container } from '@/styles/pages/About';
import {
  Navbar,
  HeroContent,
  ContentAbout,
  Partners,
  Gallery,
  Footer,
  ContentDataImpact,
} from '@/components';

const About = () => {
  return (
    <Container>
      <Navbar initialSticky={false} themeBackground="opaque" />

      <HeroContent />

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

      <ContentAbout />

      <Gallery />

      <Partners />

      {/* <ContentSection
        title="O Instituto"
        description="Atuamos há 50 anos dentro de estratégia de rede, em periferias e favelas. Nossos projetos estão focados em inclusão e proteção social para crianças, adolescentes e idosos, sendo um ponto de apoio às pessoas vulneráveis."
        imageURL="/images/o_instituto.jpg"
        imageHeight={{ min: '32rem', speed: '7vw', max: '56rem' }}
        isHero
      />

      <ContentSection
        title="Missão"
        description="Promover amparo e desenvolvimento social às crianças, adolescentes e família que vivem em situação de risco e vunerabilidade social para que estas sejam reinseridas num contexto social digno.."
        imageURL="/images/missao.jpg"
        invertPosition
      />

      <ContentSection
        title="Visão"
        description="Ser um referencial de excelência na prestação de serviços de educação, assistência social, saúde, cultura, esporte e lazer para crianças, adolescentes e famílias, garantindo um desenvolvimento eficiente de inclusão social no estado do Ceará."
        imageURL="/images/visao.jpg"
      />

      <ContentSection
        title="Uma história de amor, coragem e perseverança."
        imageURL="/images/fundadora_maria_da_hora.jpg"
        invertPosition
        buttons={[
          {
            buttonText: 'Conheça nossa história',
            buttonLink: '#',
          },
        ]}
      />

      <ContentSection
        title="Governança, comitês e Equipe."
        imageURL="/images/equipe.jpg"
        buttons={[
          {
            buttonText: 'Conheça nossa equipe',
            buttonLink: '#',
          },
        ]}
      />

      <ContentSection
        title="Projetos que transformam realidades."
        imageURL="/images/projetos.jpg"
        invertPosition
        buttons={[
          {
            buttonText: 'Conheça nossos projetos',
            buttonLink: '/projetos',
          },
        ]}
      /> */}

      <Footer />
    </Container>
  );
};

export default About;
