import Link from "next/link";

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robert Chen",
      position: "CEO, TechNova Solutions",
      company: "Fortune 500 Company",
      content: "Infinity Wealth Management transformed our family's financial future. Their strategic approach helped us grow our portfolio by 40% while minimizing risks. The ongoing management and personalized attention exceeded all expectations.",
      rating: 5,
      image: "/testimonials/client-1.jpg",
      years: "Client for 5 years"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Healthcare Executive",
      company: "Regional Hospital Network",
      content: "The team's expertise in estate planning and wealth preservation saved our family millions in taxes. Their comprehensive approach covers every aspect of financial planning with remarkable attention to detail.",
      rating: 5,
      image: "/testimonials/client-2.jpg",
      years: "Client for 3 years"
    },
    {
      id: 3,
      name: "James Rodriguez",
      position: "Retired Aerospace Engineer",
      company: "Former NASA Contractor",
      content: "After working with several financial advisors, I finally found true partners at Infinity. They created a retirement plan that ensures my family's security while allowing us to enjoy our golden years worry-free.",
      rating: 5,
      image: "/testimonials/client-3.jpg",
      years: "Client for 7 years"
    },
    {
      id: 4,
      name: "Emily Thompson",
      position: "Serial Entrepreneur",
      company: "Multiple Exit Founder",
      content: "When I sold my second company, Infinity helped navigate the complex tax implications and structured our wealth to support both our lifestyle and philanthropic goals. Their strategic insight is unparalleled.",
      rating: 5,
      image: "/testimonials/client-4.jpg",
      years: "Client for 4 years"
    },
    {
      id: 5,
      name: "Michael Zhang",
      position: "Medical Practice Owner",
      company: "Specialist Healthcare Group",
      content: "The ongoing management and regular performance reviews give us complete confidence in our financial decisions. Infinity's team has become an essential part of our family's success planning.",
      rating: 5,
      image: "/testimonials/client-5.jpg",
      years: "Client for 6 years"
    },
    {
      id: 6,
      name: "Jennifer Williams",
      position: "Law Firm Partner",
      company: "International Law Practice",
      content: "Their discovery process uncovered opportunities we never knew existed. The customized investment strategy aligned perfectly with our risk tolerance and long-term objectives. Exceptional service throughout.",
      rating: 5,
      image: "/testimonials/client-6.jpg",
      years: "Client for 2 years"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Retention Rate" },
    { number: "25+", label: "Years Average Experience" },
    { number: "$2.5B+", label: "Assets Under Management" },
    { number: "150+", label: "Families Served" }
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
            Trusted by <span className="text-brand-gold">Visionary Leaders</span>
          </h2>
          <p className="text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed">
            Discover why successful individuals and families choose Infinity Wealth Management 
            as their trusted partner for comprehensive wealth planning and legacy creation.
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
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">
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
            Experience the Infinity difference - where your financial success becomes our shared legacy.
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
              Certified Financial Planners
            </div>
            <div className="text-sm text-brand-text font-semibold">CFP® Professionals</div>
          </div>
          <div className="w-px h-8 bg-brand-gold/30"></div>
          <div className="text-center">
            <div className="text-xs text-brand-text/60 uppercase tracking-widest mb-2">
              Industry Recognition
            </div>
            <div className="text-sm text-brand-text font-semibold">Award Winning Team</div>
          </div>
          <div className="w-px h-8 bg-brand-gold/30"></div>
          <div className="text-center">
            <div className="text-xs text-brand-text/60 uppercase tracking-widest mb-2">
              Compliance & Ethics
            </div>
            <div className="text-sm text-brand-text font-semibold">Fiduciary Standard</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonials;