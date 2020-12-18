import { useCallback, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  Container,
  Content,
  ContentContainer,
  Info,
  SliderContainer,
  CardsCarousel,
  CardContainer,
  Card,
} from './styles';

const ContentSlider = () => {
  const slideContent = [
    {
      imageUrl: '/images/main.jpg',
      title: 'Projeto Acolhimento Institucional de Crianças e Adolescentes',
      goal: '200 crianças e adolescentes',
      buttonLink: '#',
    },
    {
      imageUrl: '/images/main.jpg',
      title: 'Projeto Acolhimento Institucional de Crianças e Adolescentes',
      goal: '200 crianças e adolescentes',
      buttonLink: '#',
    },
    {
      imageUrl: '/images/main.jpg',
      title: 'Projeto Acolhimento Institucional de Crianças e Adolescentes',
      goal: '200 crianças e adolescentes',
      buttonLink: '#',
    },
  ];

  const dragMove = useCallback((event) => {
    if (event.movementX < 0) {
      event.target.scrollBy(50, 0);
    } else {
      event.target.scrollBy(-50, 0);
    }
  }, []);

  const dragStop = useCallback(() => {
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragStop);
  }, [dragMove]);

  const dragStart = useCallback(() => {
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragStop);
  }, [dragMove, dragStop]);

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Info>
            <h2>Projetos que impactam a vida de milhares de pessoas.</h2>
          </Info>
          <SliderContainer>
            <CardsCarousel id="CardsCarousel" onMouseDown={dragStart}>
              {slideContent.map(({ imageUrl, title, goal }) => (
                <CardContainer>
                  <Card key={uuidv4()}>
                    <div id="media">
                      <Image
                        src={imageUrl}
                        alt="legend"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3>{title}</h3>
                    <div id="details">
                      <strong>Meta de impacto</strong>
                      <span>{goal}</span>
                    </div>
                    <button type="button">
                      <FiArrowUpRight />
                    </button>
                  </Card>
                </CardContainer>
              ))}
            </CardsCarousel>
          </SliderContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ContentSlider;
