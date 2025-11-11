"use client"
import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Initialize AOS animations
    const initAOS = () => {
      if (typeof window !== 'undefined') {
        const AOS = require('aos');
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    };

    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="zoom-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
              style={{ color: '#14274E' }}>
            About Us
          </h1>
          <div className="w-32 h-1.5 bg-brand-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in financial excellence and business growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Headline and Body */}
          <div className="space-y-8" data-aos="zoom-in-up" data-aos-delay="100">
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: '#14274E' }}>
              We Manage Your Numbers So You Can Focus on Growth
            </h2>

            {/* Body Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-2xl shadow-sm border-l-4" style={{ borderLeftColor: '#C6A04A' }}>
                At Altabb Wealth, we provide a complete range of financial services designed to give businesses clarity, confidence, and control over their finances.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-2xl shadow-sm border-l-4" style={{ borderLeftColor: '#C6A04A' }}>
                Rooted in <strong style={{ color: '#C6A04A' }}>Trust</strong> and <strong style={{ color: '#C6A04A' }}>Integrity</strong>, we combine deep financial expertise with cutting-edge automation tools. From daily bookkeeping to taxation, payroll, audits, and strategic advisory — we manage your entire financial ecosystem with precision, professionalism, and care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                style={{ backgroundColor: '#C6A04A', color: 'white' }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Start Working With Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/service"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white"
                style={{ borderColor: '#14274E', color: '#14274E' }}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8" data-aos="zoom-in-up" data-aos-delay="110">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-4xl font-bold mb-3" style={{ color: '#C6A04A' }}>100+</div>
                <div className="text-lg font-semibold" style={{ color: '#14274E' }}>Clients Served</div>
                <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-3 rounded-full"></div>
              </div>
              <div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="110"
              >
                <div className="text-4xl font-bold mb-3" style={{ color: '#C6A04A' }}>10+</div>
                <div className="text-lg font-semibold" style={{ color: '#14274E' }}>Years Experience</div>
                <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-3 rounded-full"></div>
              </div>
              <div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-4xl font-bold mb-3" style={{ color: '#C6A04A' }}>24/7</div>
                <div className="text-lg font-semibold" style={{ color: '#14274E' }}>Support</div>
                <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-3 rounded-full"></div>
              </div>
              <div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="210"
              >
                <div className="text-4xl font-bold mb-3" style={{ color: '#C6A04A' }}>99%</div>
                <div className="text-lg font-semibold" style={{ color: '#14274E' }}>Satisfaction</div>
                <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-3 rounded-full"></div>
              </div>
            </div>

            {/* Value Cards */}
            <div className="space-y-4">
              <div 
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-2xl" style={{ color: '#C6A04A' }}>✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#14274E' }}>Trust & Integrity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building lasting relationships based on transparency and ethical practices
                  </p>
                </div>
              </div>

              <div 
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-right"
                data-aos-delay="110"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-2xl" style={{ color: '#C6A04A' }}>⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#14274E' }}>Cutting-Edge Automation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leveraging technology to deliver efficient, accurate financial solutions
                  </p>
                </div>
              </div>

              <div 
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-2xl" style={{ color: '#C6A04A' }}>🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#14274E' }}>Comprehensive Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    End-to-end financial services covering all your business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        {/* <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-16" data-aos="zoom-in-up">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#14274E' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl" style={{ color: '#C6A04A' }}>🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#14274E' }}>Trust & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your financial data is handled with the highest level of security and confidentiality. We build trust through transparent practices and reliable service delivery.
              </p>
            </div>

            <div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl" style={{ color: '#C6A04A' }}>🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#14274E' }}>Growth Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We remove financial complexities so you can concentrate on scaling your business and achieving your strategic objectives.
              </p>
            </div>

            <div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl" style={{ color: '#C6A04A' }}>💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#14274E' }}>Innovation Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Combining financial expertise with advanced technology to deliver efficient, accurate, and forward-thinking solutions.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;