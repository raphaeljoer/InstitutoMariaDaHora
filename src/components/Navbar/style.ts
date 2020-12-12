import styled, { css } from 'styled-components';
import { shade } from 'polished';

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
    width: 2.4rem;
    height: auto;
    transform: rotate(-90deg);
    color: ${(props) => props.theme.color.shape.light1};
  }

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    display: none;
  }
`;
