import styled from 'styled-components';

export const Container = styled.main``;

export const About = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'info'
    'media';

  width: 100%;
  height: auto;

  background: ${(props) => props.theme.backgrounds.primary.light};

  padding: 4rem 0;

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'info media';

    padding: 5% 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 0 2.4rem;
`;

export const Info = styled.article`
  grid-area: info;

  width: auto;
  height: auto;

  h2 {
    font-size: 2.4rem;
    max-width: 80%;
    color: #222;
    font-weight: 400;
  }

  ul {
    margin-top: 3.2rem;

    li {
      display: flex;
      align-items: center;

      list-style: none;

      font-size: 1.8rem;
      font-weight: 500;

      svg {
        margin-left: 0.8rem;
      }

      & + li {
        margin-top: 0.8rem;
      }
    }
  }

  @media ${(props) => props.theme.device.mobile.midle} {
    h2 {
      font-size: 3.2rem;
      max-width: 90%;
      font-weight: 400;
    }
  }

  @media ${(props) => props.theme.device.mobile.large} {
    h2 {
      font-size: 3.6rem;
      max-width: 90%;
      font-weight: 400;
    }
  }

  @media ${(props) => props.theme.device.tablet} {
    h2 {
      font-size: 3.8rem;
      max-width: 90%;
      font-weight: 400;
    }

    ul {
      li {
        font-size: 2.1rem;
      }
    }
  }

  @media ${(props) => props.theme.device.tablet} {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 60vh;

    h2 {
      max-width: 56rem;
    }

    ul {
      align-self: flex-start;
    }
  }
`;

export const MediaContainer = styled.div`
  grid-area: media;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: auto;

  padding: 50% 0;
  margin: 4rem 0;

  img {
    object-fit: cover !important;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin: 4rem;
    padding: 30% 0;

    max-height: 100%;

    img {
      object-fit: contain !important;
    }
  }
`;

export const Projects = styled.section`
  width: 100%;
  height: auto;

  padding: 4rem 2.4rem;

  background: ${({ theme }) => theme.backgrounds.primary.dark};

  @media ${({ theme }) => theme.device.tablet} {
    padding: max(8rem, 8vw) max(4.8rem, 4.8vw);
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'header'
    'projects';
`;

export const HeaderProjects = styled.div`
  grid-area: header;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: max(4.8rem, 5vw);
    color: ${({ theme }) => theme.colors.secundary.dark};
  }

  span {
    max-width: 90%;
    font-size: max(2.4rem, 2.4vw);
    line-height: 130%;
    margin-top: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secundary.light};
  }

  @media ${({ theme }) => theme.device.tablet} {
    h2 {
      font-size: max(4.8rem, 4.8vw);
    }

    span {
      font-size: max(2.4rem, 2.4vw);
    }
  }

  @media ${({ theme }) => theme.device.desktop.small} {
    h2 {
      font-size: max(5.6rem, 3.2vw);
    }

    span {
      max-width: 80rem;
      font-size: max(2.4rem, 2.4vw);
    }
  }
`;

export const ListProjects = styled.div`
  grid-area: projects;

  display: flex;
  flex-direction: column;

  margin: 2.4rem 0;
  width: 100%;
  height: auto;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Project = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 40rem;

  margin-top: max(4rem, 4vw);
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.backgrounds.primary.light};

  @media ${({ theme }) => theme.device.tablet} {
    width: 47.5%;
  }

  @media ${({ theme }) => theme.device.desktop.small} {
    width: 31%;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 20rem;

  border-radius: 0.8rem 0.8rem 0 0;
  overflow: hidden;

  background: black;
`;

export const ProjectTitle = styled.h2`
  font-size: max(2.4rem, 4.8vw);
  font-weight: 700;
  line-height: 125%;

  margin: 2.4rem;
  color: #333;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: max(2.4rem, 2.4vw);
  }

  @media ${({ theme }) => theme.device.desktop.small} {
    font-size: max(2.4rem, 1.6vw);
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 2.4rem 2.4rem 2.4rem;

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: max(1.8rem, 2.8vw);
      color: ${({ theme }) => theme.colors.secundary.dark};
    }

    span {
      font-size: max(1.6rem, 2.6vw);
      margin-top: 0.8rem;
      color: #333;
      font-weight: 500;
    }
  }

  svg {
    width: max(2.4rem, 3.4vw);
    height: max(2.4rem, 3.4vw);
    color: ${({ theme }) => theme.colors.secundary.dark};
  }

  @media ${({ theme }) => theme.device.tablet} {
    div {
      strong {
        font-size: max(1.8rem, 1.8vw);
      }

      span {
        font-size: max(1.6rem, 1.6vw);
      }
    }

    svg {
      width: max(2.4rem, 2.8vw);
      height: max(2.4rem, 2.8vw);
    }
  }

  @media ${({ theme }) => theme.device.desktop.small} {
    div {
      strong {
        font-size: max(1.8rem, 1.2vw);
      }

      span {
        font-size: max(1.6rem, 1vw);
      }
    }

    svg {
      width: max(2.4rem, 2.2vw);
      height: max(2.4rem, 2.2vw);
    }
  }
`;
