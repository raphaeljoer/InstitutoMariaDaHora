import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MobileMenuProps {
  isOpen: boolean;
}

interface NavBarProps {
  sticky: boolean;
}

export const Nav = styled.nav<NavBarProps>`
  position: absolute;
  top: 0;

  transition: all ease-in-out 0.4s;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(32px);

  width: 100%;

  z-index: 2;

  ${(props) =>
    props.sticky &&
    css`
      @keyframes navBarFixed {
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0);
        }
      }

      animation: navBarFixed 0.4s;
      background: rgba(255, 255, 255, 0.4);
      position: fixed;
    `}
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2.4rem;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;

  height: 6.4rem;

  transition: 0.2s ease-in-out all;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    padding: 0 5.6rem;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-grow: 1;

  width: 100%;
  margin: 0 4rem;
`;

export const MenuContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    display: flex;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;

  font-family: ${(props) => props.theme.font.body};
  color: ${(props) => props.theme.color.text.body3};
  font-size: 1.6rem;

  text-decoration: none;

  & + a {
    margin-left: 1.6rem;
  }

  ${(props) => css`
    &:hover {
      color: ${shade(0.3, props.theme.color.text.body1)};
    }
  `}
`;

export const MenuRight = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    display: flex;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 4rem;

  border-radius: 3.2rem;
  padding: 1rem 2.7rem;

  background: ${(props) => props.theme.color.yellow.default};

  cursor: pointer;

  transition: all 0.2s ease;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.color.yellow.dark};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background: ${(props) => css`
      ${shade(0.2, props.theme.color.yellow.default)}
    `};

    a {
      color: ${(props) => props.theme.color.yellow.light};
    }
  }
`;

// Menu Mobile

const totalWidth = '2.4rem';
const height = '0.24rem';

const backgroundColor = css`
  background-color: ${(props) => props.theme.color.shape.dark1};
`;

const transition = css`
  transition: transform 0.2s ease-in-out;
`;

export const MenuMobile = styled.button`
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: ${totalWidth};
  height: 25%;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    display: none;
  }
`;

export const TopRectangleIcon = styled.span<MobileMenuProps>`
  width: 50%;
  height: ${height};

  border-radius: 0.24rem;

  transform-origin: center left;

  ${transition}
  ${backgroundColor}

  ${(props) =>
    props.isOpen
      ? css`
          transform: translate(0.4rem, -0.2rem) rotate(45deg);
          border-radius: 0.24rem 0 0 0.24rem;
        `
      : css`
          transform: translate(0, 0) rotate(0);
        `}
`;

export const MidleRectangleIcon = styled.span<MobileMenuProps>`
  width: ${totalWidth};
  height: ${height};

  border-radius: 0.24rem;

  ${transition}
  ${backgroundColor}

  transform-origin: center center;

  ${(props) =>
    props.isOpen
      ? css`
          transform: rotate(-45deg);
        `
      : css`
          transform: rotate(0);
        `}
`;

export const BottomRectangleIcon = styled.span<MobileMenuProps>`
  width: 50%;
  height: ${height};

  border-radius: 0.24rem;

  transform-origin: center right;
  transform: translateX(100%);

  ${transition}
  ${backgroundColor}

  ${(props) =>
    props.isOpen
      ? css`
          transform: translate(0.95rem, 0.2rem) rotate(45deg);
          border-radius: 0 0.24rem 0.24rem 0;
        `
      : css`
          transform: translate(100%, 0) rotate(0);
        `}
`;

export const MobileNavbar = styled.div<MobileMenuProps>`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: auto;

  opacity: 0;
  transform: translate(0, -100%);
  transition: all 0.2s ease-out;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translate(0, 0);
      opacity: 1;
    `}

  border-radius: 0 0 3rem 3rem;

  background-color: ${(props) => props.theme.color.background.light1};
`;

export const MobileMenuContainer = styled.ul`
  margin: calc(6.4rem + 3.2rem) 2.4rem 0 2.4rem;
`;

export const MobileMenuItem = styled.li`
  list-style: none;

  a {
    display: flex;
    align-items: center;

    height: 4rem;
    width: 100%;

    color: ${(props) => props.theme.color.text.title1};

    border-radius: 0.8rem;
    text-decoration: none;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) =>
        props.theme.color.background.lightMenuHover};
    }

    margin-top: 0.8rem;

    span {
      font-size: 1.6rem;
      font-weight: 400;

      margin-left: 1.6rem;
    }

    svg {
      margin-left: 1.6rem;
    }
  }
`;

export const MobileSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.4rem;
`;

export const MobileSocialMenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme.color.text.title2};

  width: 5rem;
  height: 5rem;

  border-radius: 50%;
  background-color: ${(props) => props.theme.color.background.lightMenuHover};

  svg {
    height: 2rem;
    width: auto;
  }
`;
