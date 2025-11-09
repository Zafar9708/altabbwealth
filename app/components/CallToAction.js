import Link from "next/link";

const CallToAction = () => {
  const benefits = [
    {
      title: "Expert Analysis",
      description: "Comprehensive assessment of your financial needs"
    },
    {
      title: "Customized Solution",
      description: "Tailored services matching your requirements"
    },
    {
      title: "No Obligation",
      description: "Free initial consultation"
    },
    {
      title: "Professional Team",
      description: "Certified financial experts"
    }
  ];

  const services = [
    "Accounting & Bookkeeping",
    "CFO Advisory Services", 
    "Business Tax Services",
    "Financial Planning & Analysis (FP&A)",
    "Mergers & Acquisitions Advisory"
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div 
            className="text-brand-text"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-brand-gold mr-4"></div>
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
                GET STARTED
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Begin Your <span className="text-brand-gold">Financial Success</span> Journey
            </h2>
            
            <p className="text-brand-text/80 text-xl mb-8 leading-relaxed">
              Schedule your complimentary consultation and discover how our expert financial services 
              can streamline your operations and drive sustainable growth.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-brand-text font-semibold">{benefit.title}</div>
                    <div className="text-brand-text/70 text-sm">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-brand-text/70 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Commitment Required
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Confidential & Secure
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-text mb-2">
                Schedule Your Consultation
              </h3>
              <p className="text-brand-text/70">
                Complete the form below and our team will contact you within 24 hours
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-6" action="https://formspree.io/f/your-company-email" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    required 
                    className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    required 
                    className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Which service are you interested in? *
                </label>
                <select 
                  name="service"
                  required 
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                  <option value="CFO Advisory Services">CFO Advisory Services</option>
                  <option value="Business Tax Services">Business Tax Services</option>
                  <option value="Financial Planning & Analysis (FP&A)">Financial Planning & Analysis (FP&A)</option>
                  <option value="Mergers & Acquisitions Advisory">Mergers & Acquisitions Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Additional Message (Optional)
                </label>
                <textarea 
                  name="message"
                  rows="3"
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
                  placeholder="Tell us about your specific needs..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-gold text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-brand-text transition-colors duration-300"
              >
                Schedule Free Consultation
              </button>
            </form>

            {/* Bottom Note */}
            <div className="text-center mt-6">
              <p className="text-brand-text/60 text-sm">
                By submitting this form, you agree to our privacy policy and consent to be contacted by our team.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-brand-gold/20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-brand-gold mb-2">24h</div>
            <div className="text-brand-text/70 text-sm">Response Time</div>
          </div>
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-brand-gold mb-2">100%</div>
            <div className="text-brand-text/70 text-sm">Confidential</div>
          </div>
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-brand-gold mb-2">$0</div>
            <div className="text-brand-text/70 text-sm">Initial Consultation</div>
          </div>
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-brand-gold mb-2">25+</div>
            <div className="text-brand-text/70 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;