import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4f46e5', // Indigo primary
      light: '#6366f1',
      dark: '#3730a3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0891b2', // Cyan secondary
      light: '#06b6d4',
      dark: '#0e7490',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafaf9', // Light warm cream background
      paper: '#ffffff',   // White panels
    },
    text: {
      primary: '#0f172a', // Dark charcoal/slate
      secondary: '#475569', // Slate gray
    },
    action: {
      hover: 'rgba(79, 70, 229, 0.04)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Outfit", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px 0 rgba(79, 70, 229, 0.25)',
          },
        },
        containedSecondary: {
          boxShadow: '0 4px 14px 0 rgba(8, 145, 178, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(8, 145, 178, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 16,
          border: '1px solid rgba(0, 0, 0, 0.05)',
          backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))',
          boxShadow: '0 10px 30px -15px rgba(0,0,0,0.06)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            border: '1px solid rgba(79, 70, 229, 0.15)',
            boxShadow: '0 20px 40px -15px rgba(79, 70, 229, 0.12)',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
