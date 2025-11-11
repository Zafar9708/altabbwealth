"use client"
import React, { useState } from 'react';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('finance');

  const servicesData = {
    finance: {
      title: "Finance",
      icon: "💰",
      services: [
        {
          title: "Bookkeeping & Accounting",
          icon: "📘",
          description: "Accurate records and real-time insights for informed decision-making.",
          features: ["Real-time financial tracking", "Accurate record keeping", "Financial statement preparation", "Chart of accounts management"]
        },
        {
          title: "Pay-In & Pay-Out Management",
          icon: "💸",
          description: "Smooth cash flow operations with transparent tracking.",
          features: ["Cash flow optimization", "Payment processing", "Receivable management", "Vendor payment management"]
        },
        {
          title: "Payroll Services",
          icon: "👥",
          description: "Timely, compliant salary disbursement with complete accuracy.",
          features: ["Payroll processing", "Tax withholding", "Compliance management", "Employee self-service portal"]
        },
        {
          title: "Compliance Management",
          icon: "⚖️",
          description: "Stay ahead of regulatory requirements with expert guidance.",
          features: ["Regulatory compliance", "Policy development", "Risk assessment", "Compliance reporting"]
        },
        {
          title: "Taxation & Advisory",
          icon: "💼",
          description: "Optimize tax efficiency while maintaining full compliance.",
          features: ["Tax planning strategies", "Tax return preparation", "Tax optimization", "Compliance advisory"]
        },
        {
          title: "Audit & Reporting",
          icon: "📊",
          description: "Transparent audits and actionable reports for better business insights.",
          features: ["Financial audits", "Internal controls", "Management reporting", "Performance analysis"]
        },
        {
          title: "Financial Automation",
          icon: "⚙️",
          description: "Smart tools that reduce manual work and enhance accuracy.",
          features: ["Process automation", "Workflow optimization", "Integration services", "Efficiency improvement"]
        }
      ]
    },
    cfo: {
      title: "CFO Advisory Services",
      icon: "👑",
      services: [
        {
          title: "Strategic Financial Leadership",
          icon: "🎯",
          description: "Expert financial guidance to drive business growth and sustainability.",
          features: ["Financial strategy development", "Leadership advisory", "Business planning", "Performance monitoring"]
        },
        {
          title: "M&A Support and Due Diligence",
          icon: "🤝",
          description: "Comprehensive support for mergers, acquisitions, and business combinations.",
          features: ["Due diligence", "Valuation analysis", "Deal structuring", "Integration planning"]
        },
        {
          title: "Investor Relations Guidance",
          icon: "📈",
          description: "Effective communication and relationship management with investors.",
          features: ["Investor reporting", "Stakeholder communication", "Capital raising support", "Market intelligence"]
        },
        {
          title: "Operational Consulting",
          icon: "⚡",
          description: "Optimize business operations for maximum efficiency and profitability.",
          features: ["Process improvement", "Cost optimization", "Operational efficiency", "Performance metrics"]
        },
        {
          title: "Profitability Optimization",
          icon: "💎",
          description: "Strategic initiatives to enhance profitability and financial performance.",
          features: ["Margin improvement", "Revenue enhancement", "Cost reduction", "Profitability analysis"]
        }
      ]
    },
    tax: {
      title: "Business Tax Services",
      icon: "📋",
      services: [
        {
          title: "Business Structure Optimization",
          icon: "🏢",
          description: "Optimize your business structure for tax efficiency and legal protection.",
          features: ["Entity selection", "Structure analysis", "Tax optimization", "Legal compliance"]
        },
        {
          title: "Tax Preparation and Filing",
          icon: "📑",
          description: "Comprehensive tax preparation and timely filing services.",
          features: ["Tax return preparation", "Filing compliance", "Documentation management", "Deadline tracking"]
        },
        {
          title: "Compliance Advisory",
          icon: "🛡️",
          description: "Stay compliant with evolving tax laws and regulations.",
          features: ["Regulatory updates", "Compliance monitoring", "Risk management", "Advisory services"]
        },
        {
          title: "R&D Tax Credits and Savings Strategies",
          icon: "🔬",
          description: "Maximize tax savings through R&D credits and strategic planning.",
          features: ["R&D credit analysis", "Tax savings strategies", "Credit optimization", "Documentation support"]
        }
      ]
    },
    fpa: {
      title: "Financial Planning & Analysis",
      icon: "📊",
      services: [
        {
          title: "Budgeting & Forecasting",
          icon: "🎯",
          description: "Comprehensive budgeting and accurate financial forecasting.",
          features: ["Budget development", "Financial forecasting", "Variance analysis", "Performance tracking"]
        },
        {
          title: "KPI Analysis & Reporting",
          icon: "📈",
          description: "Actionable insights through key performance indicator analysis.",
          features: ["KPI development", "Performance metrics", "Dashboard reporting", "Business intelligence"]
        },
        {
          title: "Scenario Modeling",
          icon: "🔮",
          description: "Strategic planning through comprehensive scenario analysis.",
          features: ["What-if analysis", "Scenario planning", "Risk assessment", "Strategic modeling"]
        },
        {
          title: "Dynamic Financial Models",
          icon: "⚙️",
          description: "Advanced financial modeling for strategic decision-making.",
          features: ["Financial modeling", "Sensitivity analysis", "Decision support", "Strategic planning"]
        }
      ]
    },
    ma: {
      title: "Mergers & Acquisitions Advisory",
      icon: "🤝",
      services: [
        {
          title: "Deal Structuring & Valuation",
          icon: "💎",
          description: "Expert deal structuring and accurate business valuation services.",
          features: ["Business valuation", "Deal structuring", "Negotiation support", "Transaction planning"]
        },
        {
          title: "Due Diligence & Integration Strategy",
          icon: "🔍",
          description: "Comprehensive due diligence and seamless integration planning.",
          features: ["Due diligence", "Integration planning", "Risk assessment", "Post-merger integration"]
        },
        {
          title: "Transaction Support",
          icon: "⚡",
          description: "End-to-end support throughout the transaction lifecycle.",
          features: ["Transaction management", "Documentation support", "Coordination services", "Closing support"]
        }
      ]
    },
    audit: {
      title: "Comprehensive Audit & Legal Oversight",
      icon: "⚖️",
      services: [
        {
          title: "Business Tracking & Monitoring Audit",
          icon: "📊",
          description: "Monitor key metrics and processes for optimal business performance.",
          features: ["Performance monitoring", "Metric tracking", "Process analysis", "Business intelligence"]
        },
        {
          title: "Revenue Audit",
          icon: "💰",
          description: "Verify revenue streams, identify gaps, and mitigate financial risks.",
          features: ["Revenue verification", "Gap analysis", "Risk mitigation", "Revenue optimization"]
        },
        {
          title: "Compliance Audit",
          icon: "🛡️",
          description: "Ensure adherence to regulatory and internal policies.",
          features: ["Regulatory compliance", "Policy adherence", "Internal controls", "Compliance reporting"]
        },
        {
          title: "Litigation Audit",
          icon: "⚖️",
          description: "Assess ongoing or potential legal risks and outcomes.",
          features: ["Legal risk assessment", "Case evaluation", "Outcome analysis", "Risk management"]
        },
        {
          title: "Legal Review",
          icon: "📜",
          description: "Evaluate contracts, agreements, and legal frameworks.",
          features: ["Contract review", "Legal documentation", "Agreement analysis", "Compliance check"]
        },
        {
          title: "Leadership Experts Agreement",
          icon: "🤝",
          description: "Guidance on leadership agreements and governance frameworks.",
          features: ["Leadership contracts", "Governance frameworks", "Agreement structuring", "Compliance advisory"]
        }
      ]
    }
  };

  const categories = [
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'cfo', name: 'CFO Advisory', icon: '👑' },
    { id: 'tax', name: 'Business Tax', icon: '📋' },
    { id: 'fpa', name: 'FP&A', icon: '📊' },
    { id: 'ma', name: 'M&A Advisory', icon: '🤝' },
    { id: 'audit', name: 'Audit & Legal', icon: '⚖️' }
  ];

  const currentService = servicesData[activeCategory];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
              style={{ color: '#14274E' }}>
            Our Services
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto mb-12"
             style={{ color: 'rgba(20, 39, 78, 0.7)' }}>
            Comprehensive Solutions Tailored to Your Needs
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-brand-gold text-white shadow-lg'
                    : 'bg-gray-100 text-brand-text hover:bg-gray-200'
                }`}
                style={{ 
                  backgroundColor: activeCategory === category.id ? '#C6A04A' : undefined,
                  color: activeCategory === category.id ? 'white' : '#14274E'
                }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#14274E' }}>
              {currentService.title}
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  {/* Service Icon */}
                  <div className="text-4xl mb-4" style={{ color: '#C6A04A' }}>
                    {service.icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#14274E' }}>
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover Action */}
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-brand-gold font-semibold hover:text-brand-text transition-colors duration-300 group">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#14274E' }}>
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive financial services can drive your business growth and ensure compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/consultation"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#C6A04A', color: 'white', letterSpacing: '0.05em' }}
            >
              Get Expert Advice
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: '#14274E', color: '#14274E', letterSpacing: '0.05em' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;