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
  Info as InfoIcon
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
    bookLink: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0B33WRYPZ/',
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
    link: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0B33WRYPZ/',
    color: '#22c55e',
    height: 110
  },
  ring: {
    name: 'Ring Finger',
    realm: 'Spirit (Emotional Dimension)',
    nvidia: 'Meta Level - Chips Manufacturing',
    booster: '“Don’t Just Survive. Keep Bettering Your Inner Vibrational Life!”',
    book: 'Exceptionality',
    link: 'https://www.amazon.com/Exceptionality-Digital-Psychology-Self-Ecology-ebook/dp/B0CF7PB1FJ/',
    color: '#ef4444',
    height: 150
  },
  middle: {
    name: 'Middle Finger',
    realm: 'Mind (Mental Dimension)',
    nvidia: 'Mezzo Level - Industrial Infrastructure',
    booster: '“There is No System without Structure!”',
    book: 'Spiritual Diplomacy',
    link: 'https://www.amazon.com/Spiritual-Diplomacy-Self-Restructuring-Psychology-Self-Ecology/dp/B0FN61NDCK/',
    color: '#3b82f6',
    height: 170
  },
  index: {
    name: 'Index Finger',
    realm: 'Self-Consciousness (Spiritual Dimension)',
    nvidia: 'Macro Level - Creative Models',
    booster: '“Let’s Make Our Self-Consciousness Celestial, Not Blindly Terrestrial!”',
    book: 'Self-Taming!',
    link: 'https://www.amazon.com/Self-Taming-Inspirational-Psychology-Life-Gaining-Taming/dp/B0F7KG64K6/',
    color: '#ec4899',
    height: 140
  },
  thumb: {
    name: 'Thumb',
    realm: 'Super-Consciousness (Universal Dimension)',
    nvidia: 'Super Level - Applications',
    booster: '“Be the Station for Soul’s Emancipation”',
    book: 'Self-Ascension',
    link: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-Ph-D-ebook/dp/B0GZS9QQ4C/',
    color: '#a855f7',
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
        background: 'radial-gradient(circle at 50% 50%, #08081a 0%, #03030b 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
      }}
    >
      <Box className="cosmic-glow-indigo" sx={{ top: '10%', left: '10%', opacity: 0.15 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '10%', right: '10%', opacity: 0.15 }} />

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
              background: 'rgba(244, 63, 94, 0.1)',
              border: '1px solid rgba(244, 63, 94, 0.2)',
              mb: 3,
            }}
          >
            <AutoAwesomeIcon sx={{ color: '#f43f5e', fontSize: '1.1rem' }} />
            <Typography variant="body2" sx={{ color: '#f43f5e', fontWeight: 600, letterSpacing: '0.05em' }}>
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
              background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Core Mindsets & Self-Symmetry
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#94a3b8', maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', fontFamily: '"Inter", sans-serif' }}
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
                background: 'linear-gradient(135deg, rgba(15,16,38,0.8) 0%, rgba(7,7,21,0.9) 100%)',
                border: '1px solid rgba(244, 63, 94, 0.15)',
                borderRadius: 5,
                boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: 'center', position: 'relative', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <FormatQuoteIcon
                  sx={{
                    color: 'rgba(244, 63, 94, 0.05)',
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
                      fontWeight: 700,
                      color: '#ffffff',
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
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                    {activeQuoteIndex + 1} / {mindsetsData.length}
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 4 }}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    background: 'rgba(15,16,38,0.8)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    '&:hover': { background: 'rgba(244, 63, 94, 0.15)', borderColor: '#f43f5e' },
                    transition: 'all 0.3s',
                  }}
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    background: 'rgba(15,16,38,0.8)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    '&:hover': { background: 'rgba(244, 63, 94, 0.15)', borderColor: '#f43f5e' },
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
                background: 'linear-gradient(135deg, rgba(15,16,38,0.8) 0%, rgba(7,7,21,0.9) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                borderRadius: 5,
                boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {quizStep === 'intro' && (
                  <Box sx={{ textAlign: 'center' }}>
                    <AutoAwesomeIcon sx={{ color: '#3b82f6', fontSize: '3rem', mb: 2 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5 }}>
                      Dimensional Self-Alignment Quiz
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8', mb: 4, lineHeight: 1.6 }}>
                      Dr. Ray outlines that balance begins with addressing your most vulnerable life realm. 
                      Answer this 1-step prompt to evaluate where your focus should go first.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => setQuizStep('question')}
                      sx={{
                        background: 'linear-gradient(95deg, #3b82f6 0%, #1d4ed8 100%)',
                        color: '#ffffff',
                        fontWeight: 700,
                        px: 4,
                        py: 1.5,
                        borderRadius: '30px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(95deg, #60a5fa 0%, #2563eb 100%)',
                        }
                      }}
                    >
                      Start Alignment Analysis
                    </Button>
                  </Box>
                )}

                {quizStep === 'question' && (
                  <Box>
                    <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 3 }}>
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
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.2s',
                            '&:hover': {
                              background: 'rgba(59, 130, 246, 0.08)',
                              borderColor: '#3b82f6',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 500 }}>
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
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        fontWeight: 800,
                        mb: 2,
                      }}
                    />
                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#ffffff', mb: 1 }}>
                      {selectedQuizOption.dimension}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.7 }}>
                      {selectedQuizOption.advice}
                    </Typography>

                    <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.06)' }} />

                    {/* Book Recommendation block */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.01)',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        mb: 3
                      }}
                    >
                      <Typography variant="caption" sx={{ color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', display: 'block', mb: 1 }}>
                        Recommended System Guide
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 800, mb: 1.5 }}>
                        {selectedQuizOption.bookTitle}
                      </Typography>
                      <Button
                        variant="outlined"
                        component="a"
                        href={selectedQuizOption.bookLink}
                        target="_blank"
                        startIcon={<ShoppingCartIcon />}
                        sx={{
                          borderColor: '#fbbf24',
                          color: '#fbbf24',
                          textTransform: 'none',
                          fontWeight: 700,
                          borderRadius: '20px',
                          '&:hover': {
                            borderColor: '#f59e0b',
                            background: 'rgba(245, 158, 11, 0.08)'
                          }
                        }}
                      >
                        Acquire on Amazon
                      </Button>
                    </Box>

                    <Button
                      onClick={handleResetQuiz}
                      sx={{ color: 'rgba(255,255,255,0.4)', textTransform: 'none', fontWeight: 600, fontSize: '0.85rem' }}
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
                background: 'linear-gradient(135deg, rgba(15,16,38,0.8) 0%, rgba(7,7,21,0.9) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
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
                    fontWeight: 800,
                    color: '#ffffff',
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
                <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.7, mb: 3 }}>
                  “AI dealings with humans are multifaceted and multi-dimensional, encompassing competition for supremacy in
                  technology and numerous instances of collaboration that must be governed by us. We must reduce depending on AI created Ecosystem.”
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 500, lineHeight: 1.7, mb: 3 }}>
                  We should integrate AI into our physical, emotional, mental, spiritual, and universal realms of life, while safeguarding human rights against mass surveillance. Mutual respect and bilateral consideration are our obligation!
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', display: 'block', mb: 3 }}>
                  — Extract from the Book “Light is me. Light is My Philosophy!”
                </Typography>

                {/* Interactive Decipherment of AI Black Box Toggle */}
                <Box
                  sx={{
                    border: '1px dashed rgba(244, 63, 94, 0.25)',
                    borderRadius: 3,
                    p: 2.5,
                    mb: 3,
                    background: 'rgba(244, 63, 94, 0.02)',
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
                      <InfoIcon sx={{ color: '#f43f5e', fontSize: '1.15rem' }} />
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
                        Deciphering the AI "Black Box"
                      </Typography>
                    </Box>
                    {isBlackBoxExpanded ? <ExpandLessIcon sx={{ color: '#f43f5e' }} /> : <ExpandMoreIcon sx={{ color: '#f43f5e' }} />}
                  </Box>
                  <Collapse in={isBlackBoxExpanded}>
                    <Typography variant="body2" sx={{ color: '#cbd5e1', mt: 2, lineHeight: 1.6, fontSize: '0.85rem' }}>
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
                  background: 'rgba(244, 63, 94, 0.05)',
                  border: '1px solid rgba(244, 63, 94, 0.15)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '1.05rem', fontFamily: '"Outfit", sans-serif' }}>
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
                background: 'linear-gradient(135deg, rgba(7,7,21,0.9) 0%, rgba(15,16,38,0.8) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5, fontSize: '1.4rem' }}>
                  The Hand Fractal of Self-Symmetry
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, fontSize: '0.9rem' }}>
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
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderBottom: 'none',
                    }
                  }}
                >
                  {/* Pinky: Body */}
                  <Box 
                    onClick={() => setActiveFingerKey('pinky')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#22c55e', fontWeight: activeFingerKey === 'pinky' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'pinky' ? 1 : 0.6 }}>
                      Body
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 100, 
                        background: activeFingerKey === 'pinky' ? 'linear-gradient(to top, rgba(34,197,94,0.3), #22c55e)' : 'rgba(34,197,94, 0.15)', 
                        border: activeFingerKey === 'pinky' ? '1px solid #22c55e' : '1px solid rgba(34,197,94, 0.2)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'pinky' ? '0 0 15px rgba(34,197,94,0.4)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'pinky' ? '#ffffff' : 'rgba(255,255,255,0.3)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'pinky' ? 700 : 500 }}>Pinky</Typography>
                  </Box>

                  {/* Ring: Spirit */}
                  <Box 
                    onClick={() => setActiveFingerKey('ring')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#ef4444', fontWeight: activeFingerKey === 'ring' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'ring' ? 1 : 0.6 }}>
                      Spirit
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 130, 
                        background: activeFingerKey === 'ring' ? 'linear-gradient(to top, rgba(239,68,68,0.3), #ef4444)' : 'rgba(239,68,68, 0.15)', 
                        border: activeFingerKey === 'ring' ? '1px solid #ef4444' : '1px solid rgba(239,68,68, 0.2)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'ring' ? '0 0 15px rgba(239,68,68,0.4)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'ring' ? '#ffffff' : 'rgba(255,255,255,0.3)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'ring' ? 700 : 500 }}>Ring</Typography>
                  </Box>

                  {/* Middle: Mind */}
                  <Box 
                    onClick={() => setActiveFingerKey('middle')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#3b82f6', fontWeight: activeFingerKey === 'middle' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'middle' ? 1 : 0.6 }}>
                      Mind
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 150, 
                        background: activeFingerKey === 'middle' ? 'linear-gradient(to top, rgba(59,130,246,0.3), #3b82f6)' : 'rgba(59,130,246, 0.15)', 
                        border: activeFingerKey === 'middle' ? '1px solid #3b82f6' : '1px solid rgba(59,130,246, 0.2)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'middle' ? '0 0 15px rgba(59,130,246,0.4)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'middle' ? '#ffffff' : 'rgba(255,255,255,0.3)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'middle' ? 700 : 500 }}>Middle</Typography>
                  </Box>

                  {/* Index: Self-Consciousness */}
                  <Box 
                    onClick={() => setActiveFingerKey('index')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#ec4899', fontWeight: activeFingerKey === 'index' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'index' ? 1 : 0.6 }}>
                      Self-C.
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 125, 
                        background: activeFingerKey === 'index' ? 'linear-gradient(to top, rgba(236,72,153,0.3), #ec4899)' : 'rgba(236,72,153, 0.15)', 
                        border: activeFingerKey === 'index' ? '1px solid #ec4899' : '1px solid rgba(236,72,153, 0.2)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'index' ? '0 0 15px rgba(236,72,153,0.4)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'index' ? '#ffffff' : 'rgba(255,255,255,0.3)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'index' ? 700 : 500 }}>Index</Typography>
                  </Box>

                  {/* Thumb: Super-Consciousness */}
                  <Box 
                    onClick={() => setActiveFingerKey('thumb')}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, cursor: 'pointer' }}
                  >
                    <Typography variant="caption" sx={{ color: '#a855f7', fontWeight: activeFingerKey === 'thumb' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'thumb' ? 1 : 0.6 }}>
                      Super-C.
                    </Typography>
                    <Box 
                      sx={{ 
                        width: 22, 
                        height: 80, 
                        background: activeFingerKey === 'thumb' ? 'linear-gradient(to top, rgba(168,85,247,0.3), #a855f7)' : 'rgba(168,85,247, 0.15)', 
                        border: activeFingerKey === 'thumb' ? '1px solid #a855f7' : '1px solid rgba(168,85,247, 0.2)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'thumb' ? '0 0 15px rgba(168,85,247,0.4)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'thumb' ? '#ffffff' : 'rgba(255,255,255,0.3)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'thumb' ? 700 : 500 }}>Thumb</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Selected Finger Details block */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3.5,
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid rgba(255,255,255,0.03)',
                  transition: 'border-color 0.3s ease',
                  borderColor: `${activeFinger.color}30`,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ color: activeFinger.color, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {activeFinger.name} details
                  </Typography>
                  <Chip 
                    label={activeFinger.nvidia} 
                    size="small" 
                    sx={{ backgroundColor: `${activeFinger.color}15`, color: activeFinger.color, fontWeight: 700, fontSize: '0.75rem' }} 
                  />
                </Box>
                
                <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', color: '#ffffff', fontWeight: 800, mb: 1 }}>
                  {activeFinger.realm}
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontStyle: 'italic', mb: 2.5, lineHeight: 1.5 }}>
                  {activeFinger.booster}
                </Typography>

                <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.06)' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', display: 'block' }}>
                      Recommended System Book
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 700 }}>
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
                      fontWeight: 700,
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
