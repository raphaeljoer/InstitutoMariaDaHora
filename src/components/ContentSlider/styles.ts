import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.background.blue};
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 3.2rem;

  padding: 4rem 0;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;

    margin: 0 5.6rem;
    padding: 8rem 0;
  }
`;

export const Info = styled.div`
  grid-column: 1 / -1;
  grid-row: 1/2;

  margin: 0 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: clamp(3.2rem, 9vw, 3.6rem);
    line-height: 120%;
    font-weight: 700;
    color: ${(props) => props.theme.color.text.body2};
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-column: 1 / 5;
    grid-row: 1/-1;
  }
`;

export const SliderContainer = styled.div`
  grid-column: 1/ -1;
  grid-row: 2/-1;

  position: relative;
  overflow: hidden;

  margin-left: 2.4rem;

  /* &:before {
    content: '';
    width: 12rem;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to right,
      rgba(21, 195, 214, 0),
      rgba(21, 195, 214, 1)
    );
    right: 0;
    top: 0;
    z-index: 2;
  } */

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-column: 5 / -1;
    grid-row: 1/-1;
  }
`;

export const CardsCarousel = styled.div`
  display: flex;

  position: relative;

  margin: 4rem 0;
  width: 100%;

  overflow-x: auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  touch-action: pan-x;

  position: relative;
  cursor: grab;

  transition: all 0.4s ease-in-out;

  &::-webkit-scrollbar {
    display: none; //hide scrollbar
  }

  -ms-overflow-style: none; //hide scrollbar
  scrollbar-width: none; //hide scrollbar
`;

export const CardContainer = styled.div`
  scroll-snap-align: start;
  padding-right: 2.4rem;
  pointer-events: none;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 2.4rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;

  width: 27.2rem;
  height: auto;

  position: relative;
  background-color: white;
  border-radius: 0.8rem;
  overflow: hidden;

  pointer-events: none;

  div#media {
    position: relative;
    height: 15.2rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 3.2rem 2.4rem;
    color: ${(props) => props.theme.color.text.title2};
  }

  div#details {
    display: flex;
    flex-direction: column;
    margin: 0 2.4rem 2.4rem 2.4rem;

    strong {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${(props) => props.theme.color.text.title2};
    }

    span {
      margin-top: 0.8rem;
      font-size: 1.4rem;
    }
  }

  button {
    pointer-events: all;
    height: 4rem;
    width: 4rem;
    border-radius: 0.8rem 0 0.8rem 0;
    color: ${(props) => props.theme.color.yellow.dark};
    background-color: ${(props) => props.theme.color.yellow.default};

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
