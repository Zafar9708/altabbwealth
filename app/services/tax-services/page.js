


"use client"
import React, { useState } from 'react';

const BusinessTaxServices = () => {
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);
  const [showTaxGuideForm, setShowTaxGuideForm] = useState(false);

  const services = [
    {
      title: 'Business Structure Optimization',
      description: 'Strategic entity selection and restructuring to maximize tax efficiency and operational flexibility while ensuring optimal legal protection.',
      features: [
        'Entity selection analysis',
        'Corporate restructuring',
        'Tax efficiency planning',
        'Ownership transition strategy',
        'Legal protection optimization'
      ]
    },
    {
      title: 'Tax Preparation & Filing',
      description: 'Comprehensive tax return preparation and timely filing to ensure accuracy, compliance, and maximization of available deductions.',
      features: [
        'Corporate tax returns',
        'Partnership filings',
        'International reporting',
        'State and local compliance',
        'Timely submission management'
      ]
    },
    {
      title: 'Compliance Advisory',
      description: 'Proactive compliance management and strategic advisory to navigate complex tax regulations and minimize compliance risks.',
      features: [
        'Regulatory compliance monitoring',
        'Audit support and defense',
        'Strategic tax planning',
        'Risk management framework',
        'Compliance reporting'
      ]
    },
    {
      title: 'R&D Tax Credits & Savings Strategies',
      description: 'Maximize government incentives and implement strategic tax-saving approaches to enhance profitability and support innovation.',
      features: [
        'R&D credit qualification',
        'Incentive identification',
        'Documentation strategy',
        'Claim optimization',
        'Tax savings implementation'
      ]
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

  const handleAssessmentSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Tax Assessment form submitted');
    alert('Thank you for your interest! We will contact you soon for your free tax assessment.');
    setShowAssessmentForm(false);
  };

  const handleTaxGuideSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Tax Guide form submitted');
    alert('Thank you! Your tax optimization guide will be downloaded and sent to your email.');
    setShowTaxGuideForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Tax Assessment Modal */}
      {showAssessmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Get Free Tax Assessment</h3>
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
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Annual Revenue
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select revenue range</option>
                    <option value="0-1M">$0 - $1M</option>
                    <option value="1M-5M">$1M - $5M</option>
                    <option value="5M-10M">$5M - $10M</option>
                    <option value="10M-50M">$10M - $50M</option>
                    <option value="50M+">$50M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Current Tax Challenges
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="Briefly describe your current tax challenges..."
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

      {/* Tax Guide Modal */}
      {showTaxGuideForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Download Tax Guide</h3>
                <button
                  onClick={() => setShowTaxGuideForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleTaxGuideSubmit} className="space-y-4">
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
                    Tax Services Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select tax services</option>
                    <option value="structure">Business Structure Optimization</option>
                    <option value="preparation">Tax Preparation & Filing</option>
                    <option value="compliance">Compliance Advisory</option>
                    <option value="rd">R&D Tax Credits</option>
                    <option value="all">All Tax Services</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8BC53F] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Download Tax Guide
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Split Layout */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="text-white py-20">
              <div className="mb-8">
                <div className="w-20 h-1 bg-[#8BC53F] mb-6"></div>
                <span className="text-[#8BC53F] font-bold text-sm uppercase tracking-widest">
                  BUSINESS TAX SERVICES
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Strategic Tax <br />
                <span className="text-[#8BC53F]">Optimization</span> <br />
                for Business Growth
              </h1>
              
              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl">
                Comprehensive tax strategies designed to optimize business structures, minimize liabilities, 
                ensure compliance, and maximize savings through innovative tax credit opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setShowAssessmentForm(true)}
                  className="bg-[#8BC53F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
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
                  <div className="text-4xl font-bold text-[#8BC53F] mb-3">{stat.number}</div>
                  <div className="text-white/80 text-sm leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section className="py-20 bg-[#8BC53F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Comprehensive <span className="text-white">Tax Solutions</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Expert tax services designed to optimize your financial position while ensuring full compliance 
              with evolving regulatory requirements and maximizing savings opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                
                <h3 className="text-2xl font-bold text-[#14274E] mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-[#14274E]/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#8BC53F] rounded-full mr-3"></div>
                      <span className="text-[#14274E] font-medium text-sm">{feature}</span>
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
              Our <span className="text-[#8BC53F]">Strategic Process</span>
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

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-[#8BC53F]">$2.3M</span> R&D Credits Secured
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                How we helped a technology startup maximize their R&D tax credits while optimizing 
                their business structure, resulting in 45% tax savings and improved cash flow.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '$2.3M in R&D tax credits secured',
                  '45% reduction in overall tax liability',
                  'Optimized business structure for growth',
                  '100% compliance across all filings',
                  'Strategic tax planning for future expansion'
                ].map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#8BC53F] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{result}</span>
                  </div>
                ))}
              </div>
              <button className="border-2 border-[#8BC53F] text-[#8BC53F] px-6 py-3 rounded-lg font-semibold hover:bg-[#8BC53F] hover:text-white transition-all duration-300">
                View Case Study
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready for Tax Optimization?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Tax Assessment</span>
                  <span className="text-[#8BC53F] font-semibold">Complimentary</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Average Savings</span>
                  <span className="text-[#8BC53F] font-semibold">25-45%</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Implementation Timeline</span>
                  <span className="text-[#8BC53F] font-semibold">30-60 Days</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Client Success Rate</span>
                  <span className="text-[#8BC53F] font-semibold">98%</span>
                </div>
              </div>
              <button 
                onClick={() => setShowAssessmentForm(true)}
                className="w-full bg-[#8BC53F] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6"
              >
                Start Tax Optimization
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#14274E] mb-6">
            Optimize Your <span className="text-[#8BC53F]">Tax Strategy</span> Today
          </h2>
          <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Partner with our tax experts to maximize savings, ensure compliance, and implement 
            strategic tax solutions that drive your business growth and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAssessmentForm(true)}
              className="bg-[#8BC53F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Get Free Assessment
            </button>
            <button 
              onClick={() => setShowTaxGuideForm(true)}
              className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300"
            >
              Download Tax Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTaxServices;