import React, { useState } from 'react';
import { PortfolioLightbox } from './PortfolioLightbox';
import type { PortfolioItem } from './PortfolioLightbox';
import { Eye, Sparkles } from 'lucide-react';

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: 'koi-pond',
    title: 'Naturalistic Koi Sanctuary',
    location: 'Charlotte, NC',
    image: 'https://images.unsplash.com/photo-1628288250464-23200a0d2e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBrb2ktcG9uZHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    category: 'waterfall',
    title: 'Multi-Tier Rock Waterfall',
    location: 'Lake Norman, NC',
    image: 'https://images.unsplash.com/photo-1746567863582-42ebad71b1a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxob21lJTIwZ2FyZGVuJTIwd2F0ZXJmYWxsfGVufDB8fDB8fHww'
  },
  {
    id: 3,
    category: 'stream',
    title: 'Minds-Eye Garden Stream',
    location: 'Myers Park, NC',
    image: 'https://images.unsplash.com/photo-1751731296876-b8676bb99f12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3MHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    category: 'koi-pond',
    title: 'Shaded Woodland Pond',
    location: 'Pineville, NC',
    image: 'https://images.unsplash.com/photo-1696124506484-c47e5fbaead1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWUlMjBnYXJkZW4lMjBrb2ktcG9uZHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 5,
    category: 'waterfall',
    title: 'Bolder Cascade Feature',
    location: 'Ballantyne, NC',
    image: 'https://images.unsplash.com/photo-1649665612933-678f75505680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWUlMjBnYXJkZW4lMjB3YXRlcmZhbGx8ZW58MHx8MHx8fDA%3D'
  }
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Koi Ponds', value: 'koi-pond' },
    { label: 'Waterfalls', value: 'waterfall' },
    { label: 'Streams', value: 'stream' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (item: PortfolioItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setSelectedImageIndex(index);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev ?? 0) === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl text-forest-dark">
            Our Portfolio
          </h2>
          <div className="w-16 h-1 bg-forest-DEFAULT mx-auto rounded-full"></div>
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            Explore a selection of our hand-built water features. Each project is custom-designed to fit the natural contours of the land.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-stone-light text-stone-600 hover:bg-stone-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-stone-100"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                  <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-serif text-xl text-white font-medium">{item.title}</h3>
                  <p className="text-stone-300 text-xs">{item.location}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note below portfolio */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-stone-light px-6 py-3 rounded-full text-stone-600 text-sm border border-stone-200">
            <Sparkles className="w-4 h-4 text-forest-DEFAULT" />
            <span>More projects completed than photographed — we work quietly, not loudly.</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <PortfolioLightbox
        item={selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null}
        onClose={() => setSelectedImageIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};