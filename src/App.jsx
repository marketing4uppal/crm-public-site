// src/App.jsx
import React from 'react';
import { CssBaseline } from '@mui/material';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Topbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}

export default App;