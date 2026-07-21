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
        {/* Summary Section */}
        <Box
          sx={{
            mb: 10,
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            background: 'rgba(15, 16, 38, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Header line */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              mb: 4,
              lineHeight: 1.4,
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            <Box component="span" sx={{ color: '#dc2626', textDecoration: 'underline' }}>
              In Summary
            </Box>
            {", let’s use AI technology for "}
            <Box component="span" sx={{ textDecoration: 'underline', color: '#ffffff' }}>
              Universal Exploration, not Human Subordination!
            </Box>
          </Typography>

          {/* First Paragraph */}
          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 600,
              fontSize: { xs: '1.05rem', sm: '1.2rem' },
              lineHeight: 1.8,
              maxWidth: '900px',
              mx: 'auto',
              mb: 4,
            }}
          >
            The system is about an urgent necessity to promote a unified global approach to controlling AI by unifying our world-wide{" "}
            <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>human</Box>
            {", "}
            <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>psychological</Box>
            {", "}
            <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>scientific</Box>
            {", "}
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritual</Box>
            {", and "}
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>religious</Box>
            {" diversity and exceptionality and directing AI’s uncontrolled gold rush industrialization toward governing "}
            <Box component="span" sx={{ fontWeight: 900, color: '#ffffff', display: 'block', mt: 1, letterSpacing: '0.05em' }}>
              GLOBAL HUMAN EVOLUTION!
            </Box>
          </Typography>

          {/* Second Paragraph */}
          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 600,
              fontSize: { xs: '1.05rem', sm: '1.2rem' },
              lineHeight: 1.8,
              maxWidth: '900px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Our life should not be built on just AI enhanced abundance and longevity. AI’s global role is to help us revolutionize our{" "}
            <Box component="span" sx={{ fontWeight: 900, color: '#ffffff' }}>HUMAN GROWTH</Box>
            {" with "}
            <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>personal freedom</Box>
            {", "}
            <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>altruism</Box>
            {", "}
            <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>intelligence</Box>
            {", "}
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritual dignity</Box>
            {", and "}
            <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>universal emancipation</Box>
            {" "}
            <Box component="span" sx={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '0.95em' }}>
              (physical + emotional + mental + spiritual + universal life dimensions in sync)
            </Box>
            {" on the basis of AI enhanced global unification for "}
            <Box component="span" sx={{ color: '#dc2626', textDecoration: 'underline', fontWeight: 700 }}>
              life’s technological exploration and humanity’s extra-terrestrial presentation.
            </Box>
          </Typography>

          {/* Third Paragraph */}
          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 600,
              fontSize: { xs: '1.05rem', sm: '1.2rem' },
              lineHeight: 1.8,
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            So, let’s redirect our Aware Attention from robotic life’s im-personalization to{" "}
            <Box
              component="span"
              sx={{
                display: 'block',
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                color: '#ffffff',
                mt: 1.5,
                fontSize: { xs: '1.15rem', sm: '1.35rem' },
              }}
            >
              Human Technological Expansion and Personal Individualization!
            </Box>
          </Typography>
        </Box>

        {/* Finality Section */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#ffffff',
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            HUMAN EXCEPTIONALITY IS NO BANALITY!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 550,
              fontSize: { xs: '1.05rem', sm: '1.15rem' },
              lineHeight: 1.8,
              maxWidth: '850px',
              mx: 'auto',
              mb: 3,
            }}
          >
            <strong>Human Morality</strong> must be derived from “pure reason”{' '}
            <Box component="span" sx={{ fontStyle: 'italic' }}>
              (Immanuel Kant)
            </Box>
            , rather than from materialistic desires, potential prosperity and longevity. Moral Laws are spiritually
            devised for humans to thrive not to die in a battle with heartless, indifferent machine beings.{' '}
            <Box
              component="span"
              sx={{ color: '#dc2626', fontWeight: 800, textDecoration: 'underline' }}
            >
              In the wrong hands, AI may be dangerously misused, and our global mission is not to allow such
              actions admission!
            </Box>{' '}
            <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>
              Pure rationality is not
            </Box>{' '}
            in <strong>HUMAN vs. AI DUALITY.</strong>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              color: '#ffffff',
              textDecoration: 'underline',
              mb: 4,
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
            }}
          >
            It is in Integrity and Universal Multi-Dimensional Unanimity!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontStyle: 'italic',
              mb: 2,
              fontWeight: 500,
            }}
          >
            ( see the book “Digital Binary + Human Refinery = Super-Human!” )
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#94a3b8',
              textDecoration: 'line-through',
              fontStyle: 'italic',
              mb: 3,
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
          >
            AIs should dominate and subordinate us.
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#dc2626', // Red
              mb: 3,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
            }}
          >
            WE ARE GOD-CREATED, NOT MACHINE MIND MANDATED!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 550,
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
            }}
          >
            . Robots and Humanoids must emanate new possibilities, jobs, and abilities. They are secondary in Earth’s
            Evolution and should primarily serve
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#ffffff',
              mb: 2,
              fontSize: { xs: '1.3rem', sm: '1.6rem' },
            }}
          >
            HUMAN FACTOR’S SOLUTION!
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#1d4ed8', // Blue
              mb: 4,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Our Main Enemy is Ignorance, not AI’s Impersonality and Indifference!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#cbd5e1',
              fontWeight: 550,
              mb: 2,
            }}
          >
            Our Earthly Being must be determined by
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#dc2626', // Red
              textDecoration: 'underline',
              mb: 1,
              fontSize: { xs: '1.4rem', sm: '1.8rem' },
            }}
          >
            Our Raised Self-Consciousness and
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#ffffff',
              textDecoration: 'underline',
              mb: 6,
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            GLOBAL EVOLUTIONARY RENAISSANCE!
          </Typography>
        </Box>

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
                color: '#ffffff',
                opacity: 1,
                fontFamily: 'serif',
              },
              '&::after': {
                content: '"”"',
                position: 'absolute',
                right: 0,
                bottom: -40,
                fontSize: '5rem',
                color: '#ffffff',
                opacity: 1,
                fontFamily: 'serif',
              }
            }}
          >
            Don’t teach just a subject. Teach the whole person!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#ed668c', fontWeight: 800, mt: 2 }}>
            — LEO VYGOTSKY
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              mt: 4,
              color: '#f6c915',
              letterSpacing: '0.12em',
              textShadow: '0 0 20px rgba(246, 201, 21, 0.4)',
            }}
          >
            “THE BEST IS YET TO COME!”
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
            Developing Personal Magnetism with Quantum Consciousness Ascetism.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#1d4ed8',
              mb: 3,
              fontSize: { xs: '1.6rem', sm: '2rem' },
            }}
          >
            Human Life is a Precious Gift. Let's Cherish It!
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              color: '#7c3aed',
              fontSize: { xs: '2rem', sm: '2.8rem' },
              letterSpacing: '0.02em',
              mb: 2,
            }}
          >
            LIVE WITH ZEST.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 950,
              color: '#dc2626',
              fontSize: { xs: '1.8rem', sm: '2.6rem' },
              letterSpacing: '0.02em',
            }}
          >
            FANTASTIC LIFE IS ABREAST!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
