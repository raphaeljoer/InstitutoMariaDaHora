import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.background.blue};
`;

export const Content = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.2rem;

  margin: 0 auto;
  max-width: 1280px;

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.4rem;

    padding-bottom: 8rem;
  }
`;

export const Info = styled.div`
  grid-column: 1/-1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  padding: 0 2.4rem;
  padding-top: calc(3.2rem + 6.4rem);
  padding-bottom: 3.2rem;

  h1 {
    font-size: clamp(3.6rem, 5vw, 5.6rem);
    line-height: 108%;
    font-weight: 800;
    color: ${(props) => props.theme.color.text.body2};
  }

  p {
    margin-top: 0.8rem;
    line-height: 150%;
    font-size: clamp(1.6rem, 1.6vw, 2.1rem);
    color: ${(props) => props.theme.color.text.body2};
    max-width: 100%;
  }

  a {
    width: fit-content;
    height: fit-content;

    margin-top: 3.2rem;
    padding: 1.6rem 3.2rem;
    border-radius: 2.4rem;

    text-decoration: none;
    font-weight: 600;

    color: ${(props) => props.theme.color.yellow.dark};
    background-color: ${(props) => props.theme.color.yellow.default};
  }

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    grid-column: 1/6;

    padding-left: 5.6rem;
    padding-right: 0;

    a {
      font-size: 2.4rem;
    }
  }
`;

export const Media = styled.div`
  grid-column: 1/-1;

  position: relative;

  overflow: hidden;

  border-radius: 6rem 0 0 0;

  height: max(27.2rem, min(70vw, 37.2rem));

  background-color: black;

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    margin: calc(3.2rem + 6.4rem) 0 0 0;
    grid-column: 7/-1;
    margin-right: 5.6rem;
    border-radius: 6rem 0 6rem 0;
  }
`;
