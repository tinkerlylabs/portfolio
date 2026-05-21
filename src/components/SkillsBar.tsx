import { skillsList } from '../data';

export default function SkillsBar() {
  return (
    <div className="w-full bg-[#0F0F0F] border-y border-white/5 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-around gap-y-4 gap-x-8 md:gap-x-12">
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs tracking-[0.3em] font-normal text-white/35 hover:text-white transition-colors duration-300 cursor-default uppercase"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
