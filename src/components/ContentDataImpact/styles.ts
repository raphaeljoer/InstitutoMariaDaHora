import styled from 'styled-components';

export const Container = styled.div`
  padding: 8rem 0;
  background: #f3f7f7;

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    padding: 0;
  }
`;

export const ContentPropose = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.2rem;

  max-width: 1280px;
  padding: 0 2.4rem;

  margin: 0 auto;
  margin-bottom: 4rem;

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 4rem 5.6rem;
  }
`;

export const Propose = styled.div`
  align-self: center;

  strong {
    display: block;

    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;

    color: #ff669d;
  }

  h2 {
    font-size: 3.2rem;
    line-height: 120%;
    text-align: center;

    max-width: 56rem;
    margin: 0 auto;
    margin-top: 1.6rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    h2 {
      text-align: left;
    }

    strong {
      text-align: left;
    }
  }
`;

export const Status = styled.div`
  position: relative;

  display: grid;
  grid-template-areas: 'status';

  margin: 4rem 0;

  h3 {
    font-size: 3.2rem;
    text-align: center;
    color: ${(p) => p.theme.color.blue.default};
  }

  span {
    display: block;

    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;

    max-width: 24rem;

    margin: 0 auto;
    margin-top: 1.6rem;
    padding: 0 2.4rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    min-width: 32rem;
  }
`;

export const StatusInfo = styled.div`
  grid-area: status;
  align-self: center;
`;

export const ShapeCircle = styled.div`
  grid-area: status;
  position: relative;

  width: 100%;
  height: 32rem;
`;

export const CallToAction = styled.div`
  align-self: center;
  margin: 0 2.4rem;

  h4 {
    font-size: 2rem;
    text-align: center;
  }

  span {
    display: block;

    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;

    max-width: 40rem;

    margin: 0 auto;
    margin-top: 1.6rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    h4 {
      text-align: left;
    }

    span {
      text-align: left;
    }
  }
`;

export const ContentNumbers = styled.div`
  padding-top: 4rem;
  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    padding-top: 0;
  }
`;

export const ContentNumbersContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 3.2rem;

  max-width: 1280px;
  margin: 0 auto;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 5.6rem;
  }
`;

export const Number = styled.div`
  strong {
    display: block;

    font-size: 3.2rem;
    font-family: ${(p) => p.theme.font.title};
    font-weight: 900;
    text-align: center;
  }

  h4 {
    font-size: 2rem;
    font-weight: 900;
    text-align: center;

    margin-top: 2.4rem;
  }

  span {
    display: block;
    text-align: center;
    line-height: 150%;

    max-width: 24rem;

    margin: 0 auto;
    margin-top: 0.8rem;
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    strong {
      text-align: left;
    }

    h4 {
      text-align: left;
    }

    span {
      text-align: left;
      margin: 0;
      margin-right: auto;
      margin-top: 0.8rem;
    }
  }
`;
