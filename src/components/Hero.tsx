import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { AutoAwesome as AutoAwesomeIcon, ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #0ea5e9 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Glows */}
      <Box className="cosmic-glow-indigo" sx={{ top: '10%', left: '10%', opacity: 0.4 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '15%', right: '5%', opacity: 0.4 }} />
      <Box className="cosmic-glow-violet" sx={{ top: '40%', right: '15%', opacity: 0.4 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.08)',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#0284c7', fontSize: '1.1rem' }} />
                <Typography variant="body2" sx={{ color: '#0284c7', fontWeight: 800, letterSpacing: '0.05em' }}>
                  THE ODYSSEY OF SELF-RESURRECTION
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(217, 119, 6, 0.3)',
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.08)',
                }}
              >
                <Box component="span" sx={{ color: '#d97706', fontSize: '1rem', lineHeight: 1 }}>★</Box>
                <Typography variant="body2" sx={{ color: '#d97706', fontWeight: 800, letterSpacing: '0.05em' }}>
                  5-TIME AWARD-WINNING SCHOLAR & AUTHOR
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
                lineHeight: 1.1,
                mb: 3,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Holistic System of <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(45deg, #4f46e5 30%, #0891b2 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(79, 70, 229, 0.15)',
                }}
              >
                Self-Resurrection
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#172554',
                fontWeight: 750,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
                mb: 4,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              In three time-pursuing cycles, presented by Dr. Ray as:{' '}
              <Box component="span" sx={{ color: '#d97706', fontWeight: 900 }}>Auto-Suggestive</Box>,{' '}
              <Box component="span" sx={{ color: '#0369a1', fontWeight: 900 }}>Digital</Box>, and{' '}
              <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>Quantum Psychology</Box> for Self-Ecology.
            </Typography>

            {/* Prominent slogan "Wow! we live Now!" */}
            <Box
              sx={{
                display: 'inline-block',
                mb: 5,
                p: '2px',
                borderRadius: '16px',
                background: 'linear-gradient(45deg, #d97706, #ec4899, #4f46e5)',
              }}
            >
              <Box
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.8rem', sm: '2.5rem' },
                    color: '#ffffff',
                    letterSpacing: '0.02em',
                    background: 'linear-gradient(45deg, #d97706 0%, #ec4899 50%, #4f46e5 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Wow! <Box component="span" sx={{ fontSize: '0.8em', textTransform: 'lowercase', fontWeight: 800 }}>we live</Box> Now!
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2.5,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleScroll('#books')}
                sx={{
                  background: 'linear-gradient(45deg, #4f46e5 0%, #0891b2 100%)',
                  color: '#ffffff',
                  px: 4.5,
                  py: 2,
                  borderRadius: '30px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: '0 10px 25px rgba(8, 145, 178, 0.25)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #3730a3 0%, #0891b2 100%)',
                    boxShadow: '0 12px 30px rgba(8, 145, 178, 0.35)',
                  },
                }}
              >
                Explore System Grid
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleScroll('#author')}
                endIcon={<ArrowDownwardIcon />}
                sx={{
                  borderColor: '#1e3a8a',
                  color: '#1e3a8a',
                  borderWidth: '2px',
                  px: 4,
                  py: 2,
                  borderRadius: '30px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#172554',
                    borderWidth: '2px',
                    background: 'rgba(30, 58, 138, 0.05)',
                  },
                }}
              >
                About Dr. Ray
              </Button>
            </Box>
          </Grid>

          {/* Orbiting Fractal Molecules Visualizer */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              mt: { xs: 6, md: 0 },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '380px',
                height: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: { xs: 'scale(0.75)', sm: 'scale(0.9)', md: 'scale(1)' },
                transition: 'all 0.3s ease',
              }}
            >
              {/* Center Glow Backdrop */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  pointerEvents: 'none',
                }}
              />

              {/* Core Glowing Fractal / Molecule visual */}
              <Box
                sx={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3730a3 0%, #0891b2 100%)',
                  boxShadow: '0 0 40px rgba(8, 145, 178, 0.3), 0 0 80px rgba(79, 70, 229, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 900,
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    letterSpacing: '0.08em',
                  }}
                >
                  HUMAN
                  <br />
                  FRACTAL
                </Typography>
              </Box>

              {/* Outer Orbit Path (Auto-Suggestive) */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(255, 255, 255, 0.65)',
                  animation: 'spin-orbit-outer 30s linear infinite',
                  '@keyframes spin-orbit-outer': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
                }}
              >
                {/* Auto-Suggestive Capsule */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-18px',
                    left: 'calc(50% - 70px)',
                    width: 140,
                    height: 36,
                    borderRadius: '18px',
                    border: '1px solid #d97706',
                    boxShadow: '0 0 15px rgba(217, 119, 6, 0.15)',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'spin-counter-outer 30s linear infinite',
                    '@keyframes spin-counter-outer': {
                      '0%': { transform: 'rotate(360deg)' },
                      '100%': { transform: 'rotate(0deg)' }
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#d97706', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    Auto-Suggestive
                  </Typography>
                </Box>
              </Box>

              {/* Middle Orbit Path (Quantum) */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.45)',
                  animation: 'spin-orbit-middle 22s linear infinite',
                  '@keyframes spin-orbit-middle': {
                    '0%': { transform: 'rotate(120deg)' },
                    '100%': { transform: 'rotate(480deg)' }
                  }
                }}
              >
                {/* Quantum Capsule */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 'calc(50% - 18px)',
                    right: '-45px',
                    width: 90,
                    height: 36,
                    borderRadius: '18px',
                    border: '1px solid #9333ea',
                    boxShadow: '0 0 15px rgba(147, 51, 234, 0.15)',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'spin-counter-middle 22s linear infinite',
                    '@keyframes spin-counter-middle': {
                      '0%': { transform: 'rotate(-120deg)' },
                      '100%': { transform: 'rotate(-480deg)' }
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#9333ea', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    Quantum
                  </Typography>
                </Box>
              </Box>

              {/* Inner Orbit Path (Digital) */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  animation: 'spin-orbit-inner 16s linear infinite',
                  '@keyframes spin-orbit-inner': {
                    '0%': { transform: 'rotate(240deg)' },
                    '100%': { transform: 'rotate(-120deg)' }
                  }
                }}
              >
                {/* Digital Capsule */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 'calc(50% - 18px)',
                    left: '-45px',
                    width: 90,
                    height: 36,
                    borderRadius: '18px',
                    border: '1px solid #0891b2',
                    boxShadow: '0 0 15px rgba(8, 145, 178, 0.15)',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'spin-counter-inner 16s linear infinite',
                    '@keyframes spin-counter-inner': {
                      '0%': { transform: 'rotate(-240deg)' },
                      '100%': { transform: 'rotate(120deg)' }
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#0891b2', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    Digital
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
