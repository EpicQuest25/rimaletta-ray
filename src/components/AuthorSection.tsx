import { Box, Typography, Container, Grid } from '@mui/material';
import { LibraryMusic as LibraryMusicIcon, School as SchoolIcon } from '@mui/icons-material';

// Image imports
import authorPhoto from '../assets/downloaded/rimeletta_ray_profile_pic.jpg';

export default function AuthorSection() {
  return (
    <Box
      id="author"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(circle at 10% 20%, #070715 0%, #0d0c24 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box className="cosmic-glow-cyan" sx={{ top: '30%', left: '-15%' }} />
      <Box className="cosmic-glow-indigo" sx={{ bottom: '15%', right: '-15%' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Vygotsky Quote */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#e2e8f0',
              lineHeight: 1.5,
              maxWidth: '800px',
              mx: 'auto',
              position: 'relative',
              px: { xs: 2, sm: 6 },
              '&::before': {
                content: '"“"',
                position: 'absolute',
                left: 0,
                top: -20,
                fontSize: '5rem',
                color: '#6366f1',
                opacity: 0.3,
                fontFamily: 'serif',
              },
              '&::after': {
                content: '"”"',
                position: 'absolute',
                right: 0,
                bottom: -40,
                fontSize: '5rem',
                color: '#6366f1',
                opacity: 0.3,
                fontFamily: 'serif',
              }
            }}
          >
            Don’t teach just a subject. Teach the whole person!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#818cf8', fontWeight: 600, mt: 2 }}>
            — LEO VYGOTSKY
          </Typography>
        </Box>

        {/* Biography & Photo */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                width: { xs: '280px', sm: '350px' },
                height: { xs: '380px', sm: '460px' },
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, #070715 100%)',
                  zIndex: 1,
                }
              }}
            >
              <img
                src={authorPhoto}
                alt="Dr. Rimaletta Ray"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <SchoolIcon sx={{ color: '#22d3ee' }} />
              <Typography variant="subtitle2" sx={{ color: '#22d3ee', fontWeight: 700, letterSpacing: '0.05em' }}>
                PROFESSOR OF PSYCHOLINGUISTICS & AUTHOR
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                mb: 4,
                fontSize: { xs: '2.2rem', sm: '2.8rem' },
                color: '#ffffff',
              }}
            >
              Meet Dr. Rimaletta Ray
            </Typography>

            <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, lineHeight: 1.8 }}>
              Originally from Riga, Latvia, <strong>Dr. Rimaletta Ray</strong> earned her doctorate from the prestigious
              Academy of Sciences, Moscow Brain Institute. Dr. Ray has worked in different colleges and universities in the USA
              for 30 years, including the University of Connecticut (UCONN) and Norwalk Community College (NCC), and is a member
              of the Psycholinguistic Association in Berlin.
            </Typography>

            <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, lineHeight: 1.8 }}>
              Dr. Ray believes that education should be inseparable from inspiration and personality-formation as the
              indispensable skills that need to be developed from birth and that should be the core of any professional training.
              Her books represent a synthesis of lifetime research, avid reading, and consistent self-refining.
            </Typography>

            <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 4, lineHeight: 1.8 }}>
              She has tested the validity of her <strong>System of Holistic Self-Resurrection</strong> with her students,
              who utilize it as a <strong>Manual of Life</strong> that provides a clear-cut plan of action and mind + heart
              enhancement for their personal and professional <strong>SELF-INSTALLATION</strong>.
            </Typography>

            {/* Internalize Mindset Slogan */}
            <Box
              sx={{
                p: 3,
                borderRadius: '16px',
                background: 'linear-gradient(to right, rgba(99,102,241,0.08), rgba(255,255,255,0.01))',
                borderLeft: '4px solid #6366f1',
              }}
            >
              <Typography variant="subtitle2" sx={{ color: '#818cf8', fontWeight: 700, mb: 1, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Dr. Ray’s Philosophy
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontStyle: 'italic', fontWeight: 600, color: '#ffffff' }}>
                “Internalize Your Emotions and Externalize the Mind. Be One of a Kind!”
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Life-Intelligent Banner Slogan */}
        <Box
          sx={{
            py: 4,
            px: 6,
            borderRadius: 4,
            border: '1px solid rgba(34,211,238,0.2)',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(15,16,38,0.9) 100%)',
            textAlign: 'center',
            mb: 12,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              color: '#ffffff',
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            Don’t Be Life-Negligent. Be{' '}
            <Box component="span" sx={{ color: '#22d3ee', textShadow: '0 0 15px rgba(34,211,238,0.3)' }}>
              Life-Intelligent!
            </Box>
          </Typography>
        </Box>

        {/* AUDIO WORK SECTION */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              mb: 2,
              color: '#ffffff',
            }}
          >
            Audio Work & Podcast
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#94a3b8', maxWidth: '650px', mx: 'auto', mb: 6 }}
          >
            Listen to Dr. Rimaletta Ray’s spoken audio programs, meditations, and mental lectures designed to align
            your vibrational frequencies.
          </Typography>

          <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
            {/* Podcast Player Embed */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: '#0e0e24',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  height: '420px',
                }}
              >
                <iframe
                  src="https://player.captivate.fm/show/7ac95db0-c4e8-499d-aca1-eb84a6755710"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="Dr. Rimaletta Ray Audio Podcast"
                  frameBorder="no"
                  scrolling="no"
                  allow="clipboard-write"
                  seamless
                />
              </Box>
            </Grid>

            {/* Audio Slogans */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(15,16,38,0.9) 100%)',
                  border: '1px solid rgba(251,191,36,0.2)',
                  p: 5,
                  borderRadius: 4,
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                <LibraryMusicIcon sx={{ color: '#fbbf24', fontSize: '2.8rem', mb: 2 }} />
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5, fontSize: '1.4rem' }}>
                  Turn on the Sun of Your Soul.
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#fbbf24', textShadow: '0 0 15px rgba(251,191,36,0.3)', fontSize: '1.4rem' }}>
                  Be Happy and Whole!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
