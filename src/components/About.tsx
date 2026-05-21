import { Monitor, Smartphone, Database } from 'lucide-react';
import { statsData } from '../data';

export default function About() {
  // Map standard string names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-white/80" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-white/80" />;
      case 'Database':
        return <Database className="w-5 h-5 text-white/80" />;
      default:
        return <Monitor className="w-5 h-5 text-white/80" />;
    }
  };

  const services = [
    { title: 'Website Development', icon: 'Monitor' },
    { title: 'App Development', icon: 'Smartphone' },
    { title: 'Website Hosting', icon: 'Database' }
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-brand-dark">
      {/* Background radial art */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/[0.01] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Services & Vertical connected line */}
          <div className="lg:col-span-5 flex items-start">
            {/* Timeline line indicator - refined monochromatic look */}
            <div className="relative flex flex-col items-center mr-8 pt-6 select-none">
              {/* Dot 1 */}
              <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-brand-dark z-10 shadow shadow-white/30" />
              {/* Line 1 -> 2 */}
              <div className="w-[1px] h-[106px] bg-white/15 z-0" />
              
              {/* Dot 2 */}
              <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-brand-dark z-10 shadow shadow-white/30" />
              {/* Line 2 -> 3 */}
              <div className="w-[1px] h-[106px] bg-white/15 z-0" />
              
              {/* Dot 3 */}
              <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-brand-dark z-10 shadow shadow-white/30" />
            </div>

            {/* Services descriptions */}
            <div className="flex-1 flex flex-col space-y-[4.6rem]">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center space-x-5 group select-none">
                  <div className="p-3.5 bg-[#141414] border border-white/5 rounded-none group-hover:border-white/20 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h4 className="font-display text-[15px] uppercase tracking-[0.16em] font-black text-white/60 group-hover:text-white transition-colors duration-350">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Story & Statistics Grid */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            
            <h2 className="text-[44px] sm:text-[54px] font-black tracking-tighter leading-none uppercase text-white mb-8 select-none">
              About me
            </h2>
            
            <div className="w-8 h-[1px] bg-white/40 mb-6" />

            <p className="font-sans text-base md:text-[17px] text-white/65 font-light leading-relaxed mb-12">
              I started my software journey from photography. Through that, I learned to
              love the process of creating from scratch. Since then, this has led me to
              software development as it fulfills my love for learning and building things.
            </p>

            {/* Stats display of Artistic Flair */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-4">
              {statsData.map((stat, idx) => {
                const parts = stat.value.split(' ');
                const val = parts[0];
                const symbol = parts[1] || '';

                return (
                  <div 
                    key={idx} 
                    className="group relative bg-[#141414] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20"
                  >
                    {/* Corner index numbering decoration */}
                    <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest text-right select-none block absolute top-3 right-4">
                      /Metric_0{idx+1}
                    </div>

                    <div className="mt-6">
                      <span className="font-display text-3xl md:text-4xl font-black text-white tracking-tight leading-none block">
                        {val}
                        <span className="text-white/40 ml-1.5 font-bold font-sans text-2xl">{symbol}</span>
                      </span>
                      <span className="font-sans text-[10px] text-white/40 font-bold uppercase tracking-widest mt-2 block">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
