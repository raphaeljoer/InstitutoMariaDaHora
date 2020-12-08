import Link from 'next/link';
import Image from 'next/image';

import {
  Container,
  SlideContainer,
  Slide,
  Media,
  MediaContainer,
  InfoContainer,
  Info,
  BackgroundContainer,
} from './styles';

const HeroFullScreen = () => {
  const slideContent = {
    title: 'Amar é um ato de coragem.',
    Subtitle:
      'Uma missão em que você pode acreditar. Pessoas em que você pode confiar.',
    buttonText: 'Conheça',
    buttonLink: '#about',
    image: '/images/imh-bg-01.jpg',
  };

  return (
    <Container>
      <SlideContainer>
        <Slide>
          <InfoContainer>
            <Info>
              <h1>{slideContent.title}</h1>
              <p>{slideContent.Subtitle}</p>
              <Link href="#about" passHref>
                <a>{slideContent.buttonText}</a>
              </Link>
            </Info>
          </InfoContainer>
          <MediaContainer>
            <Image
              key={slideContent.image}
              src={slideContent.image}
              quality={50}
              layout="fill"
              priority
              objectFit="cover"
            />
          </MediaContainer>
        </Slide>
        <BackgroundContainer>
          <Image
            key={slideContent.image}
            src={slideContent.image}
            quality={30}
            layout="fill"
            priority
            objectFit="cover"
          />
        </BackgroundContainer>
      </SlideContainer>
    </Container>
  );
};

export default HeroFullScreen;
