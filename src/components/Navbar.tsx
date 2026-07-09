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
        background: 'rgba(240, 249, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '5px solid #d97808',
        borderBottom: '1px solid rgba(217, 120, 8, 0.12)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        color: '#1e1b4b',
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
              color: '#1e1b4b',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#d97808',
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
                  color: '#1e1b4b',
                  fontSize: '0.92rem',
                  fontWeight: 750,
                  px: 2,
                  py: 0.8,
                  borderRadius: '20px',
                  border: '1px solid transparent',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: '#d97808',
                    background: '#ffffff',
                    borderColor: 'rgba(217, 120, 8, 0.3)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(217, 120, 8, 0.08)',
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
            sx={{ display: { md: 'none' }, color: '#1e1b4b' }}
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
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#172554' }}>
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
                  background: 'rgba(217, 120, 8, 0.08)',
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
                    color: '#172554',
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
