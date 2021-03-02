import React from 'react';
import Hero from './components/hero/Hero';
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";


export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Hero/>
      </ThemeProvider>
    </>
  )
}


