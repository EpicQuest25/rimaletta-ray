import { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, IconButton, Button, Collapse, Divider, Chip } from '@mui/material';
import { 
  AutoAwesome as AutoAwesomeIcon, 
  NavigateBefore as NavigateBeforeIcon, 
  NavigateNext as NavigateNextIcon, 
  FormatQuote as FormatQuoteIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';

interface MindsetQuote {
  text: string;
  category: 'Universal' | 'Auto-Suggestive' | 'Digital' | 'Quantum' | 'General';
}

const mindsetsData: MindsetQuote[] = [
  { text: 'Be the Station for Soul’s Emancipation', category: 'Universal' },
  { text: 'Let’s Make Our Self-Consciousness Celestial, Not Blindly Terrestrial!', category: 'Universal' },
  { text: 'Our Hands are the Tools for our Integrity, Strength, and Inner Space Sovereignty!', category: 'Universal' },
  { text: '“Your Vision will become Clear when You look into Your Own Soul as a Whole.”', category: 'General' },
  { text: 'Auto-Suggestive Psychology for Self-Ecology: There is No System without Structure!', category: 'Auto-Suggestive' },
  { text: 'Digital Psychology for Self-Ecology: Digital Evolving is Humanity’s Re-Forming!', category: 'Digital' },
  { text: 'More Life-Gaining is in Quantum Self-Reframing!', category: 'Quantum' },
  { text: 'Don’t Just Survive. Keep Bettering Your Inner Vibrational Life!', category: 'Quantum' },
  { text: 'Purify Your Memory Storage With AI Provided Knowledge!', category: 'Digital' },
  { text: 'Work on Your Goal by the Systemic Pole!', category: 'General' },
  { text: 'Self-Awareness + Self-Refining + Self-Installation + Self-Realization + Self-Salvation = Soul-Symmetry!', category: 'Universal' },
  { text: 'Evolving in Five Dimensions of the Whole is Our Collaborative with AI’s Goal!', category: 'Digital' },
  { text: 'We are God-Created, Not Machine-Mind Mandated!', category: 'Quantum' }
];

interface QuizOption {
  text: string;
  dimension: string;
  level: number;
  bookTitle: string;
  bookLink: string;
  advice: string;
}

const quizOptions: QuizOption[] = [
  {
    text: 'My physical health, energy levels, and body awareness.',
    dimension: 'Physical Dimension (Body / Pinky Finger)',
    level: 1,
    bookTitle: 'Dis-Entanglement!',
    bookLink: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0FPLYRS3Z',
    advice: 'Focus on restoring your physical ecology. Unplug from digital tethers to ground your biological energy.'
  },
  {
    text: 'My emotional reactions, empathy, and relationship filters.',
    dimension: 'Emotional Dimension (Spirit / Ring Finger)',
    level: 2,
    bookTitle: 'Exceptionality',
    bookLink: 'https://www.amazon.com/Exceptionality-Digital-Psychology-Self-Ecology-ebook/dp/B0CF7PB1FJ/',
    advice: 'Cultivate emotional uniqueness and safeguard empathy. Your feelings are the primary human asset against binary standardisation.'
  },
  {
    text: 'My intellectual focus, critical thinking, and binary overload.',
    dimension: 'Mental Dimension (Mind / Middle Finger)',
    level: 3,
    bookTitle: 'Spiritual Diplomacy',
    bookLink: 'https://www.amazon.com/Spiritual-Diplomacy-Self-Restructuring-Psychology-Self-Ecology/dp/B0FN61NDCK/',
    advice: 'Establish high-frequency conscious communication. Elevate mental discourse into cooperative diplomacy.'
  },
  {
    text: 'My creative flow, spiritual alignment, and soul expression.',
    dimension: 'Spiritual Dimension (Self-Consciousness / Index Finger)',
    level: 4,
    bookTitle: 'Self-Taming!',
    bookLink: 'https://www.amazon.com/Self-Taming-Inspirational-Psychology-Life-Gaining-Taming/dp/B0F7KG64K6/',
    advice: 'Work on self-regulation and spiritual maturity. Balance your creative fire with discipline and inner peace.'
  },
  {
    text: 'My cosmic perspective, universal purpose, and deep connectivity.',
    dimension: 'Universal Dimension (Super-Consciousness / Thumb)',
    level: 5,
    bookTitle: 'Self-Ascension',
    bookLink: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-Ph-D-ebook/dp/B0GZS9QQ4C/',
    advice: 'Sync with the cosmos. Broaden your awareness beyond the terrestrial to integrate harmoniously with evolving global layers.'
  }
];

interface FingerDetails {
  name: string;
  realm: string;
  nvidia: string;
  booster: string;
  book: string;
  link: string;
  color: string;
  height: number;
}

const fingersData: Record<string, FingerDetails> = {
  pinky: {
    name: 'Pinky Finger',
    realm: 'Body (Physical Dimension)',
    nvidia: 'Mini Level - Energy Production',
    booster: '“Our Hands are the Tools for our Integrity, Strength, and Sovereignty!”',
    book: 'Dis-Entanglement!',
    link: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0FPLYRS3Z',
    color: '#16a34a',
    height: 110
  },
  ring: {
    name: 'Ring Finger',
    realm: 'Spirit (Emotional Dimension)',
    nvidia: 'Meta Level - Chips Manufacturing',
    booster: '“Don’t Just Survive. Keep Bettering Your Inner Vibrational Life!”',
    book: 'Exceptionality',
    link: 'https://www.amazon.com/Exceptionality-Digital-Psychology-Self-Ecology-ebook/dp/B0CF7PB1FJ/',
    color: '#dc2626',
    height: 150
  },
  middle: {
    name: 'Middle Finger',
    realm: 'Mind (Mental Dimension)',
    nvidia: 'Mezzo Level - Industrial Infrastructure',
    booster: '“There is No System without Structure!”',
    book: 'Spiritual Diplomacy',
    link: 'https://www.amazon.com/Spiritual-Diplomacy-Self-Restructuring-Psychology-Self-Ecology/dp/B0FN61NDCK/',
    color: '#2563eb',
    height: 170
  },
  index: {
    name: 'Index Finger',
    realm: 'Self-Consciousness (Spiritual Dimension)',
    nvidia: 'Macro Level - Creative Models',
    booster: '“Let’s Make Our Self-Consciousness Celestial, Not Blindly Terrestrial!”',
    book: 'Self-Taming!',
    link: 'https://www.amazon.com/Self-Taming-Inspirational-Psychology-Life-Gaining-Taming/dp/B0F7KG64K6/',
    color: '#db2777',
    height: 140
  },
  thumb: {
    name: 'Thumb',
    realm: 'Super-Consciousness (Universal Dimension)',
    nvidia: 'Super Level - Applications',
    booster: '“Be the Station for Soul’s Emancipation”',
    book: 'Self-Ascension',
    link: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-Ph-D-ebook/dp/B0GZS9QQ4C/',
    color: '#7c3aed',
    height: 90
  }
};

export default function GrainsPhilosophy() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  
  // Quiz State
  const [quizStep, setQuizStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [selectedQuizOption, setSelectedQuizOption] = useState<QuizOption | null>(null);

  // Black Box Toggle State
  const [isBlackBoxExpanded, setIsBlackBoxExpanded] = useState(false);

  // Hand Metaphor State
  const [activeFingerKey, setActiveFingerKey] = useState<string>('middle');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % mindsetsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + mindsetsData.length) % mindsetsData.length);
  };

  const handleNext = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % mindsetsData.length);
  };

  const handleOptionClick = (option: QuizOption) => {
    setSelectedQuizOption(option);
    setQuizStep('result');
  };

  const handleResetQuiz = () => {
    setSelectedQuizOption(null);
    setQuizStep('intro');
  };

  const activeQuote = mindsetsData[activeQuoteIndex];
  const activeFinger = fingersData[activeFingerKey];

  return (
    <Box
      id="philosophy"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, #ffe0b2 0%, #ffe082 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box className="cosmic-glow-indigo" sx={{ top: '10%', left: '10%', opacity: 0.2 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '10%', right: '10%', opacity: 0.2 }} />

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
              background: 'rgba(244, 63, 94, 0.08)',
              border: '1px solid rgba(244, 63, 94, 0.15)',
              mb: 3,
            }}
          >
            <AutoAwesomeIcon sx={{ color: '#f43f5e', fontSize: '1.1rem' }} />
            <Typography variant="body2" sx={{ color: '#f43f5e', fontWeight: 700, letterSpacing: '0.05em' }}>
              GRAINS OF PHILOSOPHY
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 900,
              mb: 2,
              background: 'linear-gradient(135deg, #881337 0%, #5c0620 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Core Mindsets & Self-Symmetry
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#881337', fontWeight: 600, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', fontFamily: '"Inter", sans-serif' }}
          >
            Explore Dr. Ray's structured rhyming boosters, take the self-alignment quiz, and interact with the Hand Fractal of Self-Symmetry.
          </Typography>
        </Box>

        {/* Top Section: Quotes Slider (Left) & Alignment Quiz (Right) */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {/* Quotes Slider Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(253,242,248,0.98) 100%)',
                border: '2px solid #f43f5e',
                borderRadius: 5,
                boxShadow: '0 20px 45px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: 'center', position: 'relative', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <FormatQuoteIcon
                  sx={{
                    color: 'rgba(244, 63, 94, 0.03)',
                    fontSize: '8rem',
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 0,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#f43f5e',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      mb: 2.5,
                      fontSize: '0.8rem'
                    }}
                  >
                    {activeQuote.category} Cycle Booster
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 850,
                      color: '#881337',
                      lineHeight: 1.5,
                      fontSize: { xs: '1.4rem', md: '1.8rem' },
                      mb: 3,
                      minHeight: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {activeQuote.text}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#9f1239', fontWeight: 700, mb: 2 }}>
                    {activeQuoteIndex + 1} / {mindsetsData.length}
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => {
                      const randomIndex = Math.floor(Math.random() * mindsetsData.length);
                      setActiveQuoteIndex(randomIndex);
                    }}
                    startIcon={<AutoAwesomeIcon sx={{ fontSize: '0.95rem' }} />}
                    sx={{
                      color: '#f43f5e',
                      textTransform: 'none',
                      fontWeight: 800,
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      '&:hover': { background: 'rgba(244, 63, 94, 0.05)' }
                    }}
                  >
                    Generate Random Booster
                  </Button>
                </Box>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 4 }}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    background: '#ffffff',
                    border: '1px solid rgba(244, 63, 94, 0.2)',
                    color: '#881337',
                    '&:hover': { background: 'rgba(244, 63, 94, 0.08)', borderColor: '#f43f5e' },
                    transition: 'all 0.3s',
                  }}
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    background: '#ffffff',
                    border: '1px solid rgba(244, 63, 94, 0.2)',
                    color: '#881337',
                    '&:hover': { background: 'rgba(244, 63, 94, 0.08)', borderColor: '#f43f5e' },
                    transition: 'all 0.3s',
                  }}
                >
                  <NavigateNextIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          {/* Interactive Alignment Quiz Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(239,246,255,0.98) 100%)',
                border: '2px solid #2563eb',
                borderRadius: 5,
                boxShadow: '0 20px 45px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {quizStep === 'intro' && (
                  <Box sx={{ textAlign: 'center' }}>
                    <AutoAwesomeIcon sx={{ color: '#2563eb', fontSize: '3rem', mb: 2 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#1e3a8a', mb: 1.5 }}>
                      Dimensional Self-Alignment Quiz
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1e3a8a', fontWeight: 550, mb: 4, lineHeight: 1.6 }}>
                      Dr. Ray outlines that balance begins with addressing your most vulnerable life realm. 
                      Answer this 1-step prompt to evaluate where your focus should go first.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => setQuizStep('question')}
                      sx={{
                        background: 'linear-gradient(95deg, #2563eb 0%, #1d4ed8 100%)',
                        color: '#ffffff',
                        fontWeight: 800,
                        px: 4,
                        py: 1.5,
                        borderRadius: '30px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                        '&:hover': {
                          background: 'linear-gradient(95deg, #3b82f6 0%, #2563eb 100%)',
                        }
                      }}
                    >
                      Start Alignment Analysis
                    </Button>
                  </Box>
                )}

                {quizStep === 'question' && (
                  <Box>
                    <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#1e3a8a', mb: 3 }}>
                      Which area of your life needs the most attention or balancing right now?
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {quizOptions.map((option, idx) => (
                        <Box
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          sx={{
                            cursor: 'pointer',
                            p: 2,
                            borderRadius: 3,
                            background: 'rgba(0,0,0,0.01)',
                            border: '1px solid rgba(37, 99, 235, 0.15)',
                            transition: 'all 0.2s',
                            '&:hover': {
                              background: 'rgba(37, 99, 235, 0.05)',
                              borderColor: '#2563eb',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <Typography variant="body2" sx={{ color: '#1e3a8a', fontWeight: 650 }}>
                            {option.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {quizStep === 'result' && selectedQuizOption && (
                  <Box>
                    <Chip
                      label={`SUGGESTED ALIGNMENT: LEVEL ${selectedQuizOption.level}`}
                      sx={{
                        backgroundColor: 'rgba(37, 99, 235, 0.08)',
                        color: '#2563eb',
                        border: '1px solid rgba(37, 99, 235, 0.15)',
                        fontWeight: 800,
                        mb: 2,
                      }}
                    />
                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#1e3a8a', mb: 1 }}>
                      {selectedQuizOption.dimension}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1e3a8a', fontWeight: 550, mb: 3, lineHeight: 1.7 }}>
                      {selectedQuizOption.advice}
                    </Typography>

                    <Divider sx={{ my: 2, borderColor: 'rgba(37, 99, 235, 0.15)' }} />

                    {/* Book Recommendation block */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        background: 'rgba(37, 99, 235, 0.02)',
                        border: '1px solid rgba(37, 99, 235, 0.12)',
                        mb: 3
                      }}
                    >
                      <Typography variant="caption" sx={{ color: '#d97706', fontWeight: 800, textTransform: 'uppercase', display: 'block', mb: 1 }}>
                        Recommended System Guide
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#1e3a8a', fontWeight: 800, mb: 1.5 }}>
                        {selectedQuizOption.bookTitle}
                      </Typography>
                      <Button
                        variant="outlined"
                        component="a"
                        href={selectedQuizOption.bookLink}
                        target="_blank"
                        startIcon={<ShoppingCartIcon />}
                        sx={{
                          borderColor: '#d97706',
                          color: '#d97706',
                          textTransform: 'none',
                          fontWeight: 800,
                          borderRadius: '20px',
                          '&:hover': {
                            borderColor: '#b45309',
                            background: 'rgba(217, 119, 6, 0.08)'
                          }
                        }}
                      >
                        Acquire on Amazon
                      </Button>
                    </Box>

                    <Button
                      onClick={handleResetQuiz}
                      sx={{ color: '#2563eb', textTransform: 'none', fontWeight: 750, fontSize: '0.85rem' }}
                    >
                      Retake Prompt
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Bottom Section: AI Synergy Manifesto (Left) & Interactive Hand Fractal (Right) */}
        <Grid container spacing={5} alignItems="stretch">
          {/* Left Block: AI-Human Synergy Manifesto & Deep Learning Expandable */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4.5,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(253,242,248,0.98) 100%)',
                border: '2px solid #f43f5e',
                boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 850,
                    color: '#881337',
                    mb: 2.5,
                    fontSize: '1.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box component="span" sx={{ width: 4, height: 24, backgroundColor: '#f43f5e', borderRadius: 2 }} />
                  AI-Human Governance Manifesto
                </Typography>
                <Typography variant="body1" sx={{ color: '#881337', fontWeight: 550, lineHeight: 1.7, mb: 3 }}>
                  “AI dealings with humans are multifaceted and multi-dimensional, encompassing competition for supremacy in
                  technology and numerous instances of collaboration that must be governed by us. We must reduce depending on AI created Ecosystem.”
                </Typography>
                <Typography variant="body1" sx={{ color: '#881337', fontWeight: 650, lineHeight: 1.7, mb: 3 }}>
                  We should integrate AI into our physical, emotional, mental, spiritual, and universal realms of life, while safeguarding human rights against mass surveillance. Mutual respect and bilateral consideration are our obligation!
                </Typography>
                <Typography variant="caption" sx={{ color: '#9f1239', fontWeight: 700, fontStyle: 'italic', display: 'block', mb: 3 }}>
                  — Extract from the Book “Light is me. Light is My Philosophy!”
                </Typography>

                {/* Interactive Decipherment of AI Black Box Toggle */}
                <Box
                  sx={{
                    border: '1px dashed rgba(244, 63, 94, 0.25)',
                    borderRadius: 3,
                    p: 2.5,
                    mb: 3,
                    background: 'rgba(244, 63, 94, 0.01)',
                  }}
                >
                  <Box
                    onClick={() => setIsBlackBoxExpanded(!isBlackBoxExpanded)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AutoAwesomeIcon sx={{ color: '#f43f5e', fontSize: '1.15rem' }} />
                      <Typography variant="subtitle2" sx={{ color: '#881337', fontWeight: 800, fontSize: '0.9rem' }}>
                        Deciphering the AI "Black Box"
                      </Typography>
                    </Box>
                    {isBlackBoxExpanded ? <ExpandLessIcon sx={{ color: '#f43f5e' }} /> : <ExpandMoreIcon sx={{ color: '#f43f5e' }} />}
                  </Box>
                  <Collapse in={isBlackBoxExpanded}>
                    <Typography variant="body2" sx={{ color: '#881337', mt: 2, fontWeight: 550, lineHeight: 1.6, fontSize: '0.85rem' }}>
                      Dr. Ray asserts: <strong>“The ‘black box’ nature of AI’s deep learning must be deciphered and tactfully controlled.”</strong> 
                      We must map consciousness itself to infrastructure to ensure humans hold the architectural reins, directing binary tools toward human evolution rather than submission.
                    </Typography>
                  </Collapse>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  background: 'rgba(244, 63, 94, 0.04)',
                  border: '1px solid rgba(244, 63, 94, 0.15)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1" sx={{ color: '#f43f5e', fontWeight: 900, fontSize: '1.05rem', fontFamily: '"Outfit", sans-serif' }}>
                  “Let’s Direct the Flow of Constructive Human Energy to Granting Humanity SUPER-HUMAN STATUS!”
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Block: Fully Interactive Hand Fractal of Self-Symmetry */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4.5,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(254,243,199,0.98) 100%)',
                border: '2px solid #d97808',
                boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#881337', mb: 1.5, fontSize: '1.4rem' }}>
                  The Hand Fractal of Self-Symmetry
                </Typography>
                <Typography variant="body2" sx={{ color: '#881337', fontWeight: 600, mb: 3, fontSize: '0.9rem' }}>
                  Our hands serve as a physical model representing the integration of the five life realms. Click any finger to explore.
                </Typography>

                {/* Hand Vector CSS Visualization */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                    height: '200px',
                    position: 'relative',
                    px: { xs: 2, sm: 6 },
                    mb: 3,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '90%',
                      height: '20px',
                      borderRadius: '10px 10px 0 0',
                      background: 'rgba(0,0,0,0.01)',
                      border: '1px solid rgba(0,0,0,0.04)',
                      borderBottom: 'none',
                    }
                  }}
                >
                  {/* Pinky: Body */}
                  <Box 
                    onClick={() => setActiveFingerKey('pinky')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#16a34a', fontWeight: activeFingerKey === 'pinky' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'pinky' ? 1 : 0.6 }}>
                      Body
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 100, 
                        background: activeFingerKey === 'pinky' ? 'linear-gradient(to top, rgba(22,163,74,0.3), #16a34a)' : 'rgba(22,163,74, 0.08)', 
                        border: activeFingerKey === 'pinky' ? '1px solid #16a34a' : '1px solid rgba(22,163,74, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'pinky' ? '0 0 15px rgba(22,163,74,0.2)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'pinky' ? '#16a34a' : 'rgba(0,0,0,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'pinky' ? 700 : 500 }}>Pinky</Typography>
                  </Box>

                  {/* Ring: Spirit */}
                  <Box 
                    onClick={() => setActiveFingerKey('ring')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#dc2626', fontWeight: activeFingerKey === 'ring' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'ring' ? 1 : 0.6 }}>
                      Spirit
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 130, 
                        background: activeFingerKey === 'ring' ? 'linear-gradient(to top, rgba(220,38,38,0.3), #dc2626)' : 'rgba(220,38,38, 0.08)', 
                        border: activeFingerKey === 'ring' ? '1px solid #dc2626' : '1px solid rgba(220,38,38, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'ring' ? '0 0 15px rgba(220,38,38,0.2)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'ring' ? '#dc2626' : 'rgba(0,0,0,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'ring' ? 700 : 500 }}>Ring</Typography>
                  </Box>

                  {/* Middle: Mind */}
                  <Box 
                    onClick={() => setActiveFingerKey('middle')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: activeFingerKey === 'middle' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'middle' ? 1 : 0.6 }}>
                      Mind
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 150, 
                        background: activeFingerKey === 'middle' ? 'linear-gradient(to top, rgba(37,99,235,0.3), #2563eb)' : 'rgba(37,99,235, 0.08)', 
                        border: activeFingerKey === 'middle' ? '1px solid #2563eb' : '1px solid rgba(37,99,235, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'middle' ? '0 0 15px rgba(37,99,235,0.2)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'middle' ? '#2563eb' : 'rgba(0,0,0,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'middle' ? 700 : 500 }}>Middle</Typography>
                  </Box>

                  {/* Index: Self-Consciousness */}
                  <Box 
                    onClick={() => setActiveFingerKey('index')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#db2777', fontWeight: activeFingerKey === 'index' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'index' ? 1 : 0.6 }}>
                      Self-C.
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 125, 
                        background: activeFingerKey === 'index' ? 'linear-gradient(to top, rgba(219,39,119,0.3), #db2777)' : 'rgba(219,39,119, 0.08)', 
                        border: activeFingerKey === 'index' ? '1px solid #db2777' : '1px solid rgba(219,39,119, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'index' ? '0 0 15px rgba(219,39,119,0.2)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'index' ? '#db2777' : 'rgba(0,0,0,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'index' ? 700 : 500 }}>Index</Typography>
                  </Box>

                  {/* Thumb: Super-Consciousness */}
                  <Box 
                    onClick={() => setActiveFingerKey('thumb')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#7c3aed', fontWeight: activeFingerKey === 'thumb' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'thumb' ? 1 : 0.6 }}>
                      Super-C.
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 80, 
                        background: activeFingerKey === 'thumb' ? 'linear-gradient(to top, rgba(124,58,237,0.3), #7c3aed)' : 'rgba(124,58,237, 0.08)', 
                        border: activeFingerKey === 'thumb' ? '1px solid #7c3aed' : '1px solid rgba(124,58,237, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'thumb' ? '0 0 15px rgba(124,58,237,0.2)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'thumb' ? '#7c3aed' : 'rgba(0,0,0,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'thumb' ? 700 : 500 }}>Thumb</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Selected Finger Details block */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3.5,
                  background: 'rgba(0,0,0,0.01)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'border-color 0.3s ease',
                  borderColor: `${activeFinger.color}30`,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ color: activeFinger.color, fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {activeFinger.name} details
                  </Typography>
                  <Chip 
                    label={activeFinger.nvidia} 
                    size="small" 
                    sx={{ backgroundColor: `${activeFinger.color}10`, color: activeFinger.color, fontWeight: 700, fontSize: '0.75rem' }} 
                  />
                </Box>
                
                <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', color: '#881337', fontWeight: 800, mb: 1 }}>
                  {activeFinger.realm}
                </Typography>
                <Typography variant="body2" sx={{ color: '#881337', fontWeight: 550, fontStyle: 'italic', mb: 2.5, lineHeight: 1.5 }}>
                  {activeFinger.booster}
                </Typography>

                <Divider sx={{ my: 1.5, borderColor: 'rgba(244, 63, 94, 0.15)' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9f1239', fontWeight: 600, display: 'block' }}>
                      Recommended System Book
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#881337', fontWeight: 850 }}>
                      {activeFinger.book}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    component="a"
                    href={activeFinger.link}
                    target="_blank"
                    size="small"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      borderColor: activeFinger.color,
                      color: activeFinger.color,
                      textTransform: 'none',
                      fontWeight: 800,
                      borderRadius: '20px',
                      '&:hover': {
                        borderColor: activeFinger.color,
                        background: `${activeFinger.color}10`
                      }
                    }}
                  >
                    Acquire
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
