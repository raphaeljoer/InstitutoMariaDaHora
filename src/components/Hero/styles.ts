import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  background: linear-gradient(45deg, rgb(241, 243, 243), rgb(235, 253, 255));
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;

  padding-top: 6.4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 36rem;
  margin: 0 auto;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    flex-direction: row;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  width: 100%;
  margin: 4rem 2.4rem;

  align-items: center;

  h1 {
    font-size: 3.2rem;
    text-align: center;

    margin-bottom: 1.6rem;
    padding: 0 1.6rem;

    color: ${(p) => p.theme.color.blue.dark};
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;
    padding: 0 1.6rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    align-items: flex-start;

    h1 {
      font-size: 4.4rem;
      text-align: left;

      padding: 0;
    }

    p {
      font-size: 1.6rem;
      text-align: left;
      padding: 0;
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

  border-radius: 0.8rem;
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

    margin: 0.8rem;
    border-radius: 0.8rem;

    color: ${(props) => props.theme.color.shape.light1};
    background-color: ${(props) => props.theme.color.blue.default};
  }
`;

export const Media = styled.div`
  z-index: 10;

  position: relative;

  display: flex;
  flex-shrink: 0;
  flex-grow: 0;

  width: 31.9rem;
  height: 27.6rem;

  margin: 0 auto;

  div {
    img {
      padding: 0 2.4rem;
    }
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    width: 60rem;
    height: 52rem;
    flex-direction: row;
  }
`;

export const Dots = styled.div`
  position: absolute;

  right: 0;
  bottom: 0;

  z-index: 1;

  width: 10rem;
  height: 10rem;

  margin-bottom: 2.4rem;
  margin-right: 4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    width: 16rem;
    height: 16rem;

    margin-bottom: 2.4rem;
    margin-right: 8rem;
  }
`;

export const Shape = styled.div`
  display: none;
  z-index: -10;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    position: absolute;

    display: flex;

    top: 24%;
    right: 0;

    z-index: 1;

    width: 7.5rem;
    height: 15.1rem;
  }
`;

export const Scroll = styled.div`
  position: absolute;

  display: flex;

  bottom: 0;
  left: 50%;

  z-index: 1;

  width: 14.5rem;
  height: 3.7rem;

  transform: translateX(-50%) translateY(99%);
`;

export const ShapeBackground = styled.div`
  display: none;
  z-index: -10;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;

    z-index: 1;

    width: 72rem;
    height: 100%;
  }
`;
