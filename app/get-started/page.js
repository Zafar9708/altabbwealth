// "use client"
// import React, { useState } from 'react';

// const GetStartedPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         company: '',
//         industry: '',
//         service: '',
//         message: '',
//         budget: '',
//         timeline: ''
//     });

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         // Handle form submission here
//         alert('Thank you for your submission! We will contact you soon.');
//     };

//     const services = [
//         "Accounting & Bookkeeping",
//         "CFO Advisory Services",
//         "Business Tax Services",
//         "Financial Planning & Analysis",
//         "Mergers & Acquisitions",
//         "Wealth Management",
//         "Investment Advisory",
//         "Business Consulting"
//     ];

//     const industries = [
//         "Technology",
//         "Healthcare",
//         "Finance",
//         "Manufacturing",
//         "Retail",
//         "Real Estate",
//         "Education",
//         "Other"
//     ];

//     const budgets = [
//         "Less than $50,000",
//         "$50,000 - $100,000",
//         "$100,000 - $500,000",
//         "$500,000 - $1M",
//         "More than $1M"
//     ];

//     const timelines = [
//         "Immediately",
//         "Within 1 month",
//         "1-3 months",
//         "3-6 months",
//         "6+ months"
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 pt-20">
//             {/* Header Section */}
//             <div className="bg-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <div className="flex justify-center mb-6">
//                         <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-200">
//                             <img
//                                 src="/Logo.png"
//                                 alt="cmdfin Logo"
//                                 className="w-16 h-16 object-contain"
//                             />
//                         </div>
//                     </div>
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                         Start Your Legacy
//                     </h1>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Begin your journey towards financial excellence. Fill out the form below and our wealth experts will contact you within 24 hours to discuss how we can help build your legacy.
//                     </p>
//                 </div>
//             </div>

//             {/* Form Section */}
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="bg-white rounded-2xl shadow-2xl border border-yellow-200 overflow-hidden">
//                     <div className="bg-gradient-to-r from-yellow-600 to-amber-600 py-6 px-8">
//                         <h2 className="text-2xl font-bold text-white text-center">
//                             Get Your Free Consultation
//                         </h2>
//                         <p className="text-yellow-100 text-center mt-2">
//                             Complete this form and take the first step towards financial success
//                         </p>
//                     </div>

//                     <form onSubmit={handleSubmit} className="p-8 space-y-6">
//                         {/* Personal Information */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     First Name *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     required
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                     placeholder="Enter your first name"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Last Name *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     required
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                     placeholder="Enter your last name"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Email Address *
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     required
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                     placeholder="Enter your email address"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Phone Number *
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     required
//                                     value={formData.phone}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                     placeholder="Enter your phone number"
//                                 />
//                             </div>
//                         </div>

//                         {/* Business Information */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Company Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="company"
//                                     value={formData.company}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                     placeholder="Enter your company name"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Industry
//                                 </label>
//                                 <select
//                                     name="industry"
//                                     value={formData.industry}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                 >
//                                     <option value="">Select your industry</option>
//                                     {industries.map((industry, index) => (
//                                         <option key={index} value={industry}>{industry}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Service Selection */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Service Interested In *
//                             </label>
//                             <select
//                                 name="service"
//                                 required
//                                 value={formData.service}
//                                 onChange={handleInputChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                             >
//                                 <option value="">Select a service</option>
//                                 {services.map((service, index) => (
//                                     <option key={index} value={service}>{service}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Budget and Timeline */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Estimated Budget
//                                 </label>
//                                 <select
//                                     name="budget"
//                                     value={formData.budget}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                 >
//                                     <option value="">Select budget range</option>
//                                     {budgets.map((budget, index) => (
//                                         <option key={index} value={budget}>{budget}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Project Timeline
//                                 </label>
//                                 <select
//                                     name="timeline"
//                                     value={formData.timeline}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
//                                 >
//                                     <option value="">Select timeline</option>
//                                     {timelines.map((timeline, index) => (
//                                         <option key={index} value={timeline}>{timeline}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Message */}
//                         <div>
//                             <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Tell Us About Your Goals
//                             </label>
//                             <textarea
//                                 name="message"
//                                 rows="5"
//                                 value={formData.message}
//                                 onChange={handleInputChange}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 resize-none"
//                                 placeholder="Describe your financial goals, challenges, and what you hope to achieve with our services..."
//                             />
//                         </div>

//                         {/* Submit Button */}
//                         <div className="text-center pt-6">
//                             <button
//                                 type="submit"
//                                 className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-4 px-12 rounded-lg font-bold text-lg hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                             >
//                                 Start Your Legacy Journey
//                             </button>
//                             <p className="text-sm text-gray-500 mt-4">
//                                 By submitting this form, you agree to our Privacy Policy and Terms of Service. We respect your privacy and will never share your information with third parties.
//                             </p>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Additional Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//                     <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-100">
//                         <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">24-Hour Response</h3>
//                         <p className="text-gray-600 text-sm">Our experts will contact you within 24 hours of submission</p>
//                     </div>
//                     <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-100">
//                         <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">Confidential & Secure</h3>
//                         <p className="text-gray-600 text-sm">Your information is protected with enterprise-grade security</p>
//                     </div>
//                     <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-100">
//                         <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-gray-900 mb-2">No Commitment</h3>
//                         <p className="text-gray-600 text-sm">Initial consultation is completely free with no obligations</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GetStartedPage;



"use client"
import React, { useState } from 'react';

const GetStartedPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

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
                    company: formData.company,
                    industry: formData.industry,
                    service: formData.service,
                    message: formData.message,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    source: 'get_started_page'
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
                console.log('Get Started form submitted successfully:', formData);
                
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    industry: '',
                    service: '',
                    message: '',
                    budget: '',
                    timeline: ''
                });

                // Auto hide success message after 5 seconds
                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            } else {
                alert('Thank you for your submission! We will contact you soon. (Note: Email notification failed)');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Sorry, there was an error submitting your form. Please try again or contact us directly at hi@altabb.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        "Accounting & Bookkeeping",
        "CFO Advisory Services",
        "Business Tax Services",
        "Financial Planning & Analysis",
        "Mergers & Acquisitions",
        "Wealth Management",
        "Investment Advisory",
        "Business Consulting"
    ];

    const industries = [
        "Technology",
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Real Estate",
        "Education",
        "Other"
    ];

    const budgets = [
        "Less than $50,000",
        "$50,000 - $100,000",
        "$100,000 - $500,000",
        "$500,000 - $1M",
        "More than $1M"
    ];

    const timelines = [
        "Immediately",
        "Within 1 month",
        "1-3 months",
        "3-6 months",
        "6+ months"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 pt-20">
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
                            <div className="text-green-700 text-sm">We've received your information and sent a confirmation email.</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Header Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-200">
                            <img
                                src="/Logo.png"
                                alt="cmdfin Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Start Your Legacy
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Begin your journey towards financial excellence. Fill out the form below and our wealth experts will contact you within 24 hours to discuss how we can help build your legacy.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-2xl border border-yellow-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-600 to-amber-600 py-6 px-8">
                        <h2 className="text-2xl font-bold text-white text-center">
                            Get Your Free Consultation
                        </h2>
                        <p className="text-yellow-100 text-center mt-2">
                            Complete this form and take the first step towards financial success
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Business Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Enter your company name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Industry
                                </label>
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select your industry</option>
                                    {industries.map((industry, index) => (
                                        <option key={index} value={industry}>{industry}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Service Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Service Interested In *
                            </label>
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                <option value="">Select a service</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        {/* Budget and Timeline */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Estimated Budget
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select budget range</option>
                                    {budgets.map((budget, index) => (
                                        <option key={index} value={budget}>{budget}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Project Timeline
                                </label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select timeline</option>
                                    {timelines.map((timeline, index) => (
                                        <option key={index} value={timeline}>{timeline}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Tell Us About Your Goals
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                placeholder="Describe your financial goals, challenges, and what you hope to achieve with our services..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-4 px-12 rounded-lg font-bold text-lg hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mx-auto"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Starting Your Journey...
                                    </>
                                ) : (
                                    'Start Your Legacy Journey'
                                )}
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                By submitting this form, you agree to our Privacy Policy and Terms of Service. We respect your privacy and will never share your information with third parties.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-100">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">24-Hour Response</h3>
                        <p className="text-gray-600 text-sm">Our experts will contact you within 24 hours of submission</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-100">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Confidential & Secure</h3>
                        <p className="text-gray-600 text-sm">Your information is protected with enterprise-grade security</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-yellow-100">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">No Commitment</h3>
                        <p className="text-gray-600 text-sm">Initial consultation is completely free with no obligations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;