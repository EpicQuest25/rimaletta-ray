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
        background: '#04040e',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        pt: 8,
        pb: 4,
        color: '#94a3b8',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand/Affiliation Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                color: '#ffffff',
                mb: 2.5,
                background: 'linear-gradient(45deg, #818cf8 30%, #22d3ee 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DR. RIMALETTA RAY
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7 }}>
              University of Connecticut / UCONN <br />
              Norwalk Community College <br />
              Professor of Psycholinguistics
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#64748b' }}>
              Synthesizing science, linguistics, and quantum consciousness to build a coherent path for personal sovereignty in the digital era.
            </Typography>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                color: '#ffffff',
                mb: 2.5,
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#22d3ee', fontSize: '1.2rem' }} />
                <Link
                  href="tel:2032122673"
                  underline="hover"
                  sx={{ color: '#cbd5e1', '&:hover': { color: '#22d3ee' } }}
                >
                  (203) 212-2673
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ color: '#22d3ee', fontSize: '1.2rem' }} />
                <Link
                  href="mailto:dr.rimaletta@gmail.com"
                  underline="hover"
                  sx={{ color: '#cbd5e1', '&:hover': { color: '#22d3ee' } }}
                >
                  dr.rimaletta@gmail.com
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Core Websites */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                color: '#ffffff',
                mb: 2.5,
              }}
            >
              Official Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LanguageIcon sx={{ color: '#818cf8', fontSize: '1.2rem' }} />
                <Link
                  href="http://www.language-fitness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: '#cbd5e1', '&:hover': { color: '#818cf8' } }}
                >
                  Language Fitness
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LanguageIcon sx={{ color: '#818cf8', fontSize: '1.2rem' }} />
                <Link
                  href="http://www.holisticself-resurrection.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: '#cbd5e1', '&:hover': { color: '#818cf8' } }}
                >
                  Holistic Self-Resurrection
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.06)' }} />

        {/* Social Links & Copyright */}
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              &copy; {currentYear} Ph.D. Rimaletta Ray. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 1 }}>
            {socials.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: '#94a3b8',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-2px)',
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
