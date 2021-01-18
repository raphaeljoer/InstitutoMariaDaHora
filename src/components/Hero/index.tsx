import Image from 'next/image';
import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  Content,
  Info,
  InfoContent,
  Media,
  Dots,
  Shape,
  ShapeBackground,
  Scroll,
  Button,
} from './styles';

interface Button {
  text: string;
  link: string;
}
interface IHeroProps {
  title?: string;
  description?: string;
  button?: Button;
  imageUrl?: string;
}

const Hero = ({
  title = 'titulo',
  description = 'descrição',
  button = { text: 'Conheça', link: '#' },
  imageUrl = '/images/boy-hero.png',
}: IHeroProps) => {
  return (
    <Container>
      <Content>
        <Info>
          <InfoContent>
            {title && <h1>{title}</h1>}
            {description && (
              <p>
                Uma missão em que você pode acreditar. Pessoas em que você pode
                confiar.
              </p>
            )}
            {button && (
              <Link href={button.link} passHref>
                <Button>
                  <span>{button.text}</span>
                  <div>
                    <FiArrowRight />
                  </div>
                </Button>
              </Link>
            )}
          </InfoContent>
        </Info>
        <Media>
          <Dots>
            <Image
              key="/images/dots.svg"
              src="/images/dots.svg"
              alt="dots shape"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Dots>
          <Image
            key={imageUrl}
            src={imageUrl}
            alt="Instituto Maria da Hora"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Media>
      </Content>
      <Shape>
        <Image
          key="/images/shape.svg"
          src="/images/shape.svg"
          alt="shape"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Shape>
      <Scroll>
        <Image
          key="/images/scroll.svg"
          src="/images/scroll.svg"
          alt="shape"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Scroll>
      <ShapeBackground>
        <Image
          key="/images/shape-background.svg"
          src="/images/shape-background.svg"
          alt="shape"
          layout="fill"
          objectFit="cover"
          priority
        />
      </ShapeBackground>
    </Container>
  );
};

export default Hero;
