


"use client"
import React, { useState } from 'react';

const MergersAcquisitionsAdvisory = () => {
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);
  const [showMAGuideForm, setShowMAGuideForm] = useState(false);

  const services = [
    {
      title: 'Deal Structuring & Valuation',
      description: 'Design optimal transaction structures and provide accurate business valuation to maximize value and ensure fair market transactions.',
      features: [
        'Transaction architecture',
        'Business valuation analysis',
        'Pricing strategy development',
        'Risk allocation frameworks',
        'Legal structure optimization'
      ]
    },
    {
      title: 'Due Diligence & Integration Strategy',
      description: 'Comprehensive due diligence examination and strategic integration planning to identify opportunities and ensure seamless post-merger operations.',
      features: [
        'Financial due diligence',
        'Operational review',
        'Integration planning',
        'Synergy realization',
        'Cultural alignment strategy'
      ]
    },
    {
      title: 'Transaction Support',
      description: 'End-to-end deal execution support from initial negotiation through final closing and post-transaction monitoring.',
      features: [
        'Deal negotiation support',
        'Documentation management',
        'Closing coordination',
        'Post-deal monitoring',
        'Performance tracking'
      ]
    }
  ];

  const dealPhases = [
    {
      phase: 'Strategy & Planning',
      steps: ['Target identification', 'Valuation analysis', 'Initial approach strategy']
    },
    {
      phase: 'Due Diligence',
      steps: ['Financial review', 'Legal examination', 'Operational assessment']
    },
    {
      phase: 'Negotiation & Structuring',
      steps: ['Deal terms negotiation', 'Pricing strategy', 'Contract development']
    },
    {
      phase: 'Integration & Execution',
      steps: ['Integration planning', 'Implementation support', 'Performance monitoring']
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Deals' },
    { number: '$2B+', label: 'Transaction Value' },
    { number: '95%', label: 'Deal Success Rate' },
    { number: '40%', label: 'Average Synergy Realized' }
  ];

  const caseStudies = [
    {
      title: 'Technology Sector Acquisition',
      result: '3x ROI in 18 months',
      description: 'Strategic acquisition leading to market expansion and successful technology integration'
    },
    {
      title: 'Cross-Border Merger',
      result: '45% Market Share Gain',
      description: 'International merger creating industry leadership and operational synergies'
    },
    {
      title: 'Private Equity Portfolio Exit',
      result: '8x Multiple Achieved',
      description: 'Successful exit strategy maximizing investor returns through optimal deal structuring'
    }
  ];

  const handleAssessmentSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('M&A Assessment form submitted');
    alert('Thank you for your interest! We will contact you soon for your M&A assessment.');
    setShowAssessmentForm(false);
  };

  const handleMAGuideSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('M&A Guide form submitted');
    alert('Thank you! Our M&A strategy guide will be downloaded and sent to your email.');
    setShowMAGuideForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* M&A Assessment Modal */}
      {showAssessmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Start M&A Assessment</h3>
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
                    Company Annual Revenue
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select revenue range</option>
                    <option value="0-10M">$0 - $10M</option>
                    <option value="10M-50M">$10M - $50M</option>
                    <option value="50M-100M">$50M - $100M</option>
                    <option value="100M-500M">$100M - $500M</option>
                    <option value="500M+">$500M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    M&A Objective
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select your objective</option>
                    <option value="acquisition">Strategic Acquisition</option>
                    <option value="merger">Merger</option>
                    <option value="divestiture">Divestiture</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="exploration">Exploring Options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Current M&A Challenges
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300"
                    placeholder="Briefly describe your current M&A challenges or objectives..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8BC53F] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Start Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* M&A Guide Modal */}
      {showMAGuideForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Download M&A Guide</h3>
                <button
                  onClick={() => setShowMAGuideForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleMAGuideSubmit} className="space-y-4">
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
                    M&A Services Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#8BC53F] focus:ring-2 focus:ring-[#8BC53F]/20 transition-colors duration-300 text-[#14274E]">
                    <option value="">Select services</option>
                    <option value="structuring">Deal Structuring & Valuation</option>
                    <option value="diligence">Due Diligence</option>
                    <option value="integration">Integration Strategy</option>
                    <option value="transaction">Transaction Support</option>
                    <option value="all">All M&A Services</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8BC53F] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                >
                  Download M&A Guide
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Dark with Geometric Pattern */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#8BC53F] rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-[#8BC53F] rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border-2 border-[#8BC53F] rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-[#8BC53F]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-[#8BC53F] mr-4"></div>
            <span className="text-[#8BC53F] font-bold text-sm uppercase tracking-widest">
              MERGERS & ACQUISITIONS ADVISORY
            </span>
            <div className="w-16 h-1 bg-[#8BC53F] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Strategic <span className="text-[#8BC53F]">Growth</span> Through<br />Mergers & Acquisitions
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive M&A advisory services designed to drive business growth through strategic partnerships, 
            mergers, and acquisitions. We provide expert guidance through deal structuring, due diligence, and transaction execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAssessmentForm(true)}
              className="bg-[#8BC53F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Start M&A Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              View Deal Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section className="py-16 bg-white relative -mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-2xl border border-[#8BC53F]/20 p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#8BC53F] mb-2">{stat.number}</div>
                <div className="text-[#14274E] font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean Cards */}
      <section className="py-20 bg-[#8BC53F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Comprehensive <span className="text-white">M&A Advisory</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              End-to-end advisory services designed to maximize value and ensure successful transactions 
              through expert deal structuring, thorough due diligence, and comprehensive transaction support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Deal Process Section - Horizontal Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              The <span className="text-[#8BC53F]">M&A Journey</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A structured approach to successful mergers and acquisitions from strategy to integration
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#8BC53F]/20 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {dealPhases.map((phase, index) => (
                <div key={index} className="text-center relative">
                  {/* Timeline Dot */}
                  {/* <div className="hidden lg:block absolute top-1/2 left-1/2 w-6 h-6 bg-[#8BC53F] rounded-full border-4 border-white -translate-y-8 z-10"></div> */}
                  
                  <div className="bg-[#8BC53F] rounded-2xl p-6 border border-[#8BC53F]/10">
                    <div className="w-12 h-12 bg-[#14274E] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#14274E] mb-4">
                      {phase.phase}
                    </h3>
                    
                    <div className="space-y-2">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="text-[#14274E]/70 text-sm">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
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
                <span className="text-[#8BC53F]">$500M</span> Deal Value Created
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                How our M&A advisory services helped a manufacturing company achieve strategic growth 
                through targeted acquisitions and successful integration, resulting in 60% market expansion.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '$500M in successful deal transactions',
                  '60% market expansion through strategic acquisitions',
                  '95% due diligence accuracy rate',
                  'Seamless post-merger integration',
                  '45% increase in operational efficiency'
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
                View Success Stories
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">M&A Readiness Assessment</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Initial Assessment</span>
                  <span className="text-[#8BC53F] font-semibold">Complimentary</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Deal Timeline</span>
                  <span className="text-[#8BC53F] font-semibold">3-9 Months</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Success Rate</span>
                  <span className="text-[#8BC53F] font-semibold">95%</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Average Value Creation</span>
                  <span className="text-[#8BC53F] font-semibold">25-60%</span>
                </div>
              </div>
              <button 
                onClick={() => setShowAssessmentForm(true)}
                className="w-full bg-[#8BC53F] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6"
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              <span className="text-[#8BC53F]">Proven Success</span> in M&A
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              Real results achieved through strategic mergers and acquisitions across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-[#8BC53F] rounded-2xl p-8 border border-[#8BC53F]/20 transform hover:scale-105 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-[#14274E] mb-3">{study.title}</h3>
                <div className="text-[#14274E] font-bold text-lg mb-4">{study.result}</div>
                <p className="text-[#14274E]/80 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore <span className="text-[#8BC53F]">Strategic Opportunities</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to discuss your M&A objectives and 
            discover how our advisory services can drive your growth strategy through successful transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAssessmentForm(true)}
              className="bg-[#8BC53F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => setShowMAGuideForm(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300"
            >
              Download M&A Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergersAcquisitionsAdvisory;