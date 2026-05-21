import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API storage post
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success banner after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Contact label header design detail */}
        <div className="flex items-center space-x-3.5 mb-14 select-none">
          <span className="w-9 h-[1px] bg-white/40" />
          <span className="font-mono text-xs tracking-[0.25em] text-white/40 uppercase font-black">Inquiry</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Big Heading text with design contact block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left select-none">
            <h2 className="text-[44px] sm:text-[54px] font-black tracking-tighter leading-[0.95] uppercase text-white mb-8">
              Got a concept?<br />Let's craft it.
            </h2>
            
            <div className="flex items-center space-x-4 mt-6 text-white/50 group cursor-pointer hover:text-white transition-colors">
              <div className="p-3.5 bg-[#141414] border border-white/5 rounded-none group-hover:border-white/20 transition-colors">
                <Mail className="w-4 h-4 text-white/80" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/30 block">Direct Line</span>
                <p className="font-sans text-sm md:text-base font-semibold group-hover:underline">jensen.omega@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Monochrome Underline Form */}
          <div className="lg:col-span-6 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
              
              {/* Name field */}
              <div className="relative group border-b border-white/10 hover:border-white/30 focus-within:border-white transition-colors duration-350">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-0 outline-none pb-4 font-sans text-base text-white focus:outline-none transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="form-name"
                  className="absolute left-0 bottom-4 font-display text-sm text-white/30 cursor-text pointer-events-none transition-all duration-300 peer-placeholder-shown:bottom-4 peer-placeholder-shown:text-white/35 peer-focus:-top-6 peer-focus:bottom-auto peer-focus:text-white peer-focus:text-xs select-none [input:not(:placeholder-shown)~&]:-top-6 [input:not(:placeholder-shown)~&]:bottom-auto [input:not(:placeholder-shown)~&]:text-white [input:not(:placeholder-shown)~&]:text-xs"
                >
                  Your Name
                </label>
              </div>

              {/* Email field */}
              <div className="relative group border-b border-white/10 hover:border-white/30 focus-within:border-white transition-colors duration-350">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-0 outline-none pb-4 font-sans text-base text-white focus:outline-none transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="form-email"
                  className="absolute left-0 bottom-4 font-display text-sm text-white/30 cursor-text pointer-events-none transition-all duration-300 peer-placeholder-shown:bottom-4 peer-placeholder-shown:text-white/35 peer-focus:-top-6 peer-focus:bottom-auto peer-focus:text-white peer-focus:text-xs select-none [input:not(:placeholder-shown)~&]:-top-6 [input:not(:placeholder-shown)~&]:bottom-auto [input:not(:placeholder-shown)~&]:text-white [input:not(:placeholder-shown)~&]:text-xs"
                >
                  Email Address
                </label>
              </div>

              {/* Message field */}
              <div className="relative group border-b border-white/10 hover:border-white/30 focus-within:border-white transition-colors duration-350">
                <textarea
                  name="message"
                  id="form-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-0 outline-none pb-4 font-sans text-base text-white focus:outline-none resize-none transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="form-message"
                  className="absolute left-0 bottom-8 font-display text-sm text-white/30 cursor-text pointer-events-none transition-all duration-300 peer-placeholder-shown:bottom-8 peer-placeholder-shown:text-white/35 peer-focus:-top-6 peer-focus:bottom-auto peer-focus:text-white peer-focus:text-xs select-none [textarea:not(:placeholder-shown)~&]:-top-6 [textarea:not(:placeholder-shown)~&]:bottom-auto [textarea:not(:placeholder-shown)~&]:text-white [textarea:not(:placeholder-shown)~&]:text-xs"
                >
                  Project Details
                </label>
              </div>

              {/* Success state info */}
              {isSubmitted && (
                <div className="p-4 bg-white/5 border border-white/15 text-white rounded-none text-xs tracking-wide font-mono uppercase">
                  ✓ Dispatch successful. I will respond to your idea within 24 hours.
                </div>
              )}

              {/* Submit trigger - Blocky Monochrome layout style */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-white text-black hover:bg-[#EBEBEB] disabled:bg-white/10 disabled:text-white/30 font-display font-black text-xs uppercase tracking-[0.16em] rounded-none shadow-xl hover:scale-[1.02] cursor-pointer flex items-center justify-center space-x-3 transition-all duration-350"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-3.5 h-3.5 animate-spin text-black" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
