import React from 'react';
import { ArrowUpRight, ArrowDown, Star, ShieldAlert } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#2563eb] rounded-[3rem] overflow-hidden text-white mt-4">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full pointer-events-none"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 p-12 lg:p-20 relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-xl">
          {/* Google Review Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">4.9</span>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <span className="text-sm text-blue-100">4.9/5 Reviews</span>
            </div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight">
            EXPERT<br />PLUMBING.
          </h1>

          <div className="flex items-start gap-4 mb-10">
            <div className="w-8 h-[2px] bg-white mt-3 shrink-0"></div>
            <p className="text-xl text-blue-50 leading-relaxed">
              Fast, licensed, and local. From leaks to clogs to heater failures—our experts fix it today.
            </p>
          </div>

          <div className="flex items-center gap-6 mb-16">
            <button className="flex items-center gap-3 bg-[#2bd0ff] hover:bg-[#1cbbe0] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              Book Appointment
              <div className="bg-white text-[#2bd0ff] rounded-full p-1.5">
                <ArrowUpRight size={18} />
              </div>
            </button>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
              <div className="w-5 h-5 bg-[#2bd0ff] rounded-full"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12">
            <div>
              <div className="text-4xl font-bold mb-1">15K+</div>
              <div className="text-sm text-blue-200">Satisfied Clients</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-4xl font-bold mb-1">250+</div>
              <div className="text-sm text-blue-200">Projects Completed</div>
            </div>
            
            <div className="ml-auto flex flex-col items-center gap-2">
              <span className="text-xs text-blue-200">Scroll Down</span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                <ArrowDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Images */}
        <div className="relative hidden lg:block">
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-[#2bd0ff] rounded-full z-0"></div>
          
          {/* Main Image */}
          <div className="absolute right-0 bottom-0 w-[450px] h-[600px] z-20">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Plumber" 
              className="w-full h-full object-cover object-top drop-shadow-2xl"
              style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)' }}
            />
          </div>

          {/* Circular Inset Image (Behind main) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-white z-10">
            <img 
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800" 
              alt="Plumbing Pipes" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left Inset Image (Oval) */}
          <div className="absolute bottom-0 -left-12 w-[220px] h-[320px] rounded-full overflow-hidden border-4 border-white z-30">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
              alt="Plumber working" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Emergency Badge */}
          <div className="absolute top-20 right-0 bg-[#0a192f] p-6 rounded-2xl shadow-2xl z-30 flex flex-col items-center text-center w-40">
            <div className="bg-red-500/20 p-3 rounded-xl mb-3">
              <ShieldAlert className="text-red-500 w-8 h-8" />
            </div>
            <div className="font-bold text-white mb-1">Emergency</div>
            <div className="text-xs text-slate-400 mb-3">Typical arrival<br/>30-60 min</div>
            <ArrowUpRight size={14} className="text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
