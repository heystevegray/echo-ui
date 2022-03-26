import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        fontWeightHeavy: number;
    }
    interface TypographyOptions {
        fontWeightHeavy: number;
    }
}

const THEME: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#00e4ff',
        },
        secondary: {
            main: '#0066ff',
        },
        error: {
            main: '#ff1900',
        },
        background: {
            default: '#000',
            paper: '#050505',
        },
    },
};

// const theme = responsiveFontSizes(createTheme(THEME));
const theme = createTheme(THEME);

export default theme;
