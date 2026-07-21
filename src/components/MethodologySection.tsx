import { Box, Typography, Container, Divider } from '@mui/material';

export default function MethodologySection() {
  return (
    <Box
      id="methodology"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #c999f7 0%, #e2d1f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Subtle light glow elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 900,
            color: '#1d4ed8', // Blue
            mb: 2,
            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
            letterSpacing: '-0.02em',
          }}
        >
          AI Enhanced Methodology for Self-Ecology
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 900,
            color: '#dc2626', // Red
            textDecoration: 'underline',
            mb: 4,
            fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
          }}
        >
          Don't Push Progress to Happen. It Must Ripen!
        </Typography>

        {/* Let's defocus... */}
        <Typography
          variant="body1"
          sx={{
            color: '#111827', // Dark Grey/Black
            fontWeight: 800,
            fontSize: { xs: '1.05rem', sm: '1.2rem' },
            lineHeight: 1.6,
            mb: 4,
            maxWidth: '750px',
            mx: 'auto',
          }}
        >
          Let's defocus our AWARE ATTENTION from technological impersonalization to human individualization !
        </Typography>

        {/* There is No System without Structure! */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 900,
            color: '#1d4ed8', // Blue
            mb: 3,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.8rem' },
          }}
        >
          There is No System without Structure!
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: 'rgba(29, 78, 216, 0.15)', maxWidth: '200px', mx: 'auto', borderWidth: '1px' }} />

        {/* Main Idea... */}
        <Typography
          variant="body1"
          sx={{
            color: '#374151',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            mb: 3,
          }}
        >
          The main idea of each book on the Holistic System of Self-Resurrection:
        </Typography>

        {/* Divine Consciousness exists... */}
        <Box
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 10px 30px rgba(124, 58, 237, 0.05)',
            mb: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#111827',
              fontSize: { xs: '1.05rem', sm: '1.15rem' },
              lineHeight: 1.8,
              fontWeight: 550,
            }}
          >
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>
              Divine Consciousness exists
            </Box>{' '}
            within each of us. It is our Birthright's Might that we have to revive through obtaining{' '}
            <Box component="span" sx={{ fontWeight: 800 }}>
              INNER WHOLENESS
            </Box>{' '}
            by creating{' '}
            <Box component="span" sx={{ color: '#dc2626', fontWeight: 900 }}>
              FRACTAL UNITY
            </Box>{' '}
            inside.
          </Typography>
        </Box>

        {/* Equation */}
        <Box sx={{ mb: 4, py: 1 }}>
          <Typography
            component="div"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1.1rem' },
              letterSpacing: '0.02em',
              lineHeight: 1.6,
              fontFamily: '"Outfit", sans-serif',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 0.5,
            }}
          >
            <Box component="span" sx={{ color: '#16a34a' }}>Body</Box>
            <Box component="span" sx={{ color: '#111827' }}>+</Box>
            <Box component="span" sx={{ color: '#dc2626' }}>Spirit</Box>
            <Box component="span" sx={{ color: '#111827' }}>+</Box>
            <Box component="span" sx={{ color: '#1d4ed8' }}>Mind</Box>
            <Box component="span" sx={{ color: '#111827' }}>+</Box>
            <Box component="span" sx={{ color: '#7c3aed' }}>Self-Consciousness</Box>
            <Box component="span" sx={{ color: '#111827' }}>+</Box>
            <Box component="span" sx={{ color: '#7c3aed' }}>Super-Consciousness</Box>
          </Typography>
        </Box>

        {/* At present... */}
        <Typography
          variant="body1"
          sx={{
            color: '#7c3aed', // Purple/Magenta
            fontWeight: 800,
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            lineHeight: 1.7,
            mb: 3,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          At present, our Self-Consciousness is determined by our being, but it should be the other way around.
        </Typography>

        {/* OUR SELF-CONSCIOUSNESS... */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 900,
            color: '#111827',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          OUR SELF-CONSCIOUSNESS SHOULD DETERMINE OUR BEING!
        </Typography>
      </Container>
    </Box>
  );
}
