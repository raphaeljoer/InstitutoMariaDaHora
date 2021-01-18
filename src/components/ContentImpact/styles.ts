import styled, { css } from 'styled-components';

interface ContentImpactProps {
  padding: string;
  paddingMobile: string;
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.background.light3};
`;

export const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Content = styled.div<ContentImpactProps>`
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.paddingMobile
      ? css`
          padding: ${p.paddingMobile};
        `
      : css`
          padding: 4rem 2.4rem;
        `}

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    ${(p) =>
      p.padding
        ? css`
            padding: ${p.padding};
          `
        : css`
            padding: 12rem 5.6rem;
          `}
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;

    span {
      font-weight: 900;
      color: ${(props) => props.theme.color.blue.default};
    }
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    h2 {
      font-size: 4.8rem;
      text-align: center;
      max-width: 50rem;
    }
  }
`;

export const Media = styled.div`
  position: relative;
  height: 32rem;
  margin: 4rem -2.4rem;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    height: 50.4rem;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-row-gap: 4rem;

  margin-top: 4rem;

  div {
    h3 {
      span {
        display: block;
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 1.6rem;
        text-align: center;
      }

      span.green {
        color: #37c77f;
      }
      span.yellow {
        color: #ffd666;
      }
      span.pink {
        color: #ff669d;
      }

      strong {
        display: block;
        font-size: 2.4rem;
        font-weight: 700;
        text-align: center;
      }
    }

    p.description {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 150%;
      text-align: center;

      margin: 0 auto;
      margin-top: 0.8rem;
    }
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 0rem;
    grid-column-gap: 12rem;

    h3.title {
      span {
        font-size: 4.8rem;
        text-align: left;
      }

      strong {
        font-size: 2.4rem;
        text-align: left;
      }
    }

    div {
      p.description {
        font-size: 1.8rem;
        text-align: left;
        margin: 0;
        margin-top: 0.8rem;
      }
    }
  }
`;
