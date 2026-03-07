import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import EmergencyCTA from './components/EmergencyCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 pb-24">
        <Hero />
        <About />
        <HowItWorks />
        <EmergencyCTA />
      </main>
      <Footer />
    </div>
  );
}
