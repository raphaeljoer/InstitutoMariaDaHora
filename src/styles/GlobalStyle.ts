import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
    transition: all ease-in-out 0.5s;
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
    color: ${(props) => props.theme.colors.primary.dark};
    background: ${(props) => props.theme.backgrounds.primary.light};

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;

    min-height: 100vh;
    scroll-behavior: smooth;
  }

  body, input, button, textarea {
    font-family: ${(props) => props.theme.fonts.default};
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
  }

  @media screen and (max-width: 700px) {
    :root {
      font-size: 65%;
    }
  }
`;
