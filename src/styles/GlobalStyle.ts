import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${(props) => props.theme.color.text.body1};
    background: ${(props) => props.theme.color.background.light1};

    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;

    min-height: 100vh;
    scroll-behavior: smooth;
  }

  h1,h2,h3,h4,h4,h6 {
    font-family: ${(props) => props.theme.font.title};
  }

  body, input, textarea {
    font-family: ${(props) => props.theme.font.body};
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
    background: none;
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.font.title};
  }

  @media ${(props) => props.theme.breakpoint.desktop.midle} {
    :root {
      font-size: 70.5%;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1135px) {
    :root {
      font-size: 60%;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 959px) {
    :root {
      font-size: 55%;
    }
  }

  @media screen and (max-width: 324px) {
    :root {
      font-size: 60%;
    }
  }

  @media screen and (max-width: 310px) {
    :root {
      font-size: 56%;
    }
  }

  @media screen and (max-width: 300px) {
    :root {
      font-size: 55%;
    }
  }

  @media screen and (max-width: 290px) {
    :root {
      font-size: 50%;
    }
  }

`;
