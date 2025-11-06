import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-violet-400/30 selection:text-violet-900">
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
