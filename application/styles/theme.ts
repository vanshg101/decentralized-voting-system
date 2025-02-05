import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, red } from '@mui/material/colors';

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
});

// Create a subtle and simple theme
const theme = createTheme({
    palette: {
        background: {
            default: '#F4F6F8', // Soft off-white background
            paper: '#FFFFFF', // Clean white for cards
        },
        primary: {
            main: blueGrey[700], // Muted blue-gray for a subtle primary color
            light: blueGrey[500],
            dark: blueGrey[900],
        },
        secondary: {
            main: grey[600], // Neutral gray for accents
            light: grey[400],
            dark: grey[800],
        },
        error: {
            main: red.A400, // Keeping a strong error color for contrast
        },
        text: {
            primary: '#333', // Dark gray for readability
            secondary: '#666', // Softer gray for subtle elements
        },
    },
    typography: {
        fontFamily: montserrat.style.fontFamily,
        h1: { fontWeight: 600, fontSize: '2rem' },
        h2: { fontWeight: 500, fontSize: '1.75rem' },
        h3: { fontWeight: 500, fontSize: '1.5rem' },
        body1: { fontWeight: 400, fontSize: '1rem' },
        button: { textTransform: 'none', fontWeight: 500 },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    padding: '8px 16px',
                    fontSize: '0.95rem',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '12px',
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme;
