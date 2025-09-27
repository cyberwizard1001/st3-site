import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background: linear-gradient(135deg, #fafbff 0%, #f8fafc 100%);
    color: #334155;
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    min-height: 100vh;
    font-feature-settings: 'kern' 1, 'liga' 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #1e293b;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }
  
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.05em;
  }
  
  h2 {
    font-size: 1.875rem;
    font-weight: 600;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  ul, p {
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.65;
    margin-bottom: 1rem;
  }
  
  a {
    color: #0f766e;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #0d9488;
    }
  }
  
  button {
    font-family: inherit;
  }
  
  /* Remove default button styles */
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
