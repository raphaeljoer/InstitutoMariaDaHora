import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;

  background-color: #edf2f2;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    padding: 8rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;

  padding: 0 2.4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    padding: 0 5.6rem;
    flex-direction: row;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  max-width: 40.8rem;

  h2 {
    font-size: 4rem;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;

    width: 100%;

    margin-top: 2.4rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    align-items: flex-start;
    justify-content: center;

    h2 {
      text-align: left;
    }

    p {
      text-align: left;
    }
  }
`;

export const Depoinment = styled.div`
  position: relative;
  margin-top: 4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    margin-left: 5.6rem;
  }
`;

export const Media = styled.div`
  position: relative;

  width: 88vw;
  height: 30.5rem;

  max-width: 42.3rem;

  overflow: hidden;

  border-radius: 0.8rem;
`;

export const Quote = styled.div`
  z-index: 5;

  position: absolute;
  bottom: 0;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 26rem;

  padding: 1.6rem 2.4rem;
  border-radius: 0.8rem;

  background: white;

  transform: translateX(-50%) translateY(40%);

  p {
    position: relative;

    font-size: 1.4rem;
    text-align: center;
    margin: 1.2rem 0;

    ::before,
    ::after {
      content: '"';
      margin: 0 0.4rem;
    }
  }

  strong {
    font-size: 1.2rem;
    font-weight: 600;
  }

  span {
    font-size: 1.1rem;
    margin-top: 0.4rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    left: 0;
    transform: translateX(-40%) translateY(40%);
  }
`;

export const QuoteMedia = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;

  width: 4.8rem;
  height: 4.8rem;

  & .avatar {
    border-radius: 50%;
  }
`;
