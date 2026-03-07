import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 bg-[#2bd0ff] rounded-full text-white font-bold text-xl">
            <span className="absolute -left-1 text-[#0a192f] text-3xl">P</span>
            <span className="z-10">P</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#0a192f]">VALVORO</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="px-4 py-2 bg-[#2bd0ff] text-white rounded-full">Home</a>
          <a href="#" className="hover:text-[#2bd0ff] transition-colors">About</a>
          <a href="#" className="hover:text-[#2bd0ff] transition-colors">Services</a>
          <a href="#" className="hover:text-[#2bd0ff] transition-colors flex items-center gap-1">Pages <span className="text-xs">▼</span></a>
          <a href="#" className="hover:text-[#2bd0ff] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#2bd0ff] transition-colors">Contact</a>
        </nav>

        {/* CTA & Phone */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#0a192f] font-bold">
            <div className="p-2 rounded-full border border-slate-200 text-[#2bd0ff]">
              <Phone size={18} />
            </div>
            <span>+5689 2589 6325</span>
          </div>
          <button className="flex items-center gap-2 bg-[#2bd0ff] hover:bg-[#1cbbe0] text-white px-6 py-3 rounded-full font-medium transition-colors">
            Schedule Online
            <div className="bg-white text-[#2bd0ff] rounded-full p-1.5">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
