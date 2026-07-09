import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, MenuBook as MenuBookIcon, Info as InfoIcon, Close as CloseIcon } from '@mui/icons-material';

// Image imports
import bestOfMeImg from '../assets/downloaded/best_of_me.jpg';
import soulRefiningImg from '../assets/downloaded/7a5c4cd9-4308-4d01-892c-4777c61632dc.png';
import livingIntellImg from '../assets/downloaded/9da225ad-8e94-45123-9ac3-9df8803dd8d0.png';
import selfTamingImg from '../assets/downloaded/743e716d-096a-40d2-ab04-6ef799e8db98.png';
import beyondTerrImg from '../assets/downloaded/9da22245ad-8e94-4cf4-9ac3-9df8803dd8d0.png';
import selfRenaissanceImg from '../assets/downloaded/6c30815a-30d3-46ee-939c-2d6a686093ed.png';
import selfAscensionImg from '../assets/downloaded/9da313-8e94-4cf4-9ac3-9df8803dd8d0.png';
import soulSymmetryImg from '../assets/downloaded/soul_symmetry.jpg';
import loveEcologyImg from '../assets/downloaded/love_ecology.jpg';
import spiritualDiplomacyImg from '../assets/downloaded/spiritual_diplomacy.jpg';
import blessedLifeObsessedImg from '../assets/downloaded/blessed_life_obsessed.jpg';
import selfWorthImg from '../assets/downloaded/self_worth.jpg';
import americanizeLanguageImg from '../assets/downloaded/americanize_language.jpg';
import disEntanglementImg from '../assets/downloaded/dis_entanglement.jpg';
import exceptionalityImg from '../assets/downloaded/exceptionality.jpg';
import itTooShallPassImg from '../assets/downloaded/it_too_shall_pass.jpg';
import digitalBinaryImg from '../assets/downloaded/digital_binary.jpg';
import lightIsMeImg from '../assets/downloaded/light_is_me.jpg';
import transcendentUsAisImg from '../assets/downloaded/transcendent_us_ais.jpg';
import transhumanAcculturationImg from '../assets/downloaded/transhuman_acculturation.jpg';

interface Book {
  title: string;
  dimension: string;
  cycle: 'auto' | 'digital' | 'quantum' | 'other';
  cover?: string;
  description: string;
  links?: {
    kindle?: string;
    paperback?: string;
    hardcover?: string;
  };
  award?: string;
}

const booksData: Book[] = [
  // Auto-Suggestive Cycle
  {
    title: 'I Am Free to Be the Best of Me!',
    dimension: 'Physical Dimension',
    cycle: 'auto',
    cover: bestOfMeImg,
    description: 'Introduces the foundational stage of holistic self-creation, guiding readers toward greater self-awareness, personal growth, and purposeful living. Offers a practical framework for transforming identity, strengthening consciousness, and unlocking human potential.',
    links: {
      kindle: 'https://www.amazon.com/Free-Be-Best-Me-ebook/dp/B0H473WQLY/',
      paperback: 'https://www.amazon.com/Free-Be-Best-Me/dp/1636499414',
      hardcover: 'https://www.amazon.com/Free-Be-Best-Me/dp/1636499422',
    }
  },
  {
    title: 'Soul Refining',
    dimension: 'Emotional Dimension',
    cycle: 'auto',
    cover: soulRefiningImg,
    description: 'Explores holistic personal growth through the development of heart, mind, spirit, and higher consciousness. Nurtures emotional maturity and self-monitoring as indispensable skills in self-actualization.',
    links: {
      kindle: 'https://www.amazon.com/Soul-Refining-Dr-Rimaletta-Ray-ebook/dp/B08GV7QDY5',
      paperback: 'https://www.amazon.com/Soul-Refining-Dr-Rimaletta-Ray/dp/1950580083/',
      hardcover: 'https://www.amazon.com/Soul-Refining-Dr-Rimaletta-Ray/dp/1649990170/',
    }
  },
  {
    title: 'Living Intelligence or the Art of Becoming',
    dimension: 'Mental Dimension',
    cycle: 'auto',
    cover: livingIntellImg,
    description: 'A transformative guide to expanding intelligence, raising consciousness, and achieving self-realization. Explores physical, emotional, mental, spiritual, and universal intelligence in an increasingly digitalized world.',
    links: {
      kindle: 'https://www.amazon.com/Living-Intelligence-Becoming-Inspirational-Auto-Suggestive-ebook/dp/B0793Q2NFG',
      paperback: 'https://www.amazon.com/Living-Intelligence-Art-Becoming-Rimaletta/dp/1949723364/',
      hardcover: 'https://www.amazon.com/Living-Intelligence-Becoming-Inspirational-Auto-Suggestive/dp/1503538249/',
    }
  },
  {
    title: 'Self-Taming!',
    dimension: 'Spiritual Dimension',
    cycle: 'auto',
    cover: selfTamingImg,
    description: 'An inspiring guide that explores the path of spiritual maturity and conscious self-regulation. Blends practical wisdom and reflective verses to cultivate self-discipline and inner balance.',
    links: {
      kindle: 'https://www.amazon.com/Self-Taming-Dr-Rimaletta-Ray-ebook/dp/B08HSP8CXW/',
      paperback: 'https://www.amazon.com/Self-Taming-Inspirational-Psychology-Life-Gaining-Taming/dp/B0F7KG64K6/',
      hardcover: 'https://www.amazon.com/Self-Taming-Dr-Rimaletta-Ray/dp/1649990294',
    }
  },
  {
    title: 'Beyond the Terrestrial!',
    dimension: 'Universal Dimension',
    cycle: 'auto',
    cover: beyondTerrImg,
    description: 'The culminating volume of the foundational series, guiding readers toward universal consciousness and spiritual fulfillment. Explores self-resurrection beyond earthly limitations and aligns the body, mind, spirit, and higher awareness.',
    links: {
      paperback: 'https://www.amazon.com/Beyond-Terrestrial-Dr-Rimaletta-Ray/dp/151448109X',
      hardcover: 'https://www.amazon.com/Beyond-Terrestrial-Dr-Rimaletta-Ray/dp/1514481103/',
    }
  },
  {
    title: 'Self-Renaissance',
    dimension: 'Integrating Book',
    cycle: 'auto',
    cover: selfRenaissanceImg,
    description: 'Offers a transformative roadmap for personal evolution in the Digital Renaissance. Integrates physical, emotional, mental, spiritual, and universal dimensions across five stages of growth (Self-Awareness, Self-Monitoring, Self-Installation, Self-Realization, Self-Salvation).',
    links: {
      kindle: 'https://www.amazon.com/Self-Renaissance-Inspirational-Psychology-Self-Ecology-Choreograph-ebook/dp/B0CPX7ZMWN/',
      paperback: 'https://www.amazon.com/Self-Renaissance-Inspirational-Psychology-Self-Ecology-Choreograph/dp/B0CQ697NKB',
    }
  },
  {
    title: 'Soul-Symmetry',
    dimension: 'Overview of Auto-Suggestive Cycle',
    cycle: 'auto',
    cover: soulSymmetryImg,
    description: 'An integrative summary and overview of the Auto-Suggestive cycle, focusing on establishing inner equilibrium and aligning consciousness for personal sovereignty.',
    links: {
      kindle: 'https://www.amazon.com/Soul-Symmetry-Life-Elation-Self-Symmetry-Formation-ebook/dp/B09Q2XZMXH',
    }
  },

  // Digital Cycle
  {
    title: 'Dis-Entanglement!',
    dimension: 'Physical Dimension',
    cycle: 'digital',
    cover: disEntanglementImg,
    description: 'Breaking free from the digital noise and physical tethers. Restoring physical ecology and body awareness in an over-connected virtual landscape.',
    links: {
      kindle: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0B33WRYPZ/',
    }
  },
  {
    title: 'Exceptionality',
    dimension: 'Emotional Dimension',
    cycle: 'digital',
    cover: exceptionalityImg,
    description: 'Cultivating emotional uniqueness and resilience. Safeguarding human empathy and emotional clarity against standardized algorithms.',
    links: {
      kindle: 'https://www.amazon.com/Exceptionality-Digital-Psychology-Self-Ecology-ebook/dp/B0CF7PB1FJ/',
    }
  },
  {
    title: 'Digital Binary + Human Refinery = Super-Human!',
    dimension: 'Mental Dimension',
    cycle: 'digital',
    cover: digitalBinaryImg,
    description: 'Merging human critical reasoning with digital logic. Refactoring the intellect to build a space-time coherent intelligence.',
    links: {
      paperback: 'https://www.amazon.com/dp/1960159799',
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
    }
  },
  {
    title: 'Transhuman Acculturation',
    dimension: 'Spiritual Dimension',
    cycle: 'digital',
    cover: transhumanAcculturationImg,
    description: 'Exploring the spiritual boundaries of humanity in a tech-driven age. Adapting core spiritual traditions to a transhumanist era.',
    links: {
      paperback: 'https://www.amazon.com/dp/1778832067',
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
    }
  },
  {
    title: 'Transcendent Us and AIs',
    dimension: 'Universal Dimension',
    cycle: 'digital',
    cover: transcendentUsAisImg,
    description: 'Ascending to universal partnership with advanced systems. Mapping out cooperative futures for artificial intelligence and organic consciousness.',
    links: {
      paperback: 'https://www.amazon.com/Transcendent-Us-AIs-Psychology-Self-Ecology-Universal/dp/B0F2LPFVFR/',
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
    }
  },

  // Quantum Cycle
  {
    title: 'Light is Me. Light is My Philosophy!',
    dimension: 'Physical Level',
    cycle: 'quantum',
    cover: lightIsMeImg,
    award: 'Platinum Seal of Excellence Award',
    description: 'Award-winning work presenting the philosophy of light, frequency, and physical wellness. Explores our bodies as energetic receivers of quantum cosmic radiation.',
    links: {
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
    }
  },
  {
    title: 'Love-Ecology!',
    dimension: 'Emotional Level',
    cycle: 'quantum',
    cover: loveEcologyImg,
    description: 'Quantum love psychology for self-ecology. Understanding universal love as a binding vibrational frequency that governs cellular harmony.',
    links: {
      paperback: 'https://www.amazon.com/Love-Ecology-psychology-Self-Ecology/dp/B0DLD52K8L/',
      kindle: 'https://www.amazon.com/Love-Ecology-Eternal-Blessed-Above-ebook/dp/B086BT8S1Q/',
    }
  },
  {
    title: 'Spiritual Diplomacy',
    dimension: 'Mental Level',
    cycle: 'quantum',
    cover: spiritualDiplomacyImg,
    award: 'Prestigious Book Excellence Award',
    description: 'Elevating mental discourse to spiritual diplomacy. Building bridges of high-frequency conscious communication across global divides.',
    links: {
      kindle: 'https://www.amazon.com/dp/B0GTMVNWN5',
      paperback: 'https://www.amazon.com/Spiritual-Diplomacy-Self-Restructuring-Psychology-Self-Ecology/dp/B0FN61NDCK/',
    }
  },
  {
    title: 'I AM Blessed, I AM Life Obsessed!',
    dimension: 'Spiritual Level',
    cycle: 'quantum',
    cover: blessedLifeObsessedImg,
    description: 'An uplifting guide to embracing life with cosmic gratitude. Positive quantum mental programming for daily alignment and spiritual focus.',
    links: {
      paperback: 'https://www.amazon.com/dp/1968442383',
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
    }
  },
  {
    title: 'Self-Ascension',
    dimension: 'Universal Level',
    cycle: 'quantum',
    cover: selfAscensionImg,
    description: 'The concluding book and overview of the entire system. Integrates auto-suggestive, digital, and quantum psychology. Aligns body, mind, spirit, and super-consciousness with the upcoming Singularity.',
    links: {
      kindle: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-Ph-D-ebook/dp/B0GZS9QQ4C/',
      paperback: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-PH/dp/B0GZT5TSYB/',
      hardcover: 'https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-PH/dp/B0H1K5G25K/',
    }
  },

  // Other Publications
  {
    title: 'Self-Worth',
    dimension: 'Personal Growth / Inspiration',
    cycle: 'other',
    cover: selfWorthImg,
    description: 'Provides actionable guidelines and psychological exercises to build self-confidence, raise self-awareness, and establish personal sovereignty.',
    links: {
      kindle: 'https://www.amazon.com/SELF-WORTH-Rimaletta-Ray-ebook/dp/B08KHPW8MV/',
    }
  },
  {
    title: 'Americanize Your Language and Emotionalize Your Speech!',
    dimension: 'Psycholinguistics / Language Fitness',
    cycle: 'other',
    cover: americanizeLanguageImg,
    description: 'A psycholinguistic guide to mastering English speech patterns, combining phonetics, rhythm, and emotional expression to build a powerful and persuasive communication style.',
    links: {
      kindle: 'https://www.amazon.com/Americanize-Your-Language-Emotionalize-Speech-ebook/dp/B005HW2NL0/',
    }
  },
  {
    title: 'It Too Shall Pass!',
    dimension: 'Inspirational Psychology',
    cycle: 'other',
    cover: itTooShallPassImg,
    description: 'A comforting psycholinguistic manual of hope and endurance. Provides conscious steps to navigate difficult times and align emotional energy during periods of transition.',
    links: {
      kindle: 'https://www.amazon.com/Too-Shall-Pass-Rimaletta-Ray-ebook/dp/B0CLZ2RDR2/',
    }
  },
];

export default function BooksSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const cycles = ['auto', 'digital', 'quantum', 'other'] as const;
  const filteredBooks = booksData.filter((b) => b.cycle === cycles[activeTab]);

  const getCycleColor = (cycle: string) => {
    switch (cycle) {
      case 'auto':
        return '#fbbf24'; // Amber
      case 'digital':
        return '#22d3ee'; // Cyan
      case 'quantum':
        return '#c084fc'; // Purple
      case 'other':
        return '#f43f5e'; // Rose
      default:
        return '#6366f1';
    }
  };

  // Render a beautiful book cover fallback
  const renderFallbackCover = (book: Book) => {
    const color = getCycleColor(book.cycle);
    return (
      <Box
        sx={{
          height: 320,
          background: `linear-gradient(145deg, #111126 0%, #070715 100%)`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 3,
          borderLeft: `6px solid ${color}`,
          boxShadow: `inset 0 0 20px rgba(0,0,0,0.8), 0 10px 25px rgba(0,0,0,0.5)`,
          overflow: 'hidden',
          borderRadius: '4px 12px 12px 4px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 5,
            width: 1,
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: color,
            opacity: 0.05,
            filter: 'blur(30px)',
          }}
        />

        <Box>
          <Chip
            label={book.dimension}
            size="small"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: color,
              border: `1px solid ${color}40`,
              fontWeight: 600,
              fontSize: '0.7rem',
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              color: '#ffffff',
              fontSize: '1.2rem',
              lineHeight: 1.3,
            }}
          >
            {book.title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MenuBookIcon sx={{ color: color, fontSize: '1.2rem' }} />
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 500 }}>
            {book.cycle === 'auto' ? 'Auto-Suggestive' : book.cycle === 'digital' ? 'Digital Cycle' : book.cycle === 'quantum' ? 'Quantum Cycle' : 'Other Publications'}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      id="books"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(circle at 50% 80%, #0d0c2e 0%, #070715 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Books Section Header */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          The Literary Ecosystem
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: '#94a3b8', maxWidth: '700px', mx: 'auto', mb: 8 }}
        >
          The system starts with <strong>“I Am Free to Be the Best of Me!”</strong> and culminates with{' '}
          <strong>“Self-Ascension!”</strong>. Pick the realm of life you need to refine in any of the cycles.
        </Typography>

        {/* FEATURED BOOK: Self-Ascension */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              color: '#c084fc',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 1,
              letterSpacing: '0.05em',
            }}
          >
            <MenuBookIcon /> FEATURED CONCLUDING SYSTEM BOOK
          </Typography>

          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 6,
              background: 'linear-gradient(135deg, rgba(192,132,252,0.06) 0%, rgba(15,16,38,0.9) 100%)',
              border: '1px solid rgba(192, 132, 252, 0.2)',
              boxShadow: '0 20px 50px rgba(192, 132, 252, 0.08)',
            }}
          >
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                className="book-cover-container"
                sx={{
                  width: 230,
                  height: 340,
                  transition: 'transform 0.4s',
                  '&:hover': { transform: 'scale(1.05) rotate(2deg)' },
                }}
              >
                <img
                  src={selfAscensionImg}
                  alt="Self-Ascension Book Cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip label="Quantum Cycle" color="secondary" sx={{ fontWeight: 600, background: '#c084fc', color: '#0f172a' }} />
                <Chip label="Universal Dimension" variant="outlined" sx={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Self-Ascension
              </Typography>
              <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Serving as the culminating volume of the Quantum Cycle and the overview of the entire Holistic System,
                <strong> Self-Ascension</strong> presenting the final stage of self-actualization. It integrates
                Auto-Suggestive, Digital, and Quantum Psychology to align body, spirit, mind, self-consciousness, and
                super-consciousness to prepare humans for a cooperative evolutionary future alongside emerging AI.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component="a"
                  href="https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-PH/dp/B0GZT5TSYB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  sx={{ background: 'linear-gradient(45deg, #c084fc 0%, #a855f7 100%)', color: '#ffffff' }}
                >
                  Buy Paperback
                </Button>
                <Button
                  component="a"
                  href="https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-PH/dp/B0H1K5G25K/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{ borderColor: 'rgba(192,132,252,0.4)', color: '#c084fc', '&:hover': { borderColor: '#c084fc', background: 'rgba(192,132,252,0.05)' } }}
                >
                  Buy Hardcover
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* SYSTEM NAVIGATOR (TABS) */}
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            textColor="inherit"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: getCycleColor(cycles[activeTab]),
                height: 3,
                borderRadius: '3px',
              },
            }}
          >
            <Tab
              label="Auto-Suggestive Cycle"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                color: activeTab === 0 ? '#fbbf24' : '#64748b',
                px: { xs: 2, sm: 4 },
              }}
            />
            <Tab
              label="Digital Cycle"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                color: activeTab === 1 ? '#22d3ee' : '#64748b',
                px: { xs: 2, sm: 4 },
              }}
            />
            <Tab
              label="Quantum Cycle"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                color: activeTab === 2 ? '#c084fc' : '#64748b',
                px: { xs: 2, sm: 4 },
              }}
            />
            <Tab
              label="Other Publications"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                color: activeTab === 3 ? '#f43f5e' : '#64748b',
                px: { xs: 2, sm: 4 },
              }}
            />
          </Tabs>
        </Box>

        {/* BOOKS GRID */}
        <Grid container spacing={4}>
          {filteredBooks.map((book) => {
            const cycleColor = getCycleColor(book.cycle);

            return (
              <Grid item xs={12} sm={6} md={4} key={book.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      borderColor: `${cycleColor}33`,
                      boxShadow: `0 15px 35px ${cycleColor}0a`,
                    },
                  }}
                >
                  <Box>
                    {book.cover ? (
                      <Box
                        sx={{
                          height: 320,
                          position: 'relative',
                          overflow: 'hidden',
                          background: '#070712',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          pt: 2,
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                        }}
                      >
                        <Box sx={{ width: 190, height: 280, boxShadow: '0 8px 20px rgba(0,0,0,0.6)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
                          <img
                            src={book.cover}
                            alt={book.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        </Box>
                        {book.award && (
                          <Chip
                            label="Award Winner"
                            size="small"
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: 12,
                              backgroundColor: '#fbbf24',
                              color: '#0f172a',
                              fontWeight: 700,
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    ) : (
                      renderFallbackCover(book)
                    )}

                    <CardContent sx={{ p: 3 }}>
                      {book.cover && (
                        <Box sx={{ mb: 1 }}>
                          <Chip
                            label={book.dimension}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              color: cycleColor,
                              border: `1px solid ${cycleColor}33`,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                            }}
                          />
                        </Box>
                      )}
                      {book.cover && (
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: '"Outfit", sans-serif',
                            fontWeight: 700,
                            color: '#ffffff',
                            lineHeight: 1.3,
                            mb: 1.5,
                          }}
                        >
                          {book.title}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#94a3b8',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {book.description}
                      </Typography>
                    </CardContent>
                  </Box>

                  <Box sx={{ p: 3, pt: 0, display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<InfoIcon />}
                      onClick={() => setSelectedBook(book)}
                      sx={{
                        flex: 1,
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.03)',
                        },
                      }}
                    >
                      Details
                    </Button>

                    {book.links ? (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          const url = book.links?.paperback || book.links?.kindle;
                          if (url) window.open(url, '_blank');
                        }}
                        sx={{
                          flex: 1.2,
                          background: cycleColor,
                          color: '#0f172a',
                          fontWeight: 700,
                          '&:hover': {
                            background: cycleColor,
                            filter: 'brightness(1.1)',
                          },
                        }}
                      >
                        Buy Now
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        size="small"
                        disabled
                        sx={{
                          flex: 1.2,
                          '&.Mui-disabled': {
                            backgroundColor: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.2)',
                          },
                        }}
                      >
                        Coming Soon
                      </Button>
                    )}
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* DETAIL DIALOG */}
      {selectedBook && (
        <Dialog
          open={!!selectedBook}
          onClose={() => setSelectedBook(null)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: '#0c0c1e',
              border: `1px solid ${getCycleColor(selectedBook.cycle)}30`,
              borderRadius: 4,
              boxShadow: `0 20px 50px ${getCycleColor(selectedBook.cycle)}10`,
              p: 1,
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff' }}>
              {selectedBook.title}
            </Typography>
            <IconButton onClick={() => setSelectedBook(null)} sx={{ color: 'rgba(255,255,255,0.5)' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ px: 3, pb: 3 }}>
            {selectedBook.award && (
              <Box
                sx={{
                  background: 'rgba(251,191,36,0.1)',
                  border: '1px solid rgba(251,191,36,0.3)',
                  p: 1.5,
                  borderRadius: 2,
                  mb: 3,
                  color: '#fbbf24',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                ★ {selectedBook.award}
              </Box>
            )}
            <Box sx={{ mb: 2.5 }}>
              <Chip
                label={selectedBook.dimension}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: getCycleColor(selectedBook.cycle),
                  fontWeight: 600,
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 1.8, mb: 3 }}>
              {selectedBook.description}
            </Typography>

            {selectedBook.links && (
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1.5, fontWeight: 700 }}>
                  Available formats:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {selectedBook.links.kindle && (
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={selectedBook.links.kindle}
                      target="_blank"
                      sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
                    >
                      Kindle
                    </Button>
                  )}
                  {selectedBook.links.paperback && (
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={selectedBook.links.paperback}
                      target="_blank"
                      sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
                    >
                      Paperback
                    </Button>
                  )}
                  {selectedBook.links.hardcover && (
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={selectedBook.links.hardcover}
                      target="_blank"
                      sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
                    >
                      Hardcover
                    </Button>
                  )}
                </Box>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
