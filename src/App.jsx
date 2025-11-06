import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-400/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
