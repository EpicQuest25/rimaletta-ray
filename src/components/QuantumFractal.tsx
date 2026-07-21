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
    color: '#7c3aed', // Violet
    nvidiaLevel: 'Super Level',
    nvidiaCategory: 'Applications',
    description: 'Syncing with the Super-Consciousness and the cosmos. Moving beyond organic limitations into extra-terrestrial consciousness alignment.',
    humanFactor: 'The ultimate apex of human spiritual evolutionary integration must ensure we remain primary in the quantum reality.',
  },
  {
    num: 4,
    title: 'Self-Realization',
    dimension: 'Spiritual Dimension',
    realm: 'Self-Consciousness',
    color: '#7c3aed', // Violet
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
    color: '#1d4ed8', // Blue
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
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box className="cosmic-glow-indigo" sx={{ top: '20%', right: '10%', opacity: 0.55 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '15%', left: '5%', opacity: 0.55 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              px: { xs: 4.5, md: 9 },
              py: { xs: 1.5, md: 3 },
              borderRadius: '80px',
              background: 'rgba(237, 102, 140, 0.08)',
              border: '1px solid rgba(237, 102, 140, 0.25)',
              mb: { xs: 3, md: 6 },
            }}
          >
            <AutoAwesomeIcon sx={{ color: '#ed668c', fontSize: { xs: '1.8rem', md: '3.6rem' } }} />
            <Typography variant="subtitle1" sx={{ color: '#ed668c', fontWeight: 950, fontFamily: '"Outfit", sans-serif', fontSize: { xs: '1.45rem', md: '2.9rem' }, letterSpacing: '0.05em' }}>
              DIGITIZED SELF-ACCULTURATION<Box component="span" sx={{ color: '#dc2626' }}>!</Box>
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.5rem', lg: '2.8rem' },
              fontWeight: 900,
              mb: 2,
              color: '#f6c915',
              whiteSpace: { sm: 'nowrap', xs: 'normal' },
            }}
          >
            Our Intellectually Spiritualized Human Fractal In Action
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#cbd5e1', fontWeight: 600, maxWidth: '850px', mx: 'auto', fontSize: '1.15rem', fontFamily: '"Inter", sans-serif', lineHeight: 1.7 }}
          >
            A crucial mapping of how the <strong>System of Holistic Self-Resurrection</strong> integrates directly into our AI-generated infrastructure. 
            Dr. Ray aligns the five stages of human multi-dimensional growth with the structural layers of advanced AI industry 
            ( <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>SPACE X and NVIDIA</Box> ) to ensure human consciousness remains the primary, not secondary, aspect of digital singularity.
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
              <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 2, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                        ? `linear-gradient(90deg, ${level.color}15 0%, rgba(15, 16, 38, 0.95) 100%)`
                        : 'rgba(15, 16, 38, 0.4)',
                      border: isSelected
                        ? `2px solid ${level.color}`
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isSelected ? `0 6px 20px ${level.color}20` : '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isSelected ? 'translateX(10px)' : 'translateX(0)',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        borderColor: level.color,
                        background: `linear-gradient(90deg, ${level.color}20 0%, rgba(15, 16, 38, 0.95) 100%)`,
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
                          color: '#ffffff',
                          fontSize: '1.1rem',
                        }}
                      >
                        {level.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: level.color, fontWeight: 800 }}>
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
                background: 'rgba(15, 16, 38, 0.75)',
                border: `2px solid ${selectedLevel.color}`,
                boxShadow: `0 15px 35px ${selectedLevel.color}25`,
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
                    <Typography variant="h4" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 950, color: '#ffffff' }}>
                      {selectedLevel.title}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2" sx={{ color: selectedLevel.color, fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                      DIMENSION REALM
                    </Typography>
                    <Typography variant="body1" sx={{ color: selectedLevel.color, fontWeight: 900 }}>
                      {selectedLevel.realm}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2.5, borderColor: 'rgba(255,255,255,0.08)' }} />

                {/* Level Description */}
                <Typography variant="subtitle1" sx={{ color: selectedLevel.color, fontWeight: 900, textTransform: 'uppercase', mb: 1, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  Consciousness Description
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 550, mb: 4, lineHeight: 1.7 }}>
                  {selectedLevel.description}
                </Typography>

                {/* NVIDIA AI Industry Parallel — hidden for Level 5 */}
                {selectedLevel.num !== 5 ? (
                <Box
                  sx={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 3,
                    p: 3,
                    mb: 4,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: '#16a34a', fontWeight: 900, textTransform: 'uppercase', mb: 1.5, fontSize: '0.8rem', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#16a34a' }} />
                    NVIDIA Industry Parallel (Jensen Huang)
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="caption" sx={{ color: selectedLevel.color, fontWeight: 700, display: 'block' }}>
                        Industry Level
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 900, fontFamily: '"Outfit", sans-serif' }}>
                        {selectedLevel.nvidiaLevel}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption" sx={{ color: selectedLevel.color, fontWeight: 700, display: 'block' }}>
                        Structural Segment
                      </Typography>
                      <Typography variant="body1" sx={{ color: selectedLevel.color, fontWeight: 900, fontFamily: '"Outfit", sans-serif' }}>
                        {selectedLevel.nvidiaCategory}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                ) : (
                <Box
                  sx={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 3,
                    p: 3,
                    mb: 4,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: '#7c3aed', fontWeight: 900, textTransform: 'uppercase', mb: 1.5, fontSize: '0.8rem', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#7c3aed' }} />
                    Industrial Landscape
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 600, lineHeight: 1.7 }}>
                    The system is about an urgent necessity to promote a unified global approach to controlling AI by unifying our world-wide{' '}
                    <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>human</Box>,{' '}
                    <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>psychological</Box>,{' '}
                    <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>scientific</Box>,{' '}
                    <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritual</Box>, and{' '}
                    <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>religious</Box>{' '}
                    diversity and exceptionality and directing AI's uncontrolled gold rush industrialization toward governing{' '}
                    <Box component="span" sx={{ fontWeight: 900, color: '#ffffff' }}>GLOBAL HUMAN EVOLUTION!</Box>
                  </Typography>
                </Box>
                )}

                {/* The Human Factor */}
                <Typography variant="subtitle1" sx={{ color: selectedLevel.color, fontWeight: 900, textTransform: 'uppercase', mb: 1, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  The Primary Human Factor
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 600, lineHeight: 1.6, fontStyle: 'italic' }}>
                  “{selectedLevel.humanFactor}”
                </Typography>
              </CardContent>

              <Box sx={{ mt: 4 }}>
                <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', textAlign: 'center' }}>
                  <Box component="span" sx={{ color: '#94a3b8' }}>*The unity of the </Box>
                  <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>physical</Box>
                  <Box component="span" sx={{ color: '#94a3b8' }}> + </Box>
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>emotional</Box>
                  <Box component="span" sx={{ color: '#94a3b8' }}> + </Box>
                  <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>mental</Box>
                  <Box component="span" sx={{ color: '#94a3b8' }}> + </Box>
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritual</Box>
                  <Box component="span" sx={{ color: '#94a3b8' }}> + </Box>
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>universal</Box>
                  <Box component="span" sx={{ color: '#94a3b8' }}> = </Box>
                  <Box component="span" sx={{ color: '#fbbf24', fontWeight: 900 }}>Soul-Symmetry</Box>
                  <Box component="span" sx={{ color: '#94a3b8' }}> is not reversible!</Box>
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
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
            border: '2px solid #7c3aed',
            boxShadow: '0 12px 32px rgba(168, 85, 247, 0.15)',
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
              color: '#6366f1',
              lineHeight: 1,
              mb: 1.5,
              animation: 'pulse 3s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
                '50%': { transform: 'scale(1.08)', opacity: 1, color: '#a855f7' },
              }
            }}
          >
            ∞
          </Box>

          <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#ed668c', mb: 2, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Our Intellectually Spiritualized Fractal Equation:
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
            <Grid item xs={12} sm={5}>
              <Box sx={{ p: 2, background: 'rgba(15, 16, 38, 0.75)', border: '1.5px solid rgba(99, 102, 241, 0.3)', borderRadius: 2 }}>
                <Typography variant="caption" sx={{ color: '#818cf8', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Form of Life
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, mt: 0.5, fontSize: '1rem', fontFamily: '"Outfit", sans-serif' }}>
                  <Box component="span" sx={{ color: '#16a34a' }}>Body</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#dc2626' }}>Spirit</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#1d4ed8' }}>Mind</Box>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Typography variant="h4" sx={{ color: '#a855f7', fontWeight: 300 }}>+</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box sx={{ p: 2, background: 'rgba(15, 16, 38, 0.75)', border: '1.5px solid rgba(168, 85, 247, 0.3)', borderRadius: 2 }}>
                <Typography variant="caption" sx={{ color: '#f472b6', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Content of Life
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, mt: 0.5, fontSize: '1rem', fontFamily: '"Outfit", sans-serif' }}>
                  <Box component="span" sx={{ color: '#7c3aed' }}>Self-Consciousness</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#7c3aed' }}>Universal Consciousness</Box>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 800, display: 'inline' }}>
              <Box component="span" sx={{ color: '#22d3ee', fontWeight: 900 }}>Living Intelligence</Box>
              {' + '}
              <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>Enlightened Self-Consciousness</Box>
              {' = '}
            </Typography>
            <Typography variant="body1" sx={{ color: '#ed668c', fontWeight: 900, display: 'inline' }}>
              A Whole Self!
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              fontSize: { xs: '1.4rem', sm: '1.8rem' },
              background: 'linear-gradient(45deg, #fbbf24 0%, #ec4899 50%, #6366f1 100%)',
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
