import React from 'react';
import { Droplets, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-forest-dark text-stone-300 pt-16 pb-12 border-t border-forest-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-forest-DEFAULT flex items-center justify-center text-white shadow-md">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-white tracking-wide">
                  Blue Haven
                </span>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">
                  Ponds & Designs
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bespoke koi ponds, waterfalls, and naturalistic water gardens, hand-built for a lifetime of tranquility.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About the Craftsman</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors">Portfolio Gallery</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-emerald-400 transition-colors">4-Step Process</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-emerald-400 transition-colors">Request Consultation</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-lg font-medium">Contact & Service Area</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Serving Charlotte and surrounding areas</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+18036161856" className="text-gray-400 hover:text-emerald-400 transition-colors">+1 (803) 616-1856</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">Steve Haddadin</span>
              </li>
            </ul>
          </div>

          {/* Philosophy / Socials */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-lg font-medium">Craftsmanship</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              One project at a time. Built by hand, built to last.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="#instagram" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-700/50 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                {/* Inline Instagram SVG */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>© 2026 Blue Haven Ponds & Designs. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Powered by Masaar360</span>
            
          </div>
        </div>

      </div>
    </footer>
  );
};