// src/theme.js
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#dc004e',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: '#000000',
            paper: '#1c1c1c',
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default theme;
