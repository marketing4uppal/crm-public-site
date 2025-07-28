// src/App.jsx (Updated)
import React from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import CallToActionSection from './components/CallToActionSection'; // <<< NEW
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffffff', // Making the secondary button white
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CallToActionSection /> {/* <<< NEW */}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;