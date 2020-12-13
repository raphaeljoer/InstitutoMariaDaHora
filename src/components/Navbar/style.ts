import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MobileMenuProps {
  isOpen: boolean;
}

export const Nav = styled.nav`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  z-index: 2;
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

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    padding: 0 5.6rem;
  }
`;

export const Logo = styled.div`
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

  @media ${(props) => props.theme.breakpoint.desktop.small} {
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

  @media ${(props) => props.theme.breakpoint.desktop.small} {
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

export const MenuMobile = styled.button`
  cursor: pointer;
  background: none;

  svg {
    width: 3rem;
    height: auto;
    transform: rotate(-90deg);
    color: ${(props) => props.theme.color.shape.dark1};
  }

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    display: none;
  }
`;

export const MobileNavbar = styled.div<MobileMenuProps>`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 42.8rem;

  transform: translate(0, -100%);
  transition: all 0.2s ease-out;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translate(0, 0);
    `}

  border-radius: 0 0 3rem 3rem;

  background-color: ${(props) => props.theme.color.background.light1};
`;

export const MobileMenuContainer = styled.ul`
  margin: calc(6.4rem + 4rem) 2.4rem 0 2.4rem;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2rem;

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
