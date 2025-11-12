


"use client"
import React, { useState, useMemo } from 'react';

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const insightsData = [
    { 
      id: 1, 
      category: 'Tax Strategy', 
      title: 'Q4 Tax Planning: Key Deductions for High-Net-Worth Individuals', 
      date: 'October 15, 2024', 
      author: 'Marcus Altmann', 
      link: '#', 
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read',
      isFeatured: true 
    },
    { 
      id: 2, 
      category: 'CFO Advisory', 
      title: 'Implementing AI in Financial Modeling: An Operational Imperative', 
      date: 'September 28, 2024', 
      author: 'Sara Tabib', 
      link: '#', 
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      readTime: '6 min read'
    },
    { 
      id: 3, 
      category: 'Wealth Planning', 
      title: 'The 2025 Market Outlook: Navigating Volatility and Opportunities', 
      date: 'September 1, 2024', 
      author: 'Dr. John Bannister', 
      link: '#', 
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      readTime: '10 min read'
    },
    { 
      id: 4, 
      category: 'Tax Strategy', 
      title: 'Estate Tax Law Changes: What You Need to Know for Legacy Structuring', 
      date: 'August 10, 2024', 
      author: 'Marcus Altmann', 
      link: '#', 
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      readTime: '7 min read'
    },
    { 
      id: 5, 
      category: 'CFO Advisory', 
      title: 'Optimizing Cash Flow: Strategic Financial Health for Mid-Market Firms', 
      date: 'July 25, 2024', 
      author: 'Sara Tabib', 
      link: '#', 
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      readTime: '5 min read'
    },
    { 
      id: 6, 
      category: 'Wealth Planning', 
      title: 'ESG Investing: Aligning Capital with Value and Ethics', 
      date: 'July 1, 2024', 
      author: 'Dr. John Bannister', 
      link: '#', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      readTime: '9 min read'
    },
  ];

  const categories = ['All', 'Tax Strategy', 'CFO Advisory', 'Wealth Planning'];

  const featuredInsight = insightsData.find(i => i.isFeatured);

  const filteredInsights = useMemo(() => {
    const remainingInsights = insightsData.filter(i => !i.isFeatured);
    return remainingInsights.filter(insight => {
      const categoryMatch = activeCategory === 'All' || insight.category === activeCategory;
      const searchMatch = insight.title.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-[#FAF1E6]">
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#C6A04A] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6A04A] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-8">
              <div className="w-20 h-1 bg-[#C6A04A] mr-4"></div>
              <span className="text-[#C6A04A] font-bold text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                THOUGHT LEADERSHIP
              </span>
              <div className="w-20 h-1 bg-[#C6A04A] ml-4"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Strategic <span className="text-[#C6A04A]">Clarity</span><br />
              in Complex Markets
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Expert analysis and forward-looking insights to navigate financial complexity 
              and unlock sustainable growth opportunities.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { number: '25+', label: 'Industry Experts' },
                { number: '150+', label: 'Research Papers' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#C6A04A] mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight with Enhanced Design */}
      {featuredInsight && (
        <section className="relative -mt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#C6A04A]/20 overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={featuredInsight.image} 
                    alt={featuredInsight.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#C6A04A] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                      Featured Analysis
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                    <span className="text-white text-sm">{featuredInsight.readTime}</span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-[#FAF1E6] text-[#14274E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {featuredInsight.category}
                    </span>
                    <span className="text-[#14274E]/60 text-sm">{featuredInsight.date}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-[#14274E] mb-6 leading-tight">
                    {featuredInsight.title}
                  </h2>
                  
                  <p className="text-[#14274E]/70 text-lg mb-8 leading-relaxed">
                    A comprehensive analysis of current market dynamics and strategic opportunities 
                    for high-net-worth individuals and institutional investors.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#C6A04A] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {featuredInsight.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#14274E]">{featuredInsight.author}</div>
                        <div className="text-[#14274E]/60 text-sm">Senior Advisor</div>
                      </div>
                    </div>
                    
                    <button className="bg-[#C6A04A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#14274E] transition-all duration-300 transform hover:scale-105">
                      Read Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#14274E] mb-6">
              Latest <span className="text-[#C6A04A]">Insights</span>
            </h2>
            <p className="text-xl text-[#14274E]/70 max-w-3xl mx-auto">
              Discover cutting-edge research and strategic perspectives from our team of financial experts
            </p>
          </div>

          {/* Enhanced Filter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sticky Filter Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#C6A04A]/10 sticky top-8">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#14274E] mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                    </svg>
                    Filter Insights
                  </h3>
                  
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between group ${
                          activeCategory === category 
                            ? 'bg-[#C6A04A] text-white shadow-lg' 
                            : 'bg-[#FAF1E6] text-[#14274E] hover:bg-[#C6A04A]/10'
                        }`}
                      >
                        <span>{category}</span>
                        {activeCategory === category && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#14274E] mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Insights
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-10 border-2 border-[#C6A04A]/20 rounded-xl focus:border-[#C6A04A] focus:ring-2 focus:ring-[#C6A04A]/20 transition-colors duration-300 bg-white"
                    />
                    <svg className="w-5 h-5 absolute left-3 top-3.5 text-[#C6A04A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="lg:col-span-3">
              {filteredInsights.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                  {filteredInsights.map((insight) => (
                    <div 
                      key={insight.id}
                      className="bg-white rounded-2xl shadow-lg border border-[#C6A04A]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col group overflow-hidden"
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={insight.image} 
                          alt={insight.title} 
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#C6A04A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {insight.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-1">
                          <span className="text-white text-xs">{insight.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-[#14274E] mb-3 leading-tight flex-1 group-hover:text-[#C6A04A] transition-colors duration-300">
                          {insight.title}
                        </h3>
                        
                        <div className="mt-auto pt-4 border-t border-[#C6A04A]/10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-[#FAF1E6] rounded-full flex items-center justify-center">
                                <span className="text-[#14274E] text-xs font-bold">
                                  {insight.author.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <div className="text-[#14274E] text-sm font-semibold">{insight.author}</div>
                                <div className="text-[#14274E]/60 text-xs">{insight.date}</div>
                              </div>
                            </div>
                            
                            <button className="text-[#C6A04A] hover:text-[#14274E] transition-colors duration-300">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border-2 border-dashed border-[#C6A04A]/30 rounded-2xl bg-white/50 backdrop-blur-sm">
                  <svg className="w-16 h-16 text-[#C6A04A] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl text-[#14274E]/70 mb-2">No insights found</p>
                  <p className="text-[#14274E]/60">Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#14274E] via-[#1C315B] to-[#0A1A3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C6A04A] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C6A04A] rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for <span className="text-[#C6A04A]">Personalized</span> Guidance?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with our advisory team for tailored insights and strategic solutions 
            specific to your financial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C6A04A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#14274E] transition-all duration-300">
              Meet Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;