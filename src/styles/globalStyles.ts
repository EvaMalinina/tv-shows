import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    border: none;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #555;
    margin: 0;
    position: relative;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  p {
    margin: 0;
  }
`
