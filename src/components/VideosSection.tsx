import { useState } from 'react';
import { Box, Typography, Container, Grid, IconButton, Button } from '@mui/material';
import { PlayArrow as PlayArrowIcon, SmartDisplay as SmartDisplayIcon } from '@mui/icons-material';

// Image cover imports for video thumbnails
import bestOfMeImg from '../assets/downloaded/best_of_me.jpg';
import selfAscensionImg from '../assets/downloaded/9da313-8e94-4cf4-9ac3-9df8803dd8d0.png';
import spiritualDiplomacyImg from '../assets/downloaded/spiritual_diplomacy.jpg';
import transhumanAcculturationImg from '../assets/downloaded/transhuman_acculturation.jpg';
import loveEcologyImg from '../assets/downloaded/love_ecology.jpg';
import blessedLifeObsessedImg from '../assets/downloaded/blessed_life_obsessed.jpg';
import selfRenaissanceImg from '../assets/downloaded/6c30815a-30d3-46ee-939c-2d6a686093ed.png';
import selfWorthImg from '../assets/downloaded/self_worth.jpg';
import transcendentUsAisImg from '../assets/downloaded/transcendent_us_ais.jpg';

interface VideoItem {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
  embedUrl: string; // YouTube embed URL
}

const videosData: VideoItem[] = [
  {
    title: 'Holistic System of Self-Resurrection',
    description: 'Dr. Rimaletta Ray presents the overview of her system, explaining how Auto-Suggestive, Digital, and Quantum Psychology merge to preserve human integrity.',
    duration: '5:42',
    thumbnail: selfAscensionImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=u5vs04Mo7bo',
    embedUrl: 'https://www.youtube.com/embed/u5vs04Mo7bo',
  },
  {
    title: 'I AM Free to Be the Best of Me!',
    description: 'Promo video for the foundational book of the Auto-Suggestive cycle, exploring the physical dimension of self-ecology and personal sovereignty.',
    duration: '4:15',
    thumbnail: bestOfMeImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=km7yinMA90I',
    embedUrl: 'https://www.youtube.com/embed/km7yinMA90I',
  },
  {
    title: 'Spiritual Diplomacy (Award-Winning)',
    description: 'Award-winning video on mental-level quantum psychology, illustrating how the Self-Resurrection system integrates with AI-generated infrastructure through conscious global communication.',
    duration: '3:50',
    thumbnail: spiritualDiplomacyImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=ntxwgLFuHhY',
    embedUrl: 'https://www.youtube.com/embed/ntxwgLFuHhY',
  },
  {
    title: 'Transhuman Acculturation',
    description: 'A deep dive into spiritual dimensions under the Digital Cycle, exploring how humanity preserves its soul-symmetry in the age of AI.',
    duration: '6:12',
    thumbnail: transhumanAcculturationImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=6u_VBVdU-pk',
    embedUrl: 'https://www.youtube.com/embed/6u_VBVdU-pk',
  },
  {
    title: 'Self-Ascension',
    description: 'The final video summarizing the ultimate stage of evolution, bringing the entire system together to sync with the super-consciousness.',
    duration: '5:08',
    thumbnail: selfAscensionImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=3UVAvLyJFuw',
    embedUrl: 'https://www.youtube.com/embed/3UVAvLyJFuw',
  },
  {
    title: 'Love-Ecology!',
    description: 'Quantum love psychology for self-ecology, exploring universal love as a binding frequency that aligns organic consciousness.',
    duration: '4:52',
    thumbnail: loveEcologyImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=u0u3_UVmkNs',
    embedUrl: 'https://www.youtube.com/embed/u0u3_UVmkNs',
  },
  {
    title: 'I AM Blessed, I AM Life Obsessed!',
    description: 'An uplifting guide to embracing life with cosmic gratitude. Positive quantum mental programming for daily alignment and spiritual focus.',
    duration: '5:24',
    thumbnail: blessedLifeObsessedImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=X-lykNasnMk',
    embedUrl: 'https://www.youtube.com/embed/X-lykNasnMk',
  },
  {
    title: 'Dr. Rimaletta Ray 5-Book Series',
    description: 'A video overview presenting Dr. Rimaletta Ray’s signature 5-book series on self-transformation and psycholinguistic programming.',
    duration: '4:02',
    thumbnail: selfRenaissanceImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=FoApTcV-35I',
    embedUrl: 'https://www.youtube.com/embed/FoApTcV-35I',
  },
  {
    title: 'Inspirational Psychology for Self Ecology | Part 1',
    description: 'An introductory lecture on Inspirational Psychology, setting the foundations for establishing personal equilibrium and self-ecology.',
    duration: '6:35',
    thumbnail: selfWorthImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=5JWS7Z54gp8',
    embedUrl: 'https://www.youtube.com/embed/5JWS7Z54gp8',
  },
  {
    title: 'Transcendent Us and AIs!',
    description: 'Video presentation on the Universal Level of Digital Psychology, illustrating our transcendent partnership with advanced intelligence.',
    duration: '5:02',
    thumbnail: transcendentUsAisImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=FTkxhHyKxcM',
    embedUrl: 'https://www.youtube.com/embed/FTkxhHyKxcM',
  },
];

export default function VideosSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = videosData[activeVideoIndex];

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
      { pattern: /\b(Self-Ascension)\b/gi, color: '#7c3aed', weight: 900 },
      { pattern: /\b(I AM Free to Be the Best of Me!)\b/gi, color: '#16a34a', weight: 900 },
      { pattern: /\b(Self-Resurrection)\b/gi, color: '#ed668c', weight: 800 }
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
      id="videos"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#070715',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box className="cosmic-glow-violet" sx={{ top: '20%', right: '-15%', opacity: 0.55 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '10%', left: '-15%', opacity: 0.55 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Videos Header */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 900,
            mb: 2,
            color: '#ed668c',
          }}
        >
          Featured Promo Videos!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: '#cbd5e1', fontWeight: 600, maxWidth: '600px', mx: 'auto', mb: 8 }}
        >
          Watch Dr. Rimaletta Ray introduce the key pillars of the <Box component="span" sx={{ color: '#ed668c', fontWeight: 700 }}>Holistic System of Self-Resurrection</Box>.
        </Typography>

        {/* Video Theatre Layout */}
        <Grid container spacing={4}>
          {/* Main Theatre Player */}
          <Grid item xs={12} lg={8}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                background: '#04040c',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Responsive Video Container */}
              <Box sx={{ position: 'relative', pt: '56.25%', width: '100%' }}>
                {activeVideo.embedUrl ? (
                  <iframe
                    src={activeVideo.embedUrl}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundImage: `linear-gradient(to bottom, rgba(10,10,32,0.4), rgba(7,7,21,0.9)), url(${activeVideo.thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <IconButton
                      component="a"
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      sx={{
                        color: '#ef4444',
                        transform: 'scale(1.8)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          color: '#f87171',
                          transform: 'scale(2.0)',
                        },
                      }}
                    >
                      <PlayArrowIcon sx={{ fontSize: '3rem' }} />
                    </IconButton>
                  </Box>
                )}
              </Box>

              {/* Video Info Overlay */}
              <Box sx={{ p: 4, background: 'rgba(15, 16, 38, 0.75)', borderTop: '2px solid #ed668c' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <SmartDisplayIcon sx={{ color: '#ed668c' }} />
                  <Typography variant="subtitle2" sx={{ color: '#ed668c', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Now Playing
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, mb: 2, color: '#ffffff' }}>
                  {activeVideo.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1', fontWeight: 550, lineHeight: 1.7 }}>
                  {renderColorCodedText(activeVideo.description)}
                </Typography>
                <Button
                  variant="outlined"
                  component="a"
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 3,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontWeight: 700,
                    '&:hover': {
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      background: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  Watch on YouTube Channel
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Playlist on the Right */}
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                background: 'rgba(15, 16, 38, 0.75)',
                borderRadius: 4,
                border: '2px solid #0f766e',
                p: 3,
                maxHeight: { lg: '740px' },
                overflowY: 'auto',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#ffffff', mb: 3 }}>
                Promo Playlist
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {videosData.map((video, index) => {
                  const isActive = index === activeVideoIndex;
                  return (
                    <Box
                      key={video.title}
                      onClick={() => setActiveVideoIndex(index)}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        p: 1.5,
                        borderRadius: 3,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        background: isActive ? 'rgba(237, 102, 140, 0.12)' : 'transparent',
                        border: isActive ? '2px solid #ed668c' : '1px solid transparent',
                        '&:hover': {
                          background: isActive ? 'rgba(237, 102, 140, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                        },
                      }}
                    >
                      {/* Video Playlist Thumbnail */}
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          maxWidth: '100px',
                          height: '70px',
                          borderRadius: 2,
                          overflow: 'hidden',
                          flexShrink: 0,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        }}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <PlayArrowIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                        </Box>
                      </Box>

                      {/* Video Title/Duration */}
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography
                          variant="subtitle2"
                          noWrap
                          sx={{
                            color: isActive ? '#ed668c' : '#ffffff',
                            fontWeight: 750,
                            mb: 0.5,
                          }}
                        >
                          {video.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#cbd5e1',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.4,
                          }}
                        >
                          {renderColorCodedText(video.description)}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
