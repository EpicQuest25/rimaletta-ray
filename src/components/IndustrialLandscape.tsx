import { Box, Typography, Container } from '@mui/material';

const levelsData = [
  { nvidiaLevel: 'Super Level', dimension: 'Universal Dimension', category: 'Applications for Human Needs', color: '#7c3aed' },
  { nvidiaLevel: 'Macro Level', dimension: 'Spiritual Dimension', category: 'Creative Models', color: '#7c3aed' },
  { nvidiaLevel: 'Mezzo Level', dimension: 'Mental Dimension', category: 'Industrial Infrastructure', color: '#1d4ed8' },
  { nvidiaLevel: 'Meta Level', dimension: 'Emotional Dimension', category: 'Chips Manufacturing', color: '#dc2626' },
  { nvidiaLevel: 'Mini Level', dimension: 'Physical Dimension', category: 'Energy Production', color: '#16a34a' },
];

export default function IndustrialLandscape() {
  return (
    <Box
      id="landscape"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box className="cosmic-glow-indigo" sx={{ top: '15%', left: '-10%', opacity: 0.55 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '20%', right: '-10%', opacity: 0.55 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* ===== SECTION TITLE ===== */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 900,
            mb: 1.5,
            color: '#ffffff',
            lineHeight: 1.3,
          }}
        >
          Holistic Five-Dimensional Self-Development is Engraved in Our{' '}
          <Box component="span" sx={{ color: '#ed668c', textDecoration: 'underline' }}>
            AI Integrated Industrial Infrastructure
          </Box>
          .
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: '#dc2626',
            fontWeight: 800,
            mb: { xs: 6, md: 8 },
            fontFamily: '"Outfit", sans-serif',
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Stages of our Self-Growth by the vectors of time and space:
        </Typography>

        {/* ===== 3D CROSS VISUALIZATION ===== */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '320px', sm: '420px', md: '500px' },
            height: { xs: '340px', sm: '440px', md: '520px' },
            mx: 'auto',
            mb: { xs: 6, md: 8 },
            perspective: '1200px',
          }}
        >
          {/* ---- Vertical Axis Line ---- */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '8%',
              bottom: '8%',
              width: '2.5px',
              background: 'linear-gradient(to bottom, #7c3aed 0%, rgba(124,58,237,0.25) 40%, rgba(124,58,237,0.25) 60%, #7c3aed 100%)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 12px rgba(124, 58, 237, 0.35)',
            }}
          />

          {/* ---- Horizontal Axis Line ---- */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '3%',
              right: '3%',
              height: '2.5px',
              background: 'linear-gradient(to right, #dc2626 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.15) 60%, #1d4ed8 100%)',
              transform: 'translateY(-50%)',
              boxShadow: '0 0 12px rgba(255,255,255,0.08)',
            }}
          />

          {/* ---- Axis Endpoint Glow Dots ---- */}
          <Box sx={{ position: 'absolute', top: '8%', left: '50%', transform: 'translate(-50%, -50%)', width: 10, height: 10, borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 16px rgba(124, 58, 237, 0.9), 0 0 32px rgba(124, 58, 237, 0.4)' }} />
          <Box sx={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translate(-50%, 50%)', width: 10, height: 10, borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 16px rgba(124, 58, 237, 0.9), 0 0 32px rgba(124, 58, 237, 0.4)' }} />
          <Box sx={{ position: 'absolute', top: '50%', left: '3%', transform: 'translate(-50%, -50%)', width: 10, height: 10, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 16px rgba(220, 38, 38, 0.9), 0 0 32px rgba(220, 38, 38, 0.4)' }} />
          <Box sx={{ position: 'absolute', top: '50%', right: '3%', transform: 'translate(50%, -50%)', width: 10, height: 10, borderRadius: '50%', background: '#1d4ed8', boxShadow: '0 0 16px rgba(29, 78, 216, 0.9), 0 0 32px rgba(29, 78, 216, 0.4)' }} />

          {/* ---- 3D Spinning Ring (Primary) ---- */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: { xs: '230px', sm: '300px', md: '360px' },
              height: { xs: '230px', sm: '300px', md: '360px' },
              borderRadius: '50%',
              border: '2.5px solid rgba(99, 102, 241, 0.4)',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.2), inset 0 0 30px rgba(99, 102, 241, 0.05)',
              animation: 'spin-landscape-ring 20s linear infinite',
              '@keyframes spin-landscape-ring': {
                '0%': { transform: 'translate(-50%, -50%) rotateX(75deg) rotateZ(0deg)' },
                '100%': { transform: 'translate(-50%, -50%) rotateX(75deg) rotateZ(360deg)' },
              },
            }}
          />

          {/* ---- 3D Spinning Ring (Secondary, counter-rotate) ---- */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: { xs: '185px', sm: '245px', md: '295px' },
              height: { xs: '185px', sm: '245px', md: '295px' },
              borderRadius: '50%',
              border: '1.5px solid rgba(168, 85, 247, 0.25)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.12)',
              animation: 'spin-landscape-ring-2 28s linear infinite',
              '@keyframes spin-landscape-ring-2': {
                '0%': { transform: 'translate(-50%, -50%) rotateX(68deg) rotateZ(360deg)' },
                '100%': { transform: 'translate(-50%, -50%) rotateX(68deg) rotateZ(0deg)' },
              },
            }}
          />

          {/* ---- Center Glowing Orb ---- */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #ffffff 0%, #16a34a 40%, rgba(22, 163, 106, 0) 70%)',
              boxShadow: '0 0 20px rgba(22, 163, 106, 0.7), 0 0 50px rgba(22, 163, 106, 0.3)',
              transform: 'translate(-50%, -50%)',
              animation: 'pulse-center-orb 2.5s ease-in-out infinite',
              '@keyframes pulse-center-orb': {
                '0%, 100%': { boxShadow: '0 0 20px rgba(22, 163, 106, 0.7), 0 0 50px rgba(22, 163, 106, 0.3)', transform: 'translate(-50%, -50%) scale(1)' },
                '50%': { boxShadow: '0 0 35px rgba(22, 163, 106, 0.9), 0 0 70px rgba(22, 163, 106, 0.5)', transform: 'translate(-50%, -50%) scale(1.2)' },
              },
            }}
          />

          {/* ---- Self-Salvation (TOP) ---- */}
          <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontFamily: '"Outfit", sans-serif', fontSize: { xs: '1rem', sm: '1.15rem', md: '1.3rem' }, textShadow: '0 0 18px rgba(124, 58, 237, 0.5)', whiteSpace: 'nowrap' }}>
              Self-Salvation
            </Typography>
          </Box>

          {/* ---- Self-Realization (BOTTOM) ---- */}
          <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontFamily: '"Outfit", sans-serif', fontSize: { xs: '1rem', sm: '1.15rem', md: '1.3rem' }, textShadow: '0 0 18px rgba(124, 58, 237, 0.5)', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
              Self-Realization
            </Typography>
          </Box>

          {/* ---- Self-Monitoring (LEFT) ---- */}
          <Box sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(calc(-50% - 18px))' }}>
            <Typography sx={{ color: '#dc2626', fontWeight: 900, fontFamily: '"Outfit", sans-serif', fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem' }, textShadow: '0 0 18px rgba(220, 38, 38, 0.5)', whiteSpace: 'nowrap' }}>
              Self-Monitoring
            </Typography>
          </Box>

          {/* ---- Self-Awareness (CENTER, above crosshair) ---- */}
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, calc(-100% - 12px))' }}>
            <Typography sx={{ color: '#16a34a', fontWeight: 900, fontFamily: '"Outfit", sans-serif', fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem' }, textShadow: '0 0 18px rgba(22, 163, 106, 0.5)', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
              Self-Awareness
            </Typography>
          </Box>

          {/* ---- Self-Installation (RIGHT) ---- */}
          <Box sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(calc(-50% - 18px))' }}>
            <Typography sx={{ color: '#1d4ed8', fontWeight: 900, fontFamily: '"Outfit", sans-serif', fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem' }, textShadow: '0 0 18px rgba(29, 78, 216, 0.5)', whiteSpace: 'nowrap' }}>
              Self-Installation
            </Typography>
          </Box>

          {/* ---- Axis Markers: --, 0, + ---- */}
          <Typography sx={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, 6px)', color: '#ffffff', fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.4rem' }, fontFamily: '"Outfit", sans-serif' }}>
            --
          </Typography>
          <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 6px)', color: '#ffffff', fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.4rem' }, fontFamily: '"Outfit", sans-serif' }}>
            0
          </Typography>
          <Typography sx={{ position: 'absolute', top: '50%', right: '25%', transform: 'translate(50%, 6px)', color: '#ffffff', fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.4rem' }, fontFamily: '"Outfit", sans-serif' }}>
            +
          </Typography>
        </Box>

        {/* ===== CONTEXT PARAGRAPH ===== */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: '#cbd5e1',
            fontWeight: 600,
            maxWidth: '850px',
            mx: 'auto',
            mb: 6,
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            lineHeight: 1.8,
          }}
        >
          The system of{' '}
          <Box component="span" sx={{ color: '#ffffff', fontWeight: 900, textDecoration: 'underline' }}>Human Multi-Dimensional Growth</Box>
          {' '}is being also developed in five essential economy integrating levels by the genius of{' '}
          <Box component="span" sx={{ color: '#22d3ee', fontWeight: 800 }}>Elon Musk's Space X</Box>
          {' '}and{' '}
          <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>Jensen Huang's</Box>
          {' '}integration of manufacturing AI systems,
        </Typography>

        {/* ===== 3D ELLIPTICAL RING SEPARATOR ===== */}
        <Box sx={{ width: { xs: '260px', sm: '380px', md: '480px' }, height: { xs: '40px', sm: '55px', md: '65px' }, mx: 'auto', mb: 6, perspective: '600px' }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '3px solid rgba(99, 102, 241, 0.45)',
              transform: 'rotateX(80deg)',
              boxShadow: '0 0 35px rgba(99, 102, 241, 0.35), inset 0 0 20px rgba(99, 102, 241, 0.1)',
              background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
            }}
          />
        </Box>

        {/* ===== NVIDIA/XAI INTEGRATION TEXT ===== */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: '#cbd5e1',
            fontWeight: 700,
            maxWidth: '850px',
            mx: 'auto',
            mb: 8,
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            lineHeight: 1.8,
          }}
        >
          While AI companies fight their own battles,{' '}
          <Box component="span" sx={{ color: '#16a34a', fontWeight: 900 }}>NVidia</Box>
          {' '}and{' '}
          <Box component="span" sx={{ color: '#22d3ee', fontWeight: 900 }}>XAI</Box>
          {' '}are integrating them into{' '}
          <Box component="span" sx={{ color: '#ffffff', fontWeight: 900 }}>ONE HUMAN OPERATIONAL SYSTEM</Box>,
          {' '}meant to upgrade our evolutionary value.
        </Typography>

        {/* ===== 5-LEVEL INDUSTRIAL MAPPING ===== */}
        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 8,
            display: 'flex',
            gap: { xs: 1.5, md: 2.5 },
          }}
        >
          {/* Level Cards */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {levelsData.map((level, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  gap: { xs: 0.5, sm: 0 },
                  p: { xs: 1.5, md: 2.5 },
                  borderRadius: 3,
                  background: 'rgba(15, 16, 38, 0.65)',
                  borderLeft: `4px solid ${level.color}`,
                  border: `1px solid ${level.color}20`,
                  borderLeftWidth: '4px',
                  borderLeftColor: level.color,
                  boxShadow: `0 4px 16px ${level.color}10`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateX(8px)',
                    boxShadow: `0 8px 28px ${level.color}25`,
                    borderColor: `${level.color}50`,
                    borderLeftColor: level.color,
                    background: `linear-gradient(90deg, ${level.color}08 0%, rgba(15, 16, 38, 0.65) 100%)`,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                  <Typography
                    sx={{
                      color: level.color,
                      fontWeight: 900,
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: { xs: '0.85rem', md: '1.05rem' },
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {level.nvidiaLevel}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#94a3b8',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    —
                  </Typography>
                  <Typography
                    sx={{
                      color: '#cbd5e1',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                    }}
                  >
                    {level.dimension}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontWeight: 800,
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    textAlign: { xs: 'left', sm: 'right' },
                    pl: { xs: 0, sm: 2 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {level.category}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Animated Upward Arrow */}
          <Box
            sx={{
              width: { xs: '30px', md: '44px' },
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'stretch',
              py: 1,
            }}
          >
            {/* Arrow head */}
            <Box
              sx={{
                width: 0,
                height: 0,
                borderLeft: { xs: '8px solid transparent', md: '12px solid transparent' },
                borderRight: { xs: '8px solid transparent', md: '12px solid transparent' },
                borderBottom: { xs: '12px solid #06b6d4', md: '16px solid #06b6d4' },
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.7))',
                mb: 0.5,
                animation: 'arrow-pulse 2s ease-in-out infinite',
                '@keyframes arrow-pulse': {
                  '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
                  '50%': { transform: 'translateY(-5px)', opacity: 0.8 },
                },
              }}
            />
            {/* Arrow shaft */}
            <Box
              sx={{
                width: '3px',
                flex: 1,
                background: 'linear-gradient(to bottom, #06b6d4 0%, #1d4ed8 100%)',
                borderRadius: '2px',
                boxShadow: '0 0 12px rgba(6, 182, 212, 0.4)',
              }}
            />
          </Box>
        </Box>

        {/* ===== ETHICAL ALIGNMENT PARAGRAPH ===== */}
        <Box
          sx={{
            maxWidth: '850px',
            mx: 'auto',
            mb: 8,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: 'rgba(15, 16, 38, 0.55)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 28px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8,
              textDecoration: 'underline',
              mb: 2,
            }}
          >
            But such Integration should also align educationally and ethically with the human factor,
            evolving us as the primary, not secondary aspect of humanity's syncing with Universal Consciousness.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8,
            }}
          >
            The globalized AI industry should produce applications for our{' '}
            <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>physical</Box>,{' '}
            <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>emotional</Box>,{' '}
            <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>mental</Box>,{' '}
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritual</Box>, and{' '}
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800, textDecoration: 'underline' }}>universal</Box>
            {' '}growth to boost our turning into{' '}
            <Box component="span" sx={{ color: '#ffffff', fontWeight: 900 }}>HUMAN ALIENS</Box>
            {' '}that are an inseparable part of Universal Community.
          </Typography>
        </Box>

        {/* ===== CLOSING BANNER ===== */}
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 4, md: 6 },
            px: { xs: 3, md: 5 },
            borderRadius: 5,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(237, 102, 140, 0.08) 100%)',
            border: '2px solid #ed668c',
            boxShadow: '0 15px 40px rgba(237, 102, 140, 0.2)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.4rem' },
              color: '#ffffff',
              mb: 1,
            }}
          >
            Holistic Human + AI Integration is Changing the
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.4rem' },
              color: '#ed668c',
              textDecoration: 'underline',
            }}
          >
            New Industrial Landscape Formation.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
