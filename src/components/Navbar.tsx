import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const navItems = [
  { label: 'Home', id: '#home' },
  { label: 'Intro', id: '#intro' },
  { label: 'Human Fractal', id: '#fractal' },
  { label: 'The Books', id: '#books' },
  { label: 'Videos', id: '#videos' },
  { label: 'Philosophy', id: '#philosophy' },
  { label: 'The Author', id: '#author' },
  { label: 'Contact', id: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id: string) => {
    setMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(7, 7, 21, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#home');
            }}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              fontSize: '1.4rem',
              letterSpacing: '0.05em',
              color: '#ffffff',
              textDecoration: 'none',
              background: 'linear-gradient(45deg, #818cf8 30%, #22d3ee 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DR. RIMALETTA RAY
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu trigger */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0a0a1a',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              disablePadding
              onClick={() => handleScroll(item.id)}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.03)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    textAlign: 'center',
                    py: 1,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
