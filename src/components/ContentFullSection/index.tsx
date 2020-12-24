import Image from 'next/image';
import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';

import { Container, Content, Info, InfoContent, Media, Button } from './styles';

interface ButtonProps {
  text: string;
  link: string;
}

interface ContentFullSectionProps {
  title: string;
  description?: string;
  imageUrl: string;
  backgroundColor?: string;
  button?: ButtonProps;
  invertPosition?: boolean;
}

const ContentFullSection = ({
  title = 'Title',
  description,
  imageUrl = '/images/main.jpg',
  backgroundColor,
  invertPosition,
  button,
}: ContentFullSectionProps) => {
  return (
    <Container>
      <Content invertPosition={invertPosition}>
        <Info backgroundColor={backgroundColor}>
          <InfoContent>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
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
          <Image src={imageUrl} layout="fill" alt={title} objectFit="cover" />
        </Media>
      </Content>
    </Container>
  );
};

export default ContentFullSection;
