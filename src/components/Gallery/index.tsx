import { useCallback, useRef, useState } from 'react';

import Image from 'next/image';

import { v4 as uuid } from 'uuid';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import {
  Container,
  Content,
  Header,
  Title,
  Nav,
  ArrowButton,
  Items,
  Item,
} from './styles';

const images = [
  '/images/projects/project-17.jpeg',
  '/images/projects/project-18.jpeg',
  '/images/projects/project-19.jpeg',
  '/images/projects/project-20.jpeg',
  '/images/projects/project-21.jpeg',
  '/images/projects/project-22.jpeg',
  '/images/projects/project-23.jpeg',
  '/images/projects/project-24.jpeg',
  '/images/projects/project-25.jpeg',
  '/images/projects/project-26.jpeg',
  '/images/projects/project-27.jpeg',
  '/images/projects/project-28.jpeg',
  '/images/projects/project-30.jpeg',
  '/images/projects/project-31.jpeg',
  '/images/projects/project-32.jpeg',
  '/images/projects/project-33.jpeg',
  '/images/projects/project-34.jpeg',
  '/images/projects/project-35.jpeg',
  '/images/projects/project-36.jpeg',
  '/images/projects/project-37.jpeg',
];

const Gallery = () => {
  const itemsRef = useRef<HTMLDivElement>(null);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleGallery = useCallback((index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  const handleMovePrev = useCallback(() => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  }, [photoIndex]);

  const handleMoveNext = useCallback(() => {
    setPhotoIndex((photoIndex + 1) % images.length);
  }, [photoIndex]);

  const handleScrollRight = useCallback(() => {
    const itemWidth = itemsRef.current.children[0].clientWidth;
    itemsRef.current.scrollBy(itemWidth, 0);
  }, []);

  const handleScrollLeft = useCallback(() => {
    const itemWidth = itemsRef.current.children[0].clientWidth;
    itemsRef.current.scrollBy(-itemWidth, 0);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Title>Confira algumas fotos dos nossos projetos:</Title>
          <Nav>
            <ArrowButton onClick={handleScrollLeft}>
              <IoIosArrowBack size={32} />
            </ArrowButton>

            <ArrowButton onClick={handleScrollRight}>
              <IoIosArrowForward size={32} />
            </ArrowButton>
          </Nav>
        </Header>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[photoIndex + 1]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => handleMovePrev()}
            onMoveNextRequest={() => handleMoveNext()}
            animationOnKeyInput
          />
        )}

        <Items ref={itemsRef}>
          {images.map((item, index) => (
            <Item key={uuid()} onClick={() => handleGallery(index)}>
              <Image
                src={item}
                alt="photo"
                layout="fill"
                objectFit="cover"
                className="partnerLogo"
                quality={50}
              />
            </Item>
          ))}
        </Items>
      </Content>
    </Container>
  );
};

export default Gallery;
