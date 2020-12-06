import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';

import {
  Container,
  SlideContainer,
  Slide,
  Button,
  BackgroundImage,
  InfoContainer,
  Info,
  MediaContainer,
} from './styles';

const HeroSlider = () => {
  const slideContent = [
    {
      title: 'Amar é um ato de coragem.',
      Subtitle:
        'Uma missão em que você pode acreditar. Pessoas em que você pode confiar.',
      buttonText: 'Nos conheça',
      buttonLink: '#about',
      image: '/images/imh-bg-01.jpg',
    },
  ];

  const [isActive, setIsActive] = useState([]);

  const handleMountActiveSchema = useCallback((slideIndex: number) => {
    const mountedActiveSchema = slideContent.map((slide, index) => {
      return index === slideIndex;
    });
    setIsActive(mountedActiveSchema);
  }, []);

  useEffect(() => {
    handleMountActiveSchema(0);
  }, [handleMountActiveSchema]);

  return (
    <Container>
      {slideContent.map((slide, index) => (
        <SlideContainer isActive={isActive[index]} key={slide.title}>
          <Slide>
            <InfoContainer>
              <Info>
                <h1>{slide.title}</h1>
                <p>{slide.Subtitle}</p>
                <Link href="#about" passHref>
                  <Button>{slide.buttonText}</Button>
                </Link>
              </Info>
            </InfoContainer>
            <MediaContainer />
          </Slide>
          <BackgroundImage src={slide.image} unsized />
        </SlideContainer>
      ))}
    </Container>
  );
};

export default HeroSlider;
