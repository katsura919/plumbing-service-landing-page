import React from 'react';
import { CheckCircle2, Users, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section className="grid lg:grid-cols-2 gap-16 items-center py-16">
      {/* Images */}
      <div className="relative h-[600px] flex items-center">
        {/* Main Image */}
        <div className="w-[320px] h-[480px] rounded-[2rem] overflow-hidden shadow-xl z-10">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800" 
            alt="Plumber talking to client" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Secondary Image */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[380px] h-[520px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-50 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607472586893-edb57cbceb42?auto=format&fit=crop&q=80&w=800" 
            alt="Plumber fixing sink" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Experience Badge */}
        <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 bg-white rounded-full p-8 shadow-xl flex flex-col items-center justify-center w-48 h-48 border-8 border-slate-50 z-20">
          <div className="bg-[#0a192f] text-white p-4 rounded-full mb-3">
            <Users size={32} />
          </div>
          <div className="text-4xl font-black text-[#2bd0ff] mb-1">15<span className="text-2xl">+</span></div>
          <div className="text-sm font-semibold text-slate-600 text-center leading-tight">Years of<br/>Experience</div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:pl-12">
        <div className="text-[#2bd0ff] font-bold tracking-wider uppercase text-sm mb-4">About Us</div>
        <h2 className="text-4xl lg:text-5xl font-black text-[#0a192f] leading-[1.1] mb-6">
          Delivering Quality<br />Plumbing Solutions
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          We are dedicated to delivering high-quality plumbing services built on expertise, reliability, and attention to detail. From routine maintenance to complex repairs our skilled plumbers use modern tools to ensure lasting results.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#2bd0ff]" size={24} />
            <span className="font-semibold text-[#0a192f]">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#2bd0ff]" size={24} />
            <span className="font-semibold text-[#0a192f]">Same-day service</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#2bd0ff]" size={24} />
            <span className="font-semibold text-[#0a192f]">Upfront, Flat pricing</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#2bd0ff]" size={24} />
            <span className="font-semibold text-[#0a192f]">Plumbing Experts</span>
          </div>
        </div>

        <button className="flex items-center gap-3 bg-[#2bd0ff] hover:bg-[#1cbbe0] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
          Read More
          <div className="bg-white text-[#2bd0ff] rounded-full p-1.5">
            <ArrowUpRight size={18} />
          </div>
        </button>
      </div>
    </section>
  );
}
