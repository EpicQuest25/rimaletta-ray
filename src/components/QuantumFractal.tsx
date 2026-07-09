import { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Divider, Chip } from '@mui/material';
import { AutoAwesome as AutoAwesomeIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

interface LevelInfo {
  num: number;
  title: string;
  dimension: string;
  realm: string;
  color: string;
  nvidiaLevel: string;
  nvidiaCategory: string;
  description: string;
  humanFactor: string;
}

const levelsData: LevelInfo[] = [
  {
    num: 5,
    title: 'Self-Salvation',
    dimension: 'Universal Dimension',
    realm: 'Universal Consciousness',
    color: '#7c3aed', // Purple
    nvidiaLevel: 'Super Level',
    nvidiaCategory: 'Applications',
    description: 'Syncing with the Super-Consciousness and the cosmos. Moving beyond organic limitations into extra-terrestrial consciousness alignment.',
    humanFactor: 'The ultimate apex of human spiritual evolutionary integration, ensuring we remain primary in the quantum reality.',
  },
  {
    num: 4,
    title: 'Self-Realization',
    dimension: 'Spiritual Dimension',
    realm: 'Self-Consciousness',
    color: '#db2777', // Magenta
    nvidiaLevel: 'Macro Level',
    nvidiaCategory: 'Creative Models',
    description: 'Unlocking creative spiritual potential and personal destiny, operating through enlightened self-consciousness.',
    humanFactor: 'Human intuition, design, and inspiration serving as the primary source for creative models.',
  },
  {
    num: 3,
    title: 'Self-Installation',
    dimension: 'Mental Dimension',
    realm: 'Mind',
    color: '#2563eb', // Blue
    nvidiaLevel: 'Mezzo Level',
    nvidiaCategory: 'Industrial Infrastructure',
    description: 'Establishing mental structures, critical reasoning, and intellectual filters to navigate AI systems without cognitive overload.',
    humanFactor: 'The cognitive grid of human thinking directing and monitoring industrial digital infrastructure.',
  },
  {
    num: 2,
    title: 'Self-Monitoring',
    dimension: 'Emotional Dimension',
    realm: 'Spirit',
    color: '#dc2626', // Red
    nvidiaLevel: 'Meta Level',
    nvidiaCategory: 'Chips Manufacturing',
    description: 'Continuous emotional monitoring and refinement. Protecting human empathy, feelings, and soul-symmetry against binary standardization.',
    humanFactor: 'Human emotional vitality and spirit directing physical hardware and chip production priorities.',
  },
  {
    num: 1,
    title: 'Self-Awareness',
    dimension: 'Physical Dimension',
    realm: 'Body',
    color: '#16a34a', // Green
    nvidiaLevel: 'Mini Level',
    nvidiaCategory: 'Energy Production',
    description: 'Foundational awareness of the physical body, biological rhythms, and energy levels for self-ecology.',
    humanFactor: 'Biological life force and calories as the baseline energy production governing all technology.',
  },
];

export default function QuantumFractal() {
  const [selectedLevel, setSelectedLevel] = useState<LevelInfo>(levelsData[0]);

  return (
    <Box
      id="fractal"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, #f3e5f5 0%, #f8bbd0 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box className="cosmic-glow-indigo" sx={{ top: '20%', right: '10%', opacity: 0.5 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '15%', left: '5%', opacity: 0.5 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.8,
              borderRadius: '30px',
              background: 'rgba(8, 145, 178, 0.15)',
              border: '2px solid rgba(8, 145, 178, 0.3)',
              mb: 3,
            }}
          >
            <AutoAwesomeIcon sx={{ color: '#0891b2', fontSize: '1.1rem' }} />
            <Typography variant="body2" sx={{ color: '#0891b2', fontWeight: 800, letterSpacing: '0.05em' }}>
              DIGITIZED SELF-ACCULTURATION
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 900,
              mb: 2,
              background: 'linear-gradient(135deg, #4c1d95 0%, #3b0764 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Intellectually Spiritualized Human Fractal
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#3b0764', fontWeight: 700, maxWidth: '850px', mx: 'auto', fontSize: '1.15rem', fontFamily: '"Inter", sans-serif', lineHeight: 1.7 }}
          >
            A crucial mapping of how the <strong>System of Holistic Self-Resurrection</strong> integrates directly into our AI-generated infrastructure. 
            Dr. Ray aligns the five stages of human multi-dimensional growth with the structural layers of advanced AI industry 
            (such as NVIDIA) to ensure human consciousness remains the primary, not secondary, aspect of digital singularity.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="stretch">
          {/* Interactive Pyramid Diagram (Left column) */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100%',
                justifyContent: 'center',
              }}
            >
              <Typography variant="subtitle2" sx={{ color: '#3b0764', mb: 2, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Interactive Consciousness Pyramid (Click Levels to Inspect)
              </Typography>

              {levelsData.map((level) => {
                const isSelected = selectedLevel.num === level.num;
                return (
                  <Box
                    key={level.num}
                    onClick={() => setSelectedLevel(level)}
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      p: 2.5,
                      borderRadius: 3,
                      background: isSelected
                        ? `linear-gradient(90deg, ${level.color}15 0%, rgba(255, 255, 255, 0.98) 100%)`
                        : 'rgba(255, 255, 255, 0.7)',
                      border: isSelected
                        ? `2px solid ${level.color}`
                        : '2px solid rgba(124, 58, 237, 0.25)',
                      boxShadow: isSelected ? `0 6px 20px ${level.color}20` : '0 4px 12px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isSelected ? 'translateX(10px)' : 'translateX(0)',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        borderColor: level.color,
                        background: `linear-gradient(90deg, ${level.color}18 0%, rgba(255, 255, 255, 0.98) 100%)`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        backgroundColor: level.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 900,
                        mr: 3,
                        boxShadow: `0 0 10px ${level.color}40`,
                      }}
                    >
                      {level.num}
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 900,
                          color: '#3b0764',
                          fontSize: '1.1rem',
                        }}
                      >
                        {level.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#4c1d95', fontWeight: 800 }}>
                        {level.dimension} — ({level.realm})
                      </Typography>
                    </Box>

                    <ChevronRightIcon sx={{ color: level.color }} />
                  </Box>
                );
              })}
            </Box>
          </Grid>

          {/* Level Details & NVidia Alignment (Right column) */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                p: 4,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(243,232,255,0.98) 100%)',
                border: '2px solid #7c3aed',
                boxShadow: `0 15px 35px rgba(124,58,237,0.1)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Level Title & Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                  <Box>
                    <Chip
                      label={`LEVEL ${selectedLevel.num}`}
                      sx={{
                        backgroundColor: `${selectedLevel.color}20`,
                        color: selectedLevel.color,
                        border: `1.5px solid ${selectedLevel.color}40`,
                        fontWeight: 800,
                        mb: 1,
                      }}
                    />
                    <Typography variant="h4" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 950, color: '#3b0764' }}>
                      {selectedLevel.title}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" sx={{ color: '#4c1d95', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                      DIMENSION REALM
                    </Typography>
                    <Typography variant="body1" sx={{ color: selectedLevel.color, fontWeight: 900 }}>
                      {selectedLevel.realm}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2.5, borderColor: 'rgba(124,58,237,0.2)' }} />

                {/* Level Description */}
                <Typography variant="subtitle1" sx={{ color: '#4c1d95', fontWeight: 900, textTransform: 'uppercase', mb: 1, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  Consciousness Description
                </Typography>
                <Typography variant="body1" sx={{ color: '#3b0764', fontWeight: 600, mb: 4, lineHeight: 1.7 }}>
                  {selectedLevel.description}
                </Typography>

                {/* NVIDIA AI Industry Parallel */}
                <Box
                  sx={{
                    background: '#ffffff',
                    border: '2px solid #16a34a',
                    borderRadius: 3,
                    p: 3,
                    mb: 4,
                    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.05)',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: '#16a34a', fontWeight: 900, textTransform: 'uppercase', mb: 1.5, fontSize: '0.8rem', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#16a34a' }} />
                    NVIDIA Industry Parallel (Jensen Huang)
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="caption" sx={{ color: '#4c1d95', fontWeight: 700, display: 'block' }}>
                        Industry Level
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#3b0764', fontWeight: 900, fontFamily: '"Outfit", sans-serif' }}>
                        {selectedLevel.nvidiaLevel}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption" sx={{ color: '#4c1d95', fontWeight: 700, display: 'block' }}>
                        Structural Segment
                      </Typography>
                      <Typography variant="body1" sx={{ color: selectedLevel.color, fontWeight: 900, fontFamily: '"Outfit", sans-serif' }}>
                        {selectedLevel.nvidiaCategory}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                {/* The Human Factor */}
                <Typography variant="subtitle1" sx={{ color: '#4c1d95', fontWeight: 900, textTransform: 'uppercase', mb: 1, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  The Primary Human Factor
                </Typography>
                <Typography variant="body2" sx={{ color: '#3b0764', fontWeight: 700, lineHeight: 1.6, fontStyle: 'italic' }}>
                  “{selectedLevel.humanFactor}”
                </Typography>
              </CardContent>

              <Box sx={{ mt: 4 }}>
                <Divider sx={{ mb: 2, borderColor: 'rgba(124,58,237,0.2)' }} />
                <Typography variant="caption" sx={{ color: '#4c1d95', fontWeight: 700, display: 'block', textAlign: 'center' }}>
                  *The unity of the physical, emotional, mental, spiritual, and universal is not reversible!
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Form + Content Formula Banner */}
        <Box
          sx={{
            mt: 8,
            p: 4.5,
            borderRadius: 5,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(243,224,248,0.98) 100%)',
            border: '2px solid #7c3aed',
            boxShadow: '0 12px 32px rgba(124, 58, 177, 0.1)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Breathing vector infinity icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#2563eb',
              lineHeight: 1,
              mb: 1.5,
              animation: 'pulse 3s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
                '50%': { transform: 'scale(1.08)', opacity: 1, color: '#7c3aed' },
              }
            }}
          >
            ∞
          </Box>

          <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#3b0764', mb: 2, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Our Intellectually Spiritualized Fractal Equation:
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
            <Grid item xs={12} sm={5}>
              <Box sx={{ p: 2, background: 'rgba(255,255,255,0.9)', border: '2px solid #7c3aed', borderRadius: 2 }}>
                <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Form of Life
                </Typography>
                <Typography variant="h6" sx={{ color: '#3b0764', fontWeight: 900, mt: 0.5, fontSize: '1rem', fontFamily: '"Outfit", sans-serif' }}>
                  Body + Spirit + Mind
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Typography variant="h4" sx={{ color: '#4c1d95', fontWeight: 300 }}>+</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box sx={{ p: 2, background: 'rgba(255,255,255,0.9)', border: '2px solid #7c3aed', borderRadius: 2 }}>
                <Typography variant="caption" sx={{ color: '#db2777', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Content of Life
                </Typography>
                <Typography variant="h6" sx={{ color: '#3b0764', fontWeight: 900, mt: 0.5, fontSize: '1rem', fontFamily: '"Outfit", sans-serif' }}>
                  Self-Consciousness + Universal Consciousness
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="body1" sx={{ color: '#3b0764', fontWeight: 800, display: 'inline' }}>
              Living Intelligence + Enlightened Self-Consciousness ={' '}
            </Typography>
            <Typography variant="body1" sx={{ color: '#0891b2', fontWeight: 900, display: 'inline' }}>
              A Whole Self!
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              fontSize: { xs: '1.4rem', sm: '1.8rem' },
              background: 'linear-gradient(45deg, #d97706 0%, #db2777 50%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            “Our Common Life’s Goal is to Make Ourselves Whole!”
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
