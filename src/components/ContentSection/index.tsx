import Link from 'next/link';
import Image from 'next/image';
import theme from '@/styles/themes/light';

import { FiArrowRight } from 'react-icons/fi';
import {
  Container,
  Content,
  ContentContainer,
  Info,
  Media,
  Button,
} from './styles';

interface ButtonProps {
  buttonText?: string;
  buttonLink?: string;
}

interface HeightMediaProps {
  min?: string;
  speed?: string;
  max?: string;
}

interface ContentSectionProps {
  title: string;
  description?: string;
  buttons?: ButtonProps[];
  imageURL?: string;
  imageHeight?: HeightMediaProps;
  invertPosition?: boolean;
  backgroundColor?: string;
  textColor?: string;
  isHero?: boolean;
  hideImageOnMobile?: boolean;
}

const ContentSection = ({
  title = 'Promover o amparo e desenvolvimento social às crianças, adolescentes e famílias.',
  description,
  buttons,
  imageURL = '/images/content_default.jpg',
  imageHeight = { min: '32rem', speed: '70vw', max: '56rem' },
  backgroundColor = theme.color.background.light1,
  textColor = theme.color.text.body1,
  invertPosition,
  isHero,
  hideImageOnMobile,
}: ContentSectionProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <ContentContainer>
        <Content isHero={isHero}>
          <Info invertPosition={invertPosition} textColor={textColor}>
            {isHero ? <h1>{title}</h1> : <h2>{title}</h2>}
            {description && <p>{description}</p>}

            {buttons &&
              buttons.map((button) => (
                <Link key={title} href={button.buttonLink} passHref>
                  <Button>
                    <span>{button.buttonText}</span>
                    <div>
                      <FiArrowRight />
                    </div>
                  </Button>
                </Link>
              ))}
          </Info>
          <Media
            invertPosition={invertPosition}
            imageHeight={imageHeight}
            hideImageOnMobile={hideImageOnMobile}
          >
            <Image
              key={imageURL}
              src={imageURL}
              layout="fill"
              alt={title}
              objectFit="cover"
              priority
            />
          </Media>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ContentSection;
