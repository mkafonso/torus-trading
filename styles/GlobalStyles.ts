import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Assistant', Arial, Helvetica, sans-serif;
  }

  li {
    list-style: none;
  }

  *::selection {
    background: #FA617B;
    color: #f3f5f8;
  }

  html {
    min-height: 100%;
    background: var(--primary);
    color: var(--background);
  }

  button, input {
    border: 0;
    background: none;
    color: var(--primary);
    transition: color .2s ease-out;
  }

  a {
    text-decoration: none;
  }

  input, textarea {
    font-size: 16px;
  }

  span, p ,a, svg {
    color: var(----secondary);
  }

  :root {
    --background: #f3f5f8;

    --primary: #1b1f23;
    --secondary: #4D4D4D;

    --success: #7cd27b;
    --error: #f9826c;
    --pending: #e59d27;
  }
`;
