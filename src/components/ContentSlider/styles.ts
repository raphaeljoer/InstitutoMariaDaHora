import styled from 'styled-components';

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
  grid-template-rows: auto auto auto;
  grid-gap: 4rem;

  padding: 4rem 0;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto;

    margin: 0 5.6rem;
    padding: 8rem 0;
  }
`;

export const Info = styled.div`
  grid-column: 1 / -1;
  grid-row: 1/2;

  margin: 0 2.4rem;

  display: flex;

  h2 {
    font-size: clamp(3.2rem, 9vw, 3.6rem);
    line-height: 120%;
    font-weight: 700;
    color: ${(props) => props.theme.color.text.body2};
  }

  div#controls {
    display: none;
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-column: 1 / -1;
    grid-row: 1/2;

    align-items: flex-end;
    justify-content: space-between;

    margin: 0 0rem;

    h2 {
      width: 40rem;
    }

    div#controls {
      display: flex;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 4rem;
        height: 4rem;
        border-radius: 0.8rem;
        background: ${(props) => props.theme.color.yellow.default};

        svg {
          width: 1.8rem;
          height: 1.8rem;
          color: ${(props) => props.theme.color.yellow.dark};
        }

        & + button {
          margin-left: 1.6rem;
        }
      }
    }
  }
`;

export const Button = styled.a`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  height: fit-content;

  margin: 0 2.4rem;

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

    height: 100%;

    margin: 1.2rem 1.6rem;

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

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    margin: 0;
  }
`;

export const SliderContainer = styled.div`
  grid-column: 1/ -1;
  grid-row: 2/-1;

  position: relative;
  margin: 0 2.4rem;

  button.swiper-button-next {
    display: flex;
    position: relative !important;
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    grid-column: 1 / -1;
    grid-row: 2/-1;
    margin: 0 0rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;

  width: 100%;
  height: auto;

  position: relative;
  background-color: white;
  border-radius: 0.8rem;
  overflow: hidden;

  pointer-events: none;

  div#media {
    position: relative;
    height: 17.6rem;
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
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 0.8rem 0 0.8rem 0;
    color: ${(props) => props.theme.color.yellow.dark};
    background-color: ${(props) => props.theme.color.yellow.default};

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 0;

    > svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }
`;
