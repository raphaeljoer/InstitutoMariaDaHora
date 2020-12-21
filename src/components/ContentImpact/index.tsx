import React from 'react';

import Image from 'next/image';

import {
  Container,
  Content,
  ContentContainer,
  Header,
  Media,
  Info,
} from './styles';

const ContentImpact = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <Header>
            <h2>
              Um impacto direto na vida de <span>2.952</span> pessoas.
            </h2>
          </Header>
          <Media>
            <Image
              key={1231232131}
              src="/images/impact.png"
              layout="fill"
              alt="dedede"
              objectFit="contain"
            />
          </Media>
          <Info>
            <div>
              <h3 className="title">
                <span className="green">1.200+</span>
                <strong>Crianças e adolescentes</strong>
              </h3>
              <p className="description">
                Estamos mudando o jogo para milhares de crianças e jovens
              </p>
            </div>
            <div>
              <h3 className="title">
                <span className="yellow">700+</span>
                <strong>Idosos</strong>
              </h3>
              <p className="description">
                Levamos mais qualidade de vida para quem mais precisa.
              </p>
            </div>
            <div>
              <h3 className="title">
                <span className="pink">200+</span>
                <strong>Famílias</strong>
              </h3>
              <p className="description">
                Acompanhamos o centenas de famílias todos os dias.
              </p>
            </div>
          </Info>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ContentImpact;
