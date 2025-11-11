const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Trust & Integrity",
      description: "Every transaction is handled with honesty and transparency. Foundation of every client relationship."
    },
    {
      number: "02", 
      title: "End-to-End Solutions",
      description: "From pay-in to pay-out — complete financial coverage for all your business needs."
    },
    {
      number: "03",
      title: "Technology-Driven Excellence", 
      description: "Automation enhances accuracy and reduces errors. Embracing technology for superior service."
    },
    {
      number: "04",
      title: "Expertise You Can Rely On",
      description: "Professionals dedicated to your success with reliable data and precise reporting."
    },
    {
      number: "05",
      title: "Compliance First",
      description: "Ensure your business meets all regulatory obligations with our expert guidance."
    },
    {
      number: "06",
      title: "Risk Mitigation & Strategic Guidance",
      description: "Early issue detection and actionable insights to protect and grow your business."
    },
    {
      number: "07",
      title: "Confidential & Reliable",
      description: "We uphold the highest standards of discretion, protecting your sensitive financial information."
    },
    {
      number: "08",
      title: "Continuous Improvement",
      description: "Embracing technology and best practices for superior service delivery and results."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-brand-gold"></div>
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <div className="w-16 h-px bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Integrity. Accuracy. Innovation. Precision. Expertise. Trust.
          </h2>
          <p className="text-xl text-brand-text/80 leading-relaxed">
            We don't just manage numbers — we manage trust, transparency, and transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group"
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className="bg-brand-background rounded-2xl p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 h-full">
                <div className="flex items-start space-x-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{feature.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-text mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-brand-text/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Promise Section */}
        <div 
          className="mt-16 pt-12 border-t border-brand-gold/20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Client Promise</h3>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-xl text-brand-text/80 leading-relaxed max-w-3xl mx-auto">
              Our commitment is to deliver timely, compliant, and growth-oriented results aligned with your business goals.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-gold mb-2">200+</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold mb-2">100%</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Confidential</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold mb-2">10+</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;