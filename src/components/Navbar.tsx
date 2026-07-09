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
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: 'none',
        color: '#0f172a',
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
              textDecoration: 'none',
              background: 'linear-gradient(45deg, #4f46e5 30%, #0891b2 90%)',
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
                  color: 'rgba(15, 23, 42, 0.75)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: '#4f46e5',
                    background: 'rgba(79, 70, 229, 0.05)',
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
            sx={{ display: { md: 'none' }, color: '#0f172a' }}
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
            background: '#fafaf9',
            borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#0f172a' }}>
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
                  background: 'rgba(79, 70, 229, 0.05)',
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
                    color: '#0f172a',
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
