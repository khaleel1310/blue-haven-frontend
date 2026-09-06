import React from 'react';
import { MessageSquare, Compass, Hammer, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      icon: MessageSquare,
      description: 'We discuss your landscape, your vision, and what kind of ecosystem you want to bring to life.'
    },
    {
      number: '02',
      title: 'Design',
      icon: Compass,
      description: 'We craft a bespoke layout strategy, outlining stone placement, plant selections, and water flow.'
    },
    {
      number: '03',
      title: 'Build',
      icon: Hammer,
      description: 'Our master craftsman builds your feature by hand with precise stonework and advanced filtration.'
    },
    {
      number: '04',
      title: 'Enjoy',
      icon: Sparkles,
      description: 'Step outside to your new natural sanctuary, complete with lifetime tranquility and simple upkeep.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-stone-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-forest-dark">
            Our 4-Step Journey
          </h2>
          <div className="w-16 h-1 bg-forest-DEFAULT mx-auto rounded-full"></div>
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            Bringing a custom water feature to your property should feel effortless. Here is how we turn your idea into a living masterpiece.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 relative flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                <div className="space-y-6">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-light text-forest-light/40">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-forest-DEFAULT/10 flex items-center justify-center text-forest-DEFAULT group-hover:bg-forest-DEFAULT group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-medium text-forest-dark">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom decorative accent */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-forest-DEFAULT">
                  <span>Step {step.number} of 04</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};