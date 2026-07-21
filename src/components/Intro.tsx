import { Box, Typography, Container, Grid, Card, CardContent, Divider } from '@mui/material';
import { Psychology as PsychologyIcon, Shield as ShieldIcon, Memory as MemoryIcon } from '@mui/icons-material';

export default function Intro() {
  return (
    <Box
      id="intro"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background Glow */}
      <Box className="cosmic-glow-cyan" sx={{ top: '20%', left: '-10%', opacity: 0.55 }} />
      <Box className="cosmic-glow-indigo" sx={{ bottom: '20%', right: '-10%', opacity: 0.55 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 900,
            mb: 1,
            color: '#ed668c',
          }}
        >
          The Quantum Shift of Self-Development
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 900,
            mb: 2,
            color: '#facc15',
            letterSpacing: '0.06em',
            fontFamily: '"Outfit", sans-serif',
          }}
        >
          Holistic Psychology For Self Ecology!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: '#cbd5e1', fontWeight: 600, maxWidth: '750px', mx: 'auto', mb: 8, fontSize: '1.15rem' }}
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
                background: 'rgba(15, 16, 38, 0.75)',
                borderColor: '#2e7d32',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(46, 125, 50, 0.15)',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" sx={{ color: '#ffffff', mb: 3, fontWeight: 900 }}>
                  Navigating Singularity (Ray Kurzweil)
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, fontWeight: 550 }}>
                  Each generation needs its own strategy for self-development, its own timeline, and its own advocacy.
                  Our human transformation is on the go, and as Elon Musk states,{' '}
                  <Box component="span" sx={{ color: '#fbbf24', fontStyle: 'italic', fontWeight: 800 }}>
                    “Singularity, our merging with AI, is already here.”
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, fontWeight: 550 }}>
                  The way we adjust to it now determines our future. We need to urgently prepare ourselves{' '}
                  <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>physically</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>emotionally</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>mentally</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritually</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>universally</Box>
                  {' '}in an integral fashion, rather than a step-by-step way.
                </Typography>

                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, fontWeight: 550, lineHeight: 1.7 }}>
                  The movement for{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    digital identification
                  </Box>{' '}
                  and the control of{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    Super-Intelligent AI
                  </Box>{' '}
                  predicted to merge with human intelligence and surpass it in 2030{' '}
                  <Box component="span" sx={{ fontStyle: 'italic' }}>
                    (Ray Kurzweil)
                  </Box>{' '}
                  or by 2045{' '}
                  <Box component="span" sx={{ fontStyle: 'italic' }}>
                    (Sam Altman)
                  </Box>{' '}
                  is lost by us in the mental dimension.
                </Typography>

                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, fontWeight: 550, lineHeight: 1.7 }}>
                  However, the appearance of{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    Super Intelligent AI
                  </Box>{' '}
                  should not scare us!{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    It is a natural evolutionary process
                  </Box>{' '}
                  that is beyond our control on its informationally and actionably AI monitored, unbeatable basis.{' '}
                  <Box component="span" sx={{ textDecoration: 'underline' }}>
                    We are not in the battle for information optimization and its use for our development in every
                    field of knowledge, starting with the physical realm.{' '}
                    <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                      Super Intelligent AI
                    </Box>{' '}
                    is on top of the{' '}
                    <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>
                      Mezzo
                    </Box>{' '}
                    stage of planetary development, and our amazing tech geniuses know that.
                  </Box>{' '}
                  (See{' '}
                  <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>
                    mini
                  </Box>{' '}
                  +{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    meta
                  </Box>{' '}
                  +{' '}
                  <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>
                    mezzo
                  </Box>{' '}
                  +{' '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>
                    macro
                  </Box>{' '}
                  +{' '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>
                    super
                  </Box>{' '}
                  levels.)
                </Typography>

                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, fontWeight: 550, lineHeight: 1.7 }}>
                  Fortunately, our{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    meta
                  </Box>{' '}
                  <Box component="span" sx={{ fontStyle: 'italic' }}>
                    (emotional level)
                  </Box>
                  ,{' '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>
                    macro
                  </Box>{' '}
                  <Box component="span" sx={{ fontStyle: 'italic' }}>
                    (spiritual)
                  </Box>
                  , and{' '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>
                    super
                  </Box>{' '}
                  <Box component="span" sx={{ fontStyle: 'italic' }}>
                    (universal realms of life)
                  </Box>{' '}
                  remain unsurmountable for AI, and{' '}
                  <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>
                    we need to prioritize our superiority on these levels with the help of new AI models and
                    applications
                  </Box>{' '}
                  engineered to upgrade and internalize our ethical and moral upheaval, authentic faith, and
                  intellectually spiritualized sync with Super Consciousness that will eventually integrate us into
                  Space Community.{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>
                    It is our intuitive knowing that transcends rational thought!
                  </Box>
                </Typography>

                <Box sx={{ my: 4, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ color: '#1d4ed8', fontWeight: 800, mb: 1, fontFamily: '"Outfit", sans-serif' }}>
                    “The Silver Thread of such connection has always existed.”
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#cbd5e1', fontStyle: 'italic' }}>
                    (Helena Blavatsky)
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 3, fontWeight: 550, lineHeight: 1.7 }}>
                  On this path of{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800, textDecoration: 'underline' }}>
                    global human consciousness evolution
                  </Box>
                  , upgraded with AI mental assistance, we will develop LIBERATION FROM EMOTIONAL REACTIVITY,{' '}
                  <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>
                    inner unshakable psychic stability, religious inclusivity, and universal luminous forbearance
                  </Box>
                  .
                </Typography>

                <Box sx={{ my: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#1d4ed8',
                      fontWeight: 800,
                      textDecoration: 'underline',
                      fontFamily: '"Outfit", sans-serif',
                    }}
                  >
                    So, Don't Scare AI. Be More Globally AI Aware!
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#dc2626',
                      fontWeight: 800,
                      fontFamily: '"Outfit", sans-serif',
                    }}
                  >
                    HUMAN SELF-RENAISSANCE IS OUR EVOLUTIONARY STANCE!
                  </Typography>
                </Box>

                <Divider sx={{ my: 3, borderColor: 'rgba(46, 125, 50, 0.3)' }} />
                <Typography variant="body1" sx={{ fontWeight: 800 }}>
                  <Box component="span" sx={{ color: '#dc2626' }}>
                    Our scientifically, technologically, and spiritually intellectualized vector of life must be primary.
                  </Box>
                  {' '}
                  <Box component="span" sx={{ color: '#a5d6a7' }}>
                    The goal of this system is to prove our primary nature in the battle for supremacy with AI, and prepare ourselves for future extra-terrestrial endeavors.
                  </Box>
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
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(15, 16, 38, 0.85) 100%)',
                  border: '2px solid #5e35b1',
                  boxShadow: '0 8px 32px rgba(94, 53, 177, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle2" sx={{ color: '#a5b4fc', fontWeight: 900, textTransform: 'uppercase', mb: 2, letterSpacing: '0.1em' }}>
                  The Formula of Alignment
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 800, fontFamily: '"Outfit", sans-serif' }}>
                  <Box component="span" sx={{ color: '#16a34a' }}>Body</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#dc2626' }}>Spirit</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#1d4ed8' }}>Mind</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#7c3aed' }}>Self-Consciousness</Box>
                  {' + '}
                  <Box component="span" sx={{ color: '#7c3aed' }}>Super-Consciousness</Box>
                </Typography>
                <Typography variant="h4" sx={{ color: '#fbbf24', fontWeight: 950, textShadow: '0 0 15px rgba(251,191,36,0.5)', fontFamily: '"Outfit", sans-serif', textAlign: 'center' }}>
                  = SOUL-SYMMETRY!
                </Typography>
              </Box>

              {/* Self-Evolution Path */}
              <Box
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#facc15',
                  border: '2px solid #eab308',
                  boxShadow: '0 8px 32px rgba(250, 204, 21, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle2" sx={{ color: '#1e1b4b', fontWeight: 900, textTransform: 'uppercase', mb: 2, letterSpacing: '0.1em', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                  The Evolution Path
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 800, fontFamily: '"Outfit", sans-serif' }}>
                  <Box component="span" sx={{ color: '#14532d', textShadow: '0 1px 3px rgba(255,255,255,0.6)' }}>Self-Awareness</Box>
                  <Box component="span" sx={{ color: '#000000' }}>{' → '}</Box>
                  <Box component="span" sx={{ color: '#7f1d1d', textShadow: '0 1px 3px rgba(255,255,255,0.6)' }}>Soul-Refining</Box>
                  <Box component="span" sx={{ color: '#000000' }}>{' → '}</Box>
                  <Box component="span" sx={{ color: '#1e3a8a', textShadow: '0 1px 3px rgba(255,255,255,0.6)' }}>Self-Installation</Box>
                  <Box component="span" sx={{ color: '#000000' }}>{' → '}</Box>
                  <Box component="span" sx={{ color: '#4c1d95', textShadow: '0 1px 3px rgba(255,255,255,0.6)' }}>Self-Realization</Box>
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 950, fontFamily: '"Outfit", sans-serif', textAlign: 'center' }}>
                  <Box component="span" sx={{ color: '#3b0764', textShadow: '0 1px 3px rgba(255,255,255,0.6)' }}>= SELF-SALVATION!</Box>
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
            color: '#ed668c',
          }}
        >
          Three Axioms of AI-Enhanced Self-Transformation
        </Typography>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {/* Rule A */}
          <Grid item xs={12} md={4}>
            <Box sx={{ height: '100%', backgroundColor: '#facc15', borderColor: '#eab308', borderStyle: 'solid', borderWidth: '2px', borderRadius: 4, boxShadow: '0 8px 32px rgba(250, 204, 21, 0.35)', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <PsychologyIcon sx={{ color: '#000000', fontSize: '2.2rem' }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#000000', mb: 2, fontWeight: 900 }}>
                  A) Total Integration
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                  Reality and us are totally integrated. Every pulse of the universe is mirrored within our human fractal.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Rule B */}
          <Grid item xs={12} md={4}>
            <Box sx={{ height: '100%', backgroundColor: '#22d3ee', borderColor: '#0891b2', borderStyle: 'solid', borderWidth: '2px', borderRadius: 4, boxShadow: '0 8px 32px rgba(34, 211, 238, 0.35)', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <ShieldIcon sx={{ color: '#000000', fontSize: '2.2rem' }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#000000', mb: 2, fontWeight: 900 }}>
                  B) Sense of Measure
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                  The sense of measure is our ultimate treasure. Harmonizing binary digits with natural human rhythms.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Rule C */}
          <Grid item xs={12} md={4}>
            <Box sx={{ height: '100%', backgroundColor: '#facc15', borderColor: '#eab308', borderStyle: 'solid', borderWidth: '2px', borderRadius: 4, boxShadow: '0 8px 32px rgba(250, 204, 21, 0.35)', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <MemoryIcon sx={{ color: '#000000', fontSize: '2.2rem' }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#000000', mb: 2, fontWeight: 900 }}>
                  C) Less is More!
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000', fontWeight: 700, lineHeight: 1.6 }}>
                  Simplifying information flow. Eliminating cognitive clutter to let deep, spiritual intelligence take root.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Big Bold Banner Statement */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            px: 4,
            borderRadius: 6,
            background: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(99,102,241,0.1) 100%)',
            border: '2px solid #db2777',
            boxShadow: '0 15px 40px -10px rgba(219,39,119,0.3)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
              mb: 3,
              background: 'linear-gradient(45deg, #ec4899 10%, #818cf8 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(236,72,153,0.3)',
            }}
          >
            We are God-Created, Not Machine Mind Mandated!
          </Typography>
          <Typography variant="body1" sx={{ color: '#e2e8f0', fontWeight: 550, maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            Our wholeness is the soil where something new can take root. It is our Soul-Symmetry formation in action,
            not just in reflection, meditation, or the intention to materialize our sacred wishes.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
