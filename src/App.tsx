/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsBar from './components/SkillsBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-gray-200 bg-brand-dark selection:bg-brand-coral/30 selection:text-white">
      {/* Dynamic Header */}
      <Header />

      {/* Main Core Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onGotProjectClick={scrollToContact}
          onViewResumeClick={() => setIsResumeOpen(true)}
        />

        {/* Brand Skills Bar slider */}
        <SkillsBar />

        {/* About Narrative Biography & Stats columns */}
        <About />

        {/* Projects detailed section */}
        <Projects />

        {/* Contact direct underlines Form */}
        <Contact />
      </main>

      {/* Interactive Footer */}
      <Footer />

      {/* Resume Overlay Detail dialog */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
