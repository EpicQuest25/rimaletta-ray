import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo cosmic
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06b6d4', // Cyan electric
      light: '#22d3ee',
      dark: '#0891b2',
      contrastText: '#0f172a',
    },
    background: {
      default: '#070715', // Midnight cosmos
      paper: '#0f1026',   // Cosmic glass/paper
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    action: {
      hover: 'rgba(99, 102, 241, 0.08)',
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
          boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.2)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.4)',
          },
        },
        containedSecondary: {
          boxShadow: '0 4px 14px 0 rgba(6, 182, 212, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(6, 182, 212, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f1026',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.05)',
          backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))',
          boxShadow: '0 10px 30px -15px rgba(0,0,0,0.7)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.15)',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
