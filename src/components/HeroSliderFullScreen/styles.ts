import styled, { css } from 'styled-components';

import Image from 'next/image';

interface ISlideProps {
  isActive: boolean;
}

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  height: 100vh;
  width: 100%;
`;

export const SlideContainer = styled.div<ISlideProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  position: absolute;
  opacity: 0;
  z-index: -1;

  ${(props) =>
    props.isActive
      ? css`
          animation: fadeIn 0.4s ease-in-out forwards;
          z-index: 1;
        `
      : css`
          animation: fadeOut 0.4s ease-in-out forwards;
          z-index: -1;
        `}

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const Slide = styled.div`
  display: grid;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: 'info' 'media';

  height: 100%;
  width: 100%;

  background: black;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 32vh auto;
    grid-template-areas:
      'media'
      'info';
  }
`;

export const InfoContainer = styled.div`
  z-index: 1;
  grid-area: info;

  display: flex;

  align-items: flex-end;
  justify-content: flex-start;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  align-items: flex-start;
  justify-content: center;

  padding: 4rem 4rem;

  width: 80%;
  height: auto;

  border-radius: 0 2.4rem 0 0;

  backdrop-filter: blur(40px);
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 1rem 0px 3rem rgba(0, 0, 0, 0);

  h1 {
    font-size: 6.4rem;
    line-height: 7.2rem;
  }

  p {
    font-size: 2.2rem;
    max-width: 80%;
    margin-top: 1.6rem;
    font-weight: 400;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    align-items: center;
    border-radius: 0;

    h1,
    p {
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.4rem;

  margin-top: 4rem;
  padding: 3.2rem;
  border-radius: 5rem;

  text-decoration: none;

  width: fit-content;
  height: 4.8rem;

  color: white;
  background-image: linear-gradient(to bottom left, #6852ed, #ba43fc);
`;

export const MediaContainer = styled.div`
  grid-area: media;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Controls = styled.div`
  position: absolute;

  transform: rotate(270deg);

  right: -40px;
  bottom: 50;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: auto;

  padding: 1rem;

  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0);
  border-radius: 20px 20px 0 0;

  z-index: 2;
`;

export const ControlSlidePrevious = styled.button`
  color: white;
  background: none;
  opacity: 0.6;
`;

export const ControlSlideNext = styled.button`
  color: white;
  opacity: 0.6;
  background: none;
`;

export const ControlNavSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  min-width: 100px;
`;

export const ControlNavSliderItem = styled.button<ISlideProps>`
  margin: 0 0.4rem;

  height: 15px;
  width: 15px;

  opacity: 0.6;

  border-radius: 50%;
  border: white solid 1px;

  ${(props) =>
    props.isActive
      ? css`
          background: #6852ed;
        `
      : css`
          background: transparent;
        `}
`;
