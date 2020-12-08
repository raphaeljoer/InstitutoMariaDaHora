import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    height: 100vh;
  }
`;

export const SlideContainer = styled.div`
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const Slide = styled.article`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 50vh auto;
  grid-template-areas:
    'media'
    'info';

  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.device.mobile.small} {
    grid-template-columns: 1fr;
    grid-template-rows: 6.4rem auto;
    grid-template-areas:
      '.'
      'info';
  }

  @media ${({ theme }) => theme.device.mobile.midle} {
    grid-template-columns: 1fr;
    grid-template-rows: 47vh auto;
    grid-template-areas:
      'media'
      'info';
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    grid-template-areas: 'info .';
  }
`;

export const InfoContainer = styled.div`
  z-index: 1;
  grid-area: info;

  display: flex;

  align-items: flex-end;
  justify-content: flex-start;

  height: 100%;

  background-color: ${({ theme }) => theme.backgrounds.primary.dark};

  @media ${({ theme }) => theme.device.tablet} {
    background-color: transparent;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  align-items: flex-start;
  justify-content: center;

  padding: 4rem 2.4rem;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(40px);
  border-radius: 0;

  h1 {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 400;

    max-width: 80%;
    margin-top: 2.4rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    height: 3.2rem;

    font-size: 1.6rem;

    margin-top: 3.2rem;
    padding: 2.8rem;

    border-radius: 5rem;

    text-decoration: none;

    color: white;
    background-image: linear-gradient(to bottom left, #6852ed, #ba43fc);
  }

  @media ${(props) => props.theme.device.mobile.midle} {
    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 80%;
    height: auto;
    border-radius: 0 2.4rem 0 0;
    h1 {
      font-size: 4.8rem;
      line-height: 4.8rem;
    }

    p {
      font-size: 2.1rem;
      line-height: 3rem;
    }
  }

  @media ${(props) => props.theme.device.desktop.small} {
    width: 80%;
    height: auto;
    border-radius: 0 2.4rem 0 0;

    h1 {
      font-size: 5.6rem;
      line-height: 5.6rem;
    }

    p {
      font-size: 2.1rem;
      line-height: 3.2rem;
    }

    a {
      font-size: 1.6rem;
    }
  }
`;

export const MediaContainer = styled.div`
  grid-area: media;
  position: relative;

  z-index: 1;
`;

export const Media = styled(Image)`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  z-index: -1;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  display: none;
  background-color: ${({ theme }) => theme.backgrounds.primary.dark};

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;
