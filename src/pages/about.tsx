import { Container } from '@/styles/pages/About';
import {
  Navbar,
  ContentSection,
  ContentImpact,
  ContentFullSection,
  Footer,
} from '@/components';
import Theme from '@/styles/themes/light';

const About = () => {
  return (
    <Container>
      <Navbar />

      <ContentSection
        title="O Instituto"
        description="Atuamos há 50 anos dentro de estratégia de rede, em periferias e favelas. Nossos projetos estão focados em inclusão e proteção social para crianças, adolescentes e idosos, sendo um ponto de apoio às pessoas vulneráveis."
        imageURL="/images/o_instituto.jpg"
        imageHeight={{ min: '32rem', speed: '7vw', max: '56rem' }}
        isHero
      />

      <ContentSection
        title="Quem somos"
        description="O Instituto Maria da Hora é uma entidade de direito privado, sem fins lucrativos que desenvolve há 50 anos um trabalho de inclusão social sério e comprometido com a população do bairro Henrique Jorge e adjacências, assim como de outros bairros de toda Fortaleza e atuando também em outras cidades do estado do Ceará. É uma entidade que se preocupa com a promoção da assistência social as minorias que vivem em situação de risco e vulnerabilidade social, necessitados de amparo físico e emocional."
        imageURL="/images/quem_somos.jpg"
        imageHeight={{ min: '48rem', speed: '7vw', max: '56rem' }}
        textColor={Theme.color.text.body2}
        backgroundColor={Theme.color.blue.dark}
        hideImageOnMobile
        invertPosition
      />

      <ContentFullSection
        title="Missão"
        description="Promover amparo e desenvolvimento social às crianças, adolescentes e família que vivem em situação de risco e vunerabilidade social para que estas sejam reinseridas num contexto social digno."
        imageUrl="/images/missao.jpg"
      />

      <ContentFullSection
        title="Visão"
        description="Ser um referencial de excelência na prestação de serviços de educação, assistência social, saúde, cultura, esporte e lazer para crianças, adolescentes e famílias, garantindo um desenvolvimento eficiente de inclusão social no estado do Ceará."
        imageUrl="/images/visao.jpg"
        invertPosition
      />

      <ContentImpact
        wedo="Um impacto direto na vida de"
        times="2972"
        things="pessoas."
        imageUrl="/images/impact_2.png"
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

      <ContentFullSection
        title="Uma história de amor, coragem e perseverança."
        imageUrl="/images/fundadora_maria_da_hora.jpg"
        button={{ text: 'Conheça nossa história', link: '#' }}
        backgroundColor={Theme.color.background.light2}
        invertPosition
      />

      <ContentFullSection
        title="Governança, comitês e Equipe."
        imageUrl="/images/equipe.jpg"
        button={{ text: 'Conheça nossa equipe', link: '#' }}
        backgroundColor={Theme.color.background.light2}
      />

      <ContentFullSection
        title="Projetos que transformam realidades."
        imageUrl="/images/projetos.jpg"
        button={{ text: 'Conheça nossos projetos', link: '/projetos' }}
        backgroundColor={Theme.color.background.light2}
        invertPosition
      />

      <Footer />
    </Container>
  );
};

export default About;
