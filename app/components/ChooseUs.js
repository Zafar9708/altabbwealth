const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Proven Track Record",
      description: "15+ years of delivering exceptional financial results and building lasting client relationships."
    },
    {
      number: "02",
      title: "Substantial Assets Managed",
      description: "Trusted with over $2 billion in assets, demonstrating our capability and reliability in wealth management."
    },
    {
      number: "03",
      title: "Extensive Client Success",
      description: "500+ clients have achieved their financial goals through our tailored strategies and expert guidance."
    },
    {
      number: "04",
      title: "Certified Expertise",
      description: "Our team comprises SEC-registered advisors and certified professionals with deep financial expertise."
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
              Our Commitment
            </span>
            <div className="w-16 h-px bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Building Your Financial Future
          </h2>
          <p className="text-xl text-brand-text/80 leading-relaxed">
            We combine deep expertise with personalized strategies to create sustainable wealth 
            and lasting legacies for our clients.
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

        {/* Bottom Stats */}
        <div 
          className="mt-16 pt-12 border-t border-brand-gold/20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-gold mb-2">27%</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Avg Annual Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-text mb-2">99%</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-text mb-2">100%</div>
              <div className="text-brand-text/60 text-sm uppercase tracking-wide">Confidential</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;