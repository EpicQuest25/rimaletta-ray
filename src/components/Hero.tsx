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
        background: 'radial-gradient(circle at 50% 30%, #0c0b24 0%, #070715 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Glows */}
      <Box className="cosmic-glow-indigo" sx={{ top: '10%', left: '10%' }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '15%', right: '5%' }} />
      <Box className="cosmic-glow-violet" sx={{ top: '40%', right: '15%' }} />

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
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#818cf8', fontSize: '1.1rem' }} />
                <Typography variant="body2" sx={{ color: '#a5b4fc', fontWeight: 600, letterSpacing: '0.05em' }}>
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
                  background: 'rgba(251, 191, 36, 0.08)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                }}
              >
                <Box component="span" sx={{ color: '#fbbf24', fontSize: '1rem', lineHeight: 1 }}>★</Box>
                <Typography variant="body2" sx={{ color: '#fef08a', fontWeight: 700, letterSpacing: '0.05em' }}>
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
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Holistic System of <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(45deg, #6366f1 30%, #a855f7 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
                }}
              >
                Self-Resurrection
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#94a3b8',
                fontWeight: 400,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
                mb: 4,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              In three time-pursuing cycles, presented by Dr. Ray as:{' '}
              <Box component="span" sx={{ color: '#fbbf24', fontWeight: 600 }}>Auto-Suggestive</Box>,{' '}
              <Box component="span" sx={{ color: '#22d3ee', fontWeight: 600 }}>Digital</Box>, and{' '}
              <Box component="span" sx={{ color: '#c084fc', fontWeight: 600 }}>Quantum Psychology</Box> for Self-Ecology.
            </Typography>

            {/* Prominent slogan "WOW! We live NOW!" */}
            <Box
              sx={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.15) 100%)',
                border: '2px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)',
                borderRadius: '16px',
                px: 4,
                py: 2,
                mb: 5,
                transform: 'rotate(-1deg)',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'rotate(0deg) scale(1.02)',
                  borderColor: 'rgba(6, 182, 212, 0.5)',
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                },
              }}
            >
              <Typography variant="body2" sx={{ color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.5, fontWeight: 700, fontSize: '0.8rem' }}>
                United by the mindset
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: '1.8rem', sm: '2.5rem' },
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(45deg, #f59e0b 0%, #ec4899 50%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                WOW! We live NOW!
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleScroll('#books')}
                sx={{
                  background: 'linear-gradient(45deg, #6366f1 0%, #4f46e5 100%)',
                  color: '#white',
                }}
              >
                Explore The Books
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleScroll('#intro')}
                endIcon={<ArrowDownwardIcon />}
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  '&:hover': {
                    borderColor: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Glowing Human Fractal Visualizer */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: 400,
                height: 400,
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
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.01) 70%)',
                  border: '1px solid rgba(255, 255, 255, 0.02)',
                  pointerEvents: 'none',
                }}
              />

              {/* Core Glowing Fractal / Molecule visual */}
              <Box
                sx={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)',
                  boxShadow: '0 0 50px rgba(6, 182, 212, 0.6), 0 0 100px rgba(99, 102, 241, 0.3)',
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
                  border: '1px dashed rgba(255, 255, 255, 0.1)',
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
                  border: '1px solid rgba(255, 255, 255, 0.05)',
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
