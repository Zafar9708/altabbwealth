
"use client"
import React, { useState, useEffect } from 'react';

const customStyles = `
  @keyframes fadeInSlideUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeInSlideUp {
    animation: fadeInSlideUp 0.10s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }

  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(20, 39, 78, 0.7) 0%,
      rgba(20, 39, 78, 0.5) 50%,
      rgba(198, 160, 74, 0.3) 100%
    );
    z-index: 1;
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }
`;

const ConsultationForm = ({ isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: formType || 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceOptions = [
    { value: 'general', label: 'General Consultation' },
    { value: 'accounting', label: 'Accounting & Bookkeeping' },
    { value: 'cfo', label: 'CFO Advisory Services' },
    { value: 'tax', label: 'Business Tax Services' },
    { value: 'fpa', label: 'Financial Planning & Analysis' },
    { value: 'ma', label: 'Mergers & Acquisitions' },
    { value: 'audit', label: 'Audit & Legal Services' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to send email notification
  const sendEmailNotification = async (formData, formType) => {
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
          service: formData.serviceInterest,
          message: formData.message,
          source: 'hero_section',
          formType: formType
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
      const emailSent = await sendEmailNotification(formData, formType);
      
      if (emailSent) {
        setShowSuccess(true);
        console.log('Hero section form submitted successfully:', formData);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: formType || 'general',
          message: ''
        });

        // Auto close after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      } else {
        alert('Thank you for your inquiry! We will contact you soon. (Note: Email notification failed)');
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your form. Please try again or contact us directly at hi@altabb.com');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-60 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg max-w-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-green-800 font-semibold">Thank You!</div>
              <div className="text-green-700 text-sm">We've received your inquiry and sent a confirmation email.</div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Logo Header */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="w-24 h-24 rounded-lg flex items-center justify-center">
            <img
              src="/Logo.png"
              alt="cmdfin Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="px-8 pb-8">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#14274E' }}>
            Start Your Journey
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Let's discuss how we can help you {formType === 'accelerate' ? 'accelerate growth' : formType === 'discover' ? 'discover solutions' : 'get started'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                Service Interest
              </label>
              <select
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#14274E' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Tell us about your financial goals and challenges..."
              ></textarea>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:transform-none"
                style={{ borderColor: '#14274E', color: '#14274E' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                style={{ backgroundColor: isSubmitting ? '#8BC53F' : '#8BC53F' }}
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
                  'Submit Inquiry'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const MinimalistHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('general');

  // Updated slides data with video backgrounds
  const slides = [
    {
      title: "The Future of Finance, Today",
      subtitle: "From Pay-In to Pay-Out — We've Got You Covered",
      description: "At cmdfin, we empower businesses with end-to-end financial solutions built on Trust, Integrity, and Automation. We simplify complex financial operations, ensure compliance, and help you achieve sustainable growth — so you can focus on what truly matters: building your business and your legacy.",
      cta: "Get Started",
      formType: "general",
      videoSrc: "/videos/avideo.mp4" // Replace with your video path
    },
    {
      title: "Finance That Moves as Fast as You Do",
      subtitle: "Real-Time Solutions for Dynamic Businesses",
      description: "Experience financial services designed for the modern pace of business. Our agile platforms and responsive advisory teams ensure your financial operations keep up with your ambition, providing instant insights and rapid execution when you need it most.",
      cta: "Accelerate Growth",
      formType: "accelerate",
      videoSrc: "/videos/avideo1.mp4" // Replace with your video path
    },
    {
      title: "Where Tech Meets Trust in Finance",
      subtitle: "Innovation Backed by Integrity",
      description: "Leveraging cutting-edge technology while maintaining the highest standards of financial stewardship. Our AI-driven insights, automated workflows, and secure platforms work seamlessly with human expertise to deliver results you can trust.",
      cta: "Discover How",
      formType: "discover",
      videoSrc: "/videos/avideo2.mp4" // Replace with your video path
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  // Function to handle dot clicks
  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  const handleCTAClick = (formType) => {
    setCurrentFormType(formType);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Custom Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Consultation Form */}
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
        formType={currentFormType}
      />

      {/* Video Background Container */}
      <div className="video-container">
        {/* Single video element that changes source */}
        <video
          key={currentSlide}
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        //   poster="/images/video-poster.jpg" // Fallback image
        >
          <source src={slide.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className="video-overlay"></div>
      </div>

      {/* Main Content Area - Text Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex items-center justify-center py-8">
        <div className="text-center max-w-4xl w-full">
          
          {/* Content Block */}
          <div 
            key={currentSlide} 
            className="space-y-4 md:space-y-6 animate-fadeInSlideUp"
          >
            {/* Subtitle - Light and Gold */}
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl font-light tracking-widest uppercase"
              style={{ color: '#8BC53F' }}
            >
              {slide.subtitle}
            </h2>
            
            {/* Title - Bold White with subtle shadow for better contrast */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white drop-shadow-lg"
            >
              {slide.title}
            </h1>

            {/* Description - White with subtle shadow */}
            <p 
              className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto pt-8 text-white drop-shadow-md"
            >
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 mb-12">
            {/* Primary CTA Button */}
            <button
              onClick={() => handleCTAClick(slide.formType)}
              className="
                inline-flex items-center justify-center px-10 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform
                hover:scale-[1.03] hover:shadow-xl
              "
              style={{ backgroundColor: '#8BC53F', color: 'white', letterSpacing: '0.05em' }}
            >
              {slide.cta}
            </button>
            
            {/* Secondary CTA Button - White with border */}
            <a
              href="/service"
              className="
                inline-flex items-center justify-center px-10 py-3 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform
                hover:scale-[1.03] hover:bg-white hover:bg-opacity-10
              "
              style={{ borderColor: 'white', color: 'white', letterSpacing: '0.05em' }}
            >
              Our Services
            </a>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 pt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'scale-[1.5] opacity-100'
                    : 'scale-100 opacity-30'
                }`}
                style={{ backgroundColor: index === currentSlide ? '#8BC53F' : 'white' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App component wrapper
const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <MinimalistHeroSection />
    </div>
  );
}

export default App;