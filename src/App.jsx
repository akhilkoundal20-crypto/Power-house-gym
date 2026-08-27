import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Equipment from './components/Equipment';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import MembershipCTA from './components/MembershipCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gymDark min-h-screen text-gray-100 selection:bg-gymAccent selection:text-white">
      {/* Sticky Header */}
      <Navbar />
      
      {/* Hero Presentation */}
      <Hero />
      
      {/* floating Quick actions */}
      <QuickActions />
      
      {/* Gym overview / identity */}
      <About />
      
      {/* Performance counters */}
      <Stats />
      
      {/* Offerings and plans */}
      <Services />
      
      {/* Heavy Weights & Machine visuals */}
      <Equipment />
      
      {/* Features & Amenities grid */}
      <WhyChooseUs />
      
      {/* Interactive snapping photo gallery / Lightbox */}
      <Gallery />
      
      {/* Google Clone review board */}
      <Reviews />
      
      {/* Physical map details */}
      <Location />
      
      {/* Conversion Banner */}
      <MembershipCTA />
      
      {/* Contact Form & links */}
      <Footer />
    </div>
  );
}

export default App;
