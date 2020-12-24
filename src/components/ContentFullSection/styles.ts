import styled, { css } from 'styled-components';

interface ContentProps {
  backgroundColor?: string;
  invertPosition?: boolean;
}

export const Container = styled.div``;

export const Content = styled.div<ContentProps>`
  display: flex;
  min-height: 40rem;

  flex-direction: column-reverse;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    ${(props) =>
      props.invertPosition
        ? css`
            flex-direction: row-reverse;
          `
        : css`
            flex-direction: row;
          `}
  }
`;

export const Info = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: ${(props) => props.backgroundColor};

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    width: 50%;
  }
`;

export const InfoContent = styled.div`
  padding: 7.2%;

  h2 {
    font-size: 3.2rem;
    line-height: 150%;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    margin-top: 2.4rem;
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    padding: 24%;

    h2 {
      font-size: 4rem;
    }
  }
`;

export const Media = styled.div<ContentProps>`
  position: relative;

  min-height: 32rem;

  width: 100%;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    padding: 24%;
    width: 50%;
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
