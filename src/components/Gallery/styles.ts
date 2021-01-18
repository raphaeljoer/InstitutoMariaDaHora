import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 5.6rem;
  margin-top: 6.4rem;
  margin-bottom: -8rem;

  background: linear-gradient(-45deg, #2a95dd, #00c7c7);
`;

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    justify-content: center;
    padding: 2.4rem 5.6rem;
  }
`;

export const Title = styled.h4`
  display: flex;
  flex-direction: column;

  font-size: 2rem;
  font-weight: 600;
  text-align: center;

  width: 100%;

  color: ${(p) => p.theme.color.text.body2};

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    text-align: left;
    font-size: 2rem;
  }
`;

export const Nav = styled.div`
  display: none;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    z-index: 20;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 8.8rem;
    height: 4rem;

    padding: 0.8rem;
    border-radius: 0.8rem;

    background: white;

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ArrowButton = styled.button`
  color: ${(p) => p.theme.color.blue.dark};
`;

export const Items = styled.div`
  position: relative;

  display: flex;

  overflow-x: auto;
  overflow-y: visible;

  margin-top: 6.4rem;

  scroll-snap-type: x mandatory;

  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Item = styled.div`
  z-index: 2;
  position: relative;

  overflow: hidden;

  display: flex;
  flex-shrink: 0;

  width: 24rem;
  height: 20rem;

  margin-right: 2.4rem;
  margin-bottom: 5.6rem;
  border-radius: 0.8rem;

  cursor: pointer;

  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);

  scroll-snap-align: center;

  & :first-child {
    margin-left: 2.4rem;
  }

  & .partnerLogo {
    transition: all 0.3s ease-in-out;

    & :hover {
      transform: scale(1.1);
      transition: all 0.4s ease-in-out;
    }
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    scroll-snap-align: center;
    width: 20%;
    height: 24rem;
  }
`;
