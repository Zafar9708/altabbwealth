


// import React from 'react';

// const AccountingBookkeeping = () => {
//   const services = [
//     {
//       title: 'Accounts Receivable',
//       description: 'Efficient management of incoming payments and customer invoicing to optimize cash flow.',
//       features: ['Customer Invoicing', 'Payment Tracking', 'Collection Management', 'Aging Reports'],
//       icon: '📥'
//     },
//     {
//       title: 'Accounts Payable',
//       description: 'Streamlined vendor payment processing and expense management for better financial control.',
//       features: ['Vendor Management', 'Payment Processing', 'Expense Approval', 'Cash Flow Optimization'],
//       icon: '📤'
//     },
//     {
//       title: 'Expense Tracking, Invoicing & Reporting',
//       description: 'Comprehensive expense management and detailed financial reporting for informed decision-making.',
//       features: ['Expense Categorization', 'Automated Invoicing', 'Custom Reports', 'Real-time Analytics'],
//       icon: '📊'
//     },
//     {
//       title: 'Payroll Management',
//       description: 'Accurate and compliant payroll processing with tax filing and employee compensation management.',
//       features: ['Salary Processing', 'Tax Calculations', 'Compliance Management', 'Employee Self-service'],
//       icon: '💰'
//     },
//     {
//       title: 'Bank & Ledger Reconciliations',
//       description: 'Regular reconciliation of bank statements and general ledger for accurate financial records.',
//       features: ['Bank Reconciliation', 'Ledger Maintenance', 'Discrepancy Resolution', 'Audit Trail'],
//       icon: '🏦'
//     }
//   ];

//   const benefits = [
//     {
//       number: '40%',
//       title: 'Time Savings',
//       description: 'Reduced manual accounting tasks'
//     },
//     {
//       number: '99.9%',
//       title: 'Accuracy Rate',
//       description: 'Error-free financial records'
//     },
//     {
//       number: 'Real-time',
//       title: 'Financial Insights',
//       description: 'Instant access to financial data'
//     },
//     {
//       number: '100%',
//       title: 'Compliance',
//       description: 'Regulatory requirement adherence'
//     }
//   ];

//   const process = [
//     {
//       step: '01',
//       title: 'System Assessment',
//       description: 'Comprehensive review of your current accounting processes and systems'
//     },
//     {
//       step: '02',
//       title: 'Implementation',
//       description: 'Seamless integration of optimized accounting workflows and tools'
//     },
//     {
//       step: '03',
//       title: 'Ongoing Management',
//       description: 'Continuous monitoring and maintenance of financial operations'
//     },
//     {
//       step: '04',
//       title: 'Performance Review',
//       description: 'Regular analysis and optimization of accounting efficiency'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center mb-8">
//             <div className="w-16 h-1 bg-[#C6A04A] mr-4"></div>
//             <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
//               ACCOUNTING & BOOKKEEPING
//             </span>
//             <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
//           </div>
          
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Precision <span className="text-[#C6A04A]">Accounting</span> for<br />Business Excellence
//           </h1>
          
//           <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Accurate, compliant, and technology-driven accounting support to streamline your 
//             financial operations and drive business growth.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
//               Get Accounting Assessment
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
//               Download Service Guide
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Stats */}
//       <section className="py-16 bg-white border-b border-[#C6A04A]/20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-[#C6A04A] mb-2">{benefit.number}</div>
//                 <div className="text-[#14274E] font-semibold text-sm mb-1">{benefit.title}</div>
//                 <div className="text-[#14274E]/60 text-xs">{benefit.description}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-[#FAF1E6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
//               Comprehensive <span className="text-[#C6A04A]">Accounting Services</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
//               End-to-end accounting solutions designed to optimize your financial operations 
//               and ensure regulatory compliance
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-2xl text-white">{service.icon}</span>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-[#14274E] mb-4">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-[#14274E]/70 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-3">
//                   {service.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center">
//                       <div className="w-2 h-2 bg-[#C6A04A] rounded-full mr-3"></div>
//                       <span className="text-[#14274E] text-sm font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//               Our <span className="text-[#C6A04A]">Accounting Process</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
//               A systematic approach to transforming your financial operations
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {process.map((step, index) => (
//               <div 
//                 key={index}
//                 className="text-center group"
//               >
//                 <div className="relative mb-6">
//                   <div className="w-20 h-20 bg-[#14274E] rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#C6A04A] transition-all duration-300">
//                     <span className="text-white text-2xl font-bold">{step.step}</span>
//                   </div>
//                   {index < process.length - 1 && (
//                     <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#14274E]/20 -translate-y-1/2"></div>
//                   )}
//                 </div>
                
//                 <h3 className="text-xl font-bold text-[#14274E] mb-4">
//                   {step.title}
//                 </h3>
                
//                 <p className="text-[#14274E]/70 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 <span className="text-[#C6A04A]">Technology-Driven</span> Solutions
//               </h2>
//               <p className="text-xl text-white/80 mb-6 leading-relaxed">
//                 Leveraging cutting-edge accounting software and automation tools to deliver 
//                 accurate, real-time financial insights and streamline your accounting processes.
//               </p>
//               <div className="space-y-4 mb-8">
//                 {[
//                   'Cloud-based accounting platforms',
//                   'Automated data entry and reconciliation',
//                   'Real-time financial dashboards',
//                   'Secure document management systems'
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-4">
//                       <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <span className="text-white/90">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//               <button className="border-2 border-[#C6A04A] text-[#C6A04A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C6A04A] hover:text-white transition-all duration-300">
//                 Explore Our Technology Stack
//               </button>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-6">Accounting Efficiency Metrics</h3>
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Processing Time Reduction</span>
//                   <span className="text-[#C6A04A] font-semibold">60% Faster</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Error Rate Reduction</span>
//                   <span className="text-[#C6A04A] font-semibold">95% Less Errors</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3 border-b border-white/20">
//                   <span className="text-white/80">Reporting Speed</span>
//                   <span className="text-[#C6A04A] font-semibold">Real-time</span>
//                 </div>
//                 <div className="flex items-center justify-between py-3">
//                   <span className="text-white/80">Cost Savings</span>
//                   <span className="text-[#C6A04A] font-semibold">35% Average</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//             Ready to Streamline Your <span className="text-[#C6A04A]">Accounting</span>?
//           </h2>
//           <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
//             Transform your financial operations with our expert accounting and bookkeeping services. 
//             Focus on growing your business while we handle the numbers.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
//               Start Your Accounting Transformation
//             </button>
//             <button className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300">
//               Schedule Free Consultation
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AccountingBookkeeping;

import React from 'react';

const FinanceServices = () => {
  const services = [
    {
      title: 'Bookkeeping & Accounting',
      description: 'Accurate records and real-time insights for informed decision-making.',
      features: [
        'Real-time financial insights',
        'Accurate record keeping',
        'Financial statement preparation',
        'Chart of accounts management',
        'Transaction categorization'
      ]
    },
    {
      title: 'Pay-In & Pay-Out Management',
      description: 'Smooth cash flow operations with transparent tracking.',
      features: [
        'Cash flow optimization',
        'Payment tracking',
        'Receivable management',
        'Payable processing',
        'Liquidity management'
      ]
    },
    {
      title: 'Payroll Services',
      description: 'Timely, compliant salary disbursement with complete accuracy.',
      features: [
        'Salary processing',
        'Tax calculations',
        'Compliance management',
        'Employee self-service',
        'Payroll reporting'
      ]
    },
    {
      title: 'Compliance Management',
      description: 'Stay ahead of regulatory requirements with expert guidance.',
      features: [
        'Regulatory compliance',
        'Filing management',
        'Audit preparation',
        'Policy development',
        'Risk assessment'
      ]
    },
    {
      title: 'Taxation & Advisory',
      description: 'Optimize tax efficiency while maintaining full compliance.',
      features: [
        'Tax planning',
        'Compliance advisory',
        'Tax filing',
        'Strategic tax optimization',
        'Tax risk management'
      ]
    },
    {
      title: 'Audit & Reporting',
      description: 'Transparent audits and actionable reports for better business insights.',
      features: [
        'Financial auditing',
        'Internal controls',
        'Compliance reporting',
        'Performance analysis',
        'Stakeholder reporting'
      ]
    },
    {
      title: 'Financial Automation',
      description: 'Smart tools that reduce manual work and enhance accuracy.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Integration services',
        'Data synchronization',
        'Efficiency tracking'
      ]
    }
  ];

  const benefits = [
    {
      number: '99.9%',
      title: 'Accuracy Rate',
      description: 'Error-free financial operations'
    },
    {
      number: '50%',
      title: 'Time Saved',
      description: 'Reduced manual processes'
    },
    {
      number: 'Real-time',
      title: 'Financial Insights',
      description: 'Instant access to data'
    },
    {
      number: '100%',
      title: 'Compliance',
      description: 'Regulatory adherence'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Financial Assessment',
      description: 'Comprehensive review of your current financial processes and systems'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Customized financial management strategy aligned with your business goals'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless integration of financial systems and processes'
    },
    {
      step: '04',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and improvement of financial operations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-[#C6A04A] mr-4"></div>
            <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
              FINANCE SERVICES
            </span>
            <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive <span className="text-[#C6A04A]">Financial</span> Management<br />for Business Growth
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            End-to-end financial solutions that streamline operations, ensure compliance, 
            and provide actionable insights for strategic decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
              Get Financial Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Download Service Guide
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-white border-b border-[#C6A04A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#C6A04A] mb-2">{benefit.number}</div>
                <div className="text-[#14274E] font-semibold text-sm mb-1">{benefit.title}</div>
                <div className="text-[#14274E]/60 text-xs">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#FAF1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Complete <span className="text-[#C6A04A]">Financial Solutions</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Comprehensive financial management services designed to optimize your operations, 
              ensure compliance, and drive business growth through data-driven insights.
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
                
                <h3 className="text-2xl font-bold text-[#14274E] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[#14274E]/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#C6A04A] rounded-full mr-3"></div>
                      <span className="text-[#14274E] text-sm font-medium">{feature}</span>
                    </div>
                  ))}
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
              Our <span className="text-[#C6A04A]">Financial Process</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A structured approach to transforming your financial operations and driving business success
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

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-[#C6A04A]">Advanced Financial</span> Technology
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Leveraging cutting-edge financial technology and automation tools to deliver 
                accurate, real-time financial insights and streamline your financial operations.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Cloud-based financial platforms',
                  'Automated reconciliation systems',
                  'Real-time financial dashboards',
                  'Secure financial data management',
                  'Integrated payment processing',
                  'Advanced reporting analytics'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="border-2 border-[#C6A04A] text-[#C6A04A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C6A04A] hover:text-white transition-all duration-300">
                Explore Our Financial Tools
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Financial Efficiency Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Processing Efficiency</span>
                  <span className="text-[#C6A04A] font-semibold">70% Faster</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Error Reduction</span>
                  <span className="text-[#C6A04A] font-semibold">90% Less Errors</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Reporting Accuracy</span>
                  <span className="text-[#C6A04A] font-semibold">99.9% Accurate</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Cost Optimization</span>
                  <span className="text-[#C6A04A] font-semibold">40% Savings</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Compliance Rate</span>
                  <span className="text-[#C6A04A] font-semibold">100% Adherence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#14274E] mb-6">
            Ready to Optimize Your <span className="text-[#C6A04A]">Financial Operations</span>?
          </h2>
          <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Transform your financial management with our comprehensive services. 
            Focus on strategic growth while we handle your financial operations with precision and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
              Start Financial Transformation
            </button>
            <button className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceServices;