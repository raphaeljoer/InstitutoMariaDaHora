import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface AboutProps {
  invertPosition?: boolean;
  backgroundColor?: string;
  textColor?: string;
  isHero?: boolean;
}

export const Container = styled.div<AboutProps>`
  background-color: ${(props) => props.backgroundColor};
`;

export const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Content = styled.div<AboutProps>`
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 1.2rem;

  margin: 0 2.4rem;

  ${(props) =>
    props.isHero
      ? css`
          padding: calc(6.4rem + 4rem) 0 4rem 0;
        `
      : css`
          padding: 4rem 0;
        `}

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    grid-gap: 2.4rem;
    margin: 0 5.6rem;

    ${(props) =>
      props.isHero
        ? css`
            padding: calc(6.4rem + 8rem) 0 8rem 0;
          `
        : css`
            padding: 8rem 0;
          `}
  }
`;

export const Info = styled.div<AboutProps>`
  ${(props) =>
    props.invertPosition
      ? css`
          grid-column: 1/-1;
          grid-row: 2/-1;
        `
      : css`
          grid-column: 1/-1;
          grid-row: 1/2;
        `}

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 3.2rem;

  h2 {
    font-size: clamp(3rem, 9vw, 3.4rem);
    line-height: 120%;
    font-weight: 600;
    color: ${(props) => props.textColor};
  }

  p {
    margin-top: 0.8rem;
    line-height: 150%;
    font-size: clamp(1.6rem, 1.6vw, 2.1rem);
    color: ${(props) => props.textColor};
    max-width: 100%;
  }

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    ${(props) =>
      props.invertPosition
        ? css`
            grid-column: 8/-1;
            grid-row: 1/-1;
          `
        : css`
            grid-column: 1/5;
            grid-row: 1/-1;
          `}

    a {
      font-size: 1.8rem;
    }
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  height: fit-content;

  margin-top: 3.2rem;

  & + a {
    margin-top: 1.6rem;
  }

  border-radius: 1.2rem;
  text-decoration: none;

  background-color: ${(props) => props.theme.color.yellow.default};

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1.2rem 1.6rem;
    height: 100%;

    font-size: 1.6rem;
    font-weight: 500;

    color: ${(props) => props.theme.color.yellow.dark};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    height: 3.2rem;
    width: 3.2rem;

    margin: 1.2rem;
    border-radius: 0.8rem;

    color: ${(props) => props.theme.color.shape.light1};
    background-color: ${(props) => props.theme.color.blue.default};
  }
`;

export const Media = styled.div<AboutProps>`
  ${(props) =>
    props.invertPosition
      ? css`
          grid-column: 1/-1;
          grid-row: 1/2;
        `
      : css`
          grid-column: 1/-1;
          grid-row: 2/-1;
        `}

  position: relative;

  overflow: hidden;

  border-radius: 6rem 0 6rem 0;

  height: max(32rem, min(70vw, 56rem));

  background-color: black;

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    ${(props) =>
      props.invertPosition
        ? css`
            grid-column: 1/7;
            grid-row: 1/-1;
          `
        : css`
            grid-column: 7/-1;
            grid-row: 1/-1;
          `}

    border-radius: 6rem 0 6rem 0;
  }
`;
