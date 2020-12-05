import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
    color: #554d89;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;

    min-height: 100vh;
    scroll-behavior: smooth;
    line-height: 1.5;
  }

  body, input , button {
    font-family: 'Poppins', sans-serif;
    font-size:16px;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
    }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  };
