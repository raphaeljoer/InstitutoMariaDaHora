import Link from 'next/link';

import {
  Container,
  SlideContainer,
  Slide,
  Media,
  MediaContainer,
  InfoContainer,
  Info,
  BackgroundMedia,
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
            <Media
              key={slideContent.image}
              quality={40}
              src={slideContent.image}
              unsized
            />
          </MediaContainer>
        </Slide>
        <BackgroundMedia
          key={slideContent.image}
          src={slideContent.image}
          quality={50}
          unsized
        />
      </SlideContainer>
    </Container>
  );
};

export default HeroFullScreen;
