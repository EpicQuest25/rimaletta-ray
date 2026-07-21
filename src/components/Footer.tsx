import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Language as LanguageIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import recentPhoto from '../assets/downloaded/rimeletta_ray_recent.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/rimalettaray', label: 'LinkedIn' },
    { icon: <FacebookIcon />, url: 'https://tinyurl.com/FacebookDrRimalettaRay', label: 'Facebook' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/drrimalettaray/', label: 'Instagram' },
    { icon: <TwitterIcon />, url: 'https://x.com/DrRimalettaRay', label: 'Twitter/X' },
    { icon: <YouTubeIcon />, url: 'http://tinyurl.com/nm5w22w', label: 'YouTube' },
  ];

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
        borderTop: '4px solid #d97808',
        pt: 9,
        pb: 5,
        color: '#cbd5e1',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Contact Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                color: '#ffffff',
                mb: 2.5,
                letterSpacing: '0.02em',
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
                <PhoneIcon sx={{ color: '#fbbf24', fontSize: '1.3rem' }} />
                <Link
                  href="tel:2032122673"
                  underline="hover"
                  sx={{ color: '#cbd5e1', fontWeight: 600, '&:hover': { color: '#fbbf24' }, transition: 'color 0.2s' }}
                >
                  (203) 212-2673
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
                <EmailIcon sx={{ color: '#fbbf24', fontSize: '1.3rem' }} />
                <Link
                  href="mailto:dr.rimaletta@gmail.com"
                  underline="hover"
                  sx={{ color: '#cbd5e1', fontWeight: 600, '&:hover': { color: '#fbbf24' }, transition: 'color 0.2s' }}
                >
                  dr.rimaletta@gmail.com
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Core Websites */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                color: '#ffffff',
                mb: 2.5,
                letterSpacing: '0.02em',
              }}
            >
              Official Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
                <LanguageIcon sx={{ color: '#fbbf24', fontSize: '1.3rem' }} />
                <Link
                  href="http://www.language-fitness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: '#cbd5e1', fontWeight: 600, '&:hover': { color: '#fbbf24' }, transition: 'color 0.2s' }}
                >
                  Language Fitness
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
                <LanguageIcon sx={{ color: '#fbbf24', fontSize: '1.3rem' }} />
                <Link
                  href="http://www.holisticself-resurrection.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: '#cbd5e1', fontWeight: 600, '&:hover': { color: '#fbbf24' }, transition: 'color 0.2s' }}
                >
                  Holistic Self-Resurrection
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Small Version of Most Recent Picture on the right */}
          <Grid item xs={12} sm={6} md={2} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'flex-start', mt: { xs: 2, md: 0 } }}>
            <Box
              sx={{
                width: '100px',
                height: '140px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1.5px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                background: 'rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={recentPhoto}
                alt="Dr. Rimaletta Ray Recent Portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          {/* Brand/Affiliation Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 900,
                mb: 2.5,
                fontSize: '1.45rem',
                letterSpacing: '0.05em',
                background: 'linear-gradient(45deg, #fbbf24 30%, #f59e0b 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DR. RIMALETTA RAY
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, color: '#f1f5f9', fontWeight: 650 }}>
              University of Connecticut / UCONN <br />
              Norwalk Community College <br />
              Professor of Psycholinguistics
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, color: '#94a3b8', fontWeight: 500 }}>
              Synthesizing science, linguistics, and quantum consciousness to build a coherent path for personal sovereignty in the digital era.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Social Links & Copyright */}
        <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 550 }}>
              &copy; {currentYear} Ph.D. Rimaletta Ray. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 1.5 }}>
            {socials.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: '#ffffff',
                  border: '1.5px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: '#1e1b4b',
                    borderColor: '#fbbf24',
                    background: '#fbbf24',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.25)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
