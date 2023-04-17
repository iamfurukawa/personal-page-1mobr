import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500&display=swap');

  #root,
  html,
  body {
    padding: 0;
    margin: 0;

    width: 100vw;
    height: 100vh;

    box-sizing: border-box;
    
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;

    font-family: 'Source Code Pro', monospace;
  }

  body {
    background-image: url('/background.jpg');
    background-size: cover;
  }

  p {
    font-weight: bold;
    font-size: larger;
  }
`;

export default GlobalStyles;