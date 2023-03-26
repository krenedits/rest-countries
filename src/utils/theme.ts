import { createTheme } from '@mui/material/styles';
const theme = {
    light: createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: 'hsl(0, 0%, 100%)',
            },
            background: {
                default: 'hsl(0, 0%, 98%)',
                paper: 'hsl(0, 0%, 100%)',
            },
        },
        typography: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeightRegular: 300,
            fontWeightMedium: 600,
            fontWeightBold: 800,
        },
    }),
    dark: createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: 'hsl(0, 0%, 100%)',
            },
            background: {
                default: 'hsl(207, 26%, 17%)',
                paper: 'hsl(209, 23%, 22%)',
            },
        },
        typography: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeightRegular: 300,
            fontWeightMedium: 600,
            fontWeightBold: 800,
        },
    }),
};

export default theme;
