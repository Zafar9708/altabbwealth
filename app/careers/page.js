import Link from "next/link";

export default function CareersPage() {
  const currentOpenings = [
    {
      id: 1,
      title: "Senior Financial Advisor",
      department: "Wealth Management",
      location: "Greater Noida, UP",
      type: "Full-time",
      experience: "5+ years",
      description: "We are seeking an experienced Financial Advisor to provide comprehensive wealth management services to high-net-worth individuals and businesses."
    },
    {
      id: 2,
      title: "Tax Consultant",
      department: "Tax Services",
      location: "Greater Noida, UP",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our tax team to help clients with tax planning, compliance, and strategic tax optimization strategies."
    },
    {
      id: 3,
      title: "Financial Analyst",
      department: "FP&A",
      location: "Greater Noida, UP",
      type: "Full-time",
      experience: "2+ years",
      description: "Support our Financial Planning & Analysis team in creating detailed financial models and business insights."
    },
    {
      id: 4,
      title: "CFO Advisory Associate",
      department: "CFO Services",
      location: "Greater Noida, UP",
      type: "Full-time",
      experience: "4+ years",
      description: "Work directly with client CFOs to provide strategic financial guidance and implement best practices."
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance-based bonuses"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      icon: "📚",
      title: "Professional Development",
      description: "Continuous learning opportunities and certification support"
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description: "Clear career progression paths and leadership training"
    },
    {
      icon: "🍕",
      title: "Wellness Programs",
      description: "Health wellness programs and team building activities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-text text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Build your career with Altabb Wealth and help shape the future of financial services 
              while creating lasting impact for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at Altabb Wealth?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building a culture of excellence, innovation, and client-centric service. 
              Join us in our mission to transform financial advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">Explore opportunities to grow with us</p>
          </div>

          <div className="space-y-6">
            {currentOpenings.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-brand-gold transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                  </div>
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Link 
                      href={`/careers/apply/${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-brand-gold text-white font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors duration-300"
                    >
                      Apply Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Suitable Role Section */}
          <div className="text-center mt-12 p-8 bg-brand-text rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Don't See a Suitable Role?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence in financial services. 
              Send us your resume and tell us how you can contribute to our team.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-brand-gold text-white font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors duration-300"
            >
              Send General Application
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture & Values</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-brand-gold rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Client First</h3>
                    <p className="text-gray-600">Everything we do is centered around delivering exceptional value to our clients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-gold rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">We embrace new technologies and methodologies to stay ahead in financial services.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-gold rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                    <p className="text-gray-600">We believe in the power of teamwork and shared success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Join Us?</h3>
              <p className="text-gray-600 mb-6">
                Take the first step toward an exciting career with Altabb Wealth. We're committed to 
                helping you grow professionally while making a meaningful impact in the financial industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-gray-600">Competitive compensation packages</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-gray-600">Professional development opportunities</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-gray-600">Inclusive and supportive work environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}