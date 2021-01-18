import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;

  background-color: #edf2f2;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    padding: 8rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding: 0 2.4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    padding: 0 5.6rem;
  }
`;
