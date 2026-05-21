import { useState, useEffect } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projectsData } from '../data';

export default function Projects() {
  // Simulator state for Battleship Terminal
  const [battleshipLines, setBattleshipLines] = useState<string[]>([]);
  
  const initialBattleshipLogs = [
    "Hit!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> F2",
    "Miss!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> F1",
    "Miss!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> E3",
    "Hit!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> D3",
    "Hit!",
    "You sunk a Cruiser. There are 4 ships left!"
  ];

  useEffect(() => {
    let index = 0;
    setBattleshipLines([initialBattleshipLogs[0]]);
    
    const interval = setInterval(() => {
      index = (index + 1) % initialBattleshipLogs.length;
      if (index === 0) {
        setBattleshipLines([initialBattleshipLogs[0]]);
      } else {
        setBattleshipLines(prev => [...prev, initialBattleshipLogs[index]].slice(-8));
      }
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-28 bg-[#0A0A0A] relative">
      {/* Visual Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-28 flex flex-col items-center select-none">
        <h2 className="text-[44px] md:text-[64px] font-black tracking-tighter leading-none uppercase text-white mb-4">
          Selected Works
        </h2>
        <div className="text-[10px] uppercase tracking-[0.45em] text-white/30 font-mono font-bold">
          • Craftsmanship Edition •
        </div>
        <div className="w-12 h-[1px] bg-white/20 mt-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-40">
        {projectsData.map((project, idx) => {
          const isLeft = project.alignment === 'left';

          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center overflow-hidden"
            >
              {/* Product Content Column - Art Card styling */}
              <div className={`lg:col-span-6 flex flex-col items-start relative group ${!isLeft ? 'lg:order-2' : ''}`}>
                
                {/* Visual indicator overlay index for each column (Artistic Flair 01, 02, 03 style) */}
                <div className="text-8xl md:text-9xl font-black text-white/[0.02] absolute -top-12 right-0 lg:left-0 select-none pointer-events-none tracking-tighter transition-colors group-hover:text-white/[0.04]">
                  0{idx + 1}
                </div>

                <div className="w-8 h-[1px] bg-white/40 mb-4 z-10" />
                
                <h3 className="font-display text-2xl md:text-3.5xl font-black text-white mb-3 tracking-tight uppercase z-10">
                  {project.title}
                </h3>

                {/* Badges row */}
                <div className="flex flex-wrap gap-2 mb-6 z-10">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 bg-[#141414] border border-white/5 rounded-none font-mono text-[10px] tracking-wider text-white/40 font-semibold uppercase"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-sm md:text-base text-white/60 font-light leading-relaxed mb-8 z-10">
                  {project.description}
                </p>

                {/* Accent CTA Link pair */}
                <div className="flex items-center space-x-6 z-10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2.5 px-6 py-3 bg-white hover:bg-[#EBEBEB] text-black font-display font-black text-xs uppercase tracking-[0.16em] rounded-none transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Github</span>
                  </a>

                  <a
                    href={project.projectUrl}
                    className="flex items-center text-white/40 hover:text-white font-display font-black text-xs uppercase tracking-[0.16em] transition-all duration-200 group cursor-pointer border-b border-transparent hover:border-white/40 pb-1"
                  >
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                  </a>
                </div>
              </div>

              {/* Showcase Visual column */}
              <div className={`lg:col-span-6 w-full ${!isLeft ? 'lg:order-1' : ''}`}>
                
                {/* Visual Representation for PROJECT 1: Battleship Terminal Emulator */}
                {project.id === 'battleship' && (
                  <div className="w-full bg-[#070707] rounded-none border border-white/10 overflow-hidden shadow-2xl relative">
                    {/* Mac Window header buttons */}
                    <div className="bg-[#0F0F0F] px-4 py-3 border-b border-white/5 flex items-center justify-between select-none">
                      <div className="flex space-x-1.5 items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 pl-2">bash - battleship_game</span>
                    </div>
                    {/* Terminal core - Sleek Amber/White cyber themes */}
                    <div className="p-6 font-mono text-xs md:text-[13px] text-white/80 min-h-[220px] max-h-[260px] flex flex-col justify-end space-y-2 select-text leading-relaxed">
                      {battleshipLines.map((line, lidx) => (
                        <div key={lidx} className="flex items-start">
                          <span className="text-white/20 mr-2.5 select-none">$</span>
                          <span>{line}</span>
                        </div>
                      ))}
                      <div className="flex items-center text-white">
                        <span className="text-white/20 mr-2.5 select-none">$</span>
                        <span className="cursor-blink">Enter strike coordinate</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Representation for PROJECT 2: Movie Titles API Film Split Layout */}
                {project.id === 'movie-api' && (
                  <div className="w-full aspect-[4/3] rounded-none border border-white/10 overflow-hidden shadow-2xl relative bg-[#070c14] group">
                    <div className="absolute inset-0 grid grid-cols-2 gap-[1px]">
                      {/* Left cover mockup */}
                      <div className="relative overflow-hidden h-full">
                        {/* Shadow Gradient Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />
                        <img
                          src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=1470&auto=format&fit=crop"
                          alt="Cinematic background 1"
                          className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 duration-700 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <span className="text-[9px] tracking-widest text-white/50 uppercase font-bold font-mono">Drama / Classic</span>
                          <h4 className="font-display font-black text-lg text-white mt-1 leading-tight uppercase">The Godfather</h4>
                          <span className="text-xs text-white/40 font-mono">★ 9.2 IMDb</span>
                        </div>
                      </div>

                      {/* Right cover mockup */}
                      <div className="relative overflow-hidden h-full">
                        {/* Shadow Gradient Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />
                        <img
                          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1374&auto=format&fit=crop"
                          alt="Cinematic background 2"
                          className="w-full h-full object-cover saturate-0 opacity-45 group-hover:scale-105 duration-700 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <span className="text-[9px] tracking-widest text-white/40 uppercase font-bold font-mono">Action / Thriller</span>
                          <h4 className="font-display font-black text-lg text-white mt-1 leading-tight uppercase">Top Gun</h4>
                          <span className="text-xs text-white/40 font-mono">★ 8.3 IMDb</span>
                        </div>
                      </div>
                    </div>

                    {/* API Badge Overlay in pure minimalist style */}
                    <div className="absolute top-4 right-4 bg-white text-black font-mono text-[9px] font-bold tracking-widest px-2.5 py-1.5 rounded-none uppercase shadow-2xl z-30">
                      LIVE MOVIE API
                    </div>
                  </div>
                )}

                {/* Visual Representation for PROJECT 3: Javascript Calculator Editor */}
                {project.id === 'calculator' && (
                  <div className="w-full bg-[#070707] rounded-none border border-white/10 overflow-hidden shadow-2xl relative">
                    {/* Header Tabs Block */}
                    <div className="bg-[#0F0F0F] border-b border-white/5 flex justify-between items-center px-4">
                      <div className="flex items-center space-x-1 pt-3">
                        {/* Active File Tab */}
                        <div className="px-4 py-1.5 bg-[#070707] border-t-2 border-white border-x border-white/5 rounded-t-none flex items-center space-x-2">
                          <span className="text-white font-bold font-mono text-xs">JS</span>
                          <span className="font-mono text-xs text-white/80">calculator.ts</span>
                        </div>
                        {/* Inactive Tab */}
                        <div className="px-4 py-1.5 hover:bg-white/5 rounded-t-none flex items-center space-x-2 cursor-pointer transition-colors">
                          <span className="text-white/30 font-bold font-mono text-xs">ts</span>
                          <span className="font-mono text-xs text-white/30">types.ts</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                      </div>
                    </div>
                    
                    {/* VSCode Syntax Code in monochromatic silver & white accents */}
                    <div className="p-6 font-mono text-xs md:text-sm text-white/65 overflow-x-auto select-text leading-relaxed">
                      <div className="space-y-1">
                        <div>
                          <span className="text-white">console</span>.<span className="text-white/60">log</span>(<span className="text-white/40">"The result is "</span> + (a * b));
                        </div>
                        <div>
                          {"}"} <span className="text-white/55">else if</span> (prompt === <span className="text-white/40">'/'</span>) {"{"}
                        </div>
                        <div className="pl-4">
                          <span className="text-white">console</span>.<span className="text-white/60">log</span>(<span className="text-white/40">"The result is "</span> + (a / b));
                        </div>
                        <div>{"}"}</div>
                        <div className="text-white/25 py-1.5">// operation processor script</div>
                        <div>
                          <span className="text-white/55 font-bold">if</span> (prompt === <span className="text-white/40">'+'</span> || prompt === <span className="text-white/40">'-'</span>) {"{"}
                        </div>
                        <div className="pl-4 text-white/45">
                          <span className="text-white/80">twoInput</span>();
                        </div>
                        <div className="pl-4 text-white/45">
                          <span className="text-white/80">calculateNum</span>(num1, num2);
                        </div>
                        <div>
                          {"}"} <span className="text-white/55">else</span> {"{"}
                        </div>
                        <div className="pl-4 text-white/20 select-none">...</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Representation for PROJECT 4: SaaS Live Browser Frame */}
                {project.id === 'saas-landing' && (
                  <div className="w-full bg-[#0E0E0E] rounded-none border border-white/10 overflow-hidden shadow-2xl relative flex flex-col text-white">
                    {/* Address Bar controls - Dark Artistic premium themes */}
                    <div className="bg-[#141414] px-4 py-2.5 flex items-center border-b border-white/5 select-none">
                      <div className="flex space-x-1.5 mr-4">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="flex-1 bg-[#0A0A0A] rounded-none px-3 py-1 text-[10px] text-white/45 font-mono border border-white/5 truncate flex items-center justify-between">
                        <span>https://minimalist-saas-demonstration.io</span>
                      </div>
                    </div>

                    {/* SaaS Preview Mockup */}
                    <div className="p-6 md:p-8 flex flex-col justify-between select-none bg-black min-h-[220px]">
                      {/* Navigation bar mockup */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
                        <div className="flex items-center space-x-1 relative">
                          <div className="w-2.5 h-2.5 bg-white" />
                          <span className="font-display font-black text-[10px] text-white uppercase tracking-widest pl-1">VOID</span>
                        </div>
                        <div className="flex items-center space-x-3 text-[8px] text-white/40 font-bold uppercase tracking-widest">
                          <span>Works</span>
                          <span>Specs</span>
                          <span className="px-2 py-1 bg-white hover:bg-white/95 text-black rounded-none text-[8px] font-black cursor-pointer">LAUNCH</span>
                        </div>
                      </div>

                      {/* Content representation */}
                      <div className="flex-1 flex flex-col items-start justify-center text-left py-3 max-w-[90%]">
                        <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase font-black block mb-1">/Core_Engine</span>
                        <h4 className="font-display text-lg md:text-xl font-black text-white leading-tight tracking-tight mb-2 uppercase">
                          Spatial workflow at the boundary of performance
                        </h4>
                        <p className="font-sans text-[9px] text-white/45 max-w-sm mb-4 leading-relaxed font-light">
                          Harnessing modular CSS and low-latency Node layouts to produce breathtaking interactive installation scripts.
                        </p>
                        <div className="flex items-center space-x-3">
                          <button className="px-3 py-1 bg-[#141414] border border-white/10 text-white font-bold text-[7px] uppercase tracking-wider">Play Demo</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
