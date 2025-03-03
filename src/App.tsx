import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhatWeDo from './components/WhatWeDo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CustomSolution from './components/CustomSolution';
import { AnimatePresence } from './components/AnimatePresence';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileCallCTA from './components/MobileCallCTA';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
    });

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="font-secondary text-gray-800">
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <WhatWeDo />
          <Services />
          <Pricing />
          <CustomSolution />
        </main>
        <Footer />
        <MobileCallCTA />
      </div>
    </AnimatePresence>
  );
}

export default App;