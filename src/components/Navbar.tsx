import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Blue Haven Ponds & Designs"
              className="h-16 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text- tracking-wide">
                Blue Haven
              </span>
              <span className="text-[10px] tracking-widest text-stone-500 uppercase">
                Ponds & Designs
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-emerald-700 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition-all hover:shadow-lg"
            >
              Request a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-emerald-700 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-emerald-700 hover:bg-stone-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center bg-emerald-700 text-black px-5 py-3 rounded-full text-sm font-medium shadow-md"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
