import { Navbar, Hero, About } from '@/components';
import { Container } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About
        title="Promover o amparo e desenvolvimento social às crianças, adolescentes e famílias."
        imageURL="/images/content_default.jpg"
        buttons={[
          {
            buttonText: 'Conheça nossa história',
            buttonLink: '',
          },
          {
            buttonText: 'Conheça nossa fundadora',
            buttonLink: '',
          },
        ]}
      />
    </Container>
  );
}
