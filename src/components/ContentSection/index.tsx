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

interface Button {
  buttonText?: string;
  buttonLink?: string;
}

interface ContentSectionProps {
  title: string;
  description?: string;
  buttons?: Button[];
  imageURL?: string;
  invertPosition?: boolean;
  backgroundColor?: string;
  textColor?: string;
  isHero?: boolean;
}

const ContentSection = ({
  title = 'Promover o amparo e desenvolvimento social às crianças, adolescentes e famílias.',
  description,
  buttons,
  imageURL = '/images/content_default.jpg',
  backgroundColor = theme.color.background.light1,
  textColor = theme.color.text.body1,
  invertPosition,
  isHero,
}: ContentSectionProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <ContentContainer>
        <Content isHero={isHero}>
          <Info invertPosition={invertPosition} textColor={textColor}>
            <h2>{title}</h2>
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
          <Media invertPosition={invertPosition}>
            <Image
              key={imageURL}
              src={imageURL}
              layout="fill"
              alt={title}
              objectFit="cover"
              quality={50}
              priority
            />
          </Media>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ContentSection;
