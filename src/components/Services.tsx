import React from 'react';
import { Compass, Hammer, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Design',
      icon: Compass,
      description: 'Translating your vision into a custom blueprint that seamlessly marries architecture, flow, and natural ecology.',
      features: [
        'On-site landscape analysis',
        'Bespoke feature sketching & planning',
        'Flora & fauna integration strategy',
        'Transparent material & cost scoping'
      ],
      image: 'https://images.unsplash.com/photo-1682844189650-cc296f2f6790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
    },
    {
      title: 'Build',
      icon: Hammer,
      description: 'Hand-crafted stonework and ecosystem construction executed with meticulous precision, one project at a time.',
      features: [
        'Hand-selected natural boulders',
        'Professional liner & underlayment install',
        'Advanced biological filtration systems',
        'Custom waterfall & stream engineering'
      ],
      image: 'https://images.unsplash.com/photo-1709238811369-b360b03fbf9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
    },
    {
      title: 'Enhance',
      icon: Sparkles,
      description: 'Revitalizing existing water features through expert maintenance upgrades, leak mitigation, and ecological restoration.',
      features: [
        'Ecosystem health diagnostics',
        'Upgraded filtration & pump tech',
        'Rockwork rebuilding & re-edging',
        'Seasonal clean-outs & adjustments'
      ],
      image: 'https://images.unsplash.com/photo-1741272169773-239c0a6a9e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-forest-dark">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-forest-DEFAULT mx-auto rounded-full"></div>
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            Whether you are starting with a blank slate or looking to revitalize an existing feature, our artisan approach ensures uncompromised quality.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-stone-light rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Card Image with Unsplash background */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <div className="w-10 h-10 rounded-xl bg-forest-DEFAULT/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-emerald-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium">{service.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-stone-200/60">
                    <span className="text-xs font-semibold tracking-wider uppercase text-forest-DEFAULT">
                      What is included:
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#booking"
                      className="inline-flex items-center text-sm font-medium text-forest-DEFAULT hover:text-forest-light group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire about {service.title.toLowerCase()}</span>
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};