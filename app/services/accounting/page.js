// import React from 'react';

// // NOTE: Since this must be a single, runnable file, 
// // we use standard HTML <a> tags instead of Next.js <Link>.

// // Define the brand colors based on the config for easy use
// const BRAND_COLORS = {
//   background: '#FAF1E6', // Light Cream (Main Content Background)
//   text: '#14274E',       // Deep Navy (Primary Text/Dark Header Background)
//   gold: '#C6A04A',        // Infinity Logo Gold (Accent)
//   muted: 'rgba(20, 39, 78, 0.7)', // Muted Navy for body text
//   darkHeaderBg: '#1C315B', // Slightly lighter dark background
//   lightAccent: '#F8F6F4' // Very light cream for subtle separation
// };

// // --- SVG Icon Map (using Lucide-react equivalent inline SVGs) ---
// const IconMap = {
//   AccountsReceivable: (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   ),
//   AccountsPayable: (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8" />
//     </svg>
//   ),
//   ExpenseTracking: (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 3v18h18M18 17l-5-5-5 5" /><path d="M16 8l3-3M13 15l2-2" />
//     </svg>
//   ),
//   PayrollManagement: (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 12h20" />
//     </svg>
//   ),
//   Reconciliations: (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 1v22M12 21h7a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-7M12 21H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h7" />
//       <path d="M8 12l2 2 4-4" />
//     </svg>
//   ),
// };

// // --- Feature Card Component ---
// const FeatureCard = ({ iconName, title, description }) => {
//   const Icon = IconMap[iconName];
  
//   return (
//     <div className="p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl bg-white border-b-4" style={{ borderColor: BRAND_COLORS.gold }}>
//       <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: BRAND_COLORS.lightAccent, color: BRAND_COLORS.gold }}>
//         {Icon && <Icon className="w-6 h-6" />}
//       </div>
//       <h3 className="text-xl font-bold mb-3" style={{ color: BRAND_COLORS.text }}>
//         {title}
//       </h3>
//       <p className="text-sm" style={{ color: BRAND_COLORS.muted }}>
//         {description}
//       </p>
//     </div>
//   );
// };

// // --- Accounting Service Page Component ---
// const AccountingServicePage = () => {
  
//   const coreServices = [
//     { 
//       iconName: 'AccountsReceivable', 
//       title: 'Accounts Receivable', 
//       description: 'Efficiently manage and track client invoices, ensuring timely collections and optimal cash flow management.'
//     },
//     { 
//       iconName: 'AccountsPayable', 
//       title: 'Accounts Payable', 
//       description: 'Streamlined vendor bill processing and payment execution, maintaining strong vendor relationships and maximizing discounts.'
//     },
//     { 
//       iconName: 'ExpenseTracking', 
//       title: 'Expense Tracking & Reporting', 
//       description: 'Accurate categorization and reporting of all business expenses, simplifying tax preparation and providing clear financial insights.'
//     },
//     { 
//       iconName: 'PayrollManagement', 
//       title: 'Payroll Management', 
//       description: 'Secure and compliant processing of payroll, including tax filings, employee record management, and adherence to labor laws.'
//     },
//     { 
//       iconName: 'Reconciliations', 
//       title: 'Bank & Ledger Reconciliations', 
//       description: 'Daily or weekly reconciliation of all bank and credit card accounts to the general ledger, ensuring data integrity and identifying discrepancies quickly.'
//     },
//   ];

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.background, fontFamily: 'Inter, sans-serif' }}>
      
//       {/* 1. Header Section */}
//       <section className="pt-32 pb-24 md:pt-40 md:pb-32" style={{ backgroundColor: BRAND_COLORS.darkHeaderBg }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//           <p className="text-lg font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND_COLORS.gold }}>
//             Our Service Offering
//           </p>
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white max-w-5xl mx-auto">
//             Accounting & Bookkeeping
//           </h1>
//         </div>
//       </section>

//       {/* 2. Overview & Value Proposition */}
//       <section className="py-20 md:py-28" style={{ backgroundColor: 'white' }}>
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6" style={{ color: BRAND_COLORS.text }}>
//             **Accurate, compliant, and technology-driven accounting support** to streamline your financial operations.
//           </p>
//           <p className="text-lg leading-relaxed" style={{ color: BRAND_COLORS.muted }}>
//             We provide comprehensive, end-to-end bookkeeping services using the latest secure cloud technology, freeing your internal team to focus on core business growth while guaranteeing the accuracy and compliance of your records.
//           </p>
//         </div>
//       </section>

//       {/* 3. Core Deliverables (Feature Grid) */}
//       <section className="py-16 md:py-24" style={{ backgroundColor: BRAND_COLORS.lightAccent }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12" style={{ color: BRAND_COLORS.text }}>
//             What We Handle For You
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {coreServices.map((service, index) => (
//               <FeatureCard key={index} {...service} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Secondary Features/Integration */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             <div className="order-2 lg:order-1">
//               <h3 className="text-3xl font-bold mb-4" style={{ color: BRAND_COLORS.text }}>
//                 Seamless Integration & Reporting
//               </h3>
//               <p className="text-lg leading-relaxed mb-6" style={{ color: BRAND_COLORS.muted }}>
//                 Our services are integrated directly with your existing systems, providing **real-time financial visibility**. We don't just record transactions; we turn data into actionable intelligence through customized monthly reports and performance dashboards.
//               </p>
//               <ul className="space-y-3" style={{ color: BRAND_COLORS.text }}>
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_COLORS.gold }}></span>
//                   <p>Guaranteed Audit Readiness and Compliance.</p>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_COLORS.gold }}></span>
//                   <p>Dedicated Account Manager for consistent support.</p>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_COLORS.gold }}></span>
//                   <p>Cloud-based access to all documents and reports, anytime.</p>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Placeholder Image/Illustration - FIXED: Using explicit hex codes for reliability */}
//             <div className="order-1 lg:order-2">
//               <img
//                 // Background: 1C315B (darkHeaderBg), Text: C6A04A (gold)
//                 src="https://placehold.co/600x400/1C315B/C6A04A?text=Real-Time+Dashboard"
//                 alt="Financial dashboard illustration"
//                 className="w-full h-auto rounded-xl shadow-2xl border-b-8"
//                 style={{ borderColor: BRAND_COLORS.gold }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. Light CTA Section (Consistency) */}
//       <section className="py-20 md:py-28 text-center" style={{ backgroundColor: BRAND_COLORS.background }}>
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: BRAND_COLORS.text }}>
//             Ready to Simplify Your Finances?
//           </h2>
//           <p className="mt-4 text-xl mb-10 leading-relaxed" style={{ color: BRAND_COLORS.muted }}>
//             Let's discuss how our outsourced accounting team can immediately reduce your operational burden.
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center justify-center px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.05] shadow-2xl"
//             style={{ backgroundColor: BRAND_COLORS.gold, color: 'white', letterSpacing: '0.05em' }}
//           >
//             Schedule a Consultation
//           </a>
//         </div>
//       </section>

//     </div>
//   );
// };

// // Main App component wrapper required for the execution environment
// const App = () => {
//   return <AccountingServicePage />;
// }

// export default App;


import React from 'react';

const AccountingBookkeeping = () => {
  const services = [
    {
      title: 'Accounts Receivable',
      description: 'Efficient management of incoming payments and customer invoicing to optimize cash flow.',
      features: ['Customer Invoicing', 'Payment Tracking', 'Collection Management', 'Aging Reports'],
      icon: '📥'
    },
    {
      title: 'Accounts Payable',
      description: 'Streamlined vendor payment processing and expense management for better financial control.',
      features: ['Vendor Management', 'Payment Processing', 'Expense Approval', 'Cash Flow Optimization'],
      icon: '📤'
    },
    {
      title: 'Expense Tracking, Invoicing & Reporting',
      description: 'Comprehensive expense management and detailed financial reporting for informed decision-making.',
      features: ['Expense Categorization', 'Automated Invoicing', 'Custom Reports', 'Real-time Analytics'],
      icon: '📊'
    },
    {
      title: 'Payroll Management',
      description: 'Accurate and compliant payroll processing with tax filing and employee compensation management.',
      features: ['Salary Processing', 'Tax Calculations', 'Compliance Management', 'Employee Self-service'],
      icon: '💰'
    },
    {
      title: 'Bank & Ledger Reconciliations',
      description: 'Regular reconciliation of bank statements and general ledger for accurate financial records.',
      features: ['Bank Reconciliation', 'Ledger Maintenance', 'Discrepancy Resolution', 'Audit Trail'],
      icon: '🏦'
    }
  ];

  const benefits = [
    {
      number: '40%',
      title: 'Time Savings',
      description: 'Reduced manual accounting tasks'
    },
    {
      number: '99.9%',
      title: 'Accuracy Rate',
      description: 'Error-free financial records'
    },
    {
      number: 'Real-time',
      title: 'Financial Insights',
      description: 'Instant access to financial data'
    },
    {
      number: '100%',
      title: 'Compliance',
      description: 'Regulatory requirement adherence'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'System Assessment',
      description: 'Comprehensive review of your current accounting processes and systems'
    },
    {
      step: '02',
      title: 'Implementation',
      description: 'Seamless integration of optimized accounting workflows and tools'
    },
    {
      step: '03',
      title: 'Ongoing Management',
      description: 'Continuous monitoring and maintenance of financial operations'
    },
    {
      step: '04',
      title: 'Performance Review',
      description: 'Regular analysis and optimization of accounting efficiency'
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
              ACCOUNTING & BOOKKEEPING
            </span>
            <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Precision <span className="text-[#C6A04A]">Accounting</span> for<br />Business Excellence
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accurate, compliant, and technology-driven accounting support to streamline your 
            financial operations and drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
              Get Accounting Assessment
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
              Comprehensive <span className="text-[#C6A04A]">Accounting Services</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              End-to-end accounting solutions designed to optimize your financial operations 
              and ensure regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">{service.icon}</span>
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
              Our <span className="text-[#C6A04A]">Accounting Process</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A systematic approach to transforming your financial operations
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
                <span className="text-[#C6A04A]">Technology-Driven</span> Solutions
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Leveraging cutting-edge accounting software and automation tools to deliver 
                accurate, real-time financial insights and streamline your accounting processes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Cloud-based accounting platforms',
                  'Automated data entry and reconciliation',
                  'Real-time financial dashboards',
                  'Secure document management systems'
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
                Explore Our Technology Stack
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Accounting Efficiency Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Processing Time Reduction</span>
                  <span className="text-[#C6A04A] font-semibold">60% Faster</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Error Rate Reduction</span>
                  <span className="text-[#C6A04A] font-semibold">95% Less Errors</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Reporting Speed</span>
                  <span className="text-[#C6A04A] font-semibold">Real-time</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Cost Savings</span>
                  <span className="text-[#C6A04A] font-semibold">35% Average</span>
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
            Ready to Streamline Your <span className="text-[#C6A04A]">Accounting</span>?
          </h2>
          <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Transform your financial operations with our expert accounting and bookkeeping services. 
            Focus on growing your business while we handle the numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
              Start Your Accounting Transformation
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

export default AccountingBookkeeping;