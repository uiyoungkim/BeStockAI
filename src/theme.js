import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            10: '#0b0c0d',
            20: '#212326',
            30: '#373b40',
            35: '#40444a',
            40: '#4d5259',
            50: '#646a73',
            main: '#000000',
        },
        accent: {
            20: '#345057',
            30: '#537f8a',
            40: '#71aebd',
            50: '#90ddf0',
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
