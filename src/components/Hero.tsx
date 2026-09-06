import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Unsplash placeholder & dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1776572164081-b97050868bed?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/50 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full pt-20">
        <div className="max-w-3xl space-y-6">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-stone-200 text-xs sm:text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Bespoke Water Gardens & Custom Ponds</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight">
            Your backyard, transformed into something <span className="italic font-light text-emerald-300">alive.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            Naturalistic water features, hand-built with architectural precision. Experience the tranquility of a custom-crafted ecosystem right outside your door.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 pt-4">
            <a
              href="#booking"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium text-base shadow-xl transition-all hover:scale-[1.02]"
            >
              Request a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-medium text-base transition-all"
            >
              Explore Our Work
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-white">5+ Years Craftsmanship</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-white">Built by Hand, Built to Last</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};