// components/ServicesOverview.jsx
'use client';

import { useEffect } from 'react';

const ServicesOverview = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    };
    initAOS();
  }, []);

  const services = [
    {
      number: '01',
      title: 'Accounting & Bookkeeping',
      description: 'Accurate, compliant, and technology-driven accounting support to streamline your financial operations.',
      features: [
        'Accounts Receivable',
        'Accounts Payable', 
        'Expense Tracking, Invoicing & Reporting',
        'Payroll Management',
        'Bank & Ledger Reconciliations'
      ]
    },
    {
      number: '02', 
      title: 'CFO Advisory Services',
      description: 'Strategic financial leadership for organizations seeking clarity, growth, and control. We act as your trusted CFO partner to align financial performance with long-term goals.',
      features: [
        'Strategic Financial Leadership',
        'Due Diligence & M&A Support',
        'Investor Relations & Fundraising Guidance',
        'Driving Profitability & Efficiency',
        'Operational Consulting & Controls'
      ]
    },
    {
      number: '03',
      title: 'Business Tax Services', 
      description: 'Comprehensive tax strategies designed to optimize business structures, minimize liabilities, and ensure compliance. Our experts help you identify sustainable tax-saving opportunities.',
      features: [
        'Business Structure Optimization',
        'Tax Preparation & Filing',
        'Tax Compliance & Advisory',
        'R&D Tax Credits & Incentives', 
        'Tax Savings Opportunities'
      ]
    },
    {
      number: '04',
      title: 'Financial Planning & Analysis (FP&A)',
      description: 'Turning financial data into strategic insight for proactive business decisions. We provide analytical frameworks to enhance forecasting and operational agility.',
      features: [
        'Budgeting & Forecasting',
        'Scenario Modeling',
        'KPI & Performance Analysis',
        'Dynamic Financial Models',
        'Financial Reporting & Insights'
      ]
    },
    {
      number: '05',
      title: 'Mergers & Acquisitions Advisory',
      description: 'Comprehensive support for business growth through strategic partnerships, mergers, and acquisitions.',
      features: [
        'Deal Structuring',
        'Due Diligence',
        'Valuation Advisory',
        'Integration Strategy',
        'Transaction Support'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Professional financial services designed to drive your business growth and operational excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-brand-gold/20 rounded-xl p-8 shadow-sm"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Side - Number and Title */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-text text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {service.number}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-brand-text/70 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right Side - Features */}
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 py-2">
                        <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
                        <span className="text-brand-text font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-brand-background rounded-xl p-12 border border-brand-gold/10">
            <h3 className="text-3xl font-bold text-brand-text mb-4">
              Start Your Financial Transformation
            </h3>
            <p className="text-xl text-brand-text/70 mb-8 max-w-2xl mx-auto">
              Partner with us to optimize your financial operations and drive sustainable business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-text text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Get Started
              </button>
              <button className="border border-brand-text text-brand-text px-8 py-4 rounded-lg font-semibold text-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div> */}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" data-aos="fade-up">
          {[
            { number: '200+', label: 'Clients' },
            { number: '98%', label: 'Satisfaction' },
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Experts' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">
                {stat.number}
              </div>
              <div className="text-brand-text/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;