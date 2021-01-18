import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import {
  Container,
  ContentPropose,
  Propose,
  Status,
  StatusInfo,
  ShapeCircle,
  CallToAction,
  ContentNumbers,
  ContentNumbersContent,
  Number,
} from './styles';

interface INumber {
  color: string;
  number: string;
  title: string;
  description: string;
}

interface IContentDataImpact {
  upTitle: string;
  title: string;

  status: string;
  statusDescription: string;

  ctaTitle: string;
  ctaDescription: string;

  numbers?: INumber[];
}

const ContentDataImpact = ({
  upTitle,
  title,
  status,
  statusDescription,
  ctaTitle,
  ctaDescription,
  numbers,
}: IContentDataImpact) => {
  return (
    <Container>
      <ContentPropose>
        <Propose>
          <strong>{upTitle}</strong>
          <h2>{title}</h2>
        </Propose>

        <Status>
          <StatusInfo>
            <h3>{status}</h3>
            <span>{statusDescription}</span>
          </StatusInfo>
          <ShapeCircle>
            <Image
              src="/images/shape-circle.svg"
              alt="shape circle"
              layout="fill"
            />
          </ShapeCircle>
        </Status>

        <CallToAction>
          <h4>{ctaTitle}</h4>
          <span>{ctaDescription}</span>
        </CallToAction>
      </ContentPropose>
      {numbers && (
        <ContentNumbers>
          <ContentNumbersContent>
            {numbers.map((number) => (
              <Number key={uuid()}>
                <strong style={{ color: `${number.color}` }}>
                  {number.number}
                </strong>
                <h4>{number.title}</h4>
                <span>{number.description}</span>
              </Number>
            ))}
          </ContentNumbersContent>
        </ContentNumbers>
      )}
    </Container>
  );
};

export default ContentDataImpact;
