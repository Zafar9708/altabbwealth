


"use client"

import React, { useState } from 'react';

const FinanceServices = () => {
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);
  const [showServiceGuideForm, setShowServiceGuideForm] = useState(false);

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

  const handleAssessmentSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Financial Assessment form submitted');
    alert('Thank you for your interest! We will contact you soon for your financial assessment.');
    setShowAssessmentForm(false);
  };

  const handleServiceGuideSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Service Guide form submitted');
    alert('Thank you! Your service guide will be downloaded and sent to your email.');
    setShowServiceGuideForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Financial Assessment Modal */}
      {showAssessmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Get Financial Assessment</h3>
                <button
                  onClick={() => setShowAssessmentForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleAssessmentSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="+91 8505804836"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Current Financial Challenges
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="Briefly describe your current financial challenges..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8BC53F] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Service Guide Modal */}
      {showServiceGuideForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Download Service Guide</h3>
                <button
                  onClick={() => setShowServiceGuideForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleServiceGuideSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Services Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select services</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8BC53F] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Download Service Guide
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-[#8BC53F] mr-4"></div>
            <span className="text-[#8BC53F] font-bold text-sm uppercase tracking-widest">
              FINANCE SERVICES
            </span>
            <div className="w-16 h-1 bg-[#8BC53F] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive <span className="text-[#8BC53F]">Financial</span> Management<br />for Business Growth
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            End-to-end financial solutions that streamline operations, ensure compliance, 
            and provide actionable insights for strategic decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAssessmentForm(true)}
              className="bg-[#8BC53F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Get Financial Assessment
            </button>
            <button 
              onClick={() => setShowServiceGuideForm(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300"
            >
              Download Service Guide
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-white border-b border-[#8BC53F]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#8BC53F] mb-2">{benefit.number}</div>
                <div className="text-[#14274E] font-semibold text-sm mb-1">{benefit.title}</div>
                <div className="text-[#14274E]/60 text-xs">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#8BC53F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Complete <span className="text-[#8BC53F]">Financial Solutions</span>
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#8BC53F]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8BC53F] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      <div className="w-2 h-2 bg-[#8BC53F] rounded-full mr-3"></div>
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
              Our <span className="text-[#8BC53F]">Financial Process</span>
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
                  <div className="w-20 h-20 bg-[#14274E] rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#8BC53F] transition-all duration-300">
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
                <span className="text-[#8BC53F]">Advanced Financial</span> Technology
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
                    <div className="w-6 h-6 bg-[#8BC53F] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="border-2 border-[#8BC53F] text-[#8BC53F] px-6 py-3 rounded-lg font-semibold hover:bg-[#8BC53F] hover:text-white transition-all duration-300">
                Explore Our Financial Tools
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Financial Efficiency Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Processing Efficiency</span>
                  <span className="text-[#8BC53F] font-semibold">70% Faster</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Error Reduction</span>
                  <span className="text-[#8BC53F] font-semibold">90% Less Errors</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Reporting Accuracy</span>
                  <span className="text-[#8BC53F] font-semibold">99.9% Accurate</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Cost Optimization</span>
                  <span className="text-[#8BC53F] font-semibold">40% Savings</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Compliance Rate</span>
                  <span className="text-[#8BC53F] font-semibold">100% Adherence</span>
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
            Ready to Optimize Your <span className="text-[#8BC53F]">Financial Operations</span>?
          </h2>
          <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Transform your financial management with our comprehensive services. 
            Focus on strategic growth while we handle your financial operations with precision and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAssessmentForm(true)}
              className="bg-[#8BC53F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Start Financial Transformation
            </button>
            <button 
              onClick={() => setShowServiceGuideForm(true)}
              className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceServices;