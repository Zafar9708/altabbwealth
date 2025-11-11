// import Link from "next/link";

// const OurProcess = () => {
//   const steps = [
//     {
//       step: "01",
//       title: "Discovery & Assessment",
//       description: "We begin by understanding your financial goals, current situation, and legacy aspirations through comprehensive analysis.",
//       features: ["Financial Goal Analysis", "Risk Assessment", "Wealth Evaluation"]
//     },
//     {
//       step: "02", 
//       title: "Strategic Planning",
//       description: "Develop customized financial strategies and investment plans aligned with your objectives and risk tolerance.",
//       features: ["Portfolio Strategy", "Tax Optimization", "Estate Planning"]
//     },
//     {
//       step: "03",
//       title: "Implementation", 
//       description: "Execute the financial plan with precision, leveraging our expertise and advanced wealth management tools.",
//       features: ["Asset Allocation", "Investment Execution", "Documentation"]
//     },
//     {
//       step: "04",
//       title: "Ongoing Management",
//       description: "Continuous monitoring, performance review, and strategic adjustments to ensure long-term wealth growth.",
//       features: ["Performance Review", "Strategy Adjustments", "Progress Reporting"]
//     }
//   ];

//   return (
//     <section className="py-20 bg-brand-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div 
//           className="text-center mb-20"
//           data-aos="zoom-in-up"
//           data-aos-duration="800"
//         >
//           <div className="inline-flex items-center mb-8">
//             <div className="w-16 h-1 bg-brand-gold mr-4"></div>
//             <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
//               OUR PROCESS
//             </span>
//             <div className="w-16 h-1 bg-brand-gold ml-4"></div>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
//             Structured Path to <span className="text-brand-gold">Wealth Creation</span>
//           </h2>
//           <p className="text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed">
//             Our systematic approach ensures every aspect of your financial journey is meticulously planned 
//             and executed for optimal results and lasting prosperity.
//           </p>
//         </div>

//         {/* Process Steps */}
//         <div className="relative">
//           {/* Vertical connecting line */}
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/20 transform -translate-x-1/2"></div>
          
//           <div className="space-y-12 lg:space-y-0">
//             {steps.map((step, index) => (
//               <div 
//                 key={index}
//                 className={`relative flex flex-col lg:flex-row ${
//                   index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                 } items-center gap-12`}
//               >
//                 {/* Step Content */}
//                 <div 
//                   className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
//                   data-aos="zoom-in-up"
//                   data-aos-duration="800"
//                   data-aos-delay={index * 200}
//                 >
//                   <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/10">
//                     <div className="flex items-start mb-6">
//                       <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mr-6">
//                         <span className="text-white font-bold text-xl">{step.step}</span>
//                       </div>
//                       <h3 className="text-2xl font-bold text-brand-text pt-2">
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p className="text-brand-text/70 text-lg mb-6 leading-relaxed">
//                       {step.description}
//                     </p>
//                     <div className="space-y-3">
//                       {step.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center">
//                           <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
//                           <span className="text-brand-text font-medium">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Step Number on Timeline */}
//                 <div 
//                   className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-background border-4 border-brand-gold rounded-full items-center justify-center z-10"
//                   data-aos="zoom-in-up"
//                   data-aos-duration="800"
//                   data-aos-delay={index * 200 + 100}
//                 >
//                   <span className="text-brand-text font-bold text-sm">{step.step}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div 
//           className="mt-20 bg-white rounded-2xl p-12 shadow-lg border border-brand-gold/10"
//           data-aos="zoom-in-up"
//           data-aos-duration="800"
//           data-aos-delay="400"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="border-r border-brand-gold/10 last:border-r-0">
//               <div className="text-4xl font-bold text-brand-gold mb-2">98%</div>
//               <div className="text-brand-text font-semibold">Client Satisfaction</div>
//               <div className="text-brand-text/60 text-sm mt-1">Across all services</div>
//             </div>
//             <div className="border-r border-brand-gold/10 last:border-r-0">
//               <div className="text-4xl font-bold text-brand-gold mb-2">25+</div>
//               <div className="text-brand-text font-semibold">Years Experience</div>
//               <div className="text-brand-text/60 text-sm mt-1">In wealth management</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-brand-gold mb-2">$2.5B+</div>
//               <div className="text-brand-text font-semibold">Assets Managed</div>
//               <div className="text-brand-text/60 text-sm mt-1">For our clients</div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         {/* <div 
//              className="text-center mt-16"
//           data-aos="zoom-in-up"
//           data-aos-duration="800"
//           data-aos-delay="600"
//           >
//           <div className="bg-brand-text rounded-2xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-4">
//               Begin Your Wealth Journey Today
//             </h3>
//             <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
//               Schedule a complimentary consultation to discuss how our proven process can help you achieve your financial objectives.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link 
//                 href="/consultation" 
//                 className="bg-brand-gold text-white px-10 py-4 rounded-lg font-semibold text-lg"
//               >
//                 Schedule Consultation
//               </Link>
//               <Link 
//                 href="/process" 
//                 className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg"
//               >
//                 Download Brochure
//               </Link>
//             </div>
//           </div>
//         </div> */}

//       </div>
//     </section>
//   );
// };

// export default OurProcess;

import Link from "next/link";

const OurProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluate financial, operational, and legal frameworks thoroughly to understand your current business landscape.",
      features: ["Financial Framework Review", "Operational Analysis", "Legal Compliance Check"]
    },
    {
      step: "02", 
      title: "Analysis",
      description: "Identify gaps, risks, and opportunities through detailed audits and comprehensive business evaluation.",
      features: ["Risk Identification", "Opportunity Analysis", "Gap Assessment"]
    },
    {
      step: "03",
      title: "Recommendations", 
      description: "Provide actionable insights and strategic guidance tailored to your specific business objectives and challenges.",
      features: ["Strategic Guidance", "Actionable Insights", "Customized Solutions"]
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Continuous oversight to ensure compliance, operational efficiency, and sustained business growth.",
      features: ["Compliance Monitoring", "Performance Tracking", "Ongoing Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div 
          className="text-center mb-20"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center mb-8">
            <div className="w-16 h-1 bg-brand-gold mr-4"></div>
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
              OUR APPROACH
            </span>
            <div className="w-16 h-1 bg-brand-gold ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Structured Path to <span className="text-brand-gold">Business Excellence</span>
          </h2>
          <p className="text-xl text-brand-text/70 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures every aspect of your financial operations is meticulously analyzed, 
            optimized, and maintained for sustainable business growth and compliance.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Step Content */}
                <div 
                  className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 200}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/10">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center mr-6">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-text pt-2">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-brand-text/70 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                          <span className="text-brand-text font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Number on Timeline */}
                <div 
                  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-background border-4 border-brand-gold rounded-full items-center justify-center z-10"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 200 + 100}
                >
                  <span className="text-brand-text font-bold text-sm">{step.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className="mt-20 bg-white rounded-2xl p-12 shadow-lg border border-brand-gold/10"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-brand-gold/10 last:border-r-0">
              <div className="text-4xl font-bold text-brand-gold mb-2">99%</div>
              <div className="text-brand-text font-semibold">Client Satisfaction</div>
              <div className="text-brand-text/60 text-sm mt-1">Across all services</div>
            </div>
            <div className="border-r border-brand-gold/10 last:border-r-0">
              <div className="text-4xl font-bold text-brand-gold mb-2">10+</div>
              <div className="text-brand-text font-semibold">Years Experience</div>
              <div className="text-brand-text/60 text-sm mt-1">In financial services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">200+</div>
              <div className="text-brand-text font-semibold">Businesses Served</div>
              <div className="text-brand-text/60 text-sm mt-1">Across industries</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;