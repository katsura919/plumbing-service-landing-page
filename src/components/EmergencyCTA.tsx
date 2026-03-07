import React from 'react';
import { Phone } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="bg-[#2563eb] rounded-[3rem] overflow-hidden text-white relative flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-12">
      {/* Image Container */}
      <div className="w-full lg:w-[45%] relative shrink-0">
        <div className="rounded-[2rem] overflow-hidden h-[400px] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800" 
            alt="Plumber fixing sink" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Logo Badge Overlay */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-2xl z-10 hidden lg:flex items-center justify-center w-32 h-32">
          <div className="relative flex items-center justify-center w-16 h-16 bg-[#2bd0ff] rounded-full text-white font-bold text-3xl">
            <span className="absolute -left-2 text-[#0a192f] text-4xl">P</span>
            <span className="z-10">P</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-[55%] lg:pl-16 relative z-10">
        <div className="text-blue-200 font-bold tracking-wider text-sm mb-4">Get in Touch</div>
        <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-8">
          Need Help Right Now?<br />Call Our Emergency Line.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="flex items-center gap-3 bg-[#2bd0ff] hover:bg-[#1cbbe0] text-white px-8 py-4 rounded-full font-semibold text-xl transition-colors shrink-0">
            <div className="bg-white text-[#2bd0ff] rounded-full p-1.5">
              <Phone size={20} />
            </div>
            +5689 2589 6325
          </button>
          <p className="text-blue-100 text-sm leading-relaxed max-w-[250px]">
            Typical arrival in : 30-60 minutes, depending on demand and location.
          </p>
        </div>
      </div>
    </section>
  );
}
