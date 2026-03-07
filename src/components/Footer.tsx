import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
      <div className="bg-[#0a192f] text-white pt-20 pb-10 px-12 rounded-[3rem] relative overflow-hidden">
        {/* Decorative Pipe Graphic */}
        <div className="absolute right-0 bottom-0 w-64 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M150 400V200C150 144.772 105.228 100 50 100H0" stroke="#2bd0ff" strokeWidth="40" strokeLinecap="round"/>
            <path d="M150 400V200C150 144.772 105.228 100 50 100H0" stroke="#2563eb" strokeWidth="20" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 bg-[#2bd0ff] rounded-full text-white font-bold text-lg">
                <span className="absolute -left-1 text-[#0a192f] text-2xl">P</span>
                <span className="z-10">P</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight">VALVORO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are a trusted plumbing service provider committed to delivering reliable, high-quality solutions for homes and businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#2bd0ff] transition-colors flex items-center gap-2"><span className="text-[#2bd0ff]">→</span> About</a></li>
              <li><a href="#" className="hover:text-[#2bd0ff] transition-colors flex items-center gap-2"><span className="text-[#2bd0ff]">→</span> Services</a></li>
              <li><a href="#" className="hover:text-[#2bd0ff] transition-colors flex items-center gap-2"><span className="text-[#2bd0ff]">→</span> Pricing</a></li>
              <li><a href="#" className="hover:text-[#2bd0ff] transition-colors flex items-center gap-2"><span className="text-[#2bd0ff]">→</span> FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#2bd0ff] shrink-0 mt-0.5" />
                <span>+5689 2589 6325</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#2bd0ff] shrink-0 mt-0.5" />
                <span>info@valvoro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#2bd0ff] shrink-0 mt-0.5" />
                <span>551 Swanston Street, Melbourne<br/>Victoria 3053 Australia</span>
              </li>
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="font-bold text-lg mb-6">Open Hours</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#2bd0ff] shrink-0 mt-0.5" />
                <span>Open 24/7</span>
              </li>
              <li className="leading-relaxed">
                Emergency service available nights, weekends, and holidays.
              </li>
              <li className="pt-4 flex items-center gap-2">
                <span>License: <strong>LIC# TX-PLM-48291</strong></span>
                <a href="#" className="text-[#2bd0ff] hover:underline text-xs">Verify</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-slate-500 relative z-10">
          © 2026 Valvoro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
