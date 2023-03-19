import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: 'hsl(0, 0%, 100%)',
        },
    },
    // font
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontWeightRegular: 300,
        fontWeightMedium: 600,
        fontWeightBold: 800,
    },
});

export default theme;
