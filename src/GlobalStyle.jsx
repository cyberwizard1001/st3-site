import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f1f8f5;
    color: #214734;
    margin: 0;
    font-family: 'Montserrat', Arial, sans-serif;
    min-height: 100vh;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #179b4a;
    font-family: 'Montserrat', Arial, sans-serif;
    margin-top: 0.8em;
    margin-bottom: 0.5em;
  }
  ul, p {
    color: #214734;
    font-size: 1.08rem;
    line-height: 1.6;
  }
  a {
    color: #179b4a;
    text-decoration: none;
  }
`;

export default GlobalStyle;
