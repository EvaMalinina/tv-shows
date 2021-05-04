import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch, Redirect
} from 'react-router-dom';
import Home from './components/home/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Provider } from 'react-redux';
import initialStore from './store/store';
import ErrorPage from "./components/errorPage/ErrorPage";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Provider store={initialStore}>
          <GlobalStyles/>
          <ThemeProvider theme={theme}>
            <Route
                exact
                path="/"
                component={Home}
            />
            <Route
                exact
                path="/movie/:id"
                component={Home}
            />
            <Route
                exact
                path="/search/:titleValue"
                component={Home}
            />
            <Route
                exact
                path="*"
                component={ErrorPage}
            />

          </ThemeProvider>
        </Provider>
      </Switch>
    </Router>
  )
}


