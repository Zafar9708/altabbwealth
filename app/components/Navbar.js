

// "use client"
// import Link from 'next/link';
// import React, { useState, useEffect, useRef } from 'react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [servicesHover, setServicesHover] = useState(false);
//     const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         // Check if window is defined before accessing it
//         if (typeof window !== 'undefined') {
//             const handleScroll = () => {
//                 setScrolled(window.scrollY > 10);
//             };
//             window.addEventListener('scroll', handleScroll);
//             return () => window.removeEventListener('scroll', handleScroll);
//         }
//     }, []);



//     const services = [
//         {
//             title: "Accounting & Bookkeeping",
//             description: "Accurate, compliant financial operations",
//             link: "/services/accounting"
//         },
//         {
//             title: "CFO Advisory Services",
//             description: "Strategic financial leadership",
//             link: "/services/cfo-advisory"
//         },
//         {
//             title: "Business Tax Services",
//             description: "Comprehensive tax strategies",
//             link: "/services/tax-services"
//         },
//         {
//             title: "Financial Planning & Analysis",
//             description: "Strategic insights for decisions",
//             link: "/services/financial-planning"
//         },
//         {
//             title: "Mergers & Acquisitions",
//             description: "Business growth partnerships",
//             link: "/services/mergers-acquisitions"
//         }
//     ];

//     const closeMobileMenu = () => {
//         setIsOpen(false);
//         setMobileServicesOpen(false);
//     };

//     return (
//         <>
//             <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
//                     ? 'bg-brand-background/95 backdrop-blur-md shadow-lg border-b border-brand-gold/20'
//                     : 'bg-brand-background border-b border-brand-gold/10'
//                 }`}>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-20">
//                         {/* Logo - Left Side (using <img> instead of Next.js <Image>) */}
//                         <div className="w-20 h-20 ml-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
//                             <Link href="/" className="flex items-center justify-center">
//                                 <img
//                                     src="/Logo.png"
//                                     alt="ALTABB Wealth Logo"
//                                     width={80}
//                                     height={80}
//                                     className="object-contain"
//                                 />
//                             </Link>
//                         </div>


//                         {/* Centered Navigation - Desktop */}
//                         <div className="hidden lg:flex items-center space-x-12">
//                             <a href="/" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
//                                 Home
//                             </a>


//                             <a href="/about" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
//                                 About
//                             </a>

//                             {/* Services with Mega Dropdown */}
//                             <div
//                                 className="relative"
//                                 ref={dropdownRef}
//                                 onMouseEnter={() => setServicesHover(true)}
//                                 onMouseLeave={() => setServicesHover(false)}
//                             >
//                                 <button className="flex items-center space-x-2 text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
//                                     <span>Services</span>
//                                     {/* Changed icon to a colon (:) and removed rotation */}
//                                     <span className={`text-brand-text mb-1 text-bold transition-transform duration-200`}>
//                                         :
//                                     </span>
//                                 </button>
//                             </div>

//                             <a href="/insights" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
//                                 Insights
//                             </a>
//                             <a href="/contact" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
//                                 Contact
//                             </a>
//                         </div>

//                         {/* CTA Button - Right Side */}
//                         <div className="hidden lg:block">
//                             <a href="/get-started">
//                                 <button className="bg-brand-text text-brand-background px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold transition-all duration-300 shadow-lg hover:shadow-xl">
//                                     Start Your Legacy
//                                 </button>
//                             </a>
//                         </div>

//                         {/* Mobile menu button */}
//                         <div className="lg:hidden">
//                             <button
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 className="text-brand-text p-3 rounded-lg hover:bg-brand-gold/10 transition-colors duration-200"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     {isOpen ? (
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     ) : (
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                     )}
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Services Mega Dropdown - Desktop (Retains Card Structure and uses brand-background) */}
//                 {servicesHover && (
//                     <div
//                         className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-brand-gold/20 z-40"
//                         onMouseEnter={() => setServicesHover(true)}
//                         onMouseLeave={() => setServicesHover(false)}
//                     >
//                         <div className="max-w-7xl mx-auto px-6 py-8">
//                             <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//                                 {services.map((service, index) => (
//                                     <div key={index} className="group">
//                                         <a
//                                             href={service.link} // Changed from <Link>
//                                             className="block p-2 hover:bg-brand-background/50 rounded-lg transition-all duration-300 group-hover:translate-x-1"
//                                         >
//                                             <h3 className="text-brand-text text-sm font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">
//                                                 {service.title}
//                                             </h3>
//                                             <p className="text-brand-text/70 text-xs mb-3 leading-relaxed">
//                                                 {service.description}
//                                             </p>
//                                             <div className="inline-flex items-center text-brand-gold font-semibold text-xs hover:text-brand-text transition-colors duration-300 group/learnmore">
//                                                 Learn More
//                                                 <svg className="w-3 h-3 ml-1 transform group-hover/learnmore:translate-x-1 transition-transform duration-300"
//                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                 </svg>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Mobile Navigation - Full Screen Overlay */}
//                 {isOpen && (
//                     <div className="lg:hidden fixed inset-0 z-40 bg-white mt-20 h-[calc(100vh-80px)] overflow-hidden">
//                         {/* Scrollable Container */}
//                         <div className="h-full overflow-y-auto pb-20">
//                             <div className="px-6 py-8 space-y-6">
//                                 <a
//                                     href="/" // Changed from <Link>
//                                     className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Home
//                                 </a>

//                                 <a
//                                     href="/about" // Changed from <Link>
//                                     className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     About
//                                 </a>

//                                 {/* Mobile Services with Toggle */}
//                                 <div className="border-b border-gray-100">
//                                     <button
//                                         onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                                         className="flex items-center justify-between w-full py-4 text-brand-text font-semibold text-xl hover:text-brand-gold transition-colors duration-200"
//                                     >
//                                         <span>Services</span>
//                                         {/* Changed icon to a colon (:) and removed rotation */}
//                                         <span className={`text-brand-gold text-2xl transition-transform duration-200`}>
//                                             :
//                                         </span>
//                                     </button>

//                                     {/* Mobile Services Dropdown - TITLES ONLY, brand-background, and vertical line */}
//                                     <div className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//                                         }`}>
//                                         {/* Applying background color here */}
//                                         <div className="py-4 pl-4 bg-brand-background">
//                                             {/* Applying vertical line here */}
//                                             <div className="space-y-1 py-2 border-l-4 border-brand-gold">
//                                                 {services.map((service, index) => (
//                                                     <a // Changed from <Link>
//                                                         key={index}
//                                                         href={service.link}
//                                                         className="block py-2 px-3 text-brand-text text-lg font-medium transition-colors duration-200 hover:bg-brand-gold/10 rounded-lg"
//                                                         onClick={closeMobileMenu}
//                                                     >
//                                                         {/* Only the title is displayed */}
//                                                         {service.title}
//                                                     </a>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <a
//                                     href="/insights" // Changed from <Link>
//                                     className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Insights
//                                 </a>
//                                 <a
//                                     href="/contact" // Changed from <Link>
//                                     className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Contact
//                                 </a>

//                                 <a href="/get-started">
//                                     <button
//                                         className="w-full bg-brand-text text-brand-background py-5 rounded-xl font-semibold text-xl mt-8 shadow-lg hover:bg-brand-gold transition-colors duration-300"
//                                         onClick={closeMobileMenu}
//                                     >
//                                         Start Your Legacy
//                                     </button>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Spacer for fixed nav */}
//             <div className="h-20"></div>
//         </>
//     );
// };

// export default Navbar;

"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesHover, setServicesHover] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('India');
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Check if window is defined before accessing it
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 10);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const services = [
        {
            title: "Accounting & Bookkeeping",
            description: "Accurate, compliant financial operations",
            link: "/services/accounting"
        },
        {
            title: "CFO Advisory Services",
            description: "Strategic financial leadership",
            link: "/services/cfo-advisory"
        },
        {
            title: "Business Tax Services",
            description: "Comprehensive tax strategies",
            link: "/services/tax-services"
        },
        {
            title: "Financial Planning & Analysis",
            description: "Strategic insights for decisions",
            link: "/services/financial-planning"
        },
        {
            title: "Mergers & Acquisitions",
            description: "Business growth partnerships",
            link: "/services/mergers-acquisitions"
        }
    ];

    const countries = [
        'India',
        'United States',
        'United Kingdom',
        'Canada',
        'Australia',
        'Germany',
        'France',
        'UAE'
    ];

    const closeMobileMenu = () => {
        setIsOpen(false);
        setMobileServicesOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-brand-background/95 backdrop-blur-md shadow-lg border-b border-brand-gold/20'
                    : 'bg-brand-background border-b border-brand-gold/10'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo - Left Side */}
                        <div className="w-20 h-20 ml-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                            <Link href="/" className="flex items-center justify-center">
                                <img
                                    src="/Logo.png"
                                    alt="ALTABB Wealth Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        {/* Centered Navigation - Desktop */}
                        <div className="hidden lg:flex items-center space-x-12">
                            <a href="/" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
                                Home
                            </a>
                            <a href="/about" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
                                About
                            </a>

                            {/* Services with Mega Dropdown */}
                            <div
                                className="relative"
                                ref={dropdownRef}
                                onMouseEnter={() => setServicesHover(true)}
                                onMouseLeave={() => setServicesHover(false)}
                            >
                                <button className="flex items-center space-x-2 text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
                                    <span>Services</span>
                                    <span className={`text-brand-text mb-1 text-bold transition-transform duration-200`}>
                                        :
                                    </span>
                                </button>
                            </div>

                            <a href="/insights" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
                                Insights
                            </a>
                            <a href="/contact" className="text-brand-text hover:text-brand-gold font-medium transition-colors duration-200 py-2">
                                Contact
                            </a>
                        </div>

                        {/* Right Side - Country Selector and CTA Button */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {/* Country Selector */}
                            

                            {/* CTA Button */}
                            <a href="/get-started">
                                <button className="bg-brand-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-brand-gold">
                                    Start Your Legacy
                                </button>
                            </a>
                        </div>
                        

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-brand-text p-3 rounded-lg hover:bg-brand-gold/10 transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Services Mega Dropdown - Desktop */}
                {servicesHover && (
                    <div
                        className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-brand-gold/20 z-40"
                        onMouseEnter={() => setServicesHover(true)}
                        onMouseLeave={() => setServicesHover(false)}
                    >
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                {services.map((service, index) => (
                                    <div key={index} className="group">
                                        <a
                                            href={service.link}
                                            className="block p-2 hover:bg-brand-background/50 rounded-lg transition-all duration-300 group-hover:translate-x-1"
                                        >
                                            <h3 className="text-brand-text text-sm font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-brand-text/70 text-xs mb-3 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="inline-flex items-center text-brand-gold font-semibold text-xs hover:text-brand-text transition-colors duration-300 group/learnmore">
                                                Learn More
                                                <svg className="w-3 h-3 ml-1 transform group-hover/learnmore:translate-x-1 transition-transform duration-300"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation - Full Screen Overlay */}
                {isOpen && (
                    <div className="lg:hidden fixed inset-0 z-40 bg-white mt-20 h-[calc(100vh-80px)] overflow-hidden">
                        {/* Scrollable Container */}
                        <div className="h-full overflow-y-auto pb-20">
                            <div className="px-6 py-8 space-y-6">
                                {/* Country Selector - Mobile */}
                                <div className="border-b border-gray-100 pb-4">
                                    <label className="block text-brand-text font-semibold text-lg mb-3">Select Country</label>
                                    <select 
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                        className="w-full bg-transparent border border-brand-gold/30 rounded-lg px-4 py-3 text-brand-text text-base focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                                    >
                                        {countries.map((country) => (
                                            <option key={country} value={country} className="bg-brand-background text-brand-text">
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <a
                                    href="/"
                                    className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </a>

                                <a
                                    href="/about"
                                    className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </a>

                                {/* Mobile Services with Toggle */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="flex items-center justify-between w-full py-4 text-brand-text font-semibold text-xl hover:text-brand-gold transition-colors duration-200"
                                    >
                                        <span>Services</span>
                                        <span className={`text-brand-gold text-2xl transition-transform duration-200`}>
                                            :
                                        </span>
                                    </button>

                                    {/* Mobile Services Dropdown */}
                                    <div className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="py-4 pl-4 bg-brand-background">
                                            <div className="space-y-1 py-2 border-l-4 border-brand-gold">
                                                {services.map((service, index) => (
                                                    <a
                                                        key={index}
                                                        href={service.link}
                                                        className="block py-2 px-3 text-brand-text text-lg font-medium transition-colors duration-200 hover:bg-brand-gold/10 rounded-lg"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        {service.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="/insights"
                                    className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Insights
                                </a>
                                <a
                                    href="/contact"
                                    className="block py-4 text-brand-text font-semibold text-xl border-b border-gray-100 hover:text-brand-gold transition-colors duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </a>

                                <a href="/get-started">
                                    <button
                                        className="w-full bg-brand-gold text-white py-5 rounded-xl font-semibold text-xl mt-8 shadow-lg hover:bg-brand-gold/90 transition-colors duration-300"
                                        onClick={closeMobileMenu}
                                    >
                                        Start Your Legacy
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Spacer for fixed nav */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;