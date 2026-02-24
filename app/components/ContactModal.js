// "use client"
// import React, { useEffect, useRef } from 'react';

// const ContactModal = ({ isOpen, onClose }) => {
//     const modalRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 onClose();
//             }
//         };

//         const handleEscapeKey = (event) => {
//             if (event.key === 'Escape') {
//                 onClose();
//             }
//         };

//         if (isOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//             document.addEventListener('keydown', handleEscapeKey);
//             document.body.style.overflow = 'hidden';
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//             document.removeEventListener('keydown', handleEscapeKey);
//             document.body.style.overflow = 'unset';
//         };
//     }, [isOpen, onClose]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted');
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
//             {/* Scrollable container for small screens */}
//             <div className="max-h-[90vh] w-full max-w-md mx-auto overflow-y-auto">
//                 <div 
//                     ref={modalRef}
//                     className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full mx-auto transform transition-all duration-300 scale-100 border border-yellow-200"
//                 >
//                     {/* Header with close button */}
//                     <div className="flex justify-between items-center p-4 sm:p-6 border-b border-yellow-100 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-t-xl sm:rounded-t-2xl">
//                         <h2 className="text-lg ml-20 sm:text-2xl font-bold text-gray-800">
//                             Start Your Journey
//                         </h2>
//                         <button
//                             onClick={onClose}
//                             className="text-gray-500 hover:text-yellow-700 transition-colors duration-200 p-1 sm:p-2 rounded-full hover:bg-yellow-100 flex-shrink-0"
//                         >
//                             <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Logo and Tagline Section */}
//                     <div className="text-center py-6 sm:py-8 bg-gradient-to-b from-white to-yellow-50/30">
//                         {/* Logo */}
//                         <div className="flex justify-center mb-4">
//                             <div className="w-20 h-20 sm:w-24 sm:h-24   flex items-center justify-center ">
//                                 <img
//                                     src="/Logo.png"
//                                     alt="cmdfin Logo"
//                                     width={80}
//                                     height={80}
//                                     className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
//                                 />
//                             </div>
//                         </div>
                        
//                         {/* Tagline */}
//                         <div className="space-y-2">
//                             <h3 className="text-2xl sm:text-3xl font-bold text-yellow-700">
//                                 cmdfin
//                             </h3>
//                             <p className="text-sm sm:text-base text-gray-600 font-medium italic">
//                                 Building Wealth, Creating Legacy.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit} className="px-4 sm:px-6 pb-6 sm:pb-8 space-y-4 sm:space-y-5 bg-white rounded-b-xl sm:rounded-b-2xl">
//                         {/* Form Header */}
//                         <div className="text-center pt-2">
//                             <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
//                                 Get Your Free Consultation
//                             </h4>
//                             <p className="text-sm text-gray-500 mt-1">
//                                 Fill the form below and we'll get back to you within 24 hours
//                             </p>
//                         </div>

//                         <div className="space-y-4 sm:space-y-5">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Full Name *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     required
//                                     className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm"
//                                     placeholder="Enter your full name"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Email Address *
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     required
//                                     className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm"
//                                     placeholder="Enter your email address"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm"
//                                     placeholder="Enter your phone number"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Service Interested In
//                                 </label>
//                                 <select
//                                     id="service"
//                                     className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm"
//                                 >
//                                     <option value="">Select a service</option>
//                                     <option value="accounting">Accounting & Bookkeeping</option>
//                                     <option value="cfo">CFO Advisory Services</option>
//                                     <option value="tax">Business Tax Services</option>
//                                     <option value="financial-planning">Financial Planning & Analysis</option>
//                                     <option value="mergers">Mergers & Acquisitions</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Message
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     rows={3}
//                                     className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm resize-none"
//                                     placeholder="Tell us about your financial goals and requirements..."
//                                 />
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-4 rounded-lg font-bold text-sm sm:text-base hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] mt-2"
//                         >
//                             Get Free Consultation
//                         </button>

//                         <p className="text-xs text-gray-500 text-center px-2 pt-2 border-t border-gray-100 mt-4">
//                             By submitting this form, you agree to our Privacy Policy and Terms of Service.
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactModal;



"use client"
import React, { useEffect, useRef, useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                // Show success message
                setShowSuccess(true);
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
                
                // Auto close after 3 seconds
                setTimeout(() => {
                    setShowSuccess(false);
                    onClose();
                }, 3000);
                
            } else {
                throw new Error(result.error || 'Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Sorry, there was an error submitting your form. Please try again or contact us directly at hi@altabb.com');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    // Success Message Component
    if (showSuccess) {
        return (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                <div 
                    ref={modalRef}
                    className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100 border border-green-200"
                >
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Thank You!
                        </h2>
                        
                        <p className="text-gray-600 mb-2">
                            Your consultation request has been submitted successfully.
                        </p>
                        
                        <p className="text-gray-500 text-sm">
                            We've sent a confirmation to your email. Our team will contact you within 24 hours.
                        </p>
                        
                        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                            <p className="text-green-800 text-sm font-medium">
                                ✅ Email sent to: {formData.email}
                            </p>
                        </div>
                        
                        <button
                            onClick={() => {
                                setShowSuccess(false);
                                onClose();
                            }}
                            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
            {/* Scrollable container for small screens */}
            <div className="max-h-[90vh] w-full max-w-md mx-auto overflow-y-auto">
                <div 
                    ref={modalRef}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full mx-auto transform transition-all duration-300 scale-100 border border-[#8BC53F]"
                >
                    {/* Header with close button */}
                    <div className="flex justify-between items-center p-4 sm:p-6 border-b border-yellow-100 bg-[#8BC53F] rounded-t-xl sm:rounded-t-2xl">
                        <h2 className="text-lg ml-20 sm:text-2xl font-bold text-gray-800">
                            Start Your Journey
                        </h2>
                        <button
                            onClick={onClose}
                            disabled={isLoading}
                            className="text-gray-500 hover:text-[#8BC53F] transition-colors duration-200 p-1 sm:p-2 rounded-full hover:bg-gray-100 flex-shrink-0"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Logo and Tagline Section */}
                    <div className="text-center py-6 sm:py-8 bg-gradient-to-b from-white to-yellow-50/30">
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                                <img
                                    src="/Logo.png"
                                    alt="cmdfin Logo"
                                    width={80}
                                    height={80}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Tagline */}
                        <div className="space-y-2">
                            {/* <h3 className="text-2xl sm:text-3xl font-bold text-yellow-700">
                                cmdfin
                            </h3> */}
                            <p className="text-sm sm:text-base text-gray-600 font-medium italic">
                                Building Wealth, Creating Legacy.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-4 sm:px-6 pb-6 sm:pb-8 space-y-4 sm:space-y-5 bg-white rounded-b-xl sm:rounded-b-2xl">
                        {/* Form Header */}
                        <div className="text-center pt-2">
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                                Get Your Free Consultation
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                                Fill the form below and we'll get back to you within 24 hours
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Service Interested In
                                </label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                                    <option value="CFO Advisory Services">CFO Advisory Services</option>
                                    <option value="Business Tax Services">Business Tax Services</option>
                                    <option value="Financial Planning & Analysis">Financial Planning & Analysis</option>
                                    <option value="Mergers & Acquisitions">Mergers & Acquisitions</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 bg-white shadow-sm resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Tell us about your financial goals and requirements..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#8BC53F] text-white py-4 rounded-lg font-bold text-sm sm:text-base hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] mt-2 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Get Free Consultation'
                            )}
                        </button>

                        <p className="text-xs text-gray-500 text-center px-2 pt-2 border-t border-gray-100 mt-4">
                            By submitting this form, you agree to our Privacy Policy and Terms of Service.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;