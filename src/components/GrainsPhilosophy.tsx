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
    nvidia: 'Mini Level: Energy Production',
    booster: 'I AM Free to Be the Best of Me!',
    book: 'Dis-Entanglement!',
    link: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0FPLYRS3Z',
    color: '#16a34a', // green
    height: 100,
  },
  ring: {
    name: 'Ring Finger',
    realm: 'Spirit (Emotional Dimension)',
    nvidia: 'Meta Level: Chips Manufacturing',
    booster: 'Be Happy and Whole!',
    book: 'Exceptionality',
    link: 'https://www.amazon.com/Exceptionality-Digital-Psychology-Self-Ecology-ebook/dp/B0CF7PB1FJ/',
    color: '#dc2626', // red
    height: 130,
  },
  middle: {
    name: 'Middle Finger',
    realm: 'Mind (Mental Dimension)',
    nvidia: 'Mezzo Level: Industrial Infrastructure',
    booster: 'Structure governs System!',
    book: 'Spiritual Diplomacy',
    link: 'https://www.amazon.com/Spiritual-Diplomacy-Self-Restructuring-Psychology-Self-Ecology/dp/B0FN61NDCK/',
    color: '#1d4ed8', // blue
    height: 150,
  },
  index: {
    name: 'Index Finger',
    realm: 'Self-Consciousness (Spiritual Dimension)',
    nvidia: 'Macro Level: Creative Models',
    booster: 'Soul refining is life elevating!',
    book: 'Self-Taming!',
    link: 'https://www.amazon.com/Self-Taming-Inspirational-Psychology-Life-Gaining-Taming/dp/B0F7KG64K6/',
    color: '#ed668c', // pink
    height: 125,
  },
  thumb: {
    name: 'Thumb',
    realm: 'Super-Consciousness (Universal Dimension)',
    nvidia: 'Super Level: Applications',
    booster: 'Cosmic alignment is self-salvation!',
    book: 'Self-Ascension',
    link: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-Ph-D-ebook/dp/B0GZS9QQ4C/',
    color: '#ed668c', // pink
    height: 80,
  },
};

export default function GrainsPhilosophy() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [quizStep, setQuizStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [selectedQuizOption, setSelectedQuizOption] = useState<QuizOption | null>(null);
  const [activeFingerKey, setActiveFingerKey] = useState<string>('middle');
  const [isBlackBoxExpanded, setIsBlackBoxExpanded] = useState(false);

  const activeQuote = mindsetsData[activeQuoteIndex];
  const activeFinger = fingersData[activeFingerKey];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Universal':
        return '#7c3aed'; // Violet
      case 'Auto-Suggestive':
        return '#dc2626'; // Red
      case 'Digital':
        return '#1d4ed8'; // Blue
      case 'Quantum':
        return '#7c3aed'; // Violet
      default:
        return '#ed668c'; // Pink (General)
    }
  };
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return '#16a34a'; // green
      case 2: return '#dc2626'; // red
      case 3: return '#1d4ed8'; // blue
      case 4: return '#ed668c'; // pink
      case 5: return '#ed668c'; // pink
      default: return '#ed668c';
    }
  };
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
          <span
            key={idx}
            style={p.color ? { color: p.color, fontWeight: p.weight || 'bold' } : undefined}
          >
            {p.text}
          </span>
        ))}
      </>
    );
  };

  // Auto-play quotes slider every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % mindsetsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % mindsetsData.length);
  };

  const handlePrev = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + mindsetsData.length) % mindsetsData.length);
  };

  const handleOptionClick = (option: QuizOption) => {
    setSelectedQuizOption(option);
    setQuizStep('result');
  };

  const handleResetQuiz = () => {
    setSelectedQuizOption(null);
    setQuizStep('intro');
  };

  return (
    <Box
      id="philosophy"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box className="cosmic-glow-indigo" sx={{ top: '10%', left: '10%', opacity: 0.55 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '10%', right: '10%', opacity: 0.55 }} />

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
              background: 'rgba(237, 102, 140, 0.08)',
              border: '1px solid rgba(237, 102, 140, 0.25)',
              mb: 3,
            }}
          >
            <AutoAwesomeIcon sx={{ color: '#ed668c', fontSize: '1.1rem' }} />
            <Typography variant="body2" sx={{ color: '#ed668c', fontWeight: 800, letterSpacing: '0.05em' }}>
              GRAINS OF PHILOSOPHY<Box component="span" sx={{ color: '#dc2626' }}>!</Box>
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: '2.2rem', md: '3rem' },
              fontWeight: 900,
              mb: 2,
              color: '#ed668c',
            }}
          >
            Core Mindsets & Self-Symmetry
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#cbd5e1', fontWeight: 600, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', fontFamily: '"Inter", sans-serif' }}
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
                background: 'rgba(15, 16, 38, 0.75)',
                border: `2px solid ${getCategoryColor(activeQuote.category)}`,
                borderRadius: 5,
                boxShadow: `0 20px 45px ${getCategoryColor(activeQuote.category)}18`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: 'center', position: 'relative', flexGrow: 1, display: 'flex', flexDirection: 'column', justifycontent: 'center' }}>
                <FormatQuoteIcon
                  sx={{
                    color: `${getCategoryColor(activeQuote.category)}05`,
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
                      color: getCategoryColor(activeQuote.category),
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
                      color: '#ffffff',
                      lineHeight: 1.5,
                      fontSize: { xs: '1.4rem', md: '1.8rem' },
                      mb: 3,
                      minHeight: '120px',
                      display: 'block',
                      textAlign: 'center',
                    }}
                  >
                    {renderColorCodedText(activeQuote.text)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getCategoryColor(activeQuote.category), opacity: 0.85, fontWeight: 700, mb: 2 }}>
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
                      color: getCategoryColor(activeQuote.category),
                      textTransform: 'none',
                      fontWeight: 800,
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      '&:hover': { background: `${getCategoryColor(activeQuote.category)}0d` }
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
                    background: 'rgba(15, 16, 38, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    '&:hover': { background: `${getCategoryColor(activeQuote.category)}22`, borderColor: getCategoryColor(activeQuote.category) },
                    transition: 'all 0.3s',
                  }}
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    background: 'rgba(15, 16, 38, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    '&:hover': { background: `${getCategoryColor(activeQuote.category)}22`, borderColor: getCategoryColor(activeQuote.category) },
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
                background: 'rgba(15, 16, 38, 0.75)',
                border: '2px solid #ed668c',
                borderRadius: 5,
                boxShadow: '0 20px 45px rgba(237, 102, 140, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {quizStep === 'intro' && (
                  <Box sx={{ textAlign: 'center' }}>
                    <AutoAwesomeIcon sx={{ color: '#ed668c', fontSize: '3rem', mb: 2 }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5 }}>
                      Dimensional Self-Alignment Quiz
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, mb: 4, lineHeight: 1.6 }}>
                      Dr. Ray outlines that balance begins with addressing your most vulnerable life realm. 
                      Answer this 1-step prompt to evaluate where your focus should go first.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => setQuizStep('question')}
                      sx={{
                        background: 'linear-gradient(95deg, #ed668c 0%, #db2777 100%)',
                        color: '#ffffff',
                        fontWeight: 800,
                        px: 4,
                        py: 1.5,
                        borderRadius: '30px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 15px rgba(237, 102, 140, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(95deg, #db2777 0%, #c026d3 100%)',
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
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: `1px solid ${getLevelColor(option.level)}40`,
                            transition: 'all 0.2s',
                            '&:hover': {
                              background: `${getLevelColor(option.level)}12`,
                              borderColor: getLevelColor(option.level),
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 650 }}>
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
                        backgroundColor: `${getLevelColor(selectedQuizOption.level)}18`,
                        color: getLevelColor(selectedQuizOption.level),
                        border: `1px solid ${getLevelColor(selectedQuizOption.level)}30`,
                        fontWeight: 800,
                        mb: 2,
                      }}
                    />
                    <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: getLevelColor(selectedQuizOption.level), mb: 1 }}>
                      {selectedQuizOption.dimension}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, mb: 3, lineHeight: 1.7 }}>
                      {selectedQuizOption.advice}
                    </Typography>

                    <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

                    {/* Book Recommendation block */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        mb: 3
                      }}
                    >
                      <Typography variant="caption" sx={{ color: getLevelColor(selectedQuizOption.level), fontWeight: 800, textTransform: 'uppercase', display: 'block', mb: 1 }}>
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
                          borderColor: getLevelColor(selectedQuizOption.level),
                          color: getLevelColor(selectedQuizOption.level),
                          textTransform: 'none',
                          fontWeight: 800,
                          borderRadius: '20px',
                          '&:hover': {
                            borderColor: getLevelColor(selectedQuizOption.level),
                            background: `${getLevelColor(selectedQuizOption.level)}12`
                          }
                        }}
                      >
                        Acquire on Amazon
                      </Button>
                    </Box>

                    <Button
                      onClick={handleResetQuiz}
                      sx={{ color: '#60a5fa', textTransform: 'none', fontWeight: 750, fontSize: '0.85rem' }}
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
                background: 'rgba(15, 16, 38, 0.75)',
                border: '2px solid #ed668c',
                boxShadow: '0 15px 35px rgba(237, 102, 140, 0.15)',
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
                    color: '#ffffff',
                    mb: 2.5,
                    fontSize: '1.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box component="span" sx={{ width: 4, height: 24, backgroundColor: '#ed668c', borderRadius: 2 }} />
                  AI-Human Governance Manifesto
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 550, lineHeight: 1.7, mb: 3 }}>
                  “AI dealings with humans are multifaceted and multi-dimensional, encompassing competition for supremacy in
                  technology and numerous instances of collaboration that must be governed by us. We must reduce depending on AI created Ecosystem.”
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 650, lineHeight: 1.7, mb: 3 }}>
                  We should integrate AI into our{' '}
                  <Box component="span" sx={{ color: '#16a34a', fontWeight: 800 }}>physical</Box>,{' '}
                  <Box component="span" sx={{ color: '#dc2626', fontWeight: 800 }}>emotional</Box>,{' '}
                  <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 800 }}>mental</Box>,{' '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>spiritual</Box>, and{' '}
                  <Box component="span" sx={{ color: '#7c3aed', fontWeight: 800 }}>universal</Box> realms of life, while safeguarding human rights against mass surveillance. Mutual respect and bilateral consideration are our obligation!
                </Typography>
                <Typography variant="caption" sx={{ color: '#ed668c', fontWeight: 700, fontStyle: 'italic', display: 'block', mb: 3 }}>
                  — Extract from the Book “Light is me. Light is My Philosophy!”
                </Typography>

                {/* Interactive Decipherment of AI Black Box Toggle */}
                <Box
                  sx={{
                    border: '1px dashed rgba(237, 102, 140, 0.35)',
                    borderRadius: 3,
                    p: 2.5,
                    mb: 3,
                    background: 'rgba(237, 102, 140, 0.03)',
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
                      <AutoAwesomeIcon sx={{ color: '#ed668c', fontSize: '1.15rem' }} />
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '0.9rem' }}>
                        Deciphering the AI "Black Box"
                      </Typography>
                    </Box>
                    {isBlackBoxExpanded ? <ExpandLessIcon sx={{ color: '#ed668c' }} /> : <ExpandMoreIcon sx={{ color: '#ed668c' }} />}
                  </Box>
                  <Collapse in={isBlackBoxExpanded}>
                    <Typography variant="body2" sx={{ color: '#cbd5e1', mt: 2, fontWeight: 550, lineHeight: 1.6, fontSize: '0.85rem' }}>
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
                  background: 'rgba(237, 102, 140, 0.08)',
                  border: '1px solid rgba(237, 102, 140, 0.25)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body1" sx={{ color: '#ed668c', fontWeight: 900, fontSize: '1.05rem', fontFamily: '"Outfit", sans-serif' }}>
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
                background: 'rgba(15, 16, 38, 0.75)',
                border: '2px solid #ed668c',
                boxShadow: '0 15px 35px rgba(237, 102, 140, 0.15)',
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
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 600, mb: 3, fontSize: '0.9rem' }}>
                  Our hands serve as a physical model representing the integration of the five life realms. Click any finger to explore.
                </Typography>

                {/* Hand Vector CSS Visualization */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                    height: '240px',
                    position: 'relative',
                    px: { xs: 1, sm: 4 },
                    mb: 3,
                    pt: 5,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '95%',
                      height: '20px',
                      borderRadius: '10px 10px 0 0',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderBottom: 'none',
                    }
                  }}
                >
                  {/* Floating Speech Bubble / Dialog */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #ed668c 0%, #db2777 100%)',
                      color: '#ffffff',
                      px: 2.5,
                      py: 1,
                      borderRadius: '30px',
                      fontSize: '0.8rem',
                      fontWeight: 850,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 8px 25px rgba(237, 102, 140, 0.4)',
                      animation: 'floatBubble 3s ease-in-out infinite',
                      zIndex: 10,
                      pointerEvents: 'none',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderWidth: '6px 6px 0',
                        borderStyle: 'solid',
                        borderColor: '#db2777 transparent transparent',
                        display: 'block',
                        width: 0,
                      },
                      '@keyframes floatBubble': {
                        '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                        '50%': { transform: 'translateX(-50%) translateY(-6px)' },
                      }
                    }}
                  >
                    👉 Click a finger to align your life realms!
                  </Box>

                  {/* Pinky: Body */}
                  <Box 
                    onClick={() => setActiveFingerKey('pinky')}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      zIndex: 2, 
                      cursor: 'pointer',
                      '&:hover .finger-bar': {
                        transform: 'scaleY(1.08)',
                        transformOrigin: 'bottom',
                        boxShadow: '0 0 20px rgba(22,163,74,0.4)',
                        borderColor: '#16a34a',
                      }
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#16a34a', fontWeight: activeFingerKey === 'pinky' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'pinky' ? 1 : 0.6 }}>
                      Body
                    </Typography>
                    <Box 
                      className="finger-bar"
                      sx={{ 
                        width: 22, 
                        height: 100, 
                        background: activeFingerKey === 'pinky' ? 'linear-gradient(to top, rgba(22,163,74,0.3), #16a34a)' : 'rgba(22,163,74, 0.08)', 
                        border: activeFingerKey === 'pinky' ? '1px solid #16a34a' : '1px solid rgba(22,163,74, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'pinky' ? '0 0 15px rgba(22,163,74,0.2)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: 'bounceUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                        animationDelay: '0ms',
                        '@keyframes bounceUp': {
                          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                          '60%': { transform: 'scaleY(1.1)', transformOrigin: 'bottom' },
                          '80%': { transform: 'scaleY(0.95)', transformOrigin: 'bottom' },
                          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
                        }
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'pinky' ? '#16a34a' : 'rgba(255,255,255,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'pinky' ? 700 : 500 }}>Pinky</Typography>
                  </Box>

                  {/* Ring: Spirit */}
                  <Box 
                    onClick={() => setActiveFingerKey('ring')}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      zIndex: 2, 
                      cursor: 'pointer',
                      '&:hover .finger-bar': {
                        transform: 'scaleY(1.08)',
                        transformOrigin: 'bottom',
                        boxShadow: '0 0 20px rgba(220,38,38,0.4)',
                        borderColor: '#dc2626',
                      }
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#dc2626', fontWeight: activeFingerKey === 'ring' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'ring' ? 1 : 0.6 }}>
                      Spirit
                    </Typography>
                    <Box 
                      className="finger-bar"
                      sx={{ 
                        width: 22, 
                        height: 130, 
                        background: activeFingerKey === 'ring' ? 'linear-gradient(to top, rgba(220,38,38,0.3), #dc2626)' : 'rgba(220,38,38, 0.08)', 
                        border: activeFingerKey === 'ring' ? '1px solid #dc2626' : '1px solid rgba(220,38,38, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'ring' ? '0 0 15px rgba(220,38,38,0.2)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: 'bounceUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                        animationDelay: '100ms',
                        '@keyframes bounceUp': {
                          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                          '60%': { transform: 'scaleY(1.1)', transformOrigin: 'bottom' },
                          '80%': { transform: 'scaleY(0.95)', transformOrigin: 'bottom' },
                          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
                        }
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'ring' ? '#dc2626' : 'rgba(255,255,255,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'ring' ? 700 : 500 }}>Ring</Typography>
                  </Box>

                  {/* Middle: Mind */}
                  <Box 
                    onClick={() => setActiveFingerKey('middle')}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      zIndex: 2, 
                      cursor: 'pointer',
                      '&:hover .finger-bar': {
                        transform: 'scaleY(1.08)',
                        transformOrigin: 'bottom',
                        boxShadow: '0 0 20px rgba(29,78,216,0.4)',
                        borderColor: '#1d4ed8',
                      }
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#1d4ed8', fontWeight: activeFingerKey === 'middle' ? 900 : 600, fontSize: '0.65rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'middle' ? 1 : 0.6 }}>
                      Mind
                    </Typography>
                    <Box 
                      className="finger-bar"
                      sx={{ 
                        width: 22, 
                        height: 150, 
                        background: activeFingerKey === 'middle' ? 'linear-gradient(to top, rgba(29,78,216,0.3), #1d4ed8)' : 'rgba(29,78,216, 0.08)', 
                        border: activeFingerKey === 'middle' ? '1px solid #1d4ed8' : '1px solid rgba(29,78,216, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'middle' ? '0 0 15px rgba(29,78,216,0.2)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: 'bounceUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                        animationDelay: '200ms',
                        '@keyframes bounceUp': {
                          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                          '60%': { transform: 'scaleY(1.1)', transformOrigin: 'bottom' },
                          '80%': { transform: 'scaleY(0.95)', transformOrigin: 'bottom' },
                          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
                        }
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'middle' ? '#1d4ed8' : 'rgba(255,255,255,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'middle' ? 700 : 500 }}>Middle</Typography>
                  </Box>

                  {/* Index: Self-Consciousness */}
                  <Box 
                    onClick={() => setActiveFingerKey('index')}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      zIndex: 2, 
                      cursor: 'pointer',
                      '&:hover .finger-bar': {
                        transform: 'scaleY(1.08)',
                        transformOrigin: 'bottom',
                        boxShadow: '0 0 20px rgba(237,102,140,0.4)',
                        borderColor: '#ed668c',
                      }
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#ed668c', fontWeight: activeFingerKey === 'index' ? 900 : 600, fontSize: '0.55rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'index' ? 1 : 0.6 }}>
                      Self-Consciousness
                    </Typography>
                    <Box 
                      className="finger-bar"
                      sx={{ 
                        width: 22, 
                        height: 125, 
                        background: activeFingerKey === 'index' ? 'linear-gradient(to top, rgba(237,102,140,0.3), #ed668c)' : 'rgba(237,102,140, 0.08)', 
                        border: activeFingerKey === 'index' ? '1px solid #ed668c' : '1px solid rgba(237,102,140, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'index' ? '0 0 15px rgba(237,102,140,0.2)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: 'bounceUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                        animationDelay: '300ms',
                        '@keyframes bounceUp': {
                          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                          '60%': { transform: 'scaleY(1.1)', transformOrigin: 'bottom' },
                          '80%': { transform: 'scaleY(0.95)', transformOrigin: 'bottom' },
                          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
                        }
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'index' ? '#ed668c' : 'rgba(255,255,255,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'index' ? 700 : 500 }}>Index</Typography>
                  </Box>

                  {/* Thumb: Super-Consciousness */}
                  <Box 
                    onClick={() => setActiveFingerKey('thumb')}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      zIndex: 2, 
                      cursor: 'pointer',
                      '&:hover .finger-bar': {
                        transform: 'scaleY(1.08)',
                        transformOrigin: 'bottom',
                        boxShadow: '0 0 20px rgba(237,102,140,0.4)',
                        borderColor: '#ed668c',
                      }
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#ed668c', fontWeight: activeFingerKey === 'thumb' ? 900 : 600, fontSize: '0.55rem', mb: 1, textTransform: 'uppercase', opacity: activeFingerKey === 'thumb' ? 1 : 0.6 }}>
                      Super-Consciousness
                    </Typography>
                    <Box 
                      className="finger-bar"
                      sx={{ 
                        width: 22, 
                        height: 80, 
                        background: activeFingerKey === 'thumb' ? 'linear-gradient(to top, rgba(237,102,140,0.3), #ed668c)' : 'rgba(237,102,140, 0.08)', 
                        border: activeFingerKey === 'thumb' ? '1px solid #ed668c' : '1px solid rgba(237,102,140, 0.15)',
                        borderRadius: '10px 10px 0 0', 
                        boxShadow: activeFingerKey === 'thumb' ? '0 0 15px rgba(237,102,140,0.2)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: 'bounceUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
                        animationDelay: '400ms',
                        '@keyframes bounceUp': {
                          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                          '60%': { transform: 'scaleY(1.1)', transformOrigin: 'bottom' },
                          '80%': { transform: 'scaleY(0.95)', transformOrigin: 'bottom' },
                          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
                        }
                      }} 
                    />
                    <Typography variant="caption" sx={{ color: activeFingerKey === 'thumb' ? '#ed668c' : 'rgba(255,255,255,0.4)', mt: 1, fontSize: '0.6rem', fontWeight: activeFingerKey === 'thumb' ? 700 : 500 }}>Thumb</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Selected Finger Details block */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3.5,
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.3s ease',
                  borderColor: `${activeFinger.color}40`,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ color: activeFinger.color, fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, fontStyle: 'italic', mb: 2.5, lineHeight: 1.5 }}>
                  {activeFinger.booster}
                </Typography>

                <Divider sx={{ my: 1.5, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: activeFinger.color, fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>
                      Recommended System Book
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 850 }}>
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
                        background: `${activeFinger.color}15`
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
