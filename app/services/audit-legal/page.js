"use client"
import React from 'react';

const ComprehensiveAuditLegalOversight = () => {
  const services = [
    {
      title: 'Business Tracking & Monitoring Audit',
      description: 'Comprehensive monitoring of key business metrics and processes to ensure operational efficiency and identify improvement opportunities.',
      features: [
        'Key performance indicator tracking',
        'Process efficiency analysis',
        'Operational performance monitoring',
        'Benchmarking against industry standards',
        'Continuous improvement recommendations'
      ]
    },
    {
      title: 'Revenue Audit',
      description: 'Thorough verification of revenue streams, identification of gaps, and implementation of risk mitigation strategies.',
      features: [
        'Revenue stream verification',
        'Gap analysis and identification',
        'Financial risk mitigation',
        'Revenue recognition compliance',
        'Profitability analysis'
      ]
    },
    {
      title: 'Compliance Audit',
      description: 'Ensure complete adherence to regulatory requirements and internal policies across all business operations.',
      features: [
        'Regulatory compliance assessment',
        'Internal policy adherence',
        'Compliance framework development',
        'Risk assessment and management',
        'Reporting and documentation'
      ]
    },
    {
      title: 'Litigation Audit',
      description: 'Comprehensive assessment of ongoing and potential legal risks with strategic outcome analysis.',
      features: [
        'Legal risk assessment',
        'Ongoing litigation review',
        'Potential liability analysis',
        'Outcome probability evaluation',
        'Risk mitigation strategies'
      ]
    },
    {
      title: 'Legal Review',
      description: 'Thorough evaluation of contracts, agreements, and legal frameworks to ensure compliance and protection.',
      features: [
        'Contract review and analysis',
        'Agreement compliance assessment',
        'Legal framework evaluation',
        'Risk identification and mitigation',
        'Documentation optimization'
      ]
    },
    {
      title: 'Leadership Experts Agreement',
      description: 'Strategic guidance on leadership agreements and governance frameworks for optimal organizational structure.',
      features: [
        'Leadership agreement development',
        'Governance framework design',
        'Executive compensation review',
        'Succession planning guidance',
        'Board governance optimization'
      ]
    }
  ];

  const stats = [
    { number: '100%', label: 'Compliance Assurance' },
    { number: '40%', label: 'Risk Reduction' },
    { number: '50+', label: 'Audits Completed' },
    { number: '$10M+', label: 'Risk Mitigated' }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive review of current audit and legal frameworks'
    },
    {
      step: '02',
      title: 'Risk Identification',
      description: 'Detailed analysis of potential risks and compliance gaps'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execution of audit procedures and legal oversight measures'
    },
    {
      step: '04',
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring and optimization of audit processes'
    }
  ];

  const caseStudies = [
    {
      title: 'Financial Services Compliance',
      result: '100% Regulatory Compliance',
      description: 'Comprehensive audit ensuring complete adherence to financial regulations and risk mitigation'
    },
    {
      title: 'Manufacturing Revenue Audit',
      result: '15% Revenue Optimization',
      description: 'Identified revenue gaps and implemented strategies for significant revenue improvement'
    },
    {
      title: 'Technology Contract Review',
      result: 'Zero Legal Disputes',
      description: 'Thorough legal review preventing potential disputes and ensuring contract compliance'
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
              COMPREHENSIVE AUDIT & LEGAL OVERSIGHT
            </span>
            <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Complete <span className="text-[#C6A04A]">Audit & Legal</span> Framework
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive audit services and legal oversight designed to ensure regulatory compliance, 
            mitigate risks, and optimize business operations through thorough monitoring and analysis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
              Schedule Audit Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Download Compliance Guide
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-white border-b border-[#C6A04A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
                <div className="text-[#14274E] font-semibold text-sm mb-1">{stat.label}</div>
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
              Comprehensive <span className="text-[#C6A04A]">Audit & Legal Services</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              End-to-end audit and legal oversight solutions designed to ensure compliance, 
              mitigate risks, and optimize business performance through thorough monitoring and analysis.
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
              Our <span className="text-[#C6A04A]">Audit Process</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-2xl mx-auto">
              A systematic approach to comprehensive audit and legal oversight ensuring thorough analysis and continuous improvement
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="text-[#C6A04A]">Proven Results</span> in Audit & Legal
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real outcomes achieved through comprehensive audit services and legal oversight
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

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#14274E] mb-6">
                <span className="text-[#C6A04A]">Comprehensive Risk Mitigation</span> Framework
              </h2>
              <p className="text-xl text-[#14274E]/70 mb-6 leading-relaxed">
                Our integrated audit and legal oversight approach ensures complete compliance, 
                identifies potential risks, and implements robust mitigation strategies across all business operations.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  '100% regulatory compliance assurance',
                  'Comprehensive risk identification and mitigation',
                  'Continuous monitoring and improvement',
                  'Expert legal review and guidance',
                  'Strategic leadership governance frameworks'
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
              <button className="border-2 border-[#C6A04A] text-[#C6A04A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C6A04A] hover:text-white transition-all duration-300">
                View Compliance Framework
              </button>
            </div>

            <div className="bg-[#FAF1E6] rounded-2xl p-8 border border-[#C6A04A]/20">
              <h3 className="text-2xl font-bold text-[#14274E] mb-6">Audit Readiness Assessment</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[#C6A04A]/20">
                  <span className="text-[#14274E]">Initial Assessment</span>
                  <span className="text-[#C6A04A] font-semibold">Complimentary</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#C6A04A]/20">
                  <span className="text-[#14274E]">Compliance Rate</span>
                  <span className="text-[#C6A04A] font-semibold">100% Target</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#C6A04A]/20">
                  <span className="text-[#14274E]">Risk Reduction</span>
                  <span className="text-[#C6A04A] font-semibold">40% Average</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#14274E]">Implementation Timeline</span>
                  <span className="text-[#C6A04A] font-semibold">4-8 Weeks</span>
                </div>
              </div>
              <button className="w-full bg-[#C6A04A] text-white py-4 rounded-xl font-semibold hover:bg-[#14274E] transition-all duration-300 mt-6">
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ensure Complete <span className="text-[#C6A04A]">Compliance & Protection</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with our audit and legal experts to implement comprehensive oversight frameworks 
            that ensure regulatory compliance, mitigate risks, and protect your business interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Download Audit Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveAuditLegalOversight;