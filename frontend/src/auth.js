import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './auth/App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500]
        },
        secondary: {
            main: orange[500]
        }
    },
    typography: {
        fontSize: 16,
        htmlFontSize: 16
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
, document.getElementById('auth'));
