// // components/MissionVision.jsx
// 'use client';

// import { useEffect } from 'react';

// const MissionVision = () => {
//   useEffect(() => {
//     const initAOS = async () => {
//       const AOS = (await import('aos')).default;
//       AOS.init({
//         duration: 1000,
//         easing: 'ease-out-cubic',
//         once: true,
//         offset: 50,
//       });
//     };
//     initAOS();
//   }, []);

//   return (
//     <section className="min-h-screen bg-brand-background py-20 px-4 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 border-2 border-brand-gold/20 rounded-full"></div>
//       <div className="absolute bottom-20 right-10 w-24 h-24 border border-brand-text/10 rounded-full"></div>
//       <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-gold/5 rounded-full"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20" data-aos="fade-down">
//           <div className="inline-block relative">
//             <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-4">
//               Our Compass
//             </h1>
//             <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
//           </div>
//           <p className="text-xl text-brand-text/70 mt-6 max-w-2xl mx-auto">
//             Guiding principles that shape our approach to wealth creation and client success
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Mission - Left Side */}
//           <div className="space-y-8">
//             <div 
//               className="relative"
//               data-aos="zoom-in-up"
//               data-aos-delay="200"
//             >
//               {/* Decorative Number */}
//               <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-gold/10 select-none">
//                 01
//               </div>
              
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
//                 {/* Accent Bar */}
//                 <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-brand-gold to-brand-text"></div>
                
//                 <div className="pl-6">
//                   <h2 className="text-3xl font-bold text-brand-text mb-6 relative">
//                     Mission Statement
//                     <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-gold"></div>
//                   </h2>
                  
//                   <div className="space-y-6">
//                     <p className="text-lg text-brand-text/90 leading-relaxed italic border-l-4 border-brand-gold/30 pl-4 py-2">
//                       "At Altabb Wealth, our mission is to provide intelligent, transparent, and growth-driven financial solutions that empower clients to build wealth, secure their future, and create enduring legacies."
//                     </p>
                    
//                     {/* Mission Pillars */}
//                     <div className="grid grid-cols-2 gap-4 mt-8">
//                       {[
//                         { title: 'Intelligence', desc: 'Strategic thinking' },
//                         { title: 'Transparency', desc: 'Clear communication' },
//                         { title: 'Growth', desc: 'Wealth creation' },
//                         { title: 'Legacy', desc: 'Enduring impact' }
//                       ].map((pillar, index) => (
//                         <div key={index} className="text-center p-4 bg-brand-background rounded-lg border border-brand-gold/10">
//                           <h4 className="font-semibold text-brand-text">{pillar.title}</h4>
//                           <p className="text-sm text-brand-text/60">{pillar.desc}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mission Focus Areas */}
//             <div 
//               className="grid grid-cols-3 gap-4"
//               data-aos="fade-right"
//               data-aos-delay="600"
//             >
//               {['Wealth Building', 'Future Security', 'Legacy Creation'].map((focus, index) => (
//                 <div key={index} className="text-center p-3 bg-white/60 rounded-lg border border-brand-gold/10">
//                   <div className="text-sm font-medium text-brand-text">{focus}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Vision - Right Side */}
//           <div className="space-y-8">
//             <div 
//               className="relative"
//               data-aos="zoom-in-up"
//               data-aos-delay="400"
//             >
//               {/* Decorative Number */}
//               <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-text/10 select-none">
//                 02
//               </div>
              
//               <div className="bg-gradient-to-br from-brand-text to-brand-text/90 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
//                 {/* Shimmer Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent animate-pulse"></div>
                
//                 <div className="relative z-10">
//                   <h2 className="text-3xl font-bold text-white mb-6 relative">
//                     Vision Statement
//                     <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-gold"></div>
//                   </h2>
                  
//                   <div className="space-y-6">
//                     <p className="text-lg text-white/95 leading-relaxed italic border-l-4 border-brand-gold pl-4 py-2">
//                       "To become a trusted global name in financial advisory, known for integrity, innovation, and impact."
//                     </p>
                    
//                     {/* Vision Attributes */}
//                     <div className="space-y-4 mt-8">
//                       {[
//                         { attribute: 'Global Trust', level: 95 },
//                         { attribute: 'Integrity', level: 100 },
//                         { attribute: 'Innovation', level: 90 },
//                         { attribute: 'Impact', level: 85 }
//                       ].map((item, index) => (
//                         <div key={index} className="space-y-2">
//                           <div className="flex justify-between text-sm">
//                             <span className="text-white/80">{item.attribute}</span>
//                             <span className="text-brand-gold">{item.level}%</span>
//                           </div>
//                           <div className="w-full bg-white/20 rounded-full h-2">
//                             <div 
//                               className="bg-gradient-to-r from-brand-gold to-yellow-200 h-2 rounded-full transition-all duration-1000 ease-out"
//                               style={{ width: `${item.level}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Global Reach */}
//             <div 
//               className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
//               data-aos="fade-left"
//               data-aos-delay="800"
//             >
//               <h4 className="font-semibold text-brand-text text-center mb-4">Global Aspiration</h4>
//               <div className="flex justify-around text-center">
//                 {[
//                   { label: 'Trust', value: 'Core' },
//                   { label: 'Innovation', value: 'Driver' },
//                   { label: 'Impact', value: 'Measure' }
//                 ].map((item, index) => (
//                   <div key={index} className="space-y-1">
//                     <div className="text-2xl font-bold text-brand-gold">{item.value}</div>
//                     <div className="text-xs text-brand-text/60">{item.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Connecting Element */}
//         <div 
//           className="flex justify-center mt-16"
//           data-aos="fade-up"
//           data-aos-delay="1000"
//         >
//           <div className="text-center max-w-2xl">
//             <div className="w-16 h-0.5 bg-gradient-to-r from-brand-gold to-brand-text mx-auto mb-4"></div>
//             <p className="text-brand-text/70 italic">
//               United in our commitment to excellence and client success
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;

// components/MissionVision.jsx
'use client';

import { useEffect } from 'react';

const MissionVision = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    };
    initAOS();
  }, []);

  return (
    <section className="min-h-screen bg-brand-background py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute top-10 left-10 w-32 h-32 border-2 border-brand-gold/20 rounded-full"></div> */}
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-brand-text/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-gold/5 rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-down">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-4">
              Our Purpose
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
          </div>
          <p className="text-xl text-brand-text/70 mt-6 max-w-2xl mx-auto">
            The foundation of our commitment to financial excellence and client success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission - Left Side */}
          <div className="space-y-8">
            <div 
              className="relative"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              {/* Decorative Number */}
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-gold/10 select-none">
                01
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Accent Bar */}
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-brand-gold to-brand-text"></div>
                
                <div className="pl-6">
                  <h2 className="text-3xl font-bold text-brand-text mb-6 relative">
                    Our Mission
                    <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-gold"></div>
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-brand-text/90 leading-relaxed italic border-l-4 border-brand-gold/30 pl-4 py-2">
                      "At Altabb Wealth, our mission is to provide intelligent, transparent, and growth-driven financial solutions that empower clients to build wealth, secure their future, and create enduring legacies."
                    </p>
                    
                    {/* Mission Pillars */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {[
                        { title: 'Strategic Planning', desc: 'Data-driven decisions' },
                        { title: 'Financial Clarity', desc: 'Transparent reporting' },
                        { title: 'Wealth Optimization', desc: 'Growth strategies' },
                        { title: 'Risk Management', desc: 'Secure investments' }
                      ].map((pillar, index) => (
                        <div key={index} className="text-center p-4 bg-brand-background rounded-lg border border-brand-gold/10">
                          <h4 className="font-semibold text-brand-text">{pillar.title}</h4>
                          <p className="text-sm text-brand-text/60">{pillar.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Services */}
            <div 
              className="grid grid-cols-3 gap-4"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              {['Accounting', 'Tax Advisory', 'CFO Services'].map((service, index) => (
                <div key={index} className="text-center p-3 bg-white/60 rounded-lg border border-brand-gold/10">
                  <div className="text-sm font-medium text-brand-text">{service}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision - Right Side */}
          <div className="space-y-8">
            <div 
              className="relative"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              {/* Decorative Number */}
              <div className="absolute -left-4 -top-4 text-8xl font-bold text-brand-text/10 select-none">
                02
              </div>
              
              <div className="bg-gradient-to-br from-brand-text to-brand-text/90 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Shimmer Effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent animate-pulse"></div> */}
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6 relative">
                    Our Vision
                    <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-gold"></div>
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-white/95 leading-relaxed italic border-l-4 border-brand-gold pl-4 py-2">
                      "To become a trusted global name in financial advisory, known for integrity, innovation, and impact."
                    </p>
                    
                    {/* Vision Attributes */}
                    <div className="space-y-4 mt-8">
                      {[
                        { attribute: 'Client Trust', level: 95 },
                        { attribute: 'Service Integrity', level: 100 },
                        { attribute: 'Innovation', level: 90 },
                        { attribute: 'Client Impact', level: 85 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80">{item.attribute}</span>
                            <span className="text-brand-gold">{item.level}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-brand-gold to-yellow-200 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Differentiators */}
            <div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <h4 className="font-semibold text-brand-text text-center mb-4">What Sets Us Apart</h4>
              <div className="flex justify-around text-center">
                {[
                  { label: 'Expertise', value: 'Deep' },
                  { label: 'Technology', value: 'Advanced' },
                  { label: 'Approach', value: 'Personal' }
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-2xl font-bold text-brand-gold">{item.value}</div>
                    <div className="text-xs text-brand-text/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;