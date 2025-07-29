// src/App.jsx (Simplified)
import React from 'react';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Topbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}

export default App;