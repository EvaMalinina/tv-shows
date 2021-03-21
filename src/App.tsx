import React from 'react';
import Home from './components/home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Provider } from 'react-redux';
import initialStore from './store/store';


export const App = () => {
  return (
    <>
      <Provider store={initialStore}>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      </Provider>
    </>
  )
}


