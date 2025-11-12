


// import React from 'react';

// const CFOAdvisoryServices = () => {
//   const services = [
//     {
//       title: 'Strategic Financial Leadership',
//       description: 'Executive-level financial guidance and strategic planning to align financial performance with long-term business objectives and drive sustainable growth.',
//       features: [
//         'Financial strategy development',
//         'Executive decision support',
//         'Long-term planning',
//         'Performance monitoring',
//         'Strategic roadmapping'
//       ]
//     },
//     {
//       title: 'M&A Support and Due Diligence',
//       description: 'Comprehensive merger and acquisition support with thorough due diligence to ensure successful transactions and strategic partnerships.',
//       features: [
//         'Financial due diligence',
//         'Transaction structuring',
//         'Valuation analysis',
//         'Integration planning',
//         'Risk assessment'
//       ]
//     },
//     {
//       title: 'Investor Relations Guidance',
//       description: 'Strategic communication and relationship management to build investor confidence and support capital raising initiatives.',
//       features: [
//         'Investor communications',
//         'Capital raising strategy',
//         'Financial storytelling',
//         'Stakeholder management',
//         'Reporting frameworks'
//       ]
//     },
//     {
//       title: 'Operational Consulting',
//       description: 'Optimization of financial operations and implementation of efficient processes to enhance organizational performance.',
//       features: [
//         'Process optimization',
//         'Cost structure analysis',
//         'Efficiency improvements',
//         'Operational frameworks',
//         'Performance metrics'
//       ]
//     },
//     {
//       title: 'Profitability Optimization',
//       description: 'Data-driven strategies to enhance revenue streams, control costs, and maximize overall business profitability.',
//       features: [
//         'Margin improvement',
//         'Revenue enhancement',
//         'Cost optimization',
//         'Profitability analysis',
//         'Performance benchmarking'
//       ]
//     }
//   ];

//   const stats = [
//     { number: '40%', label: 'Average Profitability Improvement' },
//     { number: '3.5x', label: 'ROI on Advisory Services' },
//     { number: '50+', label: 'Successful M&A Transactions' },
//     { number: '$2B+', label: 'Capital Advisory' }
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'Strategic Assessment',
//       description: 'Comprehensive analysis of your current financial operations and strategic business objectives'
//     },
//     {
//       step: '02',
//       title: 'Solution Development',
//       description: 'Customized financial strategies and operational improvements tailored to your specific needs'
//     },
//     {
//       step: '03',
//       title: 'Implementation & Execution',
//       description: 'Hands-on support in implementing financial strategies and operational enhancements'
//     },
//     {
//       step: '04',
//       title: 'Performance Monitoring',
//       description: 'Continuous tracking and optimization to ensure sustained financial excellence and growth'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Geometric Background */}
//       <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#C6A04A] rotate-45"></div>
//           <div className="absolute top-32 right-20 w-16 h-16 border-2 border-[#C6A04A] rotate-12"></div>
//           <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-[#C6A04A] rotate-45"></div>
//           <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-[#C6A04A]"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center mb-6">
//                 <div className="w-12 h-1 bg-[#C6A04A] mr-4"></div>
//                 <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
//                   CFO ADVISORY SERVICES
//                 </span>
//                 <div className="w-12 h-1 bg-[#C6A04A] ml-4"></div>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                 Executive <span className="text-[#C6A04A]">Financial</span> Leadership
//               </h1>
              
//               <p className="text-xl text-white/80 mb-8 leading-relaxed">
//                 Strategic CFO advisory services that transform your financial operations, drive profitability, 
//                 and position your business for sustainable growth and market leadership.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
//                   Schedule Strategy Session
//                 </button>
//                 <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>

//             {/* Animated Stats Grid */}
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300"
//                 >
//                   <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
//                   <div className="text-white/80 text-sm font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Showcase */}
//       <section className="py-20 bg-[#FAF1E6] relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A04A]/5 rounded-full -translate-y-32 translate-x-32"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A04A]/5 rounded-full translate-y-40 -translate-x-40"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
//               Comprehensive <span className="text-[#C6A04A]">CFO Advisory</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
//               Executive-level financial leadership and strategic advisory services designed to drive 
//               profitability, optimize operations, and accelerate business growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
//                     <div className="w-3 h-3 bg-white rounded-full"></div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-[#14274E] mb-4 leading-tight">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-[#14274E]/70 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-3">
//                   {service.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center">
//                       <div className="w-2 h-2 bg-[#C6A04A] rounded-full mr-3"></div>
//                       <span className="text-[#14274E] font-medium text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Timeline */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//               Our <span className="text-[#C6A04A]">Advisory Process</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
//               A structured approach to delivering strategic financial leadership and driving measurable business outcomes
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A04A] to-[#14274E] transform -translate-x-1/2"></div>
            
//             <div className="space-y-12 lg:space-y-0">
//               {process.map((step, index) => (
//                 <div 
//                   key={index}
//                   className={`relative flex flex-col lg:flex-row ${
//                     index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                   } items-center gap-8`}
//                 >
//                   <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
//                     <div className="bg-[#FAF1E6] rounded-2xl p-8 border-l-4 border-[#C6A04A]">
//                       <div className="text-4xl font-bold text-[#C6A04A] mb-4">{step.step}</div>
//                       <h3 className="text-2xl font-bold text-[#14274E] mb-4">{step.title}</h3>
//                       <p className="text-[#14274E]/70 leading-relaxed">{step.description}</p>
//                     </div>
//                   </div>

//                   {/* Timeline Dot */}
//                   <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#C6A04A] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
//                   <div className="lg:w-1/2"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Value Proposition Section */}
//       <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 <span className="text-[#C6A04A]">Strategic Impact</span> Delivered
//               </h2>
//               <p className="text-xl text-white/80 mb-6 leading-relaxed">
//                 How our CFO advisory services transformed a mid-market manufacturing company, 
//                 driving 45% profitability improvement and securing strategic partnerships within 12 months.
//               </p>
//               <div className="space-y-4 mb-8">
//                 {[
//                   '45% improvement in overall profitability',
//                   'Strategic M&A resulting in 60% market expansion',
//                   'Enhanced investor relations securing $15M funding',
//                   'Operational efficiencies saving $2M annually',
//                   'Implementation of data-driven decision frameworks'
//                 ].map((result, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-4">
//                       <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <span className="text-white/90">{result}</span>
//                   </div>
//                 ))}
//               </div>
//               <button className="border-2 border-[#C6A04A] text-[#C6A04A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C6A04A] hover:text-white transition-all duration-300">
//                 View Success Stories
//               </button>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-6">Ready for Financial Transformation?</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Strategic Assessment</span>
//                   <span className="text-[#C6A04A] font-semibold">Complimentary</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Implementation Timeline</span>
//                   <span className="text-[#C6A04A] font-semibold">30-60 Days</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Expected ROI</span>
//                   <span className="text-[#C6A04A] font-semibold">3-5x Investment</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3">
//                   <span className="text-white/80">Client Success Rate</span>
//                   <span className="text-[#C6A04A] font-semibold">98%</span>
//                 </div>
//               </div>
//               <button className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6">
//                 Start Your Transformation
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//             Transform Your <span className="text-[#C6A04A]">Financial Leadership</span>
//           </h2>
//           <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
//             Partner with our experienced CFO advisors to drive strategic growth, optimize profitability, 
//             and build a foundation for sustainable financial success and market leadership.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
//               Book Discovery Call
//             </button>
//             <button className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300">
//               Download Service Guide
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CFOAdvisoryServices;

"use client"

import React, { useState } from 'react';

const CFOAdvisoryServices = () => {
  const [showStrategyForm, setShowStrategyForm] = useState(false);
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  const services = [
    {
      title: 'Strategic Financial Leadership',
      description: 'Executive-level financial guidance and strategic planning to align financial performance with long-term business objectives and drive sustainable growth.',
      features: [
        'Financial strategy development',
        'Executive decision support',
        'Long-term planning',
        'Performance monitoring',
        'Strategic roadmapping'
      ]
    },
    {
      title: 'M&A Support and Due Diligence',
      description: 'Comprehensive merger and acquisition support with thorough due diligence to ensure successful transactions and strategic partnerships.',
      features: [
        'Financial due diligence',
        'Transaction structuring',
        'Valuation analysis',
        'Integration planning',
        'Risk assessment'
      ]
    },
    {
      title: 'Investor Relations Guidance',
      description: 'Strategic communication and relationship management to build investor confidence and support capital raising initiatives.',
      features: [
        'Investor communications',
        'Capital raising strategy',
        'Financial storytelling',
        'Stakeholder management',
        'Reporting frameworks'
      ]
    },
    {
      title: 'Operational Consulting',
      description: 'Optimization of financial operations and implementation of efficient processes to enhance organizational performance.',
      features: [
        'Process optimization',
        'Cost structure analysis',
        'Efficiency improvements',
        'Operational frameworks',
        'Performance metrics'
      ]
    },
    {
      title: 'Profitability Optimization',
      description: 'Data-driven strategies to enhance revenue streams, control costs, and maximize overall business profitability.',
      features: [
        'Margin improvement',
        'Revenue enhancement',
        'Cost optimization',
        'Profitability analysis',
        'Performance benchmarking'
      ]
    }
  ];

  const stats = [
    { number: '40%', label: 'Average Profitability Improvement' },
    { number: '3.5x', label: 'ROI on Advisory Services' },
    { number: '50+', label: 'Successful M&A Transactions' },
    { number: '$2B+', label: 'Capital Advisory' }
  ];

  const process = [
    {
      step: '01',
      title: 'Strategic Assessment',
      description: 'Comprehensive analysis of your current financial operations and strategic business objectives'
    },
    {
      step: '02',
      title: 'Solution Development',
      description: 'Customized financial strategies and operational improvements tailored to your specific needs'
    },
    {
      step: '03',
      title: 'Implementation & Execution',
      description: 'Hands-on support in implementing financial strategies and operational enhancements'
    },
    {
      step: '04',
      title: 'Performance Monitoring',
      description: 'Continuous tracking and optimization to ensure sustained financial excellence and growth'
    }
  ];

  const handleStrategySubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Strategy Session form submitted');
    alert('Thank you for your interest! We will contact you soon to schedule your strategy session.');
    setShowStrategyForm(false);
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Brochure form submitted');
    alert('Thank you! Our CFO Advisory brochure will be downloaded and sent to your email.');
    setShowBrochureForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Strategy Session Modal */}
      {showStrategyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Schedule Strategy Session</h3>
                <button
                  onClick={() => setShowStrategyForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleStrategySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="+91 8505804836"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Current Business Challenges
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="Briefly describe your current business challenges..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Preferred Session Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select session type</option>
                    <option value="discovery">Discovery Call (30 mins)</option>
                    <option value="strategy">Strategy Session (60 mins)</option>
                    <option value="comprehensive">Comprehensive Review (90 mins)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Session
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Brochure Download Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Download Brochure</h3>
                <button
                  onClick={() => setShowBrochureForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleBrochureSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Services Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select services</option>
                    <option value="strategic">Strategic Financial Leadership</option>
                    <option value="mergers">M&A Support and Due Diligence</option>
                    <option value="investor">Investor Relations Guidance</option>
                    <option value="operational">Operational Consulting</option>
                    <option value="profitability">Profitability Optimization</option>
                    <option value="all">All CFO Advisory Services</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Download Brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Geometric Background */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#C6A04A] rotate-45"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-[#C6A04A] rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-[#C6A04A] rotate-45"></div>
          <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-[#C6A04A]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center mb-6">
                <div className="w-12 h-1 bg-[#C6A04A] mr-4"></div>
                <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
                  CFO ADVISORY SERVICES
                </span>
                <div className="w-12 h-1 bg-[#C6A04A] ml-4"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Executive <span className="text-[#C6A04A]">Financial</span> Leadership
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Strategic CFO advisory services that transform your financial operations, drive profitability, 
                and position your business for sustainable growth and market leadership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowStrategyForm(true)}
                  className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Strategy Session
                </button>
                <button 
                  onClick={() => setShowBrochureForm(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300"
                >
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-[#FAF1E6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A04A]/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A04A]/5 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Comprehensive <span className="text-[#C6A04A]">CFO Advisory</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Executive-level financial leadership and strategic advisory services designed to drive 
              profitability, optimize operations, and accelerate business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#14274E] mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-[#14274E]/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#C6A04A] rounded-full mr-3"></div>
                      <span className="text-[#14274E] font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              Our <span className="text-[#C6A04A]">Advisory Process</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A structured approach to delivering strategic financial leadership and driving measurable business outcomes
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C6A04A] to-[#14274E] transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-[#FAF1E6] rounded-2xl p-8 border-l-4 border-[#C6A04A]">
                      <div className="text-4xl font-bold text-[#C6A04A] mb-4">{step.step}</div>
                      <h3 className="text-2xl font-bold text-[#14274E] mb-4">{step.title}</h3>
                      <p className="text-[#14274E]/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#C6A04A] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-[#C6A04A]">Strategic Impact</span> Delivered
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                How our CFO advisory services transformed a mid-market manufacturing company, 
                driving 45% profitability improvement and securing strategic partnerships within 12 months.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '45% improvement in overall profitability',
                  'Strategic M&A resulting in 60% market expansion',
                  'Enhanced investor relations securing $15M funding',
                  'Operational efficiencies saving $2M annually',
                  'Implementation of data-driven decision frameworks'
                ].map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{result}</span>
                  </div>
                ))}
              </div>
              <button className="border-2 border-[#C6A04A] text-[#C6A04A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C6A04A] hover:text-white transition-all duration-300">
                View Success Stories
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready for Financial Transformation?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Strategic Assessment</span>
                  <span className="text-[#C6A04A] font-semibold">Complimentary</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Implementation Timeline</span>
                  <span className="text-[#C6A04A] font-semibold">30-60 Days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Expected ROI</span>
                  <span className="text-[#C6A04A] font-semibold">3-5x Investment</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Client Success Rate</span>
                  <span className="text-[#C6A04A] font-semibold">98%</span>
                </div>
              </div>
              <button 
                onClick={() => setShowStrategyForm(true)}
                className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6"
              >
                Start Your Transformation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#14274E] mb-6">
            Transform Your <span className="text-[#C6A04A]">Financial Leadership</span>
          </h2>
          <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Partner with our experienced CFO advisors to drive strategic growth, optimize profitability, 
            and build a foundation for sustainable financial success and market leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowStrategyForm(true)}
              className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Book Discovery Call
            </button>
            <button 
              onClick={() => setShowBrochureForm(true)}
              className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300"
            >
              Download Service Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CFOAdvisoryServices;