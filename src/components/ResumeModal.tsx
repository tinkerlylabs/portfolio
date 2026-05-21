import { X, Mail, Github, Linkedin, Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#141414] border border-white/10 rounded-none shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-fade-in text-white">
        
        {/* Header toolbar */}
        <div className="bg-[#141414] px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <span className="font-mono font-bold text-xs text-white/40 select-none uppercase tracking-widest">Interactive Resume</span>
          <button
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-none transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 text-white/70 space-y-10 select-text bg-[#0A0A0A]">
          
          {/* Main header block */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-6">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight uppercase">Jensen Omega</h1>
              <p className="font-mono text-white/45 font-bold text-xs tracking-[0.2em] uppercase mt-2">Software Developer</p>
              <div className="flex flex-wrap gap-4 text-[11px] text-white/35 mt-4 font-bold uppercase tracking-wider font-mono">
                <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1.5 text-white/50" /> Singapore</span>
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5 text-white/50" /> CONTRACT & FREELANCE</span>
              </div>
            </div>

            {/* Social link pins */}
            <div className="flex flex-col space-y-2 text-xs text-white/40 font-semibold font-mono">
              <span className="flex items-center hover:text-white transition-colors"><Mail className="w-3.5 h-3.5 mr-2" /> jensen.omega@gmail.com</span>
              <span className="flex items-center hover:text-white transition-colors"><Github className="w-3.5 h-3.5 mr-2" /> github.com/jensenomega</span>
              <span className="flex items-center hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5 mr-2" /> linkedin.com/in/jensenomega</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-[0.22em] text-white uppercase mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2 text-white/60" /> Professional Summary
            </h3>
            <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed font-light">
              Highly motivated and self-directed Software Developer with expertise in designing, building, and delivering responsive full-stack web and mobile applications. Experienced in utilizing modern JavaScript frameworks, TypeScript syntax setups, scalable Express routers, and responsive Tailwind UI grids to craft elegant visual experiences. Committed to rapid learning and modular crafting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left side: Exp */}
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="font-mono text-xs font-bold tracking-[0.22em] text-white uppercase mb-6 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-white/60" /> Technical Experience
                </h3>

                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className="border-l border-white/10 pl-4 relative">
                    <div className="w-1.5 h-1.5 bg-white rounded-none absolute -left-[3.5px] top-2" />
                    <span className="text-[10px] font-bold text-white/30 font-mono">2023 - PRESENT</span>
                    <h4 className="font-display font-black text-base text-white mt-1 uppercase">Lead Full Stack Developer</h4>
                    <span className="text-[11px] font-mono text-white/45 font-bold uppercase tracking-wide">Tinker Labs • Remote 계약</span>
                    <p className="font-sans text-xs text-white/50 mt-2.5 leading-relaxed">
                      Designed corporate landing pages and integrated real-time microservices using Google Cloud platform structures. Developed local client-side offline architectures to ensure absolute performance and low latencies.
                    </p>
                  </div>

                  {/* Job 2 */}
                  <div className="border-l border-white/10 pl-4 relative">
                    <div className="w-1.5 h-1.5 bg-white rounded-none absolute -left-[3.5px] top-2" />
                    <span className="text-[10px] font-bold text-white/30 font-mono">2021 - 2023</span>
                    <h4 className="font-display font-black text-base text-white mt-1 uppercase">Freelance Web Developer</h4>
                    <span className="text-[11px] font-mono text-white/45 font-bold uppercase tracking-wide">Self-Employed • Singapore</span>
                    <p className="font-sans text-xs text-white/50 mt-2.5 leading-relaxed">
                      Engineered high-quality responsive websites for photographic studios, local SaaS enterprises, and digital agencies using HTML5, CSS3, modern React interfaces, and customized CSS layout elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Edu & Skills */}
            <div className="md:col-span-4 space-y-8">
              <div>
                <h3 className="font-mono text-xs font-bold tracking-[0.22em] text-white uppercase mb-4 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-white/60" /> Education
                </h3>
                <div className="border-l border-white/10 pl-4 relative space-y-4">
                  <div className="w-1.5 h-1.5 bg-white rounded-none absolute -left-[3.5px] top-2" />
                  <div>
                    <span className="text-[10px] font-bold text-white/30 font-mono">2017 - 2021</span>
                    <h4 className="font-display font-black text-xs text-white mt-0.5 uppercase">B.Sc. in Computer Science</h4>
                    <p className="font-sans text-[11px] text-white/50">National University of Singapore</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs font-bold tracking-[0.22em] text-white uppercase mb-4">Core Strengths</h3>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'Git', 'CSS Grid', 'REST APIs', 'NoSQL', 'Figma'].map(item => (
                    <span key={item} className="px-2 py-1 bg-[#141414] border border-white/5 rounded-none font-mono text-[9px] font-semibold text-white/45 uppercase tracking-wider">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="bg-[#141414] px-6 py-4 border-t border-white/5 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-transparent text-white font-mono text-xs uppercase tracking-wider border border-white/10 rounded-none hover:bg-white/5 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-none shadow hover:bg-[#EBEBEB] transition-colors cursor-pointer"
          >
            Print Resume
          </button>
        </div>

      </div>
    </div>
  );
}
