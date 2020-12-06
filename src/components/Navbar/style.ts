import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Image from 'next/image';

export const Nav = styled.nav`
  top: 0;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.5rem 2.4rem rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(24px);
  transition: all 0.4s ease-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 8rem;
`;

export const Logo = styled(Image)`
  width: auto;
  height: 4rem;
`;

export const MenuContainer = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: auto;
  margin: 0 4rem;
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;

  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary.dark};
  font-size: 1.6rem;

  text-decoration: none;

  & + a {
    margin-left: 1.6rem;
  }

  ${(props) => css`
    &:hover {
      color: ${shade(0.3, props.theme.colors.primary.dark)};
    }
  `}
`;

export const MenuRight = styled.div`
  display: flex;

  width: auto;
  height: auto;

  margin-right: 2.4rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 3.2rem;

  border-radius: 2.4rem;
  padding: 1.6rem;

  background: transparent;

  border: 1px solid ${(props) => props.theme.colors.primary.dark};

  cursor: pointer;

  transition: all 0.2s ease;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary.dark};
  }

  &:hover {
    background: ${(props) => props.theme.backgrounds.primary.dark};
    border: 1px solid ${(props) => props.theme.backgrounds.primary.dark};

    a {
      color: ${(props) => props.theme.colors.primary.light};
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const MenuMobile = styled.button`
  cursor: pointer;
  background: none;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
