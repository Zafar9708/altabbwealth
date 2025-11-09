// "use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Building Wealth",
//       subtitle: "Creating Legacy",
//       description: "Comprehensive financial solutions to grow your wealth and secure your legacy.",
//       cta: "Start Building"
//     },
//     {
//       title: "Strategic Financial Leadership",
//       subtitle: "Driving Business Excellence", 
//       description: "Expert CFO advisory to optimize operations and drive sustainable growth.",
//       cta: "Get Expert Advice"
//     },
//     {
//       title: "Legacy Planning", 
//       subtitle: "Multi-Generational Impact",
//       description: "Secure your family's future with comprehensive estate planning strategies.",
//       cta: "Plan Your Legacy"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="min-h-screen bg-white flex items-center pt-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
//         {/* Single Slide Display */}
//         <div className="mb-16 min-h-96 flex items-center justify-center">
//           <div className="space-y-8">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-brand-text leading-tight">
//               {slides[currentSlide].title}
//             </h1>
//             <h2 className="text-4xl md:text-5xl text-brand-gold font-bold">
//               {slides[currentSlide].subtitle}
//             </h2>
//             <p className="text-xl text-brand-text/80 leading-relaxed max-w-2xl mx-auto">
//               {slides[currentSlide].description}
//             </p>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//           <Link 
//             href="/consultation" 
//             className="bg-brand-text text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-brand-gold transition-colors duration-300"
//           >
//             {slides[currentSlide].cta}
//           </Link>
//           <Link 
//             href="/services" 
//             className="border-2 border-brand-text text-brand-text px-12 py-4 rounded-lg font-semibold text-lg hover:bg-brand-text hover:text-white transition-colors duration-300"
//           >
//             Our Services
//           </Link>
//         </div>

//         {/* Simple Navigation Dots */}
//         <div className="flex justify-center space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-brand-gold' 
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client"
import React, { useState, useEffect } from 'react';

// NOTE: Since this must be a single, runnable file, we use standard anchor tags
// instead of Next.js 'Link' components, and the main component is exported as 'App'.

// --- Component Definition ---

// Define custom animation keyframes for a smoother slide entry
const customStyles = `
  @keyframes fadeInSlideUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeInSlideUp {
    animation: fadeInSlideUp 0.8s ease-out forwards;
  }
`;

const MinimalistHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data is kept consistent from the original prompt
  const slides = [
    {
      title: "Building Wealth",
      subtitle: "Creating Legacy",
      description: "Comprehensive financial solutions to grow your wealth and secure your legacy, built on a foundation of trust and tailored strategy.",
      cta: "Start Building"
    },
    {
      title: "Strategic Financial Leadership",
      subtitle: "Driving Business Excellence",
      description: "Expert CFO advisory services designed to optimize operations, enhance profitability, and drive sustainable corporate growth.",
      cta: "Get Expert Advice"
    },
    {
      title: "Generational Wealth Transfer",
      subtitle: "Preserving Your Family's Future",
      description: "Secure your family's financial future with comprehensive estate and multi-generational legacy planning strategies.",
      cta: "Plan Your Legacy"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  // Function to handle dot clicks
  const handleDotClick = (index) => {
    // Only update if clicking a different dot
    if (index !== currentSlide) {
      setCurrentSlide(index);
    }
  };


  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      // Use pure white background
      style={{ fontFamily: 'Inter, sans-serif', backgroundColor: 'white' }}
    >
      {/* Custom Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex items-center justify-center py-8">
        <div className="text-center max-w-4xl w-full">
          
          {/* Content Block (uses 'key' for forced re-render and enhanced transition) */}
          <div 
            key={currentSlide} 
            className="space-y-4 md:space-y-6 animate-fadeInSlideUp"
          >
            {/* Subtitle - Light and Gold (Reduced size for better hierarchy) */}
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl font-light tracking-widest uppercase"
              style={{ color: '#C6A04A' /* brand-gold */ }}
            >
              {slide.subtitle}
            </h2>
            
            {/* Title - Bold Navy (Reduced size for elegance) */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
              style={{ color: '#14274E' /* brand-text */ }}
            >
              {slide.title}
            </h1>

            {/* Description - Subdued Navy, slightly wider spacing */}
            <p 
              className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto pt-8"
              style={{ color: 'rgba(20, 39, 78, 0.7)' /* slightly muted brand-text */ }}
            >
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 mb-12">
            {/* Primary CTA Button: Gold Fill with subtle rounding */}
            <a
              href="/consultation"
              className="
                inline-flex items-center justify-center px-10 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform
                hover:scale-[1.03] hover:shadow-xl
              "
              style={{ backgroundColor: '#C6A04A', color: 'white', letterSpacing: '0.05em' /* brand-gold fill */ }}
            >
              {slide.cta}
            </a>
            
            {/* Secondary CTA Button: Navy Outline - Subtle Ghost Style */}
            <a
              href="/services"
              className="
                inline-flex items-center justify-center px-10 py-3 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform
                hover:scale-[1.03] hover:bg-opacity-5
              "
              style={{ borderColor: '#14274E', color: '#14274E', letterSpacing: '0.05em' /* brand-text outline */ }}
            >
              Our Services
            </a>
          </div>

          {/* Navigation Dots (Simplified and cleaner) */}
          <div className="flex justify-center space-x-3 pt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'scale-[1.5] opacity-100' // Gold active dot
                    : 'scale-100 opacity-30' // Muted inactive dot
                }`}
                style={{ backgroundColor: index === currentSlide ? '#C6A04A' : '#14274E' }}
              />
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
};

// Main App component wrapper
const App = () => {
  return (
    // Use pure white background
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <MinimalistHeroSection />
    </div>
  );
}

export default App;