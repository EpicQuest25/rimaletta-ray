import { Box, Typography, Container, Grid } from '@mui/material';
import { LibraryMusic as LibraryMusicIcon, School as SchoolIcon } from '@mui/icons-material';

// Image imports
import authorPhoto from '../assets/downloaded/rimeletta_ray_profile_pic.jpg';

export default function AuthorSection() {
  const renderColorCodedText = (text: string) => {
    const keywords = [
      { pattern: /\b(Auto-Suggestive)\b/gi, color: '#dc2626', weight: 800 },
      { pattern: /\b(Digital Cycle)\b/gi, color: '#1d4ed8', weight: 800 },
      { pattern: /\b(Digital)\b/gi, color: '#1d4ed8', weight: 800 },
      { pattern: /\b(Quantum Psychology)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(Quantum)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(body)\b/gi, color: '#16a34a', weight: 800 },
      { pattern: /\b(physical)\b/gi, color: '#16a34a', weight: 800 },
      { pattern: /\b(spirit)\b/gi, color: '#dc2626', weight: 800 },
      { pattern: /\b(spiritual)\b/gi, color: '#dc2626', weight: 800 },
      { pattern: /\b(emotional)\b/gi, color: '#dc2626', weight: 800 },
      { pattern: /\b(mind)\b/gi, color: '#1d4ed8', weight: 800 },
      { pattern: /\b(mental)\b/gi, color: '#1d4ed8', weight: 800 },
      { pattern: /\b(self-consciousness)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(super-consciousness)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(universal)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(soul-symmetry)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(Soul-Symmetry)\b/gi, color: '#7c3aed', weight: 900 },
      { pattern: /\b(Self-Ascension)\b/gi, color: '#7c3aed', weight: 900 },
      { pattern: /\b(Self-Awareness)\b/gi, color: '#16a34a', weight: 800 },
      { pattern: /\b(Self-Refining)\b/gi, color: '#dc2626', weight: 800 },
      { pattern: /\b(Self-Installation)\b/gi, color: '#1d4ed8', weight: 800 },
      { pattern: /\b(Self-Realization)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(Self-Salvation)\b/gi, color: '#7c3aed', weight: 800 },
      { pattern: /\b(Self-Resurrection)\b/gi, color: '#ed668c', weight: 800 },
      { pattern: /\b(Literary Ecosystem)\b/gi, color: '#ed668c', weight: 800 }
    ];

    let parts: { text: string; color?: string; weight?: number }[] = [{ text }];

    keywords.forEach((kw) => {
      let newParts: typeof parts = [];
      parts.forEach((p) => {
        if (p.color) {
          newParts.push(p);
        } else {
          const splitText = p.text.split(kw.pattern);
          splitText.forEach((t, i) => {
            if (i % 2 === 1) {
              newParts.push({ text: t, color: kw.color, weight: kw.weight });
            } else if (t) {
              newParts.push({ text: t });
            }
          });
        }
      });
      parts = newParts;
    });

    return (
      <>
        {parts.map((p, idx) => (
          <Box
            key={idx}
            component="span"
            sx={p.color ? { color: p.color, fontWeight: p.weight || 'bold' } : undefined}
          >
            {p.text}
          </Box>
        ))}
      </>
    );
  };

  return (
    <Box
      id="author"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box className="cosmic-glow-cyan" sx={{ top: '30%', left: '-15%', opacity: 0.55 }} />
      <Box className="cosmic-glow-indigo" sx={{ bottom: '15%', right: '-15%', opacity: 0.55 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Vygotsky Quote */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#ffffff',
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
                opacity: 0.25,
                fontFamily: 'serif',
              },
              '&::after': {
                content: '"”"',
                position: 'absolute',
                right: 0,
                bottom: -40,
                fontSize: '5rem',
                color: '#ed668c',
                opacity: 0.25,
                fontFamily: 'serif',
              }
            }}
          >
            Don’t teach just a subject. Teach the whole person!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#ed668c', fontWeight: 800, mt: 2 }}>
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
                boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
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
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 0.8,
                borderRadius: '30px',
                background: 'rgba(237, 102, 140, 0.08)',
                border: '1px solid rgba(237, 102, 140, 0.25)',
                mb: 3,
              }}
            >
              <SchoolIcon sx={{ color: '#ed668c' }} />
              <Typography variant="subtitle2" sx={{ color: '#ed668c', fontWeight: 800, letterSpacing: '0.05em' }}>
                PROFESSORIAL BIOGRAPHY & SYSTÈMIC FOCUS
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                mb: 3,
                color: '#ed668c',
                fontSize: { xs: '1.8rem', md: '2.4rem' }
              }}
            >
              Meet Ph.D. Rimaletta Ray
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, color: '#cbd5e1' }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 550 }}>
                Dr. Rimaletta Ray is a former professor of Psycholinguistics who has taught at both the{' '}
                <strong>University of Connecticut (UCONN)</strong> and <strong>Norwalk Community College</strong>.
                She holds a Ph.D. from the prestigious Moscow Brain Research Institute.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 550 }}>
                {renderColorCodedText('Driven by an obsessive calling to help humanity retain its evolutionary edge, she has dedicated the last 30 years to orchestrating a complete Literary Ecosystem for Self-Resurrection.')}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 550 }}>
                {renderColorCodedText('Her methods integrate psycholinguistic programming, auto-suggestive structure, and quantum frequencies to help readers "decipher the AI black box," govern technology constructively, and build space-time coherent human fractals.')}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Audio/Meditation Player */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              mb: 2,
              color: '#ed668c',
              fontSize: { xs: '1.8rem', md: '2.4rem' }
            }}
          >
            Spoken Lectures & Audio
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#cbd5e1', fontWeight: 550, maxWidth: '650px', mx: 'auto', mb: 6 }}
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
                  background: 'rgba(15, 16, 38, 0.75)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  border: '2px solid #ed668c',
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
                  background: 'rgba(15, 16, 38, 0.75)',
                  border: '2px solid #ed668c',
                  p: 5,
                  borderRadius: 4,
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(237, 102, 140, 0.12)',
                }}
              >
                <LibraryMusicIcon sx={{ color: '#ed668c', fontSize: '2.8rem', mb: 2 }} />
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5, fontSize: '1.4rem' }}>
                  Turn on the Sun of Your Soul.
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ed668c', fontSize: '1.4rem' }}>
                  Be Happy and Whole!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Concluding CTA Section */}
        <Box
          sx={{
            mt: 10,
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            backgroundColor: '#facc15',
            border: '3px solid #eab308',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(250, 204, 21, 0.35)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#1d4ed8',
              mb: 2.5,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
            }}
          >
            Develop Personal Magnetism
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#1e1b4b',
              fontSize: '1.2rem',
              fontWeight: 700,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Develop personal magnetism{' '}
            <Box component="span" sx={{ color: '#16a34a', textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)' }}>physically</Box>,{' '}
            <Box component="span" sx={{ color: '#dc2626', textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)' }}>emotionally</Box>,{' '}
            <Box component="span" sx={{ color: '#1d4ed8', textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)' }}>mentally</Box>,{' '}
            <Box component="span" sx={{ color: '#7c3aed', textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)' }}>spiritually</Box>, and{' '}
            <Box component="span" sx={{ color: '#7c3aed', textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)' }}>universally</Box> in three cycles of our present day life.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              color: '#dc2626',
              fontSize: { xs: '2.2rem', sm: '3.2rem' },
              letterSpacing: '0.02em',
            }}
          >
            Wow! <Box component="span" sx={{ fontSize: '0.8em', textTransform: 'lowercase', fontWeight: 800 }}>we live</Box> Now!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
