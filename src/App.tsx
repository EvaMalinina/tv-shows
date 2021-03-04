import React from 'react';
import Home from './components/home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";


export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </>
  )
}


