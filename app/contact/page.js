


// "use client"
// import React, { useState } from 'react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: '',
//     message: ''
//   });

//   const [showConsultationForm, setShowConsultationForm] = useState(false);

//   const services = [
//     "Accounting & Bookkeeping",
//     "CFO Advisory Services",
//     "Business Tax Services",
//     "Financial Planning & Analysis",
//     "Mergers & Acquisitions Advisory",
//     "Comprehensive Audit & Legal Oversight"
//   ];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will contact you soon.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       company: '',
//       service: '',
//       message: ''
//     });
//     setShowConsultationForm(false);
//   };

//   const handleCallClick = () => {
//     window.location.href = 'tel:+918505804836';
//   };

//   const openConsultationForm = () => {
//     setShowConsultationForm(true);
//   };

//   const closeConsultationForm = () => {
//     setShowConsultationForm(false);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Consultation Form Popup */}
//       {showConsultationForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-2xl font-bold text-[#14274E]">Book Free Consultation</h3>
//                 <button
//                   onClick={closeConsultationForm}
//                   className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
              
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-[#14274E] mb-2">
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                     placeholder="John"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-[#14274E] mb-2">
//                     Last Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                     placeholder="Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#14274E] mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                     placeholder="john.doe@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#14274E] mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                     placeholder="+91 8505804836"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#14274E] mb-2">
//                     Service Interested In
//                   </label>
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]"
//                   >
//                     <option value="">Select a service</option>
//                     {services.map((service, index) => (
//                       <option key={index} value={service}>{service}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#14274E] mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                     placeholder="Briefly describe what you'd like to discuss..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
//                 >
//                   Book Consultation
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="inline-flex items-center mb-6">
//               <div className="w-16 h-1 bg-[#C6A04A] mr-4"></div>
//               <span className="text-[#C6A04A] font-semibold text-sm uppercase tracking-widest">
//                 CONTACT US
//               </span>
//               <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14274E] mb-6 leading-tight">
//               Let's Streamline Your <span className="text-[#C6A04A]">Finances</span>
//             </h1>
            
//             <p className="text-xl text-[#14274E]/70 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Get in touch with our financial experts to discuss how we can help optimize your business finances and drive sustainable growth.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
//             {/* Contact Information - Left Sidebar */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                 <h2 className="text-2xl font-bold text-[#14274E] mb-8">Get in Touch</h2>
                
//                 {/* Contact Details */}
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-[#C6A04A]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                       <svg className="w-6 h-6 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#14274E] mb-1">Head Office</h3>
//                       <p className="text-[#14274E]/70">Altabb Wealth Private Limited</p>
//                       <p className="text-[#14274E]/70 text-sm">5204, ATS Rhapsody, Sector-1</p>
//                       <p className="text-[#14274E]/70 text-sm">Greater Noida, UP, 201306, India</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <div className="w-12 h-12 bg-[#C6A04A]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                       <svg className="w-6 h-6 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#14274E] mb-1">Phone</h3>
//                       <a href="tel:+918505804836" className="text-[#14274E]/70 hover:text-[#C6A04A] transition-colors duration-300">
//                         +91 8505804836
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <div className="w-12 h-12 bg-[#C6A04A]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                       <svg className="w-6 h-6 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#14274E] mb-1">Email</h3>
//                       <a href="mailto:hi@altabb.com" className="text-[#14274E]/70 hover:text-[#C6A04A] transition-colors duration-300">
//                         hi@altabb.com
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Business Hours */}
//                 <div className="mt-8 pt-8 border-t border-gray-200">
//                   <h3 className="font-semibold text-[#14274E] mb-4">Business Hours</h3>
//                   <div className="space-y-2 text-[#14274E]/70">
//                     <div className="flex justify-between">
//                       <span>Monday - Friday</span>
//                       <span className="font-medium">9:00 AM - 6:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Saturday</span>
//                       <span className="font-medium">10:00 AM - 2:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Sunday</span>
//                       <span className="font-medium">Closed</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quick Response */}
//                 <div className="mt-8 p-4 bg-[#C6A04A]/10 rounded-xl border border-[#C6A04A]/20">
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-[#C6A04A] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="text-[#14274E] font-semibold text-sm">Quick Response</div>
//                       <div className="text-[#14274E]/70 text-xs">We reply within 24 hours</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form - Main Content */}
//             <div className="lg:col-span-3">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                 <div className="mb-8">
//                   <h2 className="text-2xl font-bold text-[#14274E] mb-2">Send us a Message</h2>
//                   <p className="text-[#14274E]/70">Fill out the form below and our team will get back to you shortly.</p>
//                 </div>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-[#14274E] mb-2">
//                         First Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                         placeholder="John"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-[#14274E] mb-2">
//                         Last Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                         placeholder="Doe"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-[#14274E] mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                         placeholder="john.doe@example.com"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-[#14274E] mb-2">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                         placeholder="+1 (555) 000-0000"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-[#14274E] mb-2">
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                         placeholder="Your company name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-[#14274E] mb-2">
//                         Service Interested In
//                       </label>
//                       <select
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E]"
//                       >
//                         <option value="">Select a service</option>
//                         {services.map((service, index) => (
//                           <option key={index} value={service}>{service}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-[#14274E] mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows="6"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300"
//                       placeholder="Tell us about your financial needs and how we can help your business grow..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Global Presence Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//               Our <span className="text-[#C6A04A]">Global Reach</span>
//             </h2>
//             <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
//               Serving clients across multiple countries with localized expertise and international standards
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
//               <div className="text-4xl mb-4">🇮🇳</div>
//               <h3 className="text-xl font-bold text-[#14274E] mb-2">India</h3>
//               <p className="text-[#14274E]/70">Domestic and cross-border financial planning, taxation, and compliance.</p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
//               <div className="text-4xl mb-4">🇦🇪</div>
//               <h3 className="text-xl font-bold text-[#14274E] mb-2">UAE</h3>
//               <p className="text-[#14274E]/70">Corporate advisory, Sharia-compliant investments, and business setup.</p>
//             </div>

//             <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
//               <div className="text-4xl mb-4">🇺🇸</div>
//               <h3 className="text-xl font-bold text-[#14274E] mb-2">USA</h3>
//               <p className="text-[#14274E]/70">Strategic FP&A, global taxation, and investment analytics.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-brand-background">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-[#14274E] mb-6">
//             Ready to Optimize Your <span className="text-[#C6A04A]">Financial Operations</span>?
//           </h2>
//           <p className="text-xl text-[#14274E] mb-8 max-w-2xl mx-auto">
//             Let us handle your finances while you focus on growing your business. Get started with a free consultation today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               onClick={openConsultationForm}
//               className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105"
//             >
//               Book Free Consultation
//             </button>
//             <button 
//               onClick={handleCallClick}
//               className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300"
//             >
//               Call +91 8505804836
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;


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

  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    "Accounting & Bookkeeping",
    "CFO Advisory Services",
    "Business Tax Services",
    "Financial Planning & Analysis",
    "Mergers & Acquisitions Advisory",
    "Comprehensive Audit & Legal Oversight"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to send email notification
  const sendEmailNotification = async (formData, source = 'contact_page') => {
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
          company: formData.company,
          service: formData.service,
          message: formData.message,
          source: source
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
      const emailSent = await sendEmailNotification(formData, 'contact_page');
      
      if (emailSent) {
        setShowSuccess(true);
        console.log('Form submitted successfully:', formData);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
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
      
      if (showConsultationForm) {
        setShowConsultationForm(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your form. Please try again or contact us directly at hi@altabb.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918505804836';
  };

  const openConsultationForm = () => {
    setShowConsultationForm(true);
  };

  const closeConsultationForm = () => {
    setShowConsultationForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
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
              <div className="text-green-700 text-sm">We've received your message and sent a confirmation email.</div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Form Popup */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#14274E]">Book Free Consultation</h3>
                <button
                  onClick={closeConsultationForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Doe"
                  />
                </div>

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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="+91 8505804836"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Briefly describe what you'd like to discuss..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
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
                    'Book Consultation'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-6">
              <div className="w-16 h-1 bg-[#C6A04A] mr-4"></div>
              <span className="text-[#C6A04A] font-semibold text-sm uppercase tracking-widest">
                CONTACT US
              </span>
              <div className="w-16 h-1 bg-[#C6A04A] ml-4"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14274E] mb-6 leading-tight">
              Let's Streamline Your <span className="text-[#C6A04A]">Finances</span>
            </h1>
            
            <p className="text-xl text-[#14274E]/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our financial experts to discuss how we can help optimize your business finances and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Contact Information - Left Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-[#14274E] mb-8">Get in Touch</h2>
                
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#C6A04A]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#14274E] mb-1">Head Office</h3>
                      <p className="text-[#14274E]/70">Altabb Wealth Private Limited</p>
                      <p className="text-[#14274E]/70 text-sm">5204, ATS Rhapsody, Sector-1</p>
                      <p className="text-[#14274E]/70 text-sm">Greater Noida, UP, 201306, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#C6A04A]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#14274E] mb-1">Phone</h3>
                      <a href="tel:+918505804836" className="text-[#14274E]/70 hover:text-[#C6A04A] transition-colors duration-300">
                        +91 8505804836
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#C6A04A]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#14274E] mb-1">Email</h3>
                      <a href="mailto:hi@altabb.com" className="text-[#14274E]/70 hover:text-[#C6A04A] transition-colors duration-300">
                        hi@altabb.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-[#14274E] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-[#14274E]/70">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="mt-8 p-4 bg-[#C6A04A]/10 rounded-xl border border-[#C6A04A]/20">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#C6A04A] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#14274E] font-semibold text-sm">Quick Response</div>
                      <div className="text-[#14274E]/70 text-xs">We reply within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#14274E] mb-2">Send us a Message</h2>
                  <p className="text-[#14274E]/70">Fill out the form below and our team will get back to you shortly.</p>
                </div>
                
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 text-[#14274E] disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Tell us about your financial needs and how we can help your business grow..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C6A04A] text-white py-4 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
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
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14274E] mb-6">
              Our <span className="text-[#C6A04A]">Global Reach</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Serving clients across multiple countries with localized expertise and international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold text-[#14274E] mb-2">India</h3>
              <p className="text-[#14274E]/70">Domestic and cross-border financial planning, taxation, and compliance.</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">🇦🇪</div>
              <h3 className="text-xl font-bold text-[#14274E] mb-2">UAE</h3>
              <p className="text-[#14274E]/70">Corporate advisory, Sharia-compliant investments, and business setup.</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold text-[#14274E] mb-2">USA</h3>
              <p className="text-[#14274E]/70">Strategic FP&A, global taxation, and investment analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#14274E] mb-6">
            Ready to Optimize Your <span className="text-[#C6A04A]">Financial Operations</span>?
          </h2>
          <p className="text-xl text-[#14274E] mb-8 max-w-2xl mx-auto">
            Let us handle your finances while you focus on growing your business. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openConsultationForm}
              className="bg-[#C6A04A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={handleCallClick}
              className="border-2 border-[#14274E] text-[#14274E] px-8 py-4 rounded-lg font-semibold hover:bg-[#14274E] hover:text-white transition-all duration-300"
            >
              Call +91 8505804836
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;