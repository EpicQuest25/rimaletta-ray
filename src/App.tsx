import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import QuantumFractal from './components/QuantumFractal';
import BooksSection from './components/BooksSection';
import VideosSection from './components/VideosSection';
import GrainsPhilosophy from './components/GrainsPhilosophy';
import AuthorSection from './components/AuthorSection';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main content body */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Home/Hero Section */}
        <Hero />

        {/* Quantum Shift Intro Section */}
        <Intro />

        {/* Digitized Self-Acculturation & Nvidia Parallel */}
        <QuantumFractal />

        {/* Literary Ecosystem Books Section */}
        <BooksSection />

        {/* Featured Video Gallery Section */}
        <VideosSection />

        {/* Grains of Philosophy & AI Synergy Section */}
        <GrainsPhilosophy />

        {/* Meet the Author and Audio Section */}
        <AuthorSection />
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
}

export default App;
