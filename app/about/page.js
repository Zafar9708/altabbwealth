// import React from 'react';

// // NOTE: Since this must be a single, runnable file, 
// // we use standard HTML <a> tags instead of Next.js <Link>.

// // Define the brand colors based on the config for easy use
// const BRAND_COLORS = {
//   background: '#FAF1E6', // Light Cream
//   text: '#14274E',       // Deep Navy
//   gold: '#C6A04A',        // Infinity Logo Gold
//   muted: 'rgba(20, 39, 78, 0.8)', // Muted Navy for body text
// };

// // --- Core Value Component ---
// const ValueCard = ({ icon, title, description }) => (
//   <div className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-brand-background">
//     <div className="mb-4" style={{ color: BRAND_COLORS.gold }}>
//       {/* Placeholder Icon (e.g., Lucide-react equivalent using inline SVG) */}
//       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         {icon === 'Integrity' && <path d="M12 2l7 3-7 3-7-3zM12 11v11M5 7l7 3 7-3" />}
//         {icon === 'Excellence' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />}
//         {icon === 'Partnership' && <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2M12 20v2M12 12V4" />}
//         {icon === 'Innovation' && <path d="M16 4H8L4 8l8 12 8-12-4-4zM12 8l4 4-4 4-4-4 4-4z" />}
//       </svg>
//     </div>
//     <h3 className="text-xl font-bold mb-3" style={{ color: BRAND_COLORS.text }}>
//       {title}
//     </h3>
//     <p className="text-sm" style={{ color: BRAND_COLORS.muted }}>
//       {description}
//     </p>
//   </div>
// );

// // --- About Us Main Component ---
// const AboutUsContent = () => {

//   const coreValues = [
//     {
//       icon: 'Integrity',
//       title: 'Integrity',
//       description: 'We operate with uncompromising transparency and ethical standards. Your trust is the foundation of our partnership.',
//     },
//     {
//       icon: 'Excellence',
//       title: 'Excellence',
//       description: 'We commit to the highest level of service, leveraging deep expertise to deliver strategic and precise financial outcomes.',
//     },
//     {
//       icon: 'Partnership',
//       title: 'Partnership',
//       description: 'We view ourselves as an extension of your team, providing proactive guidance and aligned support for your long-term goals.',
//     },
//     {
//       icon: 'Innovation',
//       title: 'Innovation',
//       description: 'We embrace forward-thinking strategies and technology to ensure your financial operations are efficient and future-proof.',
//     },
//   ];

//   const teamMembers = [
//     { name: 'Marcus Altmann', title: 'Founder & CEO', bio: 'Specializes in M&A strategy and global tax planning.' },
//     { name: 'Sara Tabib', title: 'Managing Partner, CFO Advisory', bio: 'Leads our strategic financial modeling and performance groups.' },
//     { name: 'Dr. John Bannister', title: 'Head of Wealth & Legacy Planning', bio: 'Focuses on complex generational wealth transfer and estate structuring.' },
//   ];
  
//   const milestones = [
//     { year: 2010, title: 'Founding & Initial Vision', description: 'ALTABB Wealth established by Marcus Altmann with a focus on strategic tax planning for startups in the technology sector.' },
//     { year: 2014, title: 'Expansion into CFO Advisory', description: 'Launched dedicated CFO advisory services, broadening our partnership role to include financial modeling and operational budgeting.' },
//     { year: 2018, title: 'Global Wealth & Legacy Division', description: 'In response to growing client needs, we introduced our Generational Wealth and Estate Planning services, expanding our global reach.' },
//     { year: 2022, title: 'Technology & Innovation Investment', description: 'Completed a major upgrade to our secure client platform, enhancing real-time reporting and analytical capabilities for all services.' },
//     { year: 2025, title: 'Future Outlook: Global Markets', description: 'Projecting strategic acquisition to expand service depth in ESG investing and compliance consulting for European markets.' },
//   ];


//   return (
//     <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.background, fontFamily: 'Inter, sans-serif' }}>
      
//       {/* 1. Hero Section */}
//       <section className="pt-32 pb-20 md:pt-40 md:pb-24 text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <p className="text-lg font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND_COLORS.gold }}>
//             Our Story
//           </p>
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: BRAND_COLORS.text }}>
//             A Foundation Built on Trust, Expertise, and Vision
//           </h1>
//           <p className="mt-6 text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: BRAND_COLORS.muted }}>
//             ALTABB Wealth was established to provide a holistic suite of financial services, moving beyond mere accounting to deliver **strategic financial partnership** that fuels sustainable growth.
//           </p>
//         </div>
//       </section>

//       {/* 2. Mission & Vision */}
//       <section className="py-16 md:py-24" style={{ backgroundColor: '#F8F6F4' /* Slightly darker background */ }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
//           {/* Mission */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-widest p-2 rounded-full" style={{ color: BRAND_COLORS.text, border: `2px solid ${BRAND_COLORS.gold}` }}>
//               Mission
//             </span>
//             {/* Mission Heading */}
//             <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ color: BRAND_COLORS.text }}>
//               Intelligent Solutions for Enduring Legacies
//             </h2>
//             {/* Mission Description with user's full statement */}
//             <p className="text-lg leading-relaxed" style={{ color: BRAND_COLORS.muted }}>
//               At Altabb Wealth, our mission is to provide intelligent, transparent, and growth-driven financial solutions that empower clients to build wealth, secure their future, and create enduring legacies.
//             </p>
//           </div>

//           {/* Vision */}
//           <div>
//             <span className="text-sm font-bold uppercase tracking-widest p-2 rounded-full" style={{ color: BRAND_COLORS.text, border: `2px solid ${BRAND_COLORS.gold}` }}>
//               Vision
//             </span>
//             {/* Vision Heading with user's full statement */}
//             <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ color: BRAND_COLORS.text }}>
//               To become a trusted global name in financial advisory, known for integrity, innovation, and impact.
//             </h2>
//             {/* Vision Description to support the new statement */}
//             <p className="text-lg leading-relaxed" style={{ color: BRAND_COLORS.muted }}>
//               We aim to set the benchmark for industry excellence, ensuring our clients benefit from globally-minded advice and forward-thinking financial strategies.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 3. Core Values */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: BRAND_COLORS.text }}>
//               Our Core Values
//             </h2>
//             <p className="mt-4 text-xl max-w-xl mx-auto" style={{ color: BRAND_COLORS.muted }}>
//               These principles guide every decision we make and every client relationship we forge.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {coreValues.map((value) => (
//               <ValueCard key={value.title} {...value} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Leadership/Team */}
//       <section className="py-16 md:py-24" style={{ backgroundColor: '#F8F6F4' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12" style={{ color: BRAND_COLORS.text }}>
//             Meet Our Leadership
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="text-center">
//                 {/* Image Placeholder */}
//                 <div 
//                   className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4" 
//                   style={{ borderColor: BRAND_COLORS.gold }}
//                 >
//                   <span className="text-xl font-bold" style={{ color: BRAND_COLORS.text }}>
//                     {member.name.split(' ').map(n => n[0]).join('')}
//                   </span>
//                 </div>
                
//                 <h3 className="text-2xl font-bold" style={{ color: BRAND_COLORS.text }}>
//                   {member.name}
//                 </h3>
//                 <p className="text-sm font-semibold uppercase mt-1" style={{ color: BRAND_COLORS.gold }}>
//                   {member.title}
//                 </p>
//                 <p className="mt-3 text-base italic" style={{ color: BRAND_COLORS.muted }}>
//                   "{member.bio}"
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. Firm History and Milestones (NEW SECTION) */}
//       <section className="py-16 md:py-24" style={{ backgroundColor: BRAND_COLORS.background }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16" style={{ color: BRAND_COLORS.text }}>
//             Our History & Milestones
//           </h2>
//           <div className="relative">
//             {/* Central Gold Line (Visible on Mobile and Desktop) */}
//             <div 
//               className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5" 
//               style={{ backgroundColor: BRAND_COLORS.gold }}
//             ></div>

//             {milestones.map((item, index) => {
//               const isLeft = index % 2 === 0;
//               return (
//                 <div key={index} className={`flex items-center w-full my-10 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  
//                   {/* Dot/Icon - Positioned absolutely for mobile, centered for desktop */}
//                   <div className="absolute left-6 md:static transform -translate-x-1/2 md:translate-x-0 w-12 h-12 flex items-center justify-center z-10">
//                     <div 
//                       className="w-4 h-4 rounded-full border-4 shadow-xl flex-shrink-0" 
//                       style={{ backgroundColor: BRAND_COLORS.text, borderColor: BRAND_COLORS.background }}
//                     ></div>
//                   </div>

//                   {/* Content Card (Left/Right positioning) */}
//                   <div 
//                     className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}
//                   >
//                     <div className="p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl bg-white border-t-4" style={{ borderColor: BRAND_COLORS.gold }}>
//                       <p className="text-sm uppercase font-semibold mb-1" style={{ color: BRAND_COLORS.gold }}>{item.year}</p>
//                       <h3 className="text-xl font-bold" style={{ color: BRAND_COLORS.text }}>{item.title}</h3>
//                       <p className="mt-2 text-sm" style={{ color: BRAND_COLORS.muted }}>{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 6. CTA Section */}
//       <section className="py-20 md:py-28 text-center" style={{ backgroundColor: BRAND_COLORS.text }}>
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white">
//             Ready to Redefine Your Financial Future?
//           </h2>
//           <p className="mt-4 text-xl mb-10 text-gray-300">
//             Schedule a confidential consultation to explore how our specialized expertise can serve your unique needs.
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center justify-center px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.05] shadow-2xl"
//             style={{ backgroundColor: BRAND_COLORS.gold, color: 'white', letterSpacing: '0.05em' }}
//           >
//             Get Started Today
//           </a>
//         </div>
//       </section>

//     </div>
//   );
// };

// // Main App component wrapper required for the execution environment
// const App = () => {
//   return <AboutUsContent />;
// }

// export default App;

import React from 'react';

const BRAND_COLORS = {
  background: '#FFFFFF',
  text: '#14274E',
  gold: '#C6A04A',
  muted: 'rgba(20, 39, 78, 0.7)',
  lightGold: '#F8F6F0'
};

const AboutUsContent = () => {
  const features = [
    {
      icon: '📊',
      title: 'Complete Financial Management',
      description: 'End-to-end solutions from bookkeeping to strategic advisory'
    },
    {
      icon: '⚡',
      title: 'Technology-Driven',
      description: 'Cutting-edge automation for accuracy and efficiency'
    },
    {
      icon: '🛡️',
      title: 'Trust & Integrity',
      description: 'Uncompromising ethical standards in every transaction'
    },
    {
      icon: '📈',
      title: 'Growth Focused',
      description: 'Strategic insights to drive your business forward'
    }
  ];

  const stats = [
    { number: '200+', label: 'Businesses Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  const services = [
    'Accounting & Bookkeeping',
    'Taxation & Compliance',
    'Payroll Management',
    'CFO Advisory',
    'Financial Planning',
    'Audit & Legal Oversight'
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-brand-gold mr-4"></div>
                <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
                  About Altabb Wealth
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: BRAND_COLORS.text }}>
                We Manage Your Numbers So You Can Focus on Growth
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Altabb Wealth, we provide a complete range of financial services designed to give businesses clarity, confidence, and control over their finances.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Rooted in <strong style={{ color: BRAND_COLORS.gold }}>Trust</strong> and <strong style={{ color: BRAND_COLORS.gold }}>Integrity</strong>, we combine deep financial expertise with cutting-edge automation tools. From daily bookkeeping to taxation, payroll, audits, and strategic advisory — we manage your entire financial ecosystem with precision, professionalism, and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: BRAND_COLORS.gold, color: 'white' }}
                >
                  Start Your Journey
                </a>
                <a
                  href="/service"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105"
                  style={{ borderColor: BRAND_COLORS.text, color: BRAND_COLORS.text }}
                >
                  Our Services
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center p-6 rounded-xl border border-gray-100 hover:border-brand-gold/30 transition-colors duration-300">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className="font-bold text-brand-text mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">Our Mission</span>
                  <h2 className="text-2xl font-bold text-brand-text">Empowering Financial Success</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide intelligent, transparent, and growth-driven financial solutions that empower clients to build wealth, secure their future, and create enduring legacies.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-text rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">Our Vision</span>
                  <h2 className="text-2xl font-bold text-brand-text">Global Trust & Innovation</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted global name in financial advisory, recognized for integrity, innovation, and meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: BRAND_COLORS.gold }}>
                  {stat.number}
                </div>
                <div className="text-brand-text font-semibold text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-text mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your financial ecosystem with precision and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-gold rounded-full mr-4"></div>
                  <span className="font-semibold text-brand-text">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-text mb-6">Why Businesses Choose Altabb Wealth</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-2">Deep Financial Expertise</h3>
                    <p className="text-gray-600">Seasoned professionals with extensive experience across all financial domains</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">Advanced automation tools that enhance accuracy and reduce manual work</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-2">Proactive Partnership</h3>
                    <p className="text-gray-600">We act as an extension of your team, providing strategic guidance and support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-text to-brand-text/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Financial Operations?</h3>
              <p className="text-white/80 mb-6">
                Join hundreds of businesses that trust us with their financial management while they focus on growth and innovation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-brand-gold text-white py-4 px-6 rounded-xl font-semibold hover:bg-brand-gold/90 transition-colors duration-300"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-6">
            Start Focusing on What Matters Most
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us handle the numbers while you drive your business forward. Experience the Altabb Wealth difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: BRAND_COLORS.gold, color: 'white' }}
            >
              Get Started Today
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: BRAND_COLORS.text, color: BRAND_COLORS.text }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return <AboutUsContent />;
}

export default App;