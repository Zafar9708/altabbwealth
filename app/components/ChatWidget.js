// "use client"
// import React, { useState, useRef, useEffect } from 'react';

// const ChatWidget = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//     });
//     const messagesEndRef = useRef(null);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages, showForm]);

//     useEffect(() => {
//         if (isOpen && messages.length === 0 && !showForm) {
//             setMessages([
//                 {
//                     id: 1,
//                     text: "Hello! Welcome to cmdfin. I'm here to help you with your financial journey. How can I assist you today?",
//                     sender: 'bot',
//                     timestamp: new Date()
//                 }
//             ]);
//         }
//     }, [isOpen, showForm]);

//     const handleSendMessage = (e) => {
//         e.preventDefault();
//         if (inputValue.trim() === '') return;

//         const userMessage = {
//             id: messages.length + 1,
//             text: inputValue,
//             sender: 'user',
//             timestamp: new Date()
//         };

//         setMessages(prev => [...prev, userMessage]);
//         setInputValue('');

//         setTimeout(() => {
//             const botMessage = {
//                 id: messages.length + 2,
//                 text: "I'd love to help you get started! Please fill out this quick form and one of our wealth experts will contact you shortly.",
//                 sender: 'bot',
//                 timestamp: new Date()
//             };
//             setMessages(prev => [...prev, botMessage]);

//             setTimeout(() => {
//                 setShowForm(true);
//             }, 1000);
//         }, 1000);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
        
//         // Show success message
//         const successMessage = {
//             id: messages.length + 1,
//             text: "Thank you! We've received your information. One of our wealth experts will contact you within 24 hours.",
//             sender: 'bot',
//             timestamp: new Date()
//         };
//         setMessages(prev => [...prev, successMessage]);
//         setShowForm(false);
        
//         // Reset form
//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             service: '',
//             message: ''
//         });
//     };

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const formatTime = (date) => {
//         return date.toLocaleTimeString('en-US', { 
//             hour: '2-digit', 
//             minute: '2-digit',
//             hour12: true 
//         });
//     };

//     const closeForm = () => {
//         setShowForm(false);
//     };

//     return (
//         <>
//             {!isOpen && (
//                 <div className="fixed bottom-6 right-6 z-40">
//                     <button
//                         onClick={() => setIsOpen(true)}
//                         className="bg-yellow-600 hover:bg-yellow-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                         </svg>
//                         <div className="absolute -top-1 -right-1">
//                             <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
//                         </div>
//                     </button>
//                     <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                         Chat with us
//                     </div>
//                 </div>
//             )}

//             {isOpen && (
//                 <div className="fixed bottom-6 right-6 z-40 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
//                     {/* Header */}
//                     <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
//                         <div className="flex items-center space-x-3">
//                             <div className="relative">
//                                 <div className="w-10 h-10  flex items-center justify-center">
//                                     <img
//                                         src="/Logo.png"
//                                         alt="cmdfin"
//                                         className="w-8 h-8 object-contain"
//                                     />
//                                 </div>
                                
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-sm">cmdfin</h3>
//                                 <div className="flex items-center space-x-1">
//                                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                                     <span className="text-xs text-green-100">Online</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => {
//                                 setIsOpen(false);
//                                 setShowForm(false);
//                             }}
//                             className="text-white hover:text-yellow-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Chat Messages or Form */}
//                     <div className="flex-1 overflow-y-auto bg-gray-50">
//                         {!showForm ? (
//                             /* Messages View */
//                             <div className="p-4 space-y-3 h-full">
//                                 {messages.map((message) => (
//                                     <div
//                                         key={message.id}
//                                         className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                                     >
//                                         <div
//                                             className={`max-w-[80%] rounded-2xl p-3 ${
//                                                 message.sender === 'user'
//                                                     ? 'bg-yellow-600 text-white rounded-br-none'
//                                                     : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
//                                             }`}
//                                         >
//                                             <p className="text-sm">{message.text}</p>
//                                             <p className={`text-xs mt-1 ${
//                                                 message.sender === 'user' ? 'text-yellow-100' : 'text-gray-500'
//                                             }`}>
//                                                 {formatTime(message.timestamp)}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <div ref={messagesEndRef} />
//                             </div>
//                         ) : (
//                             /* Form View */
//                             <div className="h-full flex flex-col">
//                                 <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
//                                     <h3 className="font-semibold text-gray-800">Get Your Free Consultation</h3>
//                                     <button
//                                         onClick={closeForm}
//                                         className="text-gray-500 hover:text-yellow-600 p-1 rounded-full hover:bg-gray-100"
//                                     >
//                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                         </svg>
//                                     </button>
//                                 </div>
                                
//                                 <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-4 space-y-3">
//                                     <div>
//                                         <label className="block text-xs font-medium text-gray-700 mb-1">
//                                             Full Name *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             required
//                                             value={formData.name}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
//                                             placeholder="Your full name"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-xs font-medium text-gray-700 mb-1">
//                                             Email Address *
//                                         </label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             required
//                                             value={formData.email}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
//                                             placeholder="your@email.com"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-xs font-medium text-gray-700 mb-1">
//                                             Phone Number
//                                         </label>
//                                         <input
//                                             type="tel"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
//                                             placeholder="Your phone number"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-xs font-medium text-gray-700 mb-1">
//                                             Service Interested In
//                                         </label>
//                                         <select
//                                             name="service"
//                                             value={formData.service}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
//                                         >
//                                             <option value="">Select a service</option>
//                                             <option value="accounting">Accounting & Bookkeeping</option>
//                                             <option value="cfo">CFO Advisory Services</option>
//                                             <option value="tax">Business Tax Services</option>
//                                             <option value="financial-planning">Financial Planning & Analysis</option>
//                                             <option value="mergers">Mergers & Acquisitions</option>
//                                         </select>
//                                     </div>

//                                     <div>
//                                         <label className="block text-xs font-medium text-gray-700 mb-1">
//                                             Message
//                                         </label>
//                                         <textarea
//                                             name="message"
//                                             rows="2"
//                                             value={formData.message}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
//                                             placeholder="Tell us about your requirements..."
//                                         />
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-yellow-700 transition-colors duration-200 mt-2"
//                                     >
//                                         Submit Form
//                                     </button>
//                                 </form>
//                             </div>
//                         )}
//                     </div>

//                     {/* Input Area - Only show when not in form view */}
//                     {!showForm && (
//                         <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
//                             <div className="flex space-x-2">
//                                 <input
//                                     type="text"
//                                     value={inputValue}
//                                     onChange={(e) => setInputValue(e.target.value)}
//                                     placeholder="Type your message..."
//                                     className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
//                                     autoFocus
//                                 />
//                                 <button
//                                     type="submit"
//                                     disabled={!inputValue.trim()}
//                                     className="bg-yellow-600 text-white p-2 rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
//                                 >
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </form>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default ChatWidget;


"use client"
import React, { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, showForm]);

    useEffect(() => {
        if (isOpen && messages.length === 0 && !showForm) {
            setMessages([
                {
                    id: 1,
                    text: "Hello! Welcome to cmdfin. I'm here to help you with your financial journey. How can I assist you today?",
                    sender: 'bot',
                    timestamp: new Date()
                }
            ]);
        }
    }, [isOpen, showForm]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        setTimeout(() => {
            const botMessage = {
                id: messages.length + 2,
                text: "I'd love to help you get started! Please fill out this quick form and one of our wealth experts will contact you shortly.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);

            setTimeout(() => {
                setShowForm(true);
            }, 1000);
        }, 1000);
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
                    ...formData,
                    source: 'chat_widget' // Identify that it came from chat widget
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email notification
            const emailSent = await sendEmailNotification(formData);
            
            if (emailSent) {
                // Show success message
                const successMessage = {
                    id: messages.length + 1,
                    text: "Thank you! We've received your information and sent a confirmation to your email. One of our wealth experts will contact you within 24 hours.",
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, successMessage]);
            } else {
                // Show message without email confirmation
                const successMessage = {
                    id: messages.length + 1,
                    text: "Thank you! We've received your information. One of our wealth experts will contact you within 24 hours.",
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, successMessage]);
            }
            
            setShowForm(false);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            
            // Show error message
            const errorMessage = {
                id: messages.length + 1,
                text: "Sorry, there was an error submitting your form. Please try again or contact us directly at hi@altabb.com",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <>
            {!isOpen && (
                <div className="fixed bottom-6 right-6 z-40">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#8BC53F] hover:bg-yellow-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <div className="absolute -top-1 -right-1">
                            <div className="w-3 h-3 bg-[#8BC53F] rounded-full border-2 border-white animate-pulse"></div>
                        </div>
                    </button>
                    <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Chat with us
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="fixed bottom-6 right-6 z-40 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
                    {/* Header */}
                    <div className="bg-[#8BC53F] text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10  flex items-center justify-center">
                                    <img
                                        src="/Logo.png"
                                        alt="cmdfin"
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">cmdfin</h3>
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-green-100">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setShowForm(false);
                            }}
                            className="text-white hover:text-yellow-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Messages or Form */}
                    <div className="flex-1 overflow-y-auto bg-gray-50">
                        {!showForm ? (
                            /* Messages View */
                            <div className="p-4 space-y-3 h-full">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl p-3 ${
                                                message.sender === 'user'
                                                    ? 'bg-yellow-600 text-white rounded-br-none'
                                                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                                            }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                            <p className={`text-xs mt-1 ${
                                                message.sender === 'user' ? 'text-yellow-100' : 'text-gray-500'
                                            }`}>
                                                {formatTime(message.timestamp)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        ) : (
                            /* Form View */
                            <div className="h-full flex flex-col">
                                <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
                                    <h3 className="font-semibold text-gray-800">Get Your Free Consultation</h3>
                                    <button
                                        onClick={closeForm}
                                        className="text-gray-500 hover:text-yellow-600 p-1 rounded-full hover:bg-gray-100"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                
                                <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-4 space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            placeholder="Your phone number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">
                                            Service Interested In
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                                        <label className="block text-xs font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="2"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-yellow-700 transition-colors duration-200 mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
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
                                            'Submit Form'
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Input Area - Only show when not in form view */}
                    {!showForm && (
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="bg-yellow-600 text-white p-2 rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </>
    );
};

export default ChatWidget;