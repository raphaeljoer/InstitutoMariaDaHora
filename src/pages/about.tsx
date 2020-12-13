import { Container } from '@/styles/pages/About';
import { Navbar, ContentSection } from '@/components';
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
        invertPosition
        textColor={Theme.color.text.body2}
        backgroundColor={Theme.color.background.dark1}
        hideImageOnMobile
      />
    </Container>
  );
};

export default About;
