import React from 'react';
import { Pickaxe, Hand, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Story */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl text-forest-dark leading-tight">
                Built by hand. <br />
                <span className="italic text-forest-light">Designed for life.</span>
              </h2>
              <div className="w-20 h-1 bg-forest-DEFAULT rounded-full"></div>
            </div>

            <div className="space-y-5 text-stone-600 font-sans leading-relaxed text-lg">
              <p>
                Every body of water has a unique character. At Blue Haven, we don't believe in plastic molds or mass-produced water features. We believe in creating naturalistic ecosystems that look and feel as though they have always belonged in your landscape.
              </p>
              <p>
                Our philosophy is rooted in traditional craftsmanship and ecological balance. From hand-selecting the perfect boulders to establishing proper biological filtration, we obsess over the details that mass-market installers overlook.
              </p>
              <p>
                When you work with us, you are getting more than a pond. You are getting a bespoke water garden built to mature gracefully and provide a lifetime of tranquility.
              </p>
            </div>

            {/* Stat Chips */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-stone-200">
                <Clock className="w-6 h-6 text-forest-DEFAULT" />
                <span className="font-medium text-sm text-stone-700">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-stone-200">
                <Hand className="w-6 h-6 text-forest-DEFAULT" />
                <span className="font-medium text-sm text-stone-700">Every Project by Hand</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-stone-200">
                <Pickaxe className="w-6 h-6 text-forest-DEFAULT" />
                <span className="font-medium text-sm text-stone-700">One Project at a Time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            {/* Unsplash placeholder image of a natural stone/water feature */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1579078504701-75db18aba0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG9tZSUyMHBvbmRzfGVufDB8MHwwfHx8MA%3D%3D)`,
              }}
            />
            {/* Subtle overlay for richness */}
            <div className="absolute inset-0 bg-forest-dark/10 group-hover:bg-transparent transition-colors duration-700" />
          </div>

        </div>
      </div>
    </section>
  );
};