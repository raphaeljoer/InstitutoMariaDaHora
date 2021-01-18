import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: rgba(0, 137, 165, 1);
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 48rem;

  padding: 0 5.6rem;

  &:before {
    content: '';
    z-index: 1;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(0, 137, 165, 1),
      rgba(0, 137, 165, 0)
    );
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    &:before {
      content: '';
      z-index: 1;
      position: absolute;
      top: 0;
      left: 24%;

      width: 48%;
      height: 100%;

      background: linear-gradient(
        90deg,
        rgba(0, 137, 165, 1),
        rgba(0, 137, 165, 0)
      );
    }
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

  transform: translateX(-50%) translateY(100%);
`;

export const Title = styled.div`
  z-index: 5;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  span {
    display: block;

    font-size: 1.8rem;
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 120%;
    text-align: center;

    margin-top: 1.6rem;

    color: white;
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    padding: 0 5.6rem;

    span {
      text-align: left;
    }

    h1 {
      font-size: 4.8rem;
      font-weight: 600;
      line-height: 120%;
      text-align: left;
      max-width: 32rem;

      color: white;
    }
  }
`;

export const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100%;

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
    left: 24%;
  }
`;

export const Menu = styled.div`
  display: none;

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    z-index: 10;

    position: absolute;
    bottom: 0;
    left: 50%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 96%;
    height: 8rem;

    max-width: 1280px;
    padding: 1.6rem 3.2rem;

    border-radius: 1.6rem;
    background-color: white;

    transform: translateX(-50%) translateY(50%);
    box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.05);

    span {
      position: relative;
      height: 100%;
      width: 2px;
      background-color: #eef0f1;
      border-right: 1px solid #e3e6e8;
      border-radius: 50%;
    }
  }
`;
