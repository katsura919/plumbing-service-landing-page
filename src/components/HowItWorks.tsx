import React from 'react';
import { CalendarCheck, UserCheck, Wrench, Settings, DollarSign, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Schedule',
      description: 'Book online or call (512) 555-0199.',
      icon: <CalendarCheck size={32} className="text-white" />,
    },
    {
      id: '02',
      title: 'Arrival',
      description: 'A licensed plumber arrives on time.',
      icon: <UserCheck size={32} className="text-white" />,
    },
    {
      id: '03',
      title: 'Diagnosis',
      description: 'Clear explanation of the issue and options.',
      icon: <Wrench size={32} className="text-white" />,
    },
    {
      id: '04',
      title: 'Repair',
      description: 'Fast, Reliable, Reaclean, professional work.',
      icon: <Settings size={32} className="text-white" />,
    },
    {
      id: '05',
      title: 'Pay After Job',
      description: 'Payment collected only after completion.',
      icon: <DollarSign size={32} className="text-white" />,
    },
  ];

  return (
    <section className="py-16 text-center">
      <div className="text-[#2bd0ff] font-bold tracking-wider uppercase text-sm mb-4">How it Works</div>
      <h2 className="text-4xl lg:text-5xl font-black text-[#0a192f] leading-[1.1] mb-20 max-w-3xl mx-auto">
        How Our Simple & Reliable<br />Plumbing Process Works
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center max-w-[200px] relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#2bd0ff] flex items-center justify-center mb-6 relative shadow-lg">
                {step.icon}
                <div className="absolute -bottom-3 bg-[#0a192f] text-white text-xs font-bold px-3 py-1 rounded-full border-4 border-slate-50">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.id === '01' ? (
                  <>Book online or call <br/><a href="#" className="text-[#2bd0ff] hover:underline">(512) 555-0199</a>.</>
                ) : (
                  step.description
                )}
              </p>
            </div>
            
            {/* Arrow connecting steps */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block text-[#2bd0ff] opacity-50 shrink-0">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10C10 10 15 1 20 1C25 1 30 10 39 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M32 3L39 10L32 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
