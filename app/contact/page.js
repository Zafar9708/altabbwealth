"use client"
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const countries = [
    {
      name: "India",
      description: "Domestic and cross-border financial planning, taxation, and compliance.",
      flag: "🇮🇳",
      office: "Head Office"
    },
    {
      name: "UAE", 
      description: "Corporate advisory, Sharia-compliant investments, and business setup.",
      flag: "🇦🇪",
      office: "Regional Office"
    },
    {
      name: "US",
      description: "Strategic FP&A, global taxation, and investment analytics.",
      flag: "🇺🇸",
      office: "Regional Office"
    }
  ];

  const services = [
    "Accounting & Bookkeeping",
    "CFO Advisory Services",
    "Business Tax Services",
    "Financial Planning & Analysis",
    "Mergers & Acquisitions Advisory"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#14274E] to-[#0A1A3A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-[#C6A04A] mr-4"></div>
            <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Your <span className="text-[#C6A04A]">Wealth Legacy</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your financial future? Contact our expert team for personalized advisory 
            and start your journey toward sustainable wealth creation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-[#FAF1E6] rounded-2xl p-8 border border-[#C6A04A]/20">
                <h2 className="text-3xl font-bold text-[#14274E] mb-8">Contact Information</h2>
                
                {/* Head Office */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#14274E] mb-4">Head Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-[#14274E] font-semibold">Altabb Wealth Private Limited</div>
                        <div className="text-[#14274E]/70">Tower C, Business Bay, Mumbai 400013, India</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <a href="tel:+919000000000" className="text-[#14274E] hover:text-[#C6A04A] transition-colors duration-300">
                        +91 90000 00000
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <a href="mailto:contact@altabbwealth.com" className="text-[#14274E] hover:text-[#C6A04A] transition-colors duration-300">
                        contact@altabbwealth.com
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-[#C6A04A] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"/>
                        </svg>
                      </div>
                      <a href="https://www.altabbwealth.com" target="_blank" rel="noopener noreferrer" className="text-[#14274E] hover:text-[#C6A04A] transition-colors duration-300">
                        www.altabbwealth.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#14274E] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-[#14274E]/70">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-[#C6A04A] rounded-xl p-4 text-center">
                  <div className="text-white font-bold mb-2">Quick Response Guarantee</div>
                  <div className="text-white/90 text-sm">We respond to all inquiries within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C6A04A]/10">
                <h2 className="text-3xl font-bold text-[#14274E] mb-2">Send us a Message</h2>
                <p className="text-[#14274E]/70 mb-8">Fill out the form below and our team will get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#14274E] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#14274E] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#14274E] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#14274E] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#14274E] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#14274E] mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#14274E] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-[#C6A04A]/20 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
                      placeholder="Tell us about your financial goals and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-[#FAF1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              Global <span className="text-[#C6A04A]">Presence</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Serving clients across key international markets with localized expertise and global standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-[#C6A04A]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{country.flag}</div>
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl font-bold text-[#14274E] mr-3">{country.name}</h3>
                  <span className="bg-[#C6A04A] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {country.office}
                  </span>
                </div>
                <p className="text-[#14274E]/70 leading-relaxed">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] to-[#1C315B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-[#C6A04A]">Wealth Journey</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join countless clients who have transformed their financial future with Altabb Wealth. 
            Let's build your legacy together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;