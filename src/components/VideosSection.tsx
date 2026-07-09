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
import soulSymmetryImg from '../assets/downloaded/soul_symmetry.jpg';
import digitalBinaryImg from '../assets/downloaded/digital_binary.jpg';
import exceptionalityImg from '../assets/downloaded/exceptionality.jpg';
import transcendentUsAisImg from '../assets/downloaded/transcendent_us_ais.jpg';

interface VideoItem {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
  embedUrl: string; // YouTube embed URL (can be customized by client)
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
    title: 'Inspirational Psychology for Self Ecology | Part 2',
    description: 'Part 2 of the foundational lecture on Inspirational Psychology, outlining the core paths to conscious self-elevation.',
    duration: '7:12',
    thumbnail: soulSymmetryImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=xEpctsBUyFk',
    embedUrl: 'https://www.youtube.com/embed/xEpctsBUyFk',
  },
  {
    title: 'Digital Psychology for Self Ecology',
    description: 'A presentation on Digital Psychology, explaining the equations and practices for protecting human sovereignty in a technological landscape.',
    duration: '5:48',
    thumbnail: digitalBinaryImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=6_OmaT-VUII',
    embedUrl: 'https://www.youtube.com/embed/6_OmaT-VUII',
  },
  {
    title: 'Soul-Symmetry',
    description: 'Promo video for the Soul-Symmetry book and system overview, focusing on establishing inner equilibrium and conscious sovereignty.',
    duration: '4:20',
    thumbnail: soulSymmetryImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=br9hr4qEsM0',
    embedUrl: 'https://www.youtube.com/embed/br9hr4qEsM0',
  },
  {
    title: 'Exceptionality',
    description: 'Promo video for the Exceptionality book, exploring how to cultivate emotional uniqueness and safeguard human empathy.',
    duration: '4:45',
    thumbnail: exceptionalityImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=aPcQZ1p_gO0',
    embedUrl: 'https://www.youtube.com/embed/aPcQZ1p_gO0',
  },
  {
    title: 'Self-Worth',
    description: 'Inspirational talk on Self-Worth, detailing the path to building self-confidence, self-awareness, and personal sovereignty.',
    duration: '5:12',
    thumbnail: selfWorthImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=W8SU4gVqXJ0',
    embedUrl: 'https://www.youtube.com/embed/W8SU4gVqXJ0',
  },
  {
    title: 'Self-Renaissance',
    description: 'Inspirational talk on Self-Renaissance, highlighting the integration of the auto-suggestive cycle to spark personal rebirth.',
    duration: '4:55',
    thumbnail: selfRenaissanceImg,
    youtubeUrl: 'https://www.youtube.com/watch?v=OCuhij7NokY',
    embedUrl: 'https://www.youtube.com/embed/OCuhij7NokY',
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

  return (
    <Box
      id="videos"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box className="cosmic-glow-violet" sx={{ top: '20%', right: '-15%', opacity: 0.3 }} />
      <Box className="cosmic-glow-cyan" sx={{ bottom: '10%', left: '-15%', opacity: 0.3 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Videos Header */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #0f766e 0%, #042f2e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Featured Promo Videos
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: '#042f2e', fontWeight: 600, maxWidth: '600px', mx: 'auto', mb: 8 }}
        >
          Watch Dr. Rimaletta Ray introduce the key pillars of the Holistic System of Self-Resurrection.
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
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08)',
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
              <Box sx={{ p: 4, background: '#ffffff' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <SmartDisplayIcon sx={{ color: '#0891b2' }} />
                  <Typography variant="subtitle2" sx={{ color: '#0891b2', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Now Playing
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, mb: 2, color: '#042f2e' }}>
                  {activeVideo.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#042f2e', fontWeight: 550, lineHeight: 1.7 }}>
                  {activeVideo.description}
                </Typography>
                <Button
                  variant="outlined"
                  component="a"
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 3,
                    borderColor: 'rgba(4, 47, 46, 0.2)',
                    color: '#042f2e',
                    fontWeight: 700,
                    '&:hover': {
                      borderColor: '#042f2e',
                      color: '#042f2e',
                      background: 'rgba(4, 47, 46, 0.03)',
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
                background: '#ffffff',
                borderRadius: 4,
                border: '1px solid rgba(0, 0, 0, 0.06)',
                p: 3,
                maxHeight: { lg: '740px' },
                overflowY: 'auto',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, color: '#042f2e', mb: 3 }}>
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
                        background: isActive ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
                        border: isActive ? '1px solid rgba(79, 70, 229, 0.15)' : '1px solid transparent',
                        '&:hover': {
                          background: isActive ? 'rgba(79, 70, 229, 0.12)' : 'rgba(0, 0, 0, 0.03)',
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
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
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
                            color: isActive ? '#4f46e5' : '#042f2e',
                            fontWeight: 750,
                            mb: 0.5,
                          }}
                        >
                          {video.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#134e5e',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: 1.4,
                          }}
                        >
                          {video.description}
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
