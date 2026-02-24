"use client"
import { useState } from 'react';
import Link from 'next/link';

const PartnersPage = () => {
  const [activeTab, setActiveTab] = useState('become-partner');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqItems = [
    {
      question: "What are the minimum requirements to become a partner?",
      answer: "We look for experienced financial professionals with a clean compliance record, minimum 3 years of industry experience, and a commitment to delivering exceptional client service."
    },
    {
      question: "How long does the onboarding process take?",
      answer: "The comprehensive onboarding process typically takes 4-6 weeks, including technology setup, compliance review, and initial training."
    },
    {
      question: "Can I maintain my existing brand and identity?",
      answer: "Absolutely. While we offer co-branding opportunities, partners can maintain their existing brand identity and gradually integrate our resources."
    }
  ];

  const services = [
    {
      title: "Finance",
      description: "Complete financial management solutions to streamline your operations and ensure compliance."
    },
    {
      title: "CFO Advisory Services", 
      description: "Strategic financial leadership for organizations seeking clarity, growth, and control."
    },
    {
      title: "Business Tax Services",
      description: "Comprehensive tax strategies designed to optimize business structures and ensure compliance."
    },
    {
      title: "Financial Planning & Analysis",
      description: "Turning financial data into strategic insight for proactive business decisions."
    }
  ];

  const stats = [
    { value: "200+", label: "Clients Served" },
    { value: "10+", label: "Years Experience" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-brand-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Innovation Backed by <span className="text-brand-gold">Integrity</span>
          </h1>
          <p className="text-xl text-brand-text/80 mb-8 max-w-3xl mx-auto">
            Where Tech Meets Trust in Finance. Leveraging cutting-edge technology while maintaining the highest standards of financial stewardship.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-brand-gold/10">
                <div className="text-2xl font-bold text-brand-gold mb-1">{stat.value}</div>
                <div className="text-sm text-brand-text/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-brand-gold/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-brand-background rounded-lg p-1 border border-brand-gold/20">
              {['become-partner', 'find-partner'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-brand-text text-white'
                      : 'text-brand-text hover:text-brand-gold'
                  }`}
                >
                  {tab === 'become-partner' ? 'Become a Partner' : 'Find a Partner'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Become a Partner Content */}
        {activeTab === 'become-partner' && (
          <div className="space-y-16">
            {/* Mission Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">Our Mission</h2>
              <p className="text-lg text-brand-text/80 mb-8 max-w-4xl mx-auto italic">
                "At cmdfin, our mission is to provide intelligent, transparent, and growth-driven financial solutions that empower clients to build wealth, secure their future, and create enduring legacies."
              </p>
            </section>

            {/* Services Overview */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Our Services</h2>
                <p className="text-lg text-brand-text/60">Comprehensive Solutions Tailored to Your Needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-brand-gold/20">
                    <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>
                    <p className="text-brand-text/70">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Partner With Us */}
            <section className="bg-white rounded-2xl p-8 border border-brand-gold/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Why Partner With ALTABB?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-brand-text mb-4 flex items-center">
                    <span className="text-brand-gold mr-2">✓</span>
                    Trust & Integrity
                  </h4>
                  <p className="text-brand-text/70 mb-6">Building lasting relationships based on transparency and ethical practices</p>
                  
                  <h4 className="text-lg font-bold text-brand-text mb-4 flex items-center">
                    <span className="text-brand-gold mr-2">⚡</span>
                    Cutting-Edge Automation
                  </h4>
                  <p className="text-brand-text/70 mb-6">Leveraging technology to deliver efficient, accurate financial solutions</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-text mb-4 flex items-center">
                    <span className="text-brand-gold mr-2">🎯</span>
                    Comprehensive Solutions
                  </h4>
                  <p className="text-brand-text/70 mb-6">End-to-end financial services covering all your business needs</p>
                  
                  <h4 className="text-lg font-bold text-brand-text mb-4 flex items-center">
                    <span className="text-brand-gold mr-2">🛡️</span>
                    Expertise You Can Rely On
                  </h4>
                  <p className="text-brand-text/70">Professionals dedicated to your success with reliable data and precise reporting</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="text-center">
              <p className="text-lg text-brand-text/80 mb-8">
                Join our elite network of financial partners and leverage our technology, expertise, and resources to grow your practice.
              </p>
              <Link 
                href="/contact" 
                className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-text transition-all duration-300 inline-block text-lg"
              >
                Ready to Become a Partner?
              </Link>
            </div>

            {/* FAQ Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="bg-white rounded-xl p-6 border border-brand-gold/20">
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <div 
                      key={index}
                      className="border-b border-brand-gold/10 last:border-b-0 pb-6 last:pb-0"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <h4 className="text-lg font-semibold text-brand-text pr-8">{faq.question}</h4>
                        <span className="text-brand-gold font-bold text-xl flex-shrink-0">
                          {expandedFaq === index ? '−' : '+'}
                        </span>
                      </button>
                      
                      {expandedFaq === index && (
                        <div className="mt-4 text-brand-text/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Find a Partner Content */}
        {activeTab === 'find-partner' && (
          <div className="space-y-16">
            {/* About Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">Your Trusted Partner in Financial Excellence</h2>
              <p className="text-lg text-brand-text/80 mb-8 max-w-4xl mx-auto">
                We Manage Your Numbers So You Can Focus on Growth. At cmdfin, we provide a complete range of financial services designed to give businesses clarity, confidence, and control over their finances.
              </p>
            </section>

            {/* Global Presence */}
            <section className="bg-white rounded-2xl p-8 border border-brand-gold/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Global Reach</h2>
                <p className="text-lg text-brand-text/60">Delivering comprehensive financial services across key global markets</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <div className="text-4xl mb-4">🇮🇳</div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">India</h3>
                  <p className="text-brand-text/70">Domestic and cross-border financial planning, taxation, and compliance</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🇦🇪</div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">UAE</h3>
                  <p className="text-brand-text/70">Corporate advisory, Sharia-compliant investments, and business setup</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🇺🇸</div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">USA</h3>
                  <p className="text-brand-text/70">Strategic FP&A, global taxation, and investment analytics</p>
                </div>
              </div>
            </section>

            {/* Client Success */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Client Success Stories</h2>
                <p className="text-lg text-brand-text/60">Trusted by Global Businesses</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-brand-gold/20">
                  <p className="text-brand-text/80 italic mb-4">
                    "cmdfin transformed our financial operations with their comprehensive accounting and compliance solutions. Their strategic approach helped optimize our tax efficiency while ensuring full regulatory compliance."
                  </p>
                  <div className="font-semibold text-brand-text">Rajesh Kumar, CFO - Tata Consultancy Services</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-brand-gold/20">
                  <p className="text-brand-text/80 italic mb-4">
                    "The team's expertise in financial automation streamlined our entire cash flow operations. Their technology-driven solutions reduced manual errors by 80% and improved our financial reporting accuracy."
                  </p>
                  <div className="font-semibold text-brand-text">Sarah Mitchell, Technology Director - Microsoft</div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="text-center">
              <p className="text-lg text-brand-text/80 mb-8">
                Connect with our network of vetted financial partners who can help you achieve your financial goals.
              </p>
              <Link 
                href="/contact" 
                className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-text transition-all duration-300 inline-block text-lg"
              >
                Ready to Find a Partner?
              </Link>
            </div>

            {/* FAQ Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="bg-white rounded-xl p-6 border border-brand-gold/20">
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <div 
                      key={index}
                      className="border-b border-brand-gold/10 last:border-b-0 pb-6 last:pb-0"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <h4 className="text-lg font-semibold text-brand-text pr-8">{faq.question}</h4>
                        <span className="text-brand-gold font-bold text-xl flex-shrink-0">
                          {expandedFaq === index ? '−' : '+'}
                        </span>
                      </button>
                      
                      {expandedFaq === index && (
                        <div className="mt-4 text-brand-text/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersPage;