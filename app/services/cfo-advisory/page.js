import React from 'react';

const CFOAdvisoryServices = () => {
  const services = [
    {
      icon: '🎯',
      title: 'Strategic Financial Leadership',
      description: 'Comprehensive financial strategy development and executive-level guidance to drive business growth and sustainability.',
      features: ['Financial Roadmapping', 'KPI Development', 'Strategic Planning', 'Performance Monitoring']
    },
    {
      icon: '🔍',
      title: 'Due Diligence & M&A Support',
      description: 'Expert analysis and strategic guidance through mergers, acquisitions, and partnership evaluations.',
      features: ['Financial Analysis', 'Risk Assessment', 'Valuation Services', 'Integration Planning']
    },
    {
      icon: '🤝',
      title: 'Investor Relations & Fundraising Guidance',
      description: 'Strategic communication and capital raising support to build investor confidence and secure funding.',
      features: ['Pitch Development', 'Investor Communications', 'Capital Strategy', 'Reporting Systems']
    },
    {
      icon: '📈',
      title: 'Driving Profitability & Efficiency',
      description: 'Optimize financial operations and implement cost-saving strategies to maximize profitability.',
      features: ['Cost Optimization', 'Revenue Enhancement', 'Process Improvement', 'Margin Analysis']
    },
    {
      icon: '⚙️',
      title: 'Operational Consulting & Controls',
      description: 'Strengthen operational frameworks and implement robust financial controls for sustainable growth.',
      features: ['Internal Controls', 'Process Automation', 'Compliance Management', 'Risk Mitigation']
    }
  ];

  const stats = [
    { number: '40%', label: 'Average Cost Reduction' },
    { number: '3.2x', label: 'ROI on Advisory Services' },
    { number: '50+', label: 'Successful M&A Transactions' },
    { number: '$500M+', label: 'Capital Raised' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current financial operations and strategic objectives'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Customized financial roadmap aligned with your business goals and market position'
    },
    {
      step: '03',
      title: 'Implementation Support',
      description: 'Hands-on execution of financial strategies with continuous monitoring and adjustment'
    },
    {
      step: '04',
      title: 'Performance Optimization',
      description: 'Ongoing refinement and optimization to ensure sustained financial excellence'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                  CFO ADVISORY
                </span>
                <div className="w-12 h-1 bg-[#C6A04A] ml-4"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Strategic <span className="text-[#C6A04A]">Financial</span> Leadership
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Transform your financial operations with executive-level guidance. We act as your trusted 
                CFO partner to align financial performance with long-term strategic goals and drive sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
                  Schedule Strategy Session
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
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
              Comprehensive <span className="text-[#C6A04A]">CFO Services</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Executive financial leadership tailored to drive your organization's strategic objectives and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C6A04A] to-[#14274E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
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
              Our <span className="text-[#C6A04A]">Strategic Process</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A structured approach to transforming your financial operations and driving measurable results
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

      {/* Case Study Showcase */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-[#C6A04A]">$50M</span> Revenue Growth Achieved
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                How we helped a mid-market technology firm transform their financial operations, 
                implement strategic cost controls, and drive unprecedented revenue growth within 18 months.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '45% reduction in operational costs',
                  '300% improvement in cash flow efficiency',
                  'Successful $25M Series B funding round',
                  'Implementation of AI-driven financial forecasting'
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
                View Case Study
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Finance Function?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Strategic Assessment</span>
                  <span className="text-[#C6A04A] font-semibold">Complimentary</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <span className="text-white/80">Implementation Timeline</span>
                  <span className="text-[#C6A04A] font-semibold">30-90 Days</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/80">Expected ROI</span>
                  <span className="text-[#C6A04A] font-semibold">3-5x Investment</span>
                </div>
              </div>
              <button className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 mt-6">
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
            Elevate Your <span className="text-[#C6A04A]">Financial Leadership</span>
          </h2>
          <p className="text-xl text-[#14274E]/70 mb-8 max-w-2xl mx-auto">
            Partner with our experienced CFO advisors to drive strategic growth, optimize operations, 
            and build a foundation for sustainable financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
              Book Discovery Call
            </button>
            <button className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-xl font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300">
              Download Service Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CFOAdvisoryServices;