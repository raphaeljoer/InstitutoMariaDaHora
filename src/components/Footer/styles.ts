import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  color: ${(props) => props.theme.color.text.body2};
  background: #f0f5f6;
`;

export const Menu = styled.div`
  padding: 2.4rem 0;
`;

export const MenuContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-column-gap: 2.4rem;

  font-size: 1.4rem;
  margin: 0 2.4rem;
  padding-bottom: 4rem;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    margin: 0 5.6rem;
  }
`;

export const List = styled.ul`
  margin-top: 4rem;

  li {
    list-style: none;
    color: ${(props) => props.theme.color.text.body1};

    a {
      color: ${(props) => props.theme.color.text.body1};
      text-decoration: none;
    }

    a:hover {
      border-bottom: 3px solid;
    }
  }

  li:first-child {
    h4 {
      font-size: 1.6rem;
      font-weight: 700;
    }
    margin-bottom: 2.4rem;
  }

  li + li {
    margin-top: 1.6rem;
  }
`;

export const Info = styled.div`
  color: ${(p) => p.theme.color.text.body1};
  background: #ecf2f4;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-gap: 2.4rem;

  padding: 4rem 0;

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const InfoContent = styled.div`
  display: flex;

  width: 80%;
  margin: 0 2.4rem;

  p {
    line-height: 150%;
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    margin: 0 5.6rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0 2.4rem;

  svg {
    width: 2.4rem;
    height: auto;
  }

  svg + svg {
    margin-left: 2.4rem;
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    margin: 0 5.6rem;
    justify-content: flex-end;
  }
`;

export const Scroll = styled.div`
  position: absolute;
  top: 0;
  left: 50%;

  width: 14.5rem;
  height: 3.7rem;

  transform: translateX(-50%) translateY(-99%);
`;
