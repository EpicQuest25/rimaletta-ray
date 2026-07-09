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
  Divider,
} from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, MenuBook as MenuBookIcon, Info as InfoIcon, Close as CloseIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';

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
  // Bridge/Insertion Books to fill two empty spots under the Auto tab
  {
    title: 'Digital Binary + Human Refinery = Superhuman',
    dimension: 'Mental Dimension',
    cycle: 'auto',
    cover: digitalBinaryImg,
    description: 'Merging human critical reasoning with digital logic. Refactoring the intellect to build a space-time coherent intelligence, bridging into the digital era.',
    links: {
      paperback: 'https://www.amazon.com/dp/1960159799',
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
    }
  },
  {
    title: 'Light is me, Light is my philosophy',
    dimension: 'Physical Level',
    cycle: 'auto',
    cover: lightIsMeImg,
    award: 'Platinum Seal of Excellence Award',
    description: 'Devoted to Nikola Tesla. Award-winning work presenting the philosophy of light, frequency, and physical wellness. Explores our bodies as energetic receivers of quantum cosmic radiation.',
    links: {
      kindle: 'https://www.amazon.com/stores/Dr-Rimaletta-Ray/author/B09JBF92RQ',
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
      kindle: 'https://www.amazon.com/Dis-Entangle-ment-Inspiration-Psychology-Self-Ecology-Rimaletta-ebook/dp/B0FPLYRS3Z',
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
        return '#dc2626'; // Red
      case 'digital':
        return '#1d4ed8'; // Blue
      case 'quantum':
        return '#7c3aed'; // Violet
      case 'other':
        return '#ed668c'; // Pink
      default:
        return '#4f46e5';
    }
  };

  // Render a beautiful book cover fallback
  const renderFallbackCover = (book: Book) => {
    const color = getCycleColor(book.cycle);
    return (
      <Box
        sx={{
          width: 120,
          height: 180,
          background: `linear-gradient(145deg, #1e1b4b 0%, #070712 100%)`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
          borderLeft: `5px solid ${color}`,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: `inset 0 0 20px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)`,
          overflow: 'hidden',
          borderRadius: '4px 10px 10px 4px',
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#ffffff',
              fontSize: '0.8rem',
              lineHeight: 1.2,
              mb: 1,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {book.title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <MenuBookIcon sx={{ color: color, fontSize: '0.9rem' }} />
          <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.6rem' }}>
            {book.cycle === 'auto' ? 'Auto-Suggestive' : book.cycle === 'digital' ? 'Digital Cycle' : book.cycle === 'quantum' ? 'Quantum Cycle' : 'Other'}
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
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background Glows */}
      <Box className="cosmic-glow-indigo" sx={{ top: '5%', right: '10%', opacity: 0.5 }} />
      <Box className="cosmic-glow-violet" sx={{ bottom: '10%', left: '-5%', opacity: 0.5 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Books Section Header */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 900,
            mb: 1,
            color: '#ed668c',
          }}
        >
          Inspirational Psychology for Self-Ecology!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 900,
            mb: 4,
            fontFamily: '"Outfit", sans-serif',
          }}
        >
          (<Box component="span" sx={{ color: '#dc2626' }}>Auto-Suggestive</Box>,{' '}
          <Box component="span" sx={{ color: '#60a5fa' }}>Digital</Box>,{' '}
          <Box component="span" sx={{ color: '#7c3aed' }}>Quantum Cycles</Box>)
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: '#cbd5e1', fontWeight: 600, maxWidth: '700px', mx: 'auto', mb: 8 }}
        >
          The system starts with <Box component="span" sx={{ color: '#16a34a', fontWeight: 900 }}>“I Am Free to Be the Best of Me!”</Box> and culminates with{' '}
          <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>“Self-Ascension!”</Box>. Pick the realm of life you need to refine in any of the cycles.
        </Typography>

        {/* FEATURED BOOK: Self-Ascension */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              color: '#ed668c',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 1,
              letterSpacing: '0.05em',
            }}
          >
            <MenuBookIcon sx={{ color: '#ed668c' }} /> FEATURED CONCLUDING SYSTEM BOOK
          </Typography>

          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 6,
              background: 'rgba(15, 16, 38, 0.75)',
              border: '2px solid #7c3aed',
              boxShadow: '0 20px 50px rgba(124, 58, 237, 0.15)',
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
                <Chip label="Quantum Cycle" color="secondary" sx={{ fontWeight: 700, background: '#7c3aed', color: '#ffffff' }} />
                <Chip label="Universal Dimension" variant="outlined" sx={{ color: '#7c3aed', borderColor: 'rgba(124, 58, 237, 0.4)' }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 950,
                  mb: 2,
                  color: '#ffffff',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Self-Ascension
              </Typography>
              <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Serving as the culminating volume of the Quantum Cycle and the overview of the entire Holistic System,{' '}
                <Box component="span" sx={{ color: '#7c3aed', fontWeight: 900 }}>Self-Ascension</Box> presents the final stage of self-actualization. It integrates{' '}
                <Box component="span" sx={{ color: '#dc2626', fontWeight: 700 }}>Auto-Suggestive</Box>,{' '}
                <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 700 }}>Digital</Box>, and{' '}
                <Box component="span" sx={{ color: '#7c3aed', fontWeight: 700 }}>Quantum Psychology</Box> to align{' '}
                <Box component="span" sx={{ color: '#16a34a', fontWeight: 700 }}>body</Box>,{' '}
                <Box component="span" sx={{ color: '#dc2626', fontWeight: 700 }}>spirit</Box>,{' '}
                <Box component="span" sx={{ color: '#1d4ed8', fontWeight: 700 }}>mind</Box>,{' '}
                <Box component="span" sx={{ color: '#7c3aed', fontWeight: 700 }}>self-consciousness</Box>, and{' '}
                <Box component="span" sx={{ color: '#7c3aed', fontWeight: 700 }}>super-consciousness</Box> to prepare humans for a cooperative evolutionary future alongside emerging AI.
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
                  sx={{ background: 'linear-gradient(45deg, #7c3aed 0%, #6d28d9 100%)', color: '#ffffff' }}
                >
                  Buy Paperback
                </Button>
                <Button
                  component="a"
                  href="https://www.amazon.com/Self-Ascension-Rimaletta-S-Ray-PH/dp/B0H1K5G25K/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{ borderColor: '#7c3aed', color: '#7c3aed', '&:hover': { borderColor: '#7c3aed', background: 'rgba(124, 58, 237, 0.05)' } }}
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
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="inherit"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: getCycleColor(cycles[activeTab]),
                height: 3,
                borderRadius: '3px',
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: { sm: 'center' },
              },
              '& .MuiTabScrollButton-root': {
                color: '#94a3b8',
              },
            }}
          >
            <Tab
              label="Auto-Suggestive"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                color: activeTab === 0 ? '#dc2626' : '#64748b',
                px: { xs: 1.5, sm: 3 },
                minWidth: { xs: 'auto', sm: 120 },
              }}
            />
            <Tab
              label="Digital Cycle"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                color: activeTab === 1 ? '#1d4ed8' : '#64748b',
                px: { xs: 1.5, sm: 3 },
                minWidth: { xs: 'auto', sm: 120 },
              }}
            />
            <Tab
              label="Quantum Cycle"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                color: activeTab === 2 ? '#7c3aed' : '#64748b',
                px: { xs: 1.5, sm: 3 },
                minWidth: { xs: 'auto', sm: 120 },
              }}
            />
            <Tab
              label="Other Publications"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                color: activeTab === 3 ? '#ed668c' : '#64748b',
                px: { xs: 1.5, sm: 3 },
                minWidth: { xs: 'auto', sm: 120 },
              }}
            />
          </Tabs>
        </Box>

        {/* BOOKS GRID */}
        <Grid container spacing={4}>
          {filteredBooks.map((book, idx) => {
            const cycleColor = getCycleColor(book.cycle);

            return (
              <Grid item xs={12} md={6} key={`${book.title}-${idx}`}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(15, 16, 38, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      borderColor: `${cycleColor}70`,
                      boxShadow: `0 15px 35px rgba(0,0,0,0.3)`,
                    },
                  }}
                >
                  <Grid container sx={{ height: '100%' }}>
                    {/* Left side: Book Cover / Fallback */}
                    <Grid
                      item
                      xs={4}
                      sm={4}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 1.5, sm: 2.5 },
                        background: 'rgba(0, 0, 0, 0.2)',
                        minHeight: { xs: 160, sm: 'auto' },
                      }}
                    >
                      {book.cover ? (
                        <Box
                          sx={{
                            width: { xs: 80, sm: 110, md: 120 },
                            height: { xs: 120, sm: 165, md: 180 },
                            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                            transition: 'transform 0.3s',
                            position: 'relative',
                            '&:hover': { transform: 'scale(1.03)' },
                          }}
                        >
                          <img
                            src={book.cover}
                            alt={book.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                          />
                          {book.award && (
                            <Chip
                              label="Award"
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: -8,
                                right: -8,
                                backgroundColor: '#fbbf24',
                                color: '#0f172a',
                                fontWeight: 800,
                                fontSize: '0.6rem',
                                height: 18,
                              }}
                            />
                          )}
                        </Box>
                      ) : (
                        renderFallbackCover(book)
                      )}
                    </Grid>

                    {/* Right side: Description & Action */}
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: { xs: 1.5, sm: 2.5, md: 3 },
                      }}
                    >
                      <Box>
                        <Box sx={{ mb: 1 }}>
                          <Chip
                            label={book.dimension}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              color: cycleColor,
                              border: `1px solid ${cycleColor}33`,
                              fontWeight: 700,
                              fontSize: '0.7rem',
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: '"Outfit", sans-serif',
                            fontWeight: 800,
                            color: '#ffffff',
                            lineHeight: 1.3,
                            mb: { xs: 0.8, sm: 1.5 },
                            fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' },
                          }}
                        >
                          {book.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#cbd5e1',
                            fontWeight: 550,
                            display: { xs: 'none', sm: '-webkit-box' },
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.5,
                            fontSize: '0.825rem',
                          }}
                        >
                          {book.description}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.8, sm: 1 }, mt: { xs: 1, sm: 2.5 } }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<InfoIcon />}
                          onClick={() => setSelectedBook(book)}
                          sx={{
                            flex: 1,
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '0.75rem',
                            py: 0.8,
                            '&:hover': {
                              borderColor: '#ffffff',
                              color: '#ffffff',
                              background: 'rgba(255, 255, 255, 0.05)',
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
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              py: 0.8,
                              '&:hover': {
                                background: cycleColor,
                                filter: 'brightness(0.95)',
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
                              fontSize: '0.75rem',
                              py: 0.8,
                              '&.Mui-disabled': {
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'rgba(255,255,255,0.2)',
                              },
                            }}
                          >
                            Coming Soon
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
          {cycles[activeTab] === 'quantum' && (
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(15, 16, 38, 0.75)',
                  border: '2px solid #7c3aed',
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(15,16,38,0.95) 100%)',
                  boxShadow: '0 10px 30px rgba(124,58,237,0.15)',
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', minHeight: 230 }}>
                  <AutoAwesomeIcon sx={{ color: '#c084fc', fontSize: '2.5rem', mb: 1.5, mx: 'auto' }} />
                  <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5 }}>
                    Tesla Frequency Alignment
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, lineHeight: 1.7, mb: 2 }}>
                    “If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.” 
                    <br />— Nikola Tesla
                  </Typography>
                  <Divider sx={{ my: 1.5, borderColor: 'rgba(255, 255, 255, 0.08)' }} />
                  <Typography variant="caption" sx={{ color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Quantum Cycle Philosophy
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, mt: 1, fontSize: '0.85rem' }}>
                    Dr. Ray’s award-winning masterpiece <strong>“Light is me, Light is my philosophy”</strong> is dedicated to Tesla's principles of physical and spiritual energy resonance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>

        {/* PUBLISHERS & ACQUISITION CORNER */}
        <Box
          sx={{
            mt: 12,
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            background: 'rgba(15, 16, 38, 0.75)',
            border: '2px solid rgba(8, 145, 178, 0.3)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box sx={{ width: 4, height: 28, backgroundColor: '#22d3ee', borderRadius: 2 }} />
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                color: '#ffffff',
                fontSize: { xs: '1.6rem', md: '2rem' }
              }}
            >
              The Acquisition Case for Traditional Publishers
            </Typography>
          </Box>
          
          <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 550, mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Dr. Ray’s works represent a pre-assembled, commercially powerful literary ecosystem designed to address the deep cognitive and spiritual challenges of the digital Renaissance. 
            Traditional publishers are not just acquiring single books; they are acquiring a lifetime curriculum with immense backend value and multi-format appeal.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, borderRadius: 4, background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.15)', height: '100%' }}>
                <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#818cf8', mb: 1.5 }}>
                  1. Pre-Assembled Ecosystem
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, lineHeight: 1.6 }}>
                  With 20+ structured titles spanning three evolutionary cycles, this offers a complete brand syllabus with immense potential for coursework, workshops, and digital expansions.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, borderRadius: 4, background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.15)', height: '100%' }}>
                <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#22d3ee', mb: 1.5 }}>
                  2. Academic & Scholarly Rigor
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, lineHeight: 1.6 }}>
                  Grounded in rigorous scholarship—a Ph.D. from the Moscow Brain Institute and 30 years of university teaching in the USA—delivering immediate academic prestige.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, borderRadius: 4, background: 'rgba(251, 191, 36, 0.08)', border: '1px solid rgba(251, 191, 36, 0.15)', height: '100%' }}>
                <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#fbbf24', mb: 1.5 }}>
                  3. Highly Consumable Format
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 550, lineHeight: 1.6 }}>
                  Synthesized into a page-by-page, highly visual format optimized for the speed of modern reading, bridging the gap between deep science and self-ecology.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
              background: '#0c0c22',
              border: `1px solid ${getCycleColor(selectedBook.cycle)}40`,
              borderRadius: 4,
              boxShadow: `0 20px 50px rgba(0,0,0,0.5)`,
              p: 1,
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#ffffff' }}>
              {selectedBook.title}
            </Typography>
            <IconButton onClick={() => setSelectedBook(null)} sx={{ color: 'rgba(255,255,255,0.6)' }}>
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
                  fontWeight: 700,
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
                  fontWeight: 700,
                  border: `1px solid ${getCycleColor(selectedBook.cycle)}30`,
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 1.8, mb: 3 }}>
              {selectedBook.description}
            </Typography>

            {selectedBook.links && (
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1.5, fontWeight: 800 }}>
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
                      sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff', '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.05)' } }}
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
                      sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff', '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.05)' } }}
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
                      sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff', '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.05)' } }}
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
