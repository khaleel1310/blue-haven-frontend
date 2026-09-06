import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans selection:bg-emerald-700 selection:text-white">
      {/* Fixed Top Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;