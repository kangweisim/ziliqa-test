import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from 'history';
import React from "react";
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import './mixins/moment';
import './mixins/validate';
import routes from "./routes";
import theme from "./theme";

const history = createBrowserHistory();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
}

export default App;
