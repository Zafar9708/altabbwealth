

// import Link from "next/link";

// const CallToAction = () => {
//   const benefits = [
//     {
//       title: "Expert Financial Analysis",
//       description: "Comprehensive assessment of your business financial needs"
//     },
//     {
//       title: "Customized Solutions",
//       description: "Tailored services matching your specific requirements"
//     },
//     {
//       title: "No Obligation Consultation",
//       description: "Free initial assessment of your financial operations"
//     },
//     {
//       title: "Certified Professionals",
//       description: "Experienced financial experts dedicated to your success"
//     }
//   ];

//   const services = [
//     "Accounting & Bookkeeping",
//     "CFO Advisory Services", 
//     "Business Tax Services",
//     "Financial Planning & Analysis (FP&A)",
//     "Mergers & Acquisitions Advisory",
//     "Comprehensive Audit & Legal Oversight"
//   ];

//   return (
//     <section className="py-20 bg-brand-background">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div 
//             className="text-brand-text"
//             data-aos="zoom-in-up"
//             data-aos-duration="800"
//           >
//             <div className="flex items-center mb-6">
//               <div className="w-12 h-1 bg-brand-gold mr-4"></div>
//               <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
//                 GET STARTED
//               </span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Let's Streamline Your <span className="text-brand-gold">Finances, Together</span>
//             </h2>
            
//             <p className="text-brand-text/80 text-xl mb-8 leading-relaxed">
//               Experience the difference of working with a partner who understands your business needs 
//               and delivers with integrity, insight, and innovation.
//             </p>

//             {/* Benefits List */}
//             <div className="space-y-4 mb-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-brand-text font-semibold">{benefit.title}</div>
//                     <div className="text-brand-text/70 text-sm">{benefit.description}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <Link 
//                 href="/contact"
//                 className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-brand-gold/90 transition-colors duration-300"
//               >
//                 Book a Consultation
//               </Link>
//               <Link 
//                 href="/contact"
//                 className="border-2 border-brand-text text-brand-text px-8 py-4 rounded-lg font-semibold text-center hover:bg-brand-text hover:text-white transition-colors duration-300"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex items-center space-x-6 text-brand-text/70 text-sm">
//               <div className="flex items-center">
//                 <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//                 No Commitment Required
//               </div>
//               <div className="flex items-center">
//                 <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//                 Confidential & Secure
//               </div>
//             </div>
//           </div>

//           {/* Right Content - CTA Card */}
//           <div 
//             className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20"
//             data-aos="zoom-in-up"
//             data-aos-duration="800"
//             data-aos-delay="200"
//           >
//             <div className="text-center mb-8">
//               <h3 className="text-2xl font-bold text-brand-text mb-2">
//                 Schedule Your Consultation
//               </h3>
//               <p className="text-brand-text/70">
//                 Complete the form below and our team will contact you within 24 hours
//               </p>
//             </div>

//             {/* Contact Form */}
//             <form className="space-y-6" action="https://formspree.io/f/your-company-email" method="POST">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-brand-text mb-2">
//                     First Name *
//                   </label>
//                   <input 
//                     type="text" 
//                     name="firstName"
//                     required 
//                     className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
//                     placeholder="John"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-brand-text mb-2">
//                     Last Name *
//                   </label>
//                   <input 
//                     type="text" 
//                     name="lastName"
//                     required 
//                     className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
//                     placeholder="Doe"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-brand-text mb-2">
//                   Email Address *
//                 </label>
//                 <input 
//                   type="email" 
//                   name="email"
//                   required 
//                   className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
//                   placeholder="john.doe@example.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-brand-text mb-2">
//                   Phone Number *
//                 </label>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   required 
//                   className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
//                   placeholder="+1 (555) 000-0000"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-brand-text mb-2">
//                   Which service are you interested in? *
//                 </label>
//                 <select 
//                   name="service"
//                   required 
//                   className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
//                 >
//                   <option value="">Select a service</option>
//                   <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
//                   <option value="CFO Advisory Services">CFO Advisory Services</option>
//                   <option value="Business Tax Services">Business Tax Services</option>
//                   <option value="Financial Planning & Analysis (FP&A)">Financial Planning & Analysis (FP&A)</option>
//                   <option value="Mergers & Acquisitions Advisory">Mergers & Acquisitions Advisory</option>
//                   <option value="Comprehensive Audit & Legal Oversight">Comprehensive Audit & Legal Oversight</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-brand-text mb-2">
//                   Additional Message (Optional)
//                 </label>
//                 <textarea 
//                   name="message"
//                   rows="3"
//                   className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300"
//                   placeholder="Tell us about your specific financial needs..."
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit"
//                 className="w-full bg-brand-gold text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-brand-text transition-colors duration-300"
//               >
//                 Book Free Consultation
//               </button>
//             </form>

//             {/* Bottom Note */}
//             <div className="text-center mt-6">
//               <p className="text-brand-text/60 text-sm">
//                 By submitting this form, you agree to our privacy policy and consent to be contacted by our team.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Trust Bar */}
//         <div 
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-brand-gold/20"
//           data-aos="zoom-in-up"
//           data-aos-duration="800"
//           data-aos-delay="400"
//         >
//           <div className="text-center text-brand-text">
//             <div className="text-2xl font-bold text-brand-gold mb-2">2h</div>
//             <div className="text-brand-text/70 text-sm">Response Time</div>
//           </div>
//           <div className="text-center text-brand-text">
//             <div className="text-2xl font-bold text-brand-gold mb-2">100%</div>
//             <div className="text-brand-text/70 text-sm">Confidential</div>
//           </div>
//           <div className="text-center text-brand-text">
//             <div className="text-2xl font-bold text-brand-gold mb-2">$0</div>
//             <div className="text-brand-text/70 text-sm">Initial Consultation</div>
//           </div>
//           <div className="text-center text-brand-text">
//             <div className="text-2xl font-bold text-brand-gold mb-2">10+</div>
//             <div className="text-brand-text/70 text-sm">Years Experience</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;



"use client"
import Link from "next/link";
import React, { useState } from 'react';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const benefits = [
    {
      title: "Expert Financial Analysis",
      description: "Comprehensive assessment of your business financial needs"
    },
    {
      title: "Customized Solutions",
      description: "Tailored services matching your specific requirements"
    },
    {
      title: "No Obligation Consultation",
      description: "Free initial assessment of your financial operations"
    },
    {
      title: "Certified Professionals",
      description: "Experienced financial experts dedicated to your success"
    }
  ];

  const services = [
    "Accounting & Bookkeeping",
    "CFO Advisory Services", 
    "Business Tax Services",
    "Financial Planning & Analysis (FP&A)",
    "Mergers & Acquisitions Advisory",
    "Comprehensive Audit & Legal Oversight"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to send email notification
  const sendEmailNotification = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          source: 'call_to_action'
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('✅ Email notification sent successfully');
        return true;
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('❌ Error sending email notification:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email notification
      const emailSent = await sendEmailNotification(formData);
      
      if (emailSent) {
        setShowSuccess(true);
        console.log('Call to Action form submitted successfully:', formData);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });

        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert('Thank you for your message! We will contact you soon. (Note: Email notification failed)');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your form. Please try again or contact us directly at hi@altabb.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-brand-background">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg max-w-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-green-800 font-semibold">Thank You!</div>
              <div className="text-green-700 text-sm">We've received your consultation request and sent a confirmation email.</div>
            </div>
          </div>
        </div>
      )}

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
              Let's Streamline Your <span className="text-brand-gold">Finances, Together</span>
            </h2>
            
            <p className="text-brand-text/80 text-xl mb-8 leading-relaxed">
              Experience the difference of working with a partner who understands your business needs 
              and delivers with integrity, insight, and innovation.
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/contact"
                className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-brand-gold/90 transition-colors duration-300"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-brand-text text-brand-text px-8 py-4 rounded-lg font-semibold text-center hover:bg-brand-text hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="+91 "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Which service are you interested in? *
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required 
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select a service</option>
                  <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                  <option value="CFO Advisory Services">CFO Advisory Services</option>
                  <option value="Business Tax Services">Business Tax Services</option>
                  <option value="Financial Planning & Analysis (FP&A)">Financial Planning & Analysis (FP&A)</option>
                  <option value="Mergers & Acquisitions Advisory">Mergers & Acquisitions Advisory</option>
                  <option value="Comprehensive Audit & Legal Oversight">Comprehensive Audit & Legal Oversight</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Additional Message (Optional)
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-text/20 rounded-lg focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tell us about your specific financial needs..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-brand-text transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Book Free Consultation'
                )}
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
            <div className="text-2xl font-bold text-white mb-2">2h</div>
            <div className="text-brand-text/70 text-sm">Response Time</div>
          </div>
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-white mb-2">100%</div>
            <div className="text-brand-text/70 text-sm">Confidential</div>
          </div>
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-white mb-2">$0</div>
            <div className="text-brand-text/70 text-sm">Initial Consultation</div>
          </div>
          <div className="text-center text-brand-text">
            <div className="text-2xl font-bold text-white mb-2">10+</div>
            <div className="text-brand-text/70 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;