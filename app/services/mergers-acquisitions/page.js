import React from 'react';

const MergersAcquisitionsAdvisory = () => {
  const services = [
    {
      title: 'Deal Structuring',
      description: 'Design optimal transaction structures that maximize value and minimize risks for all parties involved.',
      features: ['Transaction Architecture', 'Payment Terms Optimization', 'Risk Allocation', 'Legal Framework Design'],
      icon: '🏗️'
    },
    {
      title: 'Due Diligence',
      description: 'Comprehensive financial, operational, and legal examination to identify opportunities and mitigate risks.',
      features: ['Financial Analysis', 'Operational Review', 'Legal Compliance', 'Risk Assessment'],
      icon: '🔍'
    },
    {
      title: 'Valuation Advisory',
      description: 'Accurate business valuation and pricing strategies to ensure fair market transactions.',
      features: ['Business Valuation', 'Pricing Strategy', 'Fairness Opinions', 'Market Analysis'],
      icon: '💰'
    },
    {
      title: 'Integration Strategy',
      description: 'Seamless post-merger integration planning to realize synergies and ensure operational continuity.',
      features: ['Integration Planning', 'Synergy Realization', 'Cultural Alignment', 'Operational Merging'],
      icon: '🔄'
    },
    {
      title: 'Transaction Support',
      description: 'End-to-end deal execution support from initial negotiation to final closing and beyond.',
      features: ['Deal Negotiation', 'Documentation', 'Closing Support', 'Post-Deal Monitoring'],
      icon: '⚡'
    }
  ];

  const dealPhases = [
    {
      phase: 'Strategy & Planning',
      steps: ['Target Identification', 'Valuation Analysis', 'Initial Approach']
    },
    {
      phase: 'Due Diligence',
      steps: ['Financial Review', 'Legal Examination', 'Operational Assessment']
    },
    {
      phase: 'Negotiation & Structuring',
      steps: ['Deal Terms', 'Pricing Strategy', 'Contract Development']
    },
    {
      phase: 'Integration & Execution',
      steps: ['Integration Planning', 'Implementation', 'Performance Monitoring']
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
      title: 'Tech Startup Acquisition',
      result: '3x ROI in 18 months',
      description: 'Strategic acquisition leading to market expansion and technology integration'
    },
    {
      title: 'Cross-Border Merger',
      result: '45% Market Share Gain',
      description: 'International merger creating industry leadership position'
    },
    {
      title: 'Private Equity Exit',
      result: '8x Multiple Achieved',
      description: 'Successful exit strategy maximizing investor returns'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dark with Geometric Pattern */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#C6A04A] rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-[#C6A04A] rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border-2 border-[#C6A04A] rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-[#C6A04A]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-[#C6A04A] mr-4"></div>
            <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
              M&A ADVISORY
            </span>
            <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Strategic <span className="text-[#C6A04A]">Growth</span> Through<br />Mergers & Acquisitions
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support for business growth through strategic partnerships, mergers, and acquisitions. 
            We guide you through every phase of the transaction lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
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
                className="bg-white rounded-2xl shadow-2xl border border-[#C6A04A]/20 p-6 text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
                <div className="text-[#14274E] font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Icon Cards with Hover */}
      <section className="py-20 bg-[#FAF1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Comprehensive <span className="text-[#C6A04A]">M&A Services</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              End-to-end advisory services designed to maximize value and ensure successful transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
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

      {/* Deal Process Section - Horizontal Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              The <span className="text-[#C6A04A]">M&A Journey</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A structured approach to successful mergers and acquisitions
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#C6A04A]/20 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {dealPhases.map((phase, index) => (
                <div key={index} className="text-center relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-6 h-6 bg-[#C6A04A] rounded-full border-4 border-white -translate-y-8 z-10"></div>
                  
                  <div className="bg-[#FAF1E6] rounded-2xl p-6 border border-[#C6A04A]/10">
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="text-[#C6A04A]">Proven Success</span> in M&A
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real results achieved through strategic mergers and acquisitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-white transform hover:scale-105 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                <div className="text-[#C6A04A] font-bold text-lg mb-4">{study.result}</div>
                <p className="text-white/80 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Split with Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#14274E] mb-6">
                Ready to Explore <span className="text-[#C6A04A]">Strategic Opportunities</span>?
              </h2>
              <p className="text-xl text-[#14274E]/70 mb-8 leading-relaxed">
                Schedule a confidential consultation to discuss your M&A objectives and 
                discover how our advisory services can drive your growth strategy.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Confidential assessment of opportunities',
                  'Customized deal strategy development',
                  'Access to exclusive deal flow',
                  'End-to-end transaction support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#14274E] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF1E6] rounded-2xl p-8 border border-[#C6A04A]/20">
              <h3 className="text-2xl font-bold text-[#14274E] mb-6">Begin Your M&A Journey</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                />
                <select className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]">
                  <option>Transaction Type</option>
                  <option>Acquisition</option>
                  <option>Merger</option>
                  <option>Strategic Partnership</option>
                  <option>Divestiture</option>
                </select>
                <button className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
                  Schedule Confidential Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergersAcquisitionsAdvisory;