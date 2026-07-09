import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: '#home' },
  { label: 'Intro', id: '#intro' },
  { label: 'Human Fractal', id: '#fractal' },
  { label: 'The Books', id: '#books' },
  { label: 'Videos', id: '#videos' },
  { label: 'Philosophy', id: '#philosophy' },
  { label: 'The Author', id: '#author' },
  { label: 'Contact', id: '#footer' },
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
        background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
        borderBottom: '4px solid #d97808',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.15)',
        color: '#ffffff',
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
              fontWeight: 900,
              fontSize: '1.45rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              background: 'linear-gradient(45deg, #fbbf24 30%, #f59e0b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            DR. RIMALETTA RAY
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  fontWeight: 750,
                  px: 2,
                  py: 0.8,
                  borderRadius: '20px',
                  border: '1px solid transparent',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: '#1e1b4b',
                    background: '#fbbf24',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.25)',
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
            sx={{ display: { md: 'none' }, color: '#ffffff' }}
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
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            borderLeft: '4px solid #d97808',
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
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
                  background: 'rgba(251, 191, 36, 0.15)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 750,
                    color: '#ffffff',
                    textAlign: 'center',
                    py: 1,
                    '&:hover': {
                      color: '#fbbf24',
                    },
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
