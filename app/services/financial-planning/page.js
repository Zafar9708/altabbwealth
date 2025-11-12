


// "use client"
// import React from 'react';

// const FinancialPlanningAnalysis = () => {
//   const services = [
//     {
//       title: 'Budgeting, Forecasting & KPI Analysis',
//       description: 'Comprehensive budgeting frameworks, accurate financial forecasting, and detailed KPI analysis to drive strategic decision-making and performance optimization.',
//       features: [
//         'Annual budget development',
//         'Rolling financial forecasts',
//         'KPI identification and tracking',
//         'Variance analysis',
//         'Performance benchmarking'
//       ],
//       image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
//     },
//     {
//       title: 'Scenario Modeling & Dynamic Financial Models',
//       description: 'Advanced scenario modeling and dynamic financial frameworks to assess risks, evaluate opportunities, and prepare for various market conditions.',
//       features: [
//         'What-if scenario analysis',
//         'Sensitivity testing',
//         'Dynamic financial modeling',
//         'Risk assessment frameworks',
//         'Opportunity evaluation'
//       ],
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
//     },
//     {
//       title: 'Reporting & Actionable Insights',
//       description: 'Transform complex financial data into clear, actionable insights through comprehensive reporting and strategic analysis.',
//       features: [
//         'Management reporting',
//         'Strategic insights generation',
//         'Data visualization',
//         'Board presentations',
//         'Actionable recommendations'
//       ],
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
//     }
//   ];

//   const stats = [
//     { number: '40%', label: 'Faster Decision Making' },
//     { number: '85%', label: 'Improved Forecast Accuracy' },
//     { number: '3.5x', label: 'ROI on Investment' },
//     { number: '50+', label: 'KPIs Monitored' }
//   ];

//   const process = [
//     {
//       title: 'Data Collection & Analysis',
//       description: 'Gather and validate financial data from all sources for comprehensive analysis'
//     },
//     {
//       title: 'Model Development',
//       description: 'Build dynamic financial models and scenario frameworks'
//     },
//     {
//       title: 'Insight Generation',
//       description: 'Transform data into actionable business intelligence and strategic insights'
//     },
//     {
//       title: 'Strategy Implementation',
//       description: 'Execute data-driven financial strategies and performance monitoring'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section - Minimal & Clean */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mb-8">
//             <div className="w-20 h-1 bg-[#C6A04A] mx-auto mb-6"></div>
//             <span className="text-[#C6A04A] font-semibold text-sm uppercase tracking-widest">
//               FINANCIAL PLANNING & ANALYSIS
//             </span>
//           </div>
          
//           <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
//             Strategic <span className="font-bold text-[#C6A04A]">Financial Intelligence</span>
//           </h1>
          
//           <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Advanced financial planning and analysis solutions that transform data into strategic insights. 
//             We provide comprehensive frameworks for budgeting, forecasting, and scenario modeling to drive informed business decisions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
//               Start Your FP&A Transformation
//             </button>
//             <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
//               View Case Studies
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Simple Grid */}
//       <section className="py-16 bg-white border-b border-[#C6A04A]/20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
//                 <div className="text-[#14274E] text-sm font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section - Clean Cards */}
//       <section className="py-20 bg-[#FAF1E6]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-light text-[#14274E] mb-4">
//               Comprehensive <span className="font-bold">FP&A Solutions</span>
//             </h2>
//             <p className="text-lg text-[#14274E]/70 max-w-2xl mx-auto">
//               Advanced analytical frameworks and strategic planning tools to drive data-informed decision-making and sustainable business growth
//             </p>
//           </div>

//           <div className="space-y-12">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className={`flex flex-col lg:flex-row gap-8 items-center ${
//                   index % 2 === 1 ? 'lg:flex-row-reverse' : ''
//                 }`}
//               >
//                 <div className="lg:w-1/2">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10">
//                     <h3 className="text-2xl font-bold text-[#14274E] mb-4">
//                       {service.title}
//                     </h3>
//                     <p className="text-[#14274E]/70 mb-6 leading-relaxed">
//                       {service.description}
//                     </p>
//                     <div className="grid grid-cols-2 gap-3">
//                       {service.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center">
//                           <div className="w-1.5 h-1.5 bg-[#C6A04A] rounded-full mr-3"></div>
//                           <span className="text-[#14274E] text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="lg:w-1/2">
//                   <img 
//                     src={service.image} 
//                     alt={service.title}
//                     className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section - Minimal Timeline */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-light text-[#14274E] mb-4">
//               Our <span className="font-bold">Analytical Process</span>
//             </h2>
//             <p className="text-lg text-[#14274E]/70">
//               A structured approach to transforming financial data into strategic intelligence and actionable insights
//             </p>
//           </div>

//           <div className="relative">
//             {/* Vertical Line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C6A04A]/20"></div>
            
//             <div className="space-y-12">
//               {process.map((step, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="w-16 h-16 bg-[#14274E] rounded-full flex items-center justify-center mr-8 flex-shrink-0">
//                     <span className="text-white font-bold text-lg">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-[#14274E] mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-[#14274E]/70">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Value Section */}
//       <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 <span className="text-[#C6A04A]">45% Improvement</span> in Forecasting Accuracy
//               </h2>
//               <p className="text-xl text-white/80 mb-6 leading-relaxed">
//                 How our FP&A solutions helped a manufacturing company transform their financial planning process, 
//                 resulting in better decision-making and significant cost savings.
//               </p>
//               <div className="space-y-4 mb-8">
//                 {[
//                   '45% improvement in forecast accuracy',
//                   '30% reduction in planning cycle time',
//                   'Real-time KPI dashboards implemented',
//                   'Dynamic scenario modeling for risk management',
//                   'Actionable insights driving strategic decisions'
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
//                 View Success Story
//               </button>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-6">FP&A Capability Assessment</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Current State Analysis</span>
//                   <span className="text-[#C6A04A] font-semibold">Complimentary</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Implementation Timeline</span>
//                   <span className="text-[#C6A04A] font-semibold">4-8 Weeks</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Forecast Accuracy Goal</span>
//                   <span className="text-[#C6A04A] font-semibold">85%+</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3">
//                   <span className="text-white/80">ROI Achievement</span>
//                   <span className="text-[#C6A04A] font-semibold">3-6 Months</span>
//                 </div>
//               </div>
//               <button className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6">
//                 Start Assessment
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Simple & Clean */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-light text-[#14274E] mb-6">
//             Transform Your <span className="font-bold text-[#C6A04A]">Financial Planning</span>
//           </h2>
//           <p className="text-lg text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
//             Partner with our FP&A experts to build robust analytical frameworks, enhance forecasting accuracy, 
//             and drive data-informed strategic decisions for sustainable growth.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300">
//               Schedule Consultation
//             </button>
//             <button className="border border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300">
//               Download FP&A Framework
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FinancialPlanningAnalysis;


"use client"
import React, { useState } from 'react';

const FinancialPlanningAnalysis = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showFrameworkForm, setShowFrameworkForm] = useState(false);

  const services = [
    {
      title: 'Budgeting, Forecasting & KPI Analysis',
      description: 'Comprehensive budgeting frameworks, accurate financial forecasting, and detailed KPI analysis to drive strategic decision-making and performance optimization.',
      features: [
        'Annual budget development',
        'Rolling financial forecasts',
        'KPI identification and tracking',
        'Variance analysis',
        'Performance benchmarking'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Scenario Modeling & Dynamic Financial Models',
      description: 'Advanced scenario modeling and dynamic financial frameworks to assess risks, evaluate opportunities, and prepare for various market conditions.',
      features: [
        'What-if scenario analysis',
        'Sensitivity testing',
        'Dynamic financial modeling',
        'Risk assessment frameworks',
        'Opportunity evaluation'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Reporting & Actionable Insights',
      description: 'Transform complex financial data into clear, actionable insights through comprehensive reporting and strategic analysis.',
      features: [
        'Management reporting',
        'Strategic insights generation',
        'Data visualization',
        'Board presentations',
        'Actionable recommendations'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const stats = [
    { number: '40%', label: 'Faster Decision Making' },
    { number: '85%', label: 'Improved Forecast Accuracy' },
    { number: '3.5x', label: 'ROI on Investment' },
    { number: '50+', label: 'KPIs Monitored' }
  ];

  const process = [
    {
      title: 'Data Collection & Analysis',
      description: 'Gather and validate financial data from all sources for comprehensive analysis'
    },
    {
      title: 'Model Development',
      description: 'Build dynamic financial models and scenario frameworks'
    },
    {
      title: 'Insight Generation',
      description: 'Transform data into actionable business intelligence and strategic insights'
    },
    {
      title: 'Strategy Implementation',
      description: 'Execute data-driven financial strategies and performance monitoring'
    }
  ];

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Consultation form submitted');
    alert('Thank you for your interest! We will contact you soon to schedule your FP&A consultation.');
    setShowConsultationForm(false);
  };

  const handleFrameworkSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Framework form submitted');
    alert('Thank you! Our FP&A framework guide will be downloaded and sent to your email.');
    setShowFrameworkForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Consultation Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Schedule FP&A Consultation</h3>
                <button
                  onClick={() => setShowConsultationForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
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
                    Current FP&A Challenges
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    placeholder="Briefly describe your current FP&A challenges..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Preferred Consultation Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select consultation type</option>
                    <option value="discovery">Discovery Call (30 mins)</option>
                    <option value="strategy">Strategy Session (60 mins)</option>
                    <option value="comprehensive">Comprehensive Review (90 mins)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Framework Download Modal */}
      {showFrameworkForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Download FP&A Framework</h3>
                <button
                  onClick={() => setShowFrameworkForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleFrameworkSubmit} className="space-y-4">
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
                    FP&A Areas of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select areas of interest</option>
                    <option value="budgeting">Budgeting & Forecasting</option>
                    <option value="scenario">Scenario Modeling</option>
                    <option value="reporting">Reporting & Insights</option>
                    <option value="kpi">KPI Analysis</option>
                    <option value="all">All FP&A Areas</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Download Framework
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Minimal & Clean */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-1 bg-[#C6A04A] mx-auto mb-6"></div>
            <span className="text-[#C6A04A] font-semibold text-sm uppercase tracking-widest">
              FINANCIAL PLANNING & ANALYSIS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Strategic <span className="font-bold text-[#C6A04A]">Financial Intelligence</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Advanced financial planning and analysis solutions that transform data into strategic insights. 
            We provide comprehensive frameworks for budgeting, forecasting, and scenario modeling to drive informed business decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowConsultationForm(true)}
              className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300"
            >
              Start Your FP&A Transformation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Simple Grid */}
      <section className="py-16 bg-white border-b border-[#C6A04A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
                <div className="text-[#14274E] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean Cards */}
      <section className="py-20 bg-[#FAF1E6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#14274E] mb-4">
              Comprehensive <span className="font-bold">FP&A Solutions</span>
            </h2>
            <p className="text-lg text-[#14274E]/70 max-w-2xl mx-auto">
              Advanced analytical frameworks and strategic planning tools to drive data-informed decision-making and sustainable business growth
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10">
                    <h3 className="text-2xl font-bold text-[#14274E] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#14274E]/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#C6A04A] rounded-full mr-3"></div>
                          <span className="text-[#14274E] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Minimal Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#14274E] mb-4">
              Our <span className="font-bold">Analytical Process</span>
            </h2>
            <p className="text-lg text-[#14274E]/70">
              A structured approach to transforming financial data into strategic intelligence and actionable insights
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C6A04A]/20"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-[#14274E] rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#14274E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#14274E]/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-[#C6A04A]">45% Improvement</span> in Forecasting Accuracy
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                How our FP&A solutions helped a manufacturing company transform their financial planning process, 
                resulting in better decision-making and significant cost savings.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '45% improvement in forecast accuracy',
                  '30% reduction in planning cycle time',
                  'Real-time KPI dashboards implemented',
                  'Dynamic scenario modeling for risk management',
                  'Actionable insights driving strategic decisions'
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
                View Success Story
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">FP&A Capability Assessment</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Current State Analysis</span>
                  <span className="text-[#C6A04A] font-semibold">Complimentary</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Implementation Timeline</span>
                  <span className="text-[#C6A04A] font-semibold">4-8 Weeks</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Forecast Accuracy Goal</span>
                  <span className="text-[#C6A04A] font-semibold">85%+</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">ROI Achievement</span>
                  <span className="text-[#C6A04A] font-semibold">3-6 Months</span>
                </div>
              </div>
              <button 
                onClick={() => setShowConsultationForm(true)}
                className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6"
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Clean */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-[#14274E] mb-6">
            Transform Your <span className="font-bold text-[#C6A04A]">Financial Planning</span>
          </h2>
          <p className="text-lg text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Partner with our FP&A experts to build robust analytical frameworks, enhance forecasting accuracy, 
            and drive data-informed strategic decisions for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowConsultationForm(true)}
              className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => setShowFrameworkForm(true)}
              className="border border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300"
            >
              Download FP&A Framework
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialPlanningAnalysis;