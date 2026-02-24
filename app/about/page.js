

import React from 'react';

const BRAND_COLORS = {
  background: '#8BC53F',
  text: '#14274E',
  gold: '#8BC53F',
  muted: 'rgba(20, 39, 78, 0.7)',
  lightGold: '#F8F6F0'
};

const AboutUsContent = () => {
  const features = [
    {
      icon: '📊',
      title: 'Complete Financial Management',
      description: 'End-to-end solutions from bookkeeping to strategic advisory'
    },
    {
      icon: '⚡',
      title: 'Technology-Driven',
      description: 'Cutting-edge automation for accuracy and efficiency'
    },
    {
      icon: '🛡️',
      title: 'Trust & Integrity',
      description: 'Uncompromising ethical standards in every transaction'
    },
    {
      icon: '📈',
      title: 'Growth Focused',
      description: 'Strategic insights to drive your business forward'
    }
  ];

  const stats = [
    { number: '200+', label: 'Businesses Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  const services = [
    'Accounting & Bookkeeping',
    'Taxation & Compliance',
    'Payroll Management',
    'CFO Advisory',
    'Financial Planning',
    'Audit & Legal Oversight'
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-brand-gold mr-4"></div>
                <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
                  About cmdfin
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: BRAND_COLORS.text }}>
                We Manage Your Numbers So You Can Focus on Growth
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At cmdfin, we provide a complete range of financial services designed to give businesses clarity, confidence, and control over their finances.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Rooted in <strong style={{ color: BRAND_COLORS.gold }}>Trust</strong> and <strong style={{ color: BRAND_COLORS.gold }}>Integrity</strong>, we combine deep financial expertise with cutting-edge automation tools. From daily bookkeeping to taxation, payroll, audits, and strategic advisory — we manage your entire financial ecosystem with precision, professionalism, and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: BRAND_COLORS.gold, color: 'white' }}
                >
                  Start Your Journey
                </a>
                <a
                  href="/service"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105"
                  style={{ borderColor: BRAND_COLORS.text, color: BRAND_COLORS.text }}
                >
                  Our Services
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center p-6 rounded-xl border border-gray-100 hover:border-brand-gold/30 transition-colors duration-300">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className="font-bold text-brand-text mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">Our Mission</span>
                  <h2 className="text-2xl font-bold text-brand-text">Empowering Financial Success</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide intelligent, transparent, and growth-driven financial solutions that empower clients to build wealth, secure their future, and create enduring legacies.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-text rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">Our Vision</span>
                  <h2 className="text-2xl font-bold text-brand-text">Global Trust & Innovation</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted global name in financial advisory, recognized for integrity, innovation, and meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: BRAND_COLORS.gold }}>
                  {stat.number}
                </div>
                <div className="text-brand-text font-semibold text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-text mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your financial ecosystem with precision and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-gold rounded-full mr-4"></div>
                  <span className="font-semibold text-brand-text">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-text mb-6">Why Businesses Choose cmdfin</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-2">Deep Financial Expertise</h3>
                    <p className="text-gray-600">Seasoned professionals with extensive experience across all financial domains</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">Advanced automation tools that enhance accuracy and reduce manual work</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-2">Proactive Partnership</h3>
                    <p className="text-gray-600">We act as an extension of your team, providing strategic guidance and support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-text to-brand-text/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Financial Operations?</h3>
              <p className="text-white/80 mb-6">
                Join hundreds of businesses that trust us with their financial management while they focus on growth and innovation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-brand-gold text-white py-4 px-6 rounded-xl font-semibold hover:bg-brand-gold/90 transition-colors duration-300"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-6">
            Start Focusing on What Matters Most
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us handle the numbers while you drive your business forward. Experience the cmdfin difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: BRAND_COLORS.gold, color: 'white' }}
            >
              Get Started Today
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: BRAND_COLORS.text, color: BRAND_COLORS.text }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return <AboutUsContent />;
}

export default App;