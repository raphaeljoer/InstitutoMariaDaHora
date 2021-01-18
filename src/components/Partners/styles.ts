import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f5f8fa;
  padding: 8rem 0;
`;

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2.4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    justify-content: center;
    padding: 0 5.6rem;
  }
`;

export const Title = styled.h4`
  display: flex;
  flex-direction: column;

  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;

  width: 100%;

  color: ${(p) => p.theme.color.text.body1};

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    text-align: left;
    font-size: 1.8rem;
  }
`;

export const Nav = styled.div`
  display: none;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    z-index: 20;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 5.6rem;

    /* margin-right: 2.4rem; */
  }
`;

export const ArrowButton = styled.button`
  color: ${(p) => p.theme.color.blue.dark};
`;

export const Borders = styled.div`
  position: relative;
  max-width: 1168px;
  margin: 0 auto;

  & :before {
    content: '';
    z-index: 10;

    position: absolute;
    top: 0;
    left: 0;

    width: 3.2rem;
    height: 100%;

    background: linear-gradient(
      90deg,
      rgba(245, 248, 250, 1),
      rgba(245, 248, 250, 0)
    );

    pointer-events: none;
  }

  & :after {
    content: '';
    z-index: 10;

    position: absolute;
    top: 0;
    right: 0;

    width: 3.2rem;
    height: 100%;

    background: linear-gradient(
      -90deg,
      rgba(245, 248, 250, 1),
      rgba(245, 248, 250, 0)
    );

    pointer-events: none;
  }
  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    & :before {
      width: 8rem;
    }

    & :after {
      width: 8rem;
    }
  }
`;

export const LogoContainer = styled.div`
  position: relative;

  display: flex;

  max-width: 1168px;
  margin: 0 auto;
  margin-top: 6.4rem;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Logo = styled.div`
  z-index: 2;
  position: relative;

  width: 16rem;
  height: 7.2rem;

  margin: 0 0.8rem;

  cursor: pointer;

  scroll-snap-align: center;

  & .partnerLogo {
    filter: saturate(100%);
    -webkit-filter: saturate(100%);

    transition: all 0.3s ease-in-out;

    & :hover {
      filter: saturate(20%);
      -webkit-filter: saturate(20%);
      transition: all 0.3s ease-in-out;
    }
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    scroll-snap-align: start;
    width: 24rem;
    height: 7.2rem;
  }
`;
