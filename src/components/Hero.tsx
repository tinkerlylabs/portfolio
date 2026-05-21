import { motion } from 'motion/react';
import avatarImg from '../assets/images/regenerated_image_1779340249233.jpg';

interface HeroProps {
  onGotProjectClick: () => void;
  onViewResumeClick: () => void;
}

export default function Hero({ onGotProjectClick, onViewResumeClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-brand-dark">
      {/* Dynamic Background subtle gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 py-12">
        {/* Left Column: Bold Artistic Typography details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status badge at top of portfolio content */}
          <div className="flex flex-col items-start gap-2 mb-8 select-none">
            <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-mono font-bold">Current Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-white/80">Available for Freelance & Contract</span>
            </div>
          </div>

          <div className="relative mb-8">
            <h1 className="text-[64px] sm:text-[84px] md:text-[105px] font-black tracking-tighter leading-[0.85] uppercase m-0 select-none">
              Jensen<br/>
              <span className="outline-text">Omega</span>
            </h1>
          </div>

          <div className="mb-10 flex flex-col gap-6 items-start max-w-lg">
            <div className="w-12 h-[1px] bg-white/40" />
            <p className="text-lg md:text-xl leading-relaxed text-white/70 italic" style={{ fontFamily: 'Georgia, serif' }}>
              Architecting digital performance at the intersection of minimalist aesthetic layout and lightning-fast software utility.
            </p>
          </div>

          {/* Artistic CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={onGotProjectClick}
              className="px-8 py-3.5 bg-white text-black hover:bg-[#F2F2F2] font-display font-black text-xs uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer hover:scale-[1.02] shadow-xl"
            >
              Got a project?
            </button>
            <button
              onClick={onViewResumeClick}
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-white font-display font-black text-xs uppercase tracking-[0.18em] border border-white/20 hover:border-white/50 transition-all duration-200 cursor-pointer"
            >
              My resume
            </button>
          </div>
        </div>

        {/* Right Column: Avatar Graphic Illustration with subtle rotate accent */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end select-none relative h-full">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] flex items-center justify-center">
            
            {/* Geometric decoration - Upper Left Bracket "<" */}
            <div 
              className="absolute -top-6 -left-4 text-white/25 text-[5rem] font-light select-none transform translate-x-1 translate-y-2 lg:-translate-x-4 outline-text"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              &lt;
            </div>

            {/* Geometric decoration - Lower Right Bracket ">" */}
            <div 
              className="absolute -bottom-10 -right-4 text-white/20 text-[5rem] font-light select-none transform -translate-x-1 -translate-y-2 lg:translate-x-4 outline-text"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              &gt;
            </div>

            {/* Premium concentric circles and dashes */}
            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-dashed border-white/10 pointer-events-none" />
            <div className="absolute inset-10 rounded-full bg-[#141414] border border-white/10 overflow-hidden shadow-2xl">
              {/* Profile Image with high contrast/saturate treatment */}
              <img
                src={avatarImg}
                alt="Jensen Omega Portrait"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700 scale-100 filter brightness-[0.9] contrast-[1.15]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Outer accent arc vector lines */}
            <svg
              className="absolute inset-[30px] w-[calc(100%-60px)] h-[calc(100%-60px)] pointer-events-none -rotate-12"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.2"
                strokeDasharray="50, 200"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
