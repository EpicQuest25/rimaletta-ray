import { Box, Typography, Container, Grid, Card, CardContent, Divider } from '@mui/material';
import { Psychology as PsychologyIcon, Shield as ShieldIcon, Memory as MemoryIcon } from '@mui/icons-material';

export default function Intro() {
  return (
    <Box
      id="intro"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <Box className="cosmic-glow-cyan" sx={{ top: '20%', left: '-10%', opacity: 0.3 }} />
      <Box className="cosmic-glow-indigo" sx={{ bottom: '20%', right: '-10%', opacity: 0.3 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #1b4332 0%, #0f5132 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          The Quantum Shift of Self-Development
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: '#1b4332', fontWeight: 600, maxWidth: '750px', mx: 'auto', mb: 8, fontSize: '1.1rem' }}
        >
          The Holistic System of Self-Resurrection integrates our being across five essential life realms,
          creating a new space-time coherent <strong>Human Fractal</strong>.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Main Context Card */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                height: '100%',
                p: 3,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,244,0.9) 100%)',
                borderColor: 'rgba(21, 128, 61, 0.15)',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" sx={{ color: '#15803d', mb: 3, fontWeight: 800 }}>
                  Navigating the Singularity
                </Typography>
                <Typography variant="body1" sx={{ color: '#1b4332', mb: 3, fontWeight: 500 }}>
                  Each generation needs its own strategy for self-development, its own timeline, and its own advocacy.
                  Our human transformation is on the go, and as Elon Musk states,{' '}
                  <Box component="span" sx={{ color: '#d97706', fontStyle: 'italic', fontWeight: 700 }}>
                    “Singularity, our merging with AI, is already here.”
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: '#1b4332', mb: 3, fontWeight: 500 }}>
                  The way we adjust to it now determines our future. We need to urgently prepare ourselves
                  <strong> physically + emotionally + mentally + spiritually + universally</strong> in an integral
                  fashion, rather than a step-by-step way.
                </Typography>
                <Divider sx={{ my: 3, borderColor: 'rgba(21, 128, 61, 0.15)' }} />
                <Typography variant="body1" sx={{ color: '#0f5132', fontWeight: 700 }}>
                  Our scientifically, technologically, and spiritually intellectualized vector of life must be primary.
                  The goal of this system is to prove our primary nature in the battle for supremacy with AI, and prepare ourselves for future extra-terrestrial endeavors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Formulas Card */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              {/* Soul Symmetry Formula */}
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(255,255,255,0.9) 100%)',
                  border: '1px solid rgba(79, 70, 229, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle2" sx={{ color: '#4f46e5', fontWeight: 800, textTransform: 'uppercase', mb: 2, letterSpacing: '0.1em' }}>
                  The Formula of Alignment
                </Typography>
                <Typography variant="h6" sx={{ color: '#1e1b4b', mb: 2, fontWeight: 800, fontFamily: '"Outfit", sans-serif' }}>
                  Body + Spirit + Mind + Self-Consciousness + Super-Consciousness
                </Typography>
                <Typography variant="h4" sx={{ color: '#d97706', fontWeight: 900, textShadow: '0 0 15px rgba(217,119,6,0.15)', fontFamily: '"Outfit", sans-serif' }}>
                  = SOUL-SYMMETRY!
                </Typography>
              </Box>

              {/* Self-Evolution Path */}
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(8,145,178,0.06) 0%, rgba(255,255,255,0.9) 100%)',
                  border: '1px solid rgba(8, 145, 178, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle2" sx={{ color: '#0891b2', fontWeight: 800, textTransform: 'uppercase', mb: 2, letterSpacing: '0.1em' }}>
                  The Evolution Path
                </Typography>
                <Typography variant="h6" sx={{ color: '#083344', mb: 2, fontWeight: 800, fontFamily: '"Outfit", sans-serif' }}>
                  Self-Awareness → Soul-Refining → Self-Installation → Self-Realization
                </Typography>
                <Typography variant="h4" sx={{ color: '#0891b2', fontWeight: 900, textShadow: '0 0 15px rgba(8,145,178,0.15)', fontFamily: '"Outfit", sans-serif' }}>
                  = SELF-SALVATION!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* 3 Main Rules for Info Processing */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontSize: { xs: '1.6rem', md: '2.2rem' },
            fontWeight: 900,
            mb: 6,
            color: '#15803d',
          }}
        >
          Three Axioms of AI-Enhanced Self-Transformation
        </Typography>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {/* Rule A */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderColor: 'rgba(21, 128, 61, 0.15)', borderStyle: 'solid', borderWidth: '1px' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(79,70,229,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <PsychologyIcon sx={{ color: '#4f46e5', fontSize: '2rem' }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#15803d', mb: 2, fontWeight: 800 }}>
                  A) Total Integration
                </Typography>
                <Typography variant="body2" sx={{ color: '#1b4332', fontWeight: 550, lineHeight: 1.6 }}>
                  Reality and us are totally integrated. Every pulse of the universe is mirrored within our human fractal.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Rule B */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderColor: 'rgba(21, 128, 61, 0.15)', borderStyle: 'solid', borderWidth: '1px' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(217,119,6,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <ShieldIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#15803d', mb: 2, fontWeight: 800 }}>
                  B) Sense of Measure
                </Typography>
                <Typography variant="body2" sx={{ color: '#1b4332', fontWeight: 550, lineHeight: 1.6 }}>
                  The sense of measure is our ultimate treasure. Harmonizing binary digits with natural human rhythms.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Rule C */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderColor: 'rgba(21, 128, 61, 0.15)', borderStyle: 'solid', borderWidth: '1px' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(8,145,178,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <MemoryIcon sx={{ color: '#0891b2', fontSize: '2rem' }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#15803d', mb: 2, fontWeight: 800 }}>
                  C) Less is More!
                </Typography>
                <Typography variant="body2" sx={{ color: '#1b4332', fontWeight: 550, lineHeight: 1.6 }}>
                  Simplifying information flow. Eliminating cognitive clutter to let deep, spiritual intelligence take root.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Big Bold Banner Statement */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            px: 4,
            borderRadius: 6,
            background: 'linear-gradient(135deg, rgba(236,72,153,0.04) 0%, rgba(79,70,229,0.04) 100%)',
            border: '1px solid rgba(236,72,153,0.15)',
            boxShadow: '0 15px 40px -10px rgba(236,72,153,0.05)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
              mb: 3,
              background: 'linear-gradient(45deg, #ec4899 10%, #4f46e5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(236,72,153,0.05)',
            }}
          >
            We are God-Created, Not Machine Mind Mandated!
          </Typography>
          <Typography variant="body1" sx={{ color: '#1b4332', fontWeight: 550, maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            Our wholeness is the soil where something new can take root. It is our Soul-Symmetry formation in action,
            not just in reflection, meditation, or the intention to materialize our sacred wishes.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
