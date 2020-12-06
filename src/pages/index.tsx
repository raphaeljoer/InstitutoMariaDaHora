import { Container } from '@/styles/pages/Home';
import { Navbar, HeroSliderFullScreen } from '@/components';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSliderFullScreen />
    </Container>
  );
}
