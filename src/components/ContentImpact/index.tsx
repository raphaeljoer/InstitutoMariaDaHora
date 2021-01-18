import React from 'react';

import Image from 'next/image';

import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Content,
  ContentContainer,
  Header,
  Media,
  Info,
} from './styles';

interface NumberDataProps {
  number: string;
  numberColor: string;
  numberTitle: string;
  numberDescription: string;
}

interface ContentImpactProps {
  wedo: string;
  times: string;
  things: string;
  imageUrl: string;
  paddingMobile?: string;
  padding?: string;
  numbers: NumberDataProps[];
}

const ContentImpact = ({
  wedo = 'Um impacto direto na vida de',
  times = '2972',
  things = 'pessoas.',
  imageUrl = '/images/impact.png',
  numbers,
  padding,
  paddingMobile,
}: ContentImpactProps) => {
  return (
    <Container>
      <ContentContainer>
        <Content paddingMobile={paddingMobile} padding={padding}>
          <Header>
            <h2>
              {wedo} <span>{times}</span> {things}
            </h2>
          </Header>
          <Media>
            <Image
              src={imageUrl}
              layout="fill"
              alt="Impacto"
              objectFit="contain"
            />
          </Media>
          <Info>
            {numbers.map(
              ({
                number,
                numberTitle,
                numberColor,
                numberDescription,
              }: NumberDataProps) => (
                <div key={uuidv4()}>
                  <h3 className="title">
                    <span style={{ color: numberColor }}>{number}</span>
                    <strong>{numberTitle}</strong>
                  </h3>
                  <p className="description">{numberDescription}</p>
                </div>
              ),
            )}
          </Info>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ContentImpact;
