// import React from 'react';

// const BusinessTaxServices = () => {
//   const services = [
//     {
//       icon: '🏢',
//       title: 'Business Structure Optimization',
//       description: 'Strategic entity selection and restructuring to maximize tax efficiency and operational flexibility.',
//       features: ['Entity Selection', 'Corporate Restructuring', 'Tax Efficiency Planning', 'Ownership Transition'],
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     },
//     {
//       icon: '📊',
//       title: 'Tax Preparation & Filing',
//       description: 'Comprehensive tax return preparation and timely filing to ensure accuracy and compliance.',
//       features: ['Corporate Tax Returns', 'Partnership Filings', 'International Reporting', 'State & Local Compliance'],
//       image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     },
//     {
//       icon: '🛡️',
//       title: 'Tax Compliance & Advisory',
//       description: 'Proactive compliance management and strategic advisory to navigate complex tax regulations.',
//       features: ['Regulatory Compliance', 'Audit Support', 'Tax Planning', 'Risk Management'],
//       image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     },
//     {
//       icon: '🔬',
//       title: 'R&D Tax Credits & Incentives',
//       description: 'Maximize government incentives and tax credits for research and development activities.',
//       features: ['R&D Credit Studies', 'Incentive Identification', 'Documentation Support', 'Claim Optimization'],
//       image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     },
//     {
//       icon: '💡',
//       title: 'Tax Savings Opportunities',
//       description: 'Identify and implement strategic tax-saving strategies to enhance profitability.',
//       features: ['Deduction Optimization', 'Credit Maximization', 'Tax Deferral Strategies', 'Wealth Preservation'],
//       image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     }
//   ];

//   const stats = [
//     { number: '35%', label: 'Average Tax Savings' },
//     { number: '500+', label: 'R&D Credits Secured' },
//     { number: '100%', label: 'Compliance Rate' },
//     { number: '$75M+', label: 'Client Tax Savings' }
//   ];

//   const caseStudies = [
//     {
//       company: 'Tech Startup',
//       result: '$2.3M in R&D Credits',
//       description: 'Identified and secured substantial tax credits for innovative software development',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     },
//     {
//       company: 'Manufacturing Firm',
//       result: '40% Tax Reduction',
//       description: 'Restructured business entities and optimized deductions for maximum efficiency',
//       image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#C6A04A] rounded-full"></div>
//           <div className="absolute top-40 right-32 w-24 h-24 border-2 border-[#C6A04A] rotate-45"></div>
//           <div className="absolute bottom-32 left-1/3 w-28 h-28 border-2 border-[#C6A04A] rounded-full"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center mb-6">
//                 <div className="w-12 h-1 bg-[#C6A04A] mr-4"></div>
//                 <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
//                   BUSINESS TAX SERVICES
//                 </span>
//                 <div className="w-12 h-1 bg-[#C6A04A] ml-4"></div>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                 Strategic <span className="text-[#C6A04A]">Tax Optimization</span>
//               </h1>
              
//               <p className="text-xl text-white/80 mb-8 leading-relaxed">
//                 Comprehensive tax strategies designed to optimize business structures, minimize liabilities, 
//                 and ensure compliance. Our experts help you identify sustainable tax-saving opportunities.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
//                   Get Tax Assessment
//                 </button>
//                 <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
//                   View Case Studies
//                 </button>
//               </div>
//             </div>

//             {/* Stats Grid with Images */}
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className="text-3xl font-bold text-[#C6A04A] mb-2 group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}
//                   </div>
//                   <div className="text-white/80 text-sm font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Showcase with Images */}
//       <section className="py-20 bg-[#FAF1E6] relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A04A]/5 rounded-full -translate-y-48 translate-x-48"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A04A]/5 rounded-full translate-y-40 -translate-x-40"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
//               Comprehensive <span className="text-[#C6A04A]">Tax Solutions</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
//               Expert tax services designed to optimize your financial position while ensuring full compliance 
//               with evolving regulations
//             </p>
//           </div>

//           <div className="space-y-12">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
//                   index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
//                 }`}
//               >
//                 <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
//                   <div className="relative group">
//                     <img 
//                       src={service.image} 
//                       alt={service.title}
//                       className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#14274E]/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                       <div className="text-white">
//                         <div className="text-4xl mb-2">{service.icon}</div>
//                         <h3 className="text-xl font-bold">{service.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
//                   <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 h-full">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6">
//                       <span className="text-2xl text-white">{service.icon}</span>
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-[#14274E] mb-4 leading-tight">
//                       {service.title}
//                     </h3>
                    
//                     <p className="text-[#14274E]/70 mb-6 leading-relaxed">
//                       {service.description}
//                     </p>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {service.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center">
//                           <div className="w-2 h-2 bg-[#C6A04A] rounded-full mr-3"></div>
//                           <span className="text-[#14274E] font-medium text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//               Proven <span className="text-[#C6A04A]">Tax Success</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
//               Real results achieved through strategic tax planning and optimization
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {caseStudies.map((study, index) => (
//               <div 
//                 key={index}
//                 className="group cursor-pointer"
//               >
//                 <div className="bg-white rounded-2xl shadow-lg border border-[#C6A04A]/10 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//                   <div className="relative h-64 overflow-hidden">
//                     <img 
//                       src={study.image} 
//                       alt={study.company}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-[#C6A04A] text-white px-3 py-1 rounded-full text-sm font-bold">
//                         Case Study
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <h3 className="text-xl font-bold text-[#14274E]">{study.company}</h3>
//                       <span className="bg-[#14274E] text-white px-3 py-1 rounded-full text-sm font-bold">
//                         {study.result}
//                       </span>
//                     </div>
                    
//                     <p className="text-[#14274E]/70 mb-4">
//                       {study.description}
//                     </p>
                    
//                     <button className="text-[#C6A04A] font-semibold hover:text-[#14274E] transition-colors duration-300 flex items-center">
//                       Read Full Case Study
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tax Savings Calculator CTA */}
//       <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 Discover Your <span className="text-[#C6A04A]">Tax Savings Potential</span>
//               </h2>
//               <p className="text-xl text-white/80 mb-8 leading-relaxed">
//                 Our proprietary analysis can identify hidden tax savings opportunities and 
//                 provide a customized strategy to optimize your tax position.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   'Free initial tax assessment',
//                   'Customized savings estimate',
//                   'Strategic implementation plan',
//                   'Ongoing compliance monitoring'
//                 ].map((benefit, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-4">
//                       <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <span className="text-white/90">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-6">Get Your Tax Assessment</h3>
//               <div className="space-y-4">
//                 <div>
//                   <label className="text-white/80 text-sm mb-2 block">Business Revenue</label>
//                   <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white">
//                     <option className="text-[#14274E]">Under $1M</option>
//                     <option className="text-[#14274E]">$1M - $5M</option>
//                     <option className="text-[#14274E]">$5M - $20M</option>
//                     <option className="text-[#14274E]">$20M+</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="text-white/80 text-sm mb-2 block">Industry</label>
//                   <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white">
//                     <option className="text-[#14274E]">Technology</option>
//                     <option className="text-[#14274E]">Manufacturing</option>
//                     <option className="text-[#14274E]">Healthcare</option>
//                     <option className="text-[#14274E]">Professional Services</option>
//                   </select>
//                 </div>
//                 <button className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-4">
//                   Calculate Savings Potential
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//             Ready to <span className="text-[#C6A04A]">Optimize Your Tax Strategy</span>?
//           </h2>
//           <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
//             Partner with our tax experts to minimize liabilities, maximize savings, and ensure 
//             complete compliance with all regulatory requirements.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
//               Schedule Tax Consultation
//             </button>
//             <button className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300">
//               Download Tax Guide
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BusinessTaxServices;

"use client"
import React from 'react';

const BusinessTaxServices = () => {
  const services = [
    {
      title: 'Business Structure Optimization',
      description: 'Strategic entity selection and restructuring to maximize tax efficiency and operational flexibility across your organization.',
      features: ['Entity Selection Analysis', 'Corporate Restructuring', 'Tax Efficiency Planning', 'Ownership Transition Strategy'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Tax Preparation & Filing',
      description: 'Comprehensive tax return preparation and timely filing to ensure accuracy and compliance with all regulatory requirements.',
      features: ['Corporate Tax Returns', 'Partnership Filings', 'International Reporting', 'State & Local Compliance'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Tax Compliance & Advisory',
      description: 'Proactive compliance management and strategic advisory to navigate complex tax regulations and minimize risks.',
      features: ['Regulatory Compliance', 'Audit Support & Defense', 'Strategic Tax Planning', 'Risk Management Framework'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'R&D Tax Credits & Incentives',
      description: 'Maximize government incentives and tax credits for innovation and research activities across your organization.',
      features: ['R&D Credit Qualification', 'Incentive Identification', 'Documentation Strategy', 'Claim Optimization'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Tax Savings Opportunities',
      description: 'Identify and implement strategic tax-saving strategies to enhance profitability and operational efficiency.',
      features: ['Deduction Optimization', 'Credit Maximization', 'Tax Deferral Strategies', 'Wealth Preservation Planning'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const stats = [
    { number: '35%', label: 'Average Tax Savings for Clients' },
    { number: '500+', label: 'Successful R&D Credit Claims' },
    { number: '100%', label: 'Compliance Success Rate' },
    { number: '$75M+', label: 'Total Client Tax Savings' }
  ];

  const process = [
    {
      step: '01',
      title: 'Comprehensive Tax Assessment',
      description: 'Detailed analysis of your current tax position and identification of optimization opportunities'
    },
    {
      step: '02',
      title: 'Strategic Planning Session',
      description: 'Development of customized tax strategies aligned with your business objectives'
    },
    {
      step: '03',
      title: 'Implementation & Filing',
      description: 'Execution of tax strategies and preparation of all required filings and documentation'
    },
    {
      step: '04',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and adjustment of tax strategies for maximum efficiency'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Layout */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="text-white py-20">
              <div className="mb-8">
                <div className="w-20 h-1 bg-[#C6A04A] mb-6"></div>
                <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
                  BUSINESS TAX EXCELLENCE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Strategic Tax <br />
                <span className="text-[#C6A04A]">Optimization</span> <br />
                for Growth
              </h1>
              
              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl">
                Comprehensive tax strategies designed to optimize business structures, minimize liabilities, 
                and ensure compliance. Our experts help you identify sustainable tax-saving opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Get Free Tax Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
                  View Client Results
                </button>
              </div>
            </div>

            {/* Stats Grid Side */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500"
                >
                  <div className="text-4xl font-bold text-[#C6A04A] mb-3">{stat.number}</div>
                  <div className="text-white/80 text-sm leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section className="py-20 bg-[#FAF1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Comprehensive <span className="text-[#C6A04A]">Tax Solutions</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Expert tax services designed to optimize your financial position while ensuring full compliance 
              with evolving regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-[#C6A04A]/10 overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="border-l-4 border-[#C6A04A] pl-4 mb-4">
                    <h3 className="text-xl font-bold text-[#14274E] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#14274E]/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#C6A04A] rounded-full mr-3"></div>
                        <span className="text-[#14274E] text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              Our <span className="text-[#C6A04A]">Strategic Process</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A structured approach to maximizing tax efficiency and ensuring compliance excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#14274E] rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#C6A04A] transition-all duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#14274E]/20 -translate-y-1/2"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-[#14274E] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-[#14274E]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your <span className="text-[#C6A04A]">Tax Strategy</span>?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Schedule a complimentary tax assessment and discover how our strategic approach 
                can transform your tax position and drive significant savings.
              </p>
              
              <div className="space-y-6">
                {[
                  'Comprehensive tax position analysis',
                  'Customized savings strategy',
                  'Implementation roadmap',
                  'Ongoing compliance support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-8 bg-[#C6A04A] mr-4"></div>
                    <span className="text-white/90 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#14274E] mb-6">Schedule Your Assessment</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]">
                    <option>Select Business Type</option>
                    <option>Corporation</option>
                    <option>Partnership</option>
                    <option>LLC</option>
                    <option>Sole Proprietorship</option>
                  </select>
                </div>
                <button className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
                  Get Free Tax Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTaxServices;