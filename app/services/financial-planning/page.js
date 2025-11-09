"use client"
import React from 'react';

const FinancialPlanningAnalysis = () => {
  const services = [
    {
      title: 'Budgeting & Forecasting',
      description: 'Develop comprehensive budgets and accurate financial forecasts to guide strategic decision-making and resource allocation.',
      features: ['Annual Budget Development', 'Rolling Forecasts', 'Variance Analysis', 'Cash Flow Projections'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Scenario Modeling',
      description: 'Create multiple financial scenarios to assess risks, opportunities, and prepare for various market conditions.',
      features: ['What-If Analysis', 'Sensitivity Testing', 'Risk Assessment', 'Opportunity Evaluation'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'KPI & Performance Analysis',
      description: 'Identify and track key performance indicators to measure business health and drive operational improvements.',
      features: ['KPI Dashboard Development', 'Performance Metrics', 'Benchmarking Analysis', 'Trend Identification'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Dynamic Financial Models',
      description: 'Build flexible financial models that adapt to changing business conditions and support strategic planning.',
      features: ['Three-Statement Models', 'Valuation Models', 'M&A Analysis', 'Capital Planning'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Financial Reporting & Insights',
      description: 'Transform raw financial data into actionable insights through comprehensive reporting and analysis.',
      features: ['Management Reporting', 'Board Presentations', 'Data Visualization', 'Strategic Recommendations'],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
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
      title: 'Data Collection',
      description: 'Gather and validate financial data from all sources'
    },
    {
      title: 'Analysis',
      description: 'Apply advanced analytical models and frameworks'
    },
    {
      title: 'Insight Generation',
      description: 'Transform data into actionable business intelligence'
    },
    {
      title: 'Strategy Implementation',
      description: 'Execute data-driven financial strategies'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
            Data-Driven <span className="font-bold text-[#C6A04A]">Financial Intelligence</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turning financial data into strategic insight for proactive business decisions. 
            We provide analytical frameworks to enhance forecasting and operational agility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Start Your Analysis
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
              Advanced analytical frameworks to drive informed decision-making and strategic business growth
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
              A structured approach to transforming data into strategic intelligence
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

      {/* CTA Section - Simple & Clean */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your <span className="font-bold text-[#C6A04A]">Financial Analysis</span>?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with our FP&A experts to build robust analytical frameworks and drive data-informed strategic decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Download Framework
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialPlanningAnalysis;