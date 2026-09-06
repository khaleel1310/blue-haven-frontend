import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
}

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const PortfolioLightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Details Container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>
        <div className="mt-4 text-center space-y-1">
          <h3 className="font-serif text-2xl text-white font-medium">{item.title}</h3>
          <div className="flex items-center justify-center space-x-1.5 text-stone-300 text-sm">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};