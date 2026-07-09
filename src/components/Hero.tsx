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
        background: '#c999f7',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Glows */}
      <Box className="cosmic-glow-indigo" sx={{ top: '10%', left: '10%', opacity: 0.18 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '15%', right: '5%', opacity: 0.18 }} />
      <Box className="cosmic-glow-violet" sx={{ top: '40%', right: '15%', opacity: 0.18 }} />

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
                  background: 'rgba(255, 255, 255, 0.55)',
                  border: '1px solid rgba(2, 132, 199, 0.4)',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.1)',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#000000', fontSize: '1.1rem' }} />
                <Typography variant="body2" sx={{ color: '#000000', fontWeight: 800, letterSpacing: '0.05em' }}>
                  THE ODYSSEY OF SELF-RESURRECTION!
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
                  background: 'rgba(255, 255, 255, 0.55)',
                  border: '1px solid rgba(217, 119, 6, 0.4)',
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.1)',
                }}
              >
                <Box component="span" sx={{ color: '#b45309', fontSize: '1rem', lineHeight: 1 }}>★</Box>
                <Typography variant="body2" sx={{ color: '#b45309', fontWeight: 800, letterSpacing: '0.05em' }}>
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
                color: '#1e1b4b',
              }}
            >
              <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 900 }}>Holistic</Box>{' '}
              <Box component="span" sx={{ color: '#dc2626', fontWeight: 900 }}>System</Box>{' '}of{' '}<br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(45deg, #4f46e5 30%, #0891b2 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Box component="span" sx={{ color: '#dc2626', WebkitTextFillColor: '#dc2626', fontWeight: 900 }}>Self</Box><Box component="span" sx={{ color: '#1d4ed8', WebkitTextFillColor: '#1d4ed8', fontWeight: 900 }}>-Resurrection</Box><Box component="span" sx={{ color: '#dc2626', WebkitTextFillColor: '#dc2626', fontWeight: 900 }}>!</Box>
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#374151',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
                mb: 4,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              In three time-pursuing cycles, presented by Dr. Ray as:{' '}
              <Box component="span" sx={{ color: '#dc2626', fontWeight: 900 }}>Auto-Suggestive</Box>,{' '}
              <Box component="span" sx={{ color: '#0369a1', fontWeight: 900 }}>Digital</Box>, and{' '}
              <Box component="span" sx={{ color: '#3b0764', fontWeight: 900 }}>Quantum Psychology</Box> for Self-Ecology.
            </Typography>

            <Box
              sx={{
                display: 'inline-block',
                mb: 5,
                p: '2px',
                borderRadius: '16px',
                background: 'linear-gradient(45deg, #b45309, #be185d, #4338ca)',
              }}
            >
              <Box
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.8rem', sm: '2.5rem' },
                    letterSpacing: '0.02em',
                    background: 'linear-gradient(45deg, #b45309 0%, #be185d 50%, #4338ca 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Wow! <Box component="span" sx={{ fontSize: '0.8em', fontWeight: 800 }}>We Live</Box> Now!
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
                  background: 'linear-gradient(45deg, #6366f1 0%, #06b6d4 100%)',
                  color: '#ffffff',
                  px: 4.5,
                  py: 2,
                  borderRadius: '30px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: '0 10px 25px rgba(6, 182, 212, 0.25)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #4f46e5 0%, #06b6d4 100%)',
                    boxShadow: '0 12px 30px rgba(6, 182, 212, 0.35)',
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
                  borderColor: '#1e1b4b',
                  color: '#1e1b4b',
                  borderWidth: '2px',
                  px: 4,
                  py: 2,
                  borderRadius: '30px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#1e1b4b',
                    borderWidth: '2px',
                    background: 'rgba(30, 27, 75, 0.07)',
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
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              mt: { xs: 6, md: 0 },
              pl: { md: 4 },
            }}
          >
            {/* Soul-Symmetry Formula */}
            <Box sx={{ textAlign: 'center', mb: 3, width: '100%' }}>
              <Typography
                component="div"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.82rem' },
                  letterSpacing: '0.03em',
                  lineHeight: 1.6,
                  fontFamily: '"Outfit", sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                <Box component="span" sx={{ color: '#16a34a', fontWeight: 900 }}>BODY</Box>
                {' + '}
                <Box component="span" sx={{ color: '#dc2626', fontWeight: 900 }}>SPIRIT</Box>
                {' + '}
                <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 900 }}>MIND</Box>
                {' + '}
                <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>SELF-CONSCIOUSNESS</Box>
                {' + '}
                <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>SUPER-CONSCIOUSNESS</Box>
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                  fontFamily: '"Outfit", sans-serif',
                  color: '#000000',
                  letterSpacing: '0.03em',
                  textAlign: 'center',
                }}
              >
                = SOUL-SYMMETRY!
              </Typography>
            </Box>

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
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.01) 70%)',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  pointerEvents: 'none',
                }}
              />

              {/* Core Glowing Fractal / Molecule visual */}
              <Box
                sx={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                  boxShadow: '0 0 50px rgba(6, 182, 212, 0.5), 0 0 100px rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 900,
                    color: '#dc2626',
                    textShadow: '0 0 8px #ffffff, 0 0 16px #ffffff, 1px 1px 0 #ffffff, -1px -1px 0 #ffffff',
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
                  border: '1.5px dashed rgba(0, 0, 0, 0.35)',
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
                    border: '1px solid #fbbf24',
                    boxShadow: '0 0 15px rgba(251, 191, 36, 0.25)',
                    background: '#070715',
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
                  <Typography variant="body2" sx={{ color: '#fbbf24', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
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
                  border: '1.5px solid rgba(0, 0, 0, 0.25)',
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
                    border: '1px solid #a855f7',
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.25)',
                    background: '#070715',
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
                  <Typography variant="body2" sx={{ color: '#c084fc', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
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
                  border: '1.5px solid rgba(0, 0, 0, 0.25)',
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
                    border: '1px solid #22d3ee',
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.25)',
                    background: '#070715',
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
                  <Typography variant="body2" sx={{ color: '#22d3ee', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em' }}>
                    Digital
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Dimensions label below orbit */}
            <Box sx={{ textAlign: 'center', mt: 3, width: '100%' }}>
              <Typography
                component="div"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.82rem' },
                  letterSpacing: '0.03em',
                  color: '#000000',
                  fontFamily: '"Outfit", sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                PHYSICAL + EMOTIONAL + MENTAL + SPIRITUAL + UNIVERSAL DIMENSIONS!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
