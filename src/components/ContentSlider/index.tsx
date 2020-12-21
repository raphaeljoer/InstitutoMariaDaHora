import { useCallback, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper';

import 'swiper/swiper-bundle.min.css';

import Image from 'next/image';

import { FiArrowUpRight, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  Content,
  ContentContainer,
  Info,
  SliderContainer,
  Card,
} from './styles';

SwiperCore.use([Navigation, Pagination, Controller]);

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

  const swiperRef = useRef(null);

  const handleNext = useCallback(() => {
    swiperRef.current.children[0].swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current.children[0].swiper.slidePrev();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Info>
            <h2>Projetos que impactam a vida de milhares de pessoas.</h2>
            <div id="controls">
              <button type="button" onClick={handlePrev}>
                <FiArrowLeft />
              </button>
              <button type="button" onClick={handleNext}>
                <FiArrowRight />
              </button>
            </div>
          </Info>
          <SliderContainer ref={swiperRef}>
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              loop
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {slideContent.map(({ imageUrl, title, goal }) => (
                <SwiperSlide key={uuidv4()}>
                  <Card>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ContentSlider;
