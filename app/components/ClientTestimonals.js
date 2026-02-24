

import Link from "next/link";

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CFO",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      content: "cmdfin transformed our financial operations with their comprehensive accounting and compliance solutions. Their strategic approach helped optimize our tax efficiency while ensuring full regulatory compliance across all our operations.",
      rating: 5,
      image: "/testimonials/client-1.jpg",
      years: "Client for 4 years"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Technology Director",
      company: "Microsoft",
      location: "Redmond, USA",
      content: "The team's expertise in financial automation and pay-in/pay-out management streamlined our entire cash flow operations. Their technology-driven solutions reduced manual errors by 80% and improved our financial reporting accuracy.",
      rating: 5,
      image: "/testimonials/client-2.jpg",
      years: "Client for 3 years"
    },
    {
      id: 3,
      name: "Ahmed Al Mansouri",
      position: "CEO",
      company: "Solas Marine Services",
      location: "Dubai, UAE",
      content: "Altabb's CFO advisory services provided the strategic financial leadership we needed during our expansion phase. Their M&A support and due diligence were instrumental in our successful acquisition strategy.",
      rating: 5,
      image: "/testimonials/client-3.jpg",
      years: "Client for 5 years"
    },
    {
      id: 4,
      name: "Priya Sharma",
      position: "VP of Engineering",
      company: "Infosys",
      location: "Bangalore, India",
      content: "When we needed to optimize our business structure for tax efficiency, Altabb delivered exceptional results. Their tax advisory services saved us significant costs while maintaining full compliance.",
      rating: 5,
      image: "/testimonials/client-4.jpg",
      years: "Client for 2 years"
    },
    {
      id: 5,
      name: "David Chen",
      position: "Operations Head",
      company: "Cognizant",
      location: "Teaneck, USA",
      content: "The financial planning and analysis provided by Altabb gave us actionable insights that transformed our budgeting process. Their dynamic financial models helped us navigate market uncertainties with confidence.",
      rating: 5,
      image: "/testimonials/client-5.jpg",
      years: "Client for 3 years"
    },
    {
      id: 6,
      name: "Fatima Al Rais",
      position: "Retail Director",
      company: "HSA Group",
      location: "Dubai, UAE",
      content: "Altabb's comprehensive audit and legal oversight services identified critical compliance gaps we had missed. Their risk mitigation strategies protected our business from potential regulatory issues.",
      rating: 5,
      image: "/testimonials/client-6.jpg",
      years: "Client for 4 years"
    }
  ];

  const stats = [
    { number: "99%", label: "Client Retention Rate" },
    { number: "10+", label: "Years Average Experience" },
    { number: "200+", label: "Businesses Served" },
    // { number: "$2.5B+", label: "Assets Under Management" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div 
          className="text-center mb-16"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-brand-gold mr-4"></div>
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
              CLIENT SUCCESS
            </span>
            <div className="w-16 h-1 bg-brand-gold ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Trusted by <span className="text-brand-gold">Global Businesses</span>
          </h2>
          <p className="text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed">
            Discover why leading companies across India, USA, and UAE choose cmdfin 
            as their trusted partner for comprehensive financial solutions and business growth.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center ml-56">
              <div className="text-3xl md:text-4xl  font-bold text-brand-gold mb-2">
                {stat.number}
              </div>
              <div className="text-brand-text font-semibold text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="bg-brand-background rounded-2xl p-8 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-brand-text/80 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-brand-gold font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-brand-text">{testimonial.name}</div>
                  <div className="text-brand-text/70 text-sm">{testimonial.position}</div>
                  <div className="text-brand-text/60 text-xs">{testimonial.company}</div>
                  <div className="text-brand-text/50 text-xs mt-1">{testimonial.location}</div>
                  <div className="text-brand-gold text-xs font-semibold mt-1">
                    {testimonial.years}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div 
          className="bg-brand-text rounded-2xl p-12 text-white text-center"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Community of Successful Clients
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Experience the Altabb difference - where your business success becomes our shared achievement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/consultation" 
              className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-300"
            >
              Schedule Your Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-text transition-colors duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div> */}

        {/* Accreditation Badges */}
        <div 
          className="flex flex-wrap justify-center items-center gap-8 mt-12"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <div className="text-center">
            <div className="text-xs text-brand-text/60 uppercase tracking-widest mb-2">
              Certified Professionals
            </div>
            <div className="text-sm text-brand-text font-semibold">CPA & CA Experts</div>
          </div>
          <div className="w-px h-8 bg-brand-gold/30"></div>
          <div className="text-center">
            <div className="text-xs text-brand-text/60 uppercase tracking-widest mb-2">
              Global Compliance
            </div>
            <div className="text-sm text-brand-text font-semibold">Multi-Country Expertise</div>
          </div>
          <div className="w-px h-8 bg-brand-gold/30"></div>
          <div className="text-center">
            <div className="text-xs text-brand-text/60 uppercase tracking-widest mb-2">
              Technology Driven
            </div>
            <div className="text-sm text-brand-text font-semibold">Automated Solutions</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonials;