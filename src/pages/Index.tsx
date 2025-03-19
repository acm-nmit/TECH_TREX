
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rounds from '@/components/Rounds';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "TECH-TREX | NMIT ACM Club";
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Rounds />
      <Footer />
    </div>
  );
};

export default Index;
