import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Core name identifier with initial square logo */}
        <div className="flex items-center space-x-3 mb-4 select-none">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display font-black text-[11px] tracking-tighter">
            JO
          </div>
          <h2 className="font-display text-xs uppercase tracking-[0.25em] font-black text-white">
            Jensen Omega
          </h2>
        </div>

        {/* Humility & copyright message */}
        <p className="font-sans text-[10px] uppercase tracking-widest text-white/30 mb-8 max-w-sm">
          © {new Date().getFullYear()} Jensen Omega. Designed with pure local craft.
        </p>

        {/* Group circles for socials - sleek black squares instead of full circles */}
        <div className="flex items-center space-x-4">
          <a
            href="mailto:jensen.omega@gmail.com"
            aria-label="Email direct"
            className="w-11 h-11 bg-[#141414] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/jensenomega"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github profile link"
            className="w-11 h-11 bg-[#141414] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/jensenomega"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin profile link"
            className="w-11 h-11 bg-[#141414] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Top return arrow - themed square */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-16 md:right-12 p-3 bg-[#141414] border border-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-250 cursor-pointer active:scale-95 group"
          title="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 duration-200" />
        </button>

      </div>
    </footer>
  );
}
