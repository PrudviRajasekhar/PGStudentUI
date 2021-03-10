import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blueGrey,  pink, teal } from "@material-ui/core/colors";
import MainRouter from './MainRouter';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
