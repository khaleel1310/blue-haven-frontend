import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Send } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: 'BUILD',
    featureType: 'Koi Pond',
    approximateSize: 'Medium (500-1000 sqft)',
    existingFeature: false,
    projectNotes: '',
    budget: '$10,000 - $25,000',
    timeline: 'Within 3 months',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    location: '',
    preferredContact: 'Phone call',
    bestTime: 'Anytime',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this posts to /api/bookings
    setIsSubmitted(true);
    setStep(4);
  };

  return (
    <section id="booking" className="py-24 bg-stone-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl text-emerald-800">
            Request a Consultation
          </h2>
          <div className="w-16 h-1 bg-emerald-700 mx-auto rounded-full"></div>
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            Tell us about your space and your vision. We will review your details and reach out to schedule a conversation.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-8 sm:p-12">
          
          {/* Step Indicator */}
          {!isSubmitted && (
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-stone-200">
              {[
                { num: 1, label: 'Project' },
                { num: 2, label: 'Vision' },
                { num: 3, label: 'Details' },
              ].map((s) => (
                <div key={s.num} className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${
                    step === s.num 
                      ? 'bg-emerald-700 text-white shadow-md' 
                      : step > s.num 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-stone-100 text-stone-400'
                  }`}>
                    {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`hidden sm:inline text-sm font-medium ${step === s.num ? 'text-emerald-800' : 'text-stone-400'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            {/* STEP 1: Project Type & Scale */}
            {step === 1 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-emerald-800">What service are you looking for?</h3>
                  <p className="text-stone-500 text-sm">Select the option that best matches your project needs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'DESIGN', title: 'Design Only', desc: 'Custom blueprints & ecological planning' },
                    { id: 'BUILD', title: 'Design & Build', desc: 'Full custom stonework and feature installation' },
                    { id: 'ENHANCE', title: 'Enhance / Service', desc: 'Revitalization, filtration upgrades, maintenance' },
                    { id: 'NOT_SURE', title: 'Not Sure Yet', desc: 'We can discuss options during our call' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleInputChange('serviceType', item.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.serviceType === item.id
                          ? 'border-emerald-700 bg-emerald-700/5 shadow-sm'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <h4 className="font-serif text-lg font-medium text-emerald-900">{item.title}</h4>
                      <p className="text-stone-600 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4">
                  <label className="block font-medium text-sm text-stone-700">What type of feature are you envisioning?</label>
                  <select
                    value={formData.featureType}
                    onChange={(e) => handleInputChange('featureType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white text-stone-800"
                  >
                    <option value="Koi Pond">Koi Pond</option>
                    <option value="Waterfall">Rock Waterfall</option>
                    <option value="Stream">Garden Stream</option>
                    <option value="Full Garden">Complete Ecosystem Garden</option>
                    <option value="Not Sure">Not Sure / Open to Ideas</option>
                  </select>
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium shadow-md transition-all"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Vision & Budget */}
            {step === 2 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-emerald-900">Tell us about your vision</h3>
                  <p className="text-stone-500 text-sm">Help us understand what you imagine for your outdoor space.</p>
                </div>

                <div className="space-y-2">
                  <label className="block font-medium text-sm text-stone-700">Project Notes & Inspiration</label>
                  <textarea
                    rows={4}
                    value={formData.projectNotes}
                    onChange={(e) => handleInputChange('projectNotes', e.target.value)}
                    placeholder="Describe what you imagine — a tranquil koi pond, a tumbling waterfall, a living stream..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white text-stone-800 text-sm"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-medium text-sm text-stone-700">Estimated Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white text-stone-800 text-sm"
                    >
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                      <option value="Not Sure">Not Sure / Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-medium text-sm text-stone-700">Desired Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white text-stone-800 text-sm"
                    >
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center text-stone-600 hover:text-stone-900 px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium shadow-md transition-all"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Details */}
            {step === 3 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-emerald-900">How can we reach you?</h3>
                  <p className="text-stone-500 text-sm">Provide your contact info so we can schedule your consultation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-medium text-sm text-stone-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-medium text-sm text-stone-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.customerEmail}
                      onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-medium text-sm text-stone-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.customerPhone}
                      onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-medium text-sm text-stone-700">Location / City *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Charlotte, NC"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center text-stone-600 hover:text-stone-900 px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all"
                  >
                    <span>Submit Request</span>
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-8 text-center py-6 animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-3 max-w-lg mx-auto">
                  <h3 className="font-serif text-3xl text-emerald-900">Consultation Request Received</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-stone-800">{formData.customerName || 'valued client'}</span>. We have logged your details and project vision.
                  </p>
                </div>

                <div className="bg-stone-light p-6 rounded-2xl max-w-md mx-auto text-left space-y-3 border border-stone-200">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-emerald-700">What happens next:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Our master craftsman reviews your feature specs.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>We will call or email you within 24 hours to discuss details.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>An on-site property evaluation will be scheduled.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => { setStep(1); setIsSubmitted(false); }}
                    className="text-emerald-700 hover:underline font-medium text-sm"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};