// const CountriesWeWorkWith = () => {
//   const countries = [
//     {
//       name: "India",
//       description: "Domestic and cross-border financial planning, taxation, and compliance.",
//       flag: "🇮🇳"
//     },
//     {
//       name: "UAE", 
//       description: "Corporate advisory, Sharia-compliant investments, and business setup.",
//       flag: "🇦🇪"
//     },
//     {
//       name: "US",
//       description: "Strategic FP&A, global taxation, and investment analytics.",
//       flag: "🇺🇸"
//     }
//   ];

//   const contactInfo = {
//     company: "Altabb Wealth Private Limited",
//     address: "Tower C, Business Bay, Mumbai 400013, India",
//     phone: "+91 90000 00000",
//     email: "contact@altabbwealth.com",
//     website: "www.altabbwealth.co"
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div 
//           className="text-center mb-16"
//           data-aos="zoom-in-up"
//           data-aos-duration="800"
//         >
//           <div className="inline-flex items-center mb-8">
//             <div className="w-16 h-1 bg-brand-gold mr-4"></div>
//             <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
//               GLOBAL REACH
//             </span>
//             <div className="w-16 h-1 bg-brand-gold ml-4"></div>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
//             Countries We <span className="text-brand-gold">Work With</span>
//           </h2>
//           <p className="text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed">
//             Delivering comprehensive financial services across key global markets with 
//             localized expertise and international standards.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
//           {/* Countries Section */}
//           <div>
//             <h3 className="text-2xl font-bold text-brand-text mb-8 text-center lg:text-left">
//               Our Global Presence
//             </h3>
//             <div className="space-y-6">
//               {countries.map((country, index) => (
//                 <div 
//                   key={index}
//                   className="bg-brand-background rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors duration-300"
//                   data-aos="zoom-in-up"
//                   data-aos-duration="800"
//                   data-aos-delay={index * 200}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-xl flex items-center justify-center text-2xl">
//                       {country.flag}
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-xl font-bold text-brand-text mb-2">
//                         {country.name}
//                       </h4>
//                       <p className="text-brand-text/70 leading-relaxed">
//                         {country.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div 
//             className="bg-brand-text rounded-2xl p-8 text-white"
//             data-aos="zoom-in-up"
//             data-aos-duration="800"
//             data-aos-delay="400"
//           >
//             <h3 className="text-2xl font-bold mb-2">
//               Contact Information
//             </h3>
//             <p className="text-white/70 mb-8">
//               Get in touch with our global headquarters
//             </p>

//             <div className="space-y-6">
//               {/* Company */}
//               <div className="flex items-start">
//                 <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-white font-semibold">Head Office</div>
//                   <div className="text-white/80">{contactInfo.company}</div>
//                   <div className="text-white/70 text-sm mt-1">{contactInfo.address}</div>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-white font-semibold">Phone</div>
//                   <a href={`tel:${contactInfo.phone}`} className="text-white/80 hover:text-brand-gold transition-colors duration-300">
//                     {contactInfo.phone}
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start">
//                 <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-white font-semibold">Email</div>
//                   <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-brand-gold transition-colors duration-300">
//                     {contactInfo.email}
//                   </a>
//                 </div>
//               </div>

//               {/* Website */}
//               <div className="flex items-start">
//                 <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-white font-semibold">Website</div>
//                   <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-gold transition-colors duration-300">
//                     {contactInfo.website}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="mt-8 pt-6 border-t border-white/20">
//               <a 
//                 href="/contact" 
//                 className="w-full bg-brand-gold text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-300 text-center block"
//               >
//                 Schedule a Meeting
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Global Stats */}
//         <div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-brand-gold/20"
//           data-aos="zoom-in-up"
//           data-aos-duration="800"
//           data-aos-delay="600"
//         >
//           <div className="text-center">
//             <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
//             <div className="text-brand-text font-semibold">Countries</div>
//             <div className="text-brand-text/70 text-sm">Global Presence</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-brand-gold mb-2">50+</div>
//             <div className="text-brand-text font-semibold">Clients Served</div>
//             <div className="text-brand-text/70 text-sm">Internationally</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
//             <div className="text-brand-text font-semibold">Support</div>
//             <div className="text-brand-text/70 text-sm">Across Timezones</div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CountriesWeWorkWith;


const CountriesWeWorkWith = () => {
  const countries = [
    {
      name: "India",
      description: "Domestic and cross-border financial planning, taxation, and compliance.",
      flag: "🇮🇳"
    },
    {
      name: "UAE", 
      description: "Corporate advisory, Sharia-compliant investments, and business setup.",
      flag: "🇦🇪"
    },
    {
      name: "US",
      description: "Strategic FP&A, global taxation, and investment analytics.",
      flag: "🇺🇸"
    }
  ];

  const contactInfo = {
    company: "Altabb Wealth Private Limited",
    address: "5204, ATS Rhapsody, Sector-1, Greater Noida, UP, 201306, India",
    phone: "+91 8505804836",
    email: "hi@altabb.com",
    website: "www.altabb.com"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div 
          className="text-center mb-16"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-brand-gold mr-4"></div>
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
              GLOBAL REACH
            </span>
            <div className="w-16 h-1 bg-brand-gold ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Countries We <span className="text-brand-gold">Work With</span>
          </h2>
          <p className="text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed">
            Delivering comprehensive financial services across key global markets with 
            localized expertise and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Countries Section */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text mb-8 text-center lg:text-left">
              Our Global Presence
            </h3>
            <div className="space-y-6">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className="bg-brand-background rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors duration-300"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 200}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-xl flex items-center justify-center text-2xl">
                      {country.flag}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-brand-text mb-2">
                        {country.name}
                      </h4>
                      <p className="text-brand-text/70 leading-relaxed">
                        {country.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className="bg-brand-text rounded-2xl p-8 text-white"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold mb-2">
              Contact Us
            </h3>
            <p className="text-white/70 mb-8">
              Get in touch with our global headquarters
            </p>

            <div className="space-y-6">
              {/* Company */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Head Office</div>
                  <div className="text-white/80">{contactInfo.company}</div>
                  <div className="text-white/70 text-sm mt-1">{contactInfo.address}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-white/80 hover:text-brand-gold transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-brand-gold transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Website</div>
                  <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-gold transition-colors duration-300">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <a 
                href="/contact" 
                className="w-full bg-brand-gold text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-300 text-center block"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-brand-gold/20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">3</div>
            <div className="text-brand-text font-semibold">Countries</div>
            <div className="text-brand-text/70 text-sm">Global Presence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">500+</div>
            <div className="text-brand-text font-semibold">Clients Served</div>
            <div className="text-brand-text/70 text-sm">Internationally</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
            <div className="text-brand-text font-semibold">Support</div>
            <div className="text-brand-text/70 text-sm">Across Timezones</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CountriesWeWorkWith;