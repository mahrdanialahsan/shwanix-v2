import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
    <Navbar />
    {/* hero section */}
      <section 
        className="z-1 min-h-[54vh] sm:min-h-screen flex items-center relative overflow-hidden hero-bg-responsive"
      >
        {/* Abstract Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-10 z-0"></div>
        
        {/* Premium Blue Glow Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#60A5FA]/8 rounded-full blur-[120px] opacity-30"></div>
        </div>
        
        {/* Flowing Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/40 via-[#1E293B]/30 to-[#0F172A]/40 z-0"></div>
        
        <div className="relative w-full h-full min-h-[54vh] sm:min-h-screen">
          <div className="w-full h-full relative z-10 min-h-[54vh] sm:min-h-screen">
            <div className="absolute inset-0 flex items-end justify-start pb-2 sm:pb-6 md:pb-10 lg:pb-12 pl-[20px]">
              {/* Premium Glassmorphism Panel - Left Bottom */}
              <div className="glass-card-dark-transparent rounded-[16px] sm:rounded-r-[16px] sm:rounded-l-[0px] md:rounded-l-[16px] pt-[18px] pb-[18px] px-6 sm:p-8 md:p-12 w-full md:w-[850px] text-center border border-[#60A5FA]/20 sm:border-l-0 md:border-l border-r blue-glow-soft">
                <h1 className="leading-tight text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[52px] font-primary font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Transforming Ideas Into Powerful Digital Solutions
                </h1>
                <p className="font-secondary font-medium text-base sm:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                  We deliver technology that drives real business results across industries.<br />
                  From startups to enterprises, we build systems that scale, perform, and deliver measurable impact.
                </p>
                <div className="flex justify-center">
                  <Link 
                    href="/contact-us" 
                    title="Get Started" 
                    className="group bg-white text-[#0F172A] rounded-[12px] h-[48px] w-max px-6 flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-bold hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section - About Us */}
      <section 
        className="min-h-[600px] md:min-h-[700px] relative overflow-hidden flex items-end about-us-bg-responsive"
      >
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 bg-[#0F172A]/20 z-0"></div>
        
        <div className="relative w-full h-full z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
          <div className="container mx-auto max-w-full h-full px-[20px]">
            <div className="flex justify-end items-end min-h-[500px] sm:min-h-[600px] md:min-h-[700px] py-4 sm:py-6 md:py-8 pb-6 md:pb-8 lg:pb-12">
              {/* Premium Glassmorphism Panel - Right Bottom */}
              <div className="glass-card-dark-transparent rounded-[16px] p-6 sm:p-8 md:p-12 w-full md:w-[600px] lg:w-[700px] text-left border border-[#60A5FA]/20 blue-glow-soft">
                {/* About Us Tag */}
                <div className="font-primary inline-flex items-center gap-2 bg-white/10 backdrop-blur-[8px] border border-white/20 text-white/90 text-[11px] rounded-[8px] px-3 py-1.5 mb-6 uppercase tracking-[2px]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    fill="currentColor" 
                    viewBox="0 0 16 16" 
                    className="inline-flex"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  About Us
                </div>
                
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-primary mb-4 sm:mb-6 tracking-tight leading-tight">
                  Driven by Real Business Impact
                </h2>
                
                {/* Paragraph */}
                <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed font-medium max-w-2xl">
                  We deliver technology that drives real business results across industries. From startups to enterprises, we build systems that scale, perform, and deliver measurable impact.
                </p>
                
                {/* CTA Button */}
                <Link 
                  href="/about-us" 
                  title="Learn More About Us" 
                  className="group inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#0F172A] rounded-[12px] h-[48px] px-6 md:px-8 transition-all duration-300 ease-in-out font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  Learn More About Us
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    fill="currentColor" 
                    viewBox="0 0 16 16"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section 
        className="py-8 md:py-12 relative overflow-hidden"
      >
        <div className="relative w-full h-full">
          <div className="container mx-auto max-w-full relative z-10 px-[20px]">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-primary mb-6 tracking-tight">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {/* Enterprise Solutions - Large left card */}
            <div className="col-span-12 xl:col-span-3">
              <div className="glass-card-dark-transparent flex flex-col justify-between h-full p-[15px] md:p-6 rounded-[14px] space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-[#60A5FA]/20">
                <div className="flex justify-between items-start">
                  <h3 className="font-primary text-lg md:text-xl font-bold text-white capitalize mr-3">
                    Enterprise Solutions
                  </h3>
                  <img
                    src="https://cms.allomate.com/uploads/8b6e9067bf308500c5d8ecd582d6bb5caa0052fd/chart.svg"
                    alt="Enterprise Solutions icon"
                    width={100}
                    height={100}
                    className="w-[26px] md:w-[30px] h-[26px] md:h-[30px] object-contain shrink-0 opacity-90 brightness-0 invert"
                  />
                </div>
                <p className="font-secondary font-medium text-sm sm:text-base text-white/80">
                  Comprehensive business systems that power your entire organization. Custom CRMs, SaaS platforms, and intelligent workflows tailored to your unique operations. We consolidate fragmented tools into a unified, scalable solution designed for sustainable growth.
                </p>
                <div>
                  <Link
                    href="/services/enterprise-solutions"
                    title="Learn More"
                    className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side cards container */}
            <div className="col-span-12 xl:col-span-9">
              <div className="grid grid-cols-12 gap-4 sm:gap-6">
                {/* Top row - 3 cards */}
                <div className="col-span-12 md:col-span-4">
                  <div className="min-h-[150px] md:min-h-[200px] p-[15px] md:p-[20px] glass-card-dark-transparent flex flex-col justify-between rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-[#60A5FA]/20">
                    <div className="flex items-start justify-between">
                      <h3 className="font-primary text-lg md:text-xl font-bold text-white capitalize mr-3">
                        Web &amp; Mobile Development
                      </h3>
                      <img
                        src="https://cms.allomate.com/uploads/31926f5213490ce03af6bb2d08e519d9343cd961/mobile-app.svg"
                        alt="Web & Mobile Development icon"
                        width={100}
                        height={100}
                        className="w-[26px] md:w-[30px] h-[26px] md:h-[30px] object-contain shrink-0 opacity-90 brightness-0 invert"
                      />
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <p className="font-secondary font-medium text-xs sm:text-sm text-white/80 mr-3 md:max-w-[204px]">
                        High-performance web and mobile applications that go beyond launch. Built to scale, optimized for performance, and designed to deliver measurable business value.
                      </p>
                      <Link
                        href="/services/web-and-mobile-development"
                        title="Learn More"
                        className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out shrink-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <div className="min-h-[150px] md:min-h-[200px] p-[15px] md:p-[20px] glass-card-dark-transparent flex flex-col justify-between rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-[#60A5FA]/20">
                    <div className="flex items-start justify-between">
                      <h3 className="font-primary text-lg md:text-xl font-bold text-white capitalize mr-3">
                        MVP Design &amp; Development
                      </h3>
                      <img
                        src="https://cms.allomate.com/uploads/6a70291da1d3d8ff601ee36b250cb295818fb50a/cube.svg"
                        alt="MVP Design & Development icon"
                        width={100}
                        height={100}
                        className="w-[26px] md:w-[30px] h-[26px] md:h-[30px] object-contain shrink-0 opacity-90 brightness-0 invert"
                      />
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <p className="font-secondary font-medium text-xs sm:text-sm text-white/80 mr-3 md:max-w-[204px]">
                        Transform your vision into a market-ready product. We help startups validate ideas, learn from users, and achieve market success faster with strategic MVP development.
                      </p>
                      <Link
                        href="/services/mvp-design-and-development"
                        title="Learn More"
                        className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out shrink-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <div className="min-h-[150px] md:min-h-[200px] p-[15px] md:p-[20px] glass-card-dark-transparent flex flex-col justify-between rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-[#60A5FA]/20">
                    <div className="flex items-start justify-between">
                      <h3 className="font-primary text-lg md:text-xl font-bold text-white capitalize mr-3">
                        Quality Assurance
                      </h3>
                      <img
                        src="https://cms.allomate.com/uploads/74b055df2b2dae1e041a62225c696b635498a14e/warranty.svg"
                        alt="Quality Assurance icon"
                        width={100}
                        height={100}
                        className="w-[26px] md:w-[30px] h-[26px] md:h-[30px] object-contain shrink-0 opacity-90 brightness-0 invert"
                      />
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <p className="font-secondary font-medium text-xs sm:text-sm text-white/80 mr-3 md:max-w-[204px]">
                        Comprehensive testing ensures your software is reliable, secure, and performs flawlessly. We eliminate bugs before they impact your business.
                      </p>
                      <Link
                        href="/services/quality-assurance"
                        title="Learn More"
                        className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out shrink-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 2 cards */}
                <div className="col-span-12 sm:col-span-6 md:col-span-8">
                  <div className="min-h-[150px] sm:min-h-full md:min-h-[200px] p-[15px] md:p-[20px] glass-card-dark-transparent flex flex-col justify-between rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-[#60A5FA]/20">
                    <div className="flex items-start justify-between">
                      <h3 className="font-primary text-lg md:text-xl font-bold text-white capitalize mr-3">
                        AI and Automation
                      </h3>
                      <img
                        src="https://cms.allomate.com/uploads/2adf5e4ffb34a58e7e72d6c3736172d1ea2fab32/artificial-intelligence.svg"
                        alt="AI and Automation icon"
                        width={100}
                        height={100}
                        className="w-[26px] md:w-[30px] h-[26px] md:h-[30px] object-contain shrink-0 opacity-90 brightness-0 invert"
                      />
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <p className="font-secondary font-medium text-xs sm:text-sm text-white/80 mr-3">
                        Intelligent automation that handles repetitive tasks, freeing your team for strategic work. From AI chatbots to automated workflows and predictive analytics, we implement smart solutions that maximize efficiency and ROI.
                      </p>
                      <Link
                        href="/services/ai-and-automation"
                        title="Learn More"
                        className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out shrink-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <div className="min-h-[150px] md:min-h-[200px] p-[15px] md:p-[20px] glass-card-dark-transparent flex flex-col justify-between rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-[#60A5FA]/20">
                    <div className="flex items-start justify-between">
                      <h3 className="font-primary text-lg md:text-xl font-bold text-white capitalize mr-3">
                      E-Commerce Solutions
                      </h3>
                      <img
                        src="https://cms.allomate.com/uploads/e3f7b7cc6a117135c27e5ff565dc5d958ddcacb2/teamwork.svg"
                        alt="Dedicated Teams icon"
                        width={100}
                        height={100}
                        className="w-[26px] md:w-[30px] h-[26px] md:h-[30px] object-contain shrink-0 opacity-90 brightness-0 invert"
                      />
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <p className="font-secondary font-medium text-xs sm:text-sm text-[#64748B] mr-3">
                        Extend your team with dedicated engineers who integrate seamlessly into your workflow. Get in-house expertise without the overhead costs.
                      </p>
                      <Link
                        href="/services/dedicated-teams"
                        title="Learn More"
                        className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out shrink-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* 4th section */}
      <section 
        className="py-10 md:py-16 home-video-3-section relative overflow-hidden"
      >
        <div className="relative w-full h-full">
          <div className="container mx-auto max-w-full relative z-10 px-[20px]">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="font-primary inline-flex items-center justify-center glass-card-dark text-[#60A5FA] text-[11px] rounded-[12px] pr-4 pl-2 py-1.5 mb-6 uppercase tracking-[2px]">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#60A5FA"
                  viewBox="0 0 16 16"
                  className="inline-flex"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                Tangible Results
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-primary mb-4 sm:mb-6 tracking-tight">
              Proven Results Across Industries
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed text-center px-2">
              Our impact is measurable across FMCG growth, SaaS adoption, and operational efficiency. Every metric represents real business outcomes, not promises.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Card 1: Video with Stats */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[12px] mb-4">
                <video
                  title="Productivity Video"
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  muted
                  poster="/Images/saas-image-1.webp"
                  className="w-full h-[250px] sm:h-[280px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source
                    src="/Images/saas-video.webm"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              <div className="glass-card-dark rounded-[14px] p-5 md:p-6 border border-[#60A5FA]/20">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white font-primary mb-2">40%</div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-primary uppercase">
                      Productivity Increase
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="shrink-0 opacity-70"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                </div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                  Average productivity improvement achieved when organizations replace manual processes with our custom enterprise solutions.
                </p>
              </div>
            </div>

            {/* Card 2: SaaS Excellence - Featured Card */}
            <div className="lg:col-span-1 glass-card-dark rounded-[14px] p-6 md:p-8 flex flex-col justify-between border border-[#60A5FA]/20">
              <div>
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="mb-4"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-primary mb-4">
                  SaaS Excellence Built Through Experience
                </h3>
                <p className="text-[#64748B] text-sm md:text-base mb-6 leading-relaxed">
                  Our proprietary platforms power thousands of sales professionals, connect hundreds of thousands of retailers, and consistently deliver 30%+ year-over-year growth.
                  Our proprietary platforms power thousands of sales professionals, connect hundreds of thousands of retailers, and consistently deliver 30%+ year-over-year growth.
                  Our proprietary platforms power thousands of sales professionals.
                </p>
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl font-bold text-white font-primary mb-1">30%+</div>
                  <div className="text-[#64748B] text-sm">Year-over-Year Growth</div>
                </div>
              </div>
              <Link
                href="#"
                title="Read More"
                className="group bg-white rounded-[12px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out self-start hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short text-[#000000] group-hover:text-[#000000] transition-colors"
                    >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Card 3: Image with Stats */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[12px] mb-4">
                <Image
                  width={400}
                  height={400}
                  src="/Images/saas-image-2.webp"
                  alt="Modern Operations"
                  className="w-full h-[300px] md:h-[350px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              <div className="glass-card-dark rounded-[14px] p-5 md:p-6 border border-[#60A5FA]/20">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white font-primary mb-2">75%</div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-primary uppercase">
                      Faster Operations
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="shrink-0 opacity-70"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                </div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                  Average speed improvement achieved by service businesses when modern automation and CRM systems replace legacy tools.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="glass-card-dark rounded-[14px] p-3 sm:p-4 md:p-6 text-center border border-[#60A5FA]/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-primary mb-1 sm:mb-2">100K+</div>
              <div className="text-white/60 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">Retailers Connected</div>
            </div>
            <div className="glass-card-dark rounded-[14px] p-3 sm:p-4 md:p-6 text-center border border-[#60A5FA]/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-primary mb-1 sm:mb-2">50+</div>
              <div className="text-white/60 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">Enterprise Clients</div>
            </div>
            <div className="glass-card-dark rounded-[14px] p-3 sm:p-4 md:p-6 text-center border border-[#60A5FA]/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-primary mb-1 sm:mb-2">24/7</div>
              <div className="text-white/60 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">Platform Uptime</div>
            </div>
            <div className="glass-card-dark rounded-[14px] p-3 sm:p-4 md:p-6 text-center border border-[#60A5FA]/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-primary mb-1 sm:mb-2">99.9%</div>
              <div className="text-white/60 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">Client Satisfaction</div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* 5th section */}
      <section 
        className="py-10 md:py-16 relative overflow-hidden"
      >
        <div className="relative w-full h-full">
          <div className="container mx-auto max-w-full relative z-10 px-[20px]">
          <div className="relative flex flex-col justify-between h-full rounded-[16px] px-3 sm:px-4 md:px-6 pt-4 sm:pt-6 md:pt-8 glass-card-dark border border-[#60A5FA]/20 blue-glow-soft transition duration-300">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-full md:w-4/12 relative">
                <div className="inline-block">
                  <div className="font-primary inline-block glass-card-dark text-[#60A5FA] text-[11px] rounded-[12px] pr-4 pl-2 py-1.5 mb-6 tracking-[2px]">
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="#60A5FA"
                        viewBox="0 0 16 16"
                        className="inline-flex"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                      </svg>
                      The Next Horizon
                    </p>
                  </div>
                  <h2 className="leading-tight capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-primary mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-tight">
                    Embracing the Future of Technology
                  </h2>
                  <p className="font-secondary font-medium text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                    Technology evolves rapidly, reshaping industries and business models. AI, quantum computing, and intelligent automation aren&apos;t just trends—they&apos;re the foundation of tomorrow&apos;s competitive advantage. At Allomate, we help you stay ahead with strategic technology adoption.
                  </p>
                  <Link
                    href="/the-next-horizon"
                    title="GET STARTED"
                    className="group bg-white rounded-[12px] w-[44px] h-[44px] flex items-center justify-center hover:w-[70px] hover:bg-white/90 focus:w-[70px] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short text-[#000000] transition-colors"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-8/12 relative flex justify-center items-stretch">
                <figure className="w-full relative rounded-[12px] overflow-hidden">
                  <Image
                    width={960}
                    height={640}
                    src="/Images/future-tecknology.webp"
                    alt="Embracing the Future of Technology"
                    className="w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px] xl:h-[565px] object-cover object-center rounded-[12px]"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* 8th section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="text-center">
            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center justify-items-center">
              <div className="group col-span-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="font-primary inline-flex items-center justify-center glass-card-dark text-[#60A5FA] text-[11px] rounded-[12px] pr-4 pl-2 py-1.5 mb-6 uppercase tracking-[2px]">
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="#60A5FA"
                        viewBox="0 0 16 16"
                        className="inline-flex"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                      </svg>
                      Latest
                    </p>
                  </div>
                  <h2 className="leading-tight capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-4 md:mb-6 tracking-tight">
                    Featured Project
                  </h2>
                  <p className="font-secondary font-medium text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed text-center px-2">
                    Explore our latest work: a cutting-edge, fully responsive application built with performance optimization, modern design, and exceptional user experience as core principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9th Section */}
      <section className="py-8 md:py-12 main-portfolio-div-homepage">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 list-portfolio-append-div-homepage">
            {/* Khan Law Project */}
            <div>
              <Link
                href="/our-work/khan-law"
                className="flex flex-col justify-center items-stretch mx-auto relative overflow-hidden no-underline group"
              >
                {/* Image Container */}
                <div className="relative flex justify-center items-center overflow-hidden rounded-[12px] h-[280px] sm:h-[320px] md:h-[360px]">
                  {/* Logo Overlay */}
                  <div className="absolute w-full h-full bg-[#0F172A]/50 cursor-pointer z-[1] opacity-100 hover:opacity-0 transition-opacity duration-300">
                    <div className="absolute z-[99] opacity-100 text-white text-center h-full mx-auto left-0 right-0 uppercase font-bold text-base flex justify-center items-center">
                      <figure>
                        <img
                          width={150}
                          height={150}
                          src="https://www.allomate.com/storage/portfolios/khan-law_logo.png"
                          alt="Project Images"
                          className="w-full max-w-[180px] h-full scale-80 [filter:drop-shadow(2px_2px_3px_rgba(0,0,0,0.8))]"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Main Image */}
                  <figure className="w-full h-full">
                    <img
                      width={300}
                      height={300}
                      src="https://www.allomate.com/storage/portfolios/khan-law_thumbnail.webp"
                      alt="Khan Law"
                      className="w-full h-full object-cover scale-105 filter blur-sm group-hover:blur-0 transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                </div>
                {/* Content */}
                <div className="mt-2.5">
                  <div className="group portfolio-card-content">
                    <div className="portfolio-card-inner flex items-center justify-between">
                      <h3 className="m-0 text-base sm:text-lg font-primary font-medium leading-none text-white group-hover:text-[#0F172A] transition-colors duration-300">
                        Khan Law
                      </h3>
                      <p className="m-0 text-xs sm:text-sm font-secondary text-white/70 group-hover:text-[#0F172A] transition-colors duration-300">
                        Business Development
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Source Code Academia Project */}
            <div>
              <Link
                href="/our-work/source-code-academia"
                className="flex flex-col justify-center items-stretch mx-auto relative overflow-hidden no-underline group"
              >
                {/* Image Container */}
                <div className="relative flex justify-center items-center overflow-hidden rounded-[12px] h-[280px] sm:h-[320px] md:h-[360px]">
                  {/* Logo Overlay */}
                  <div className="absolute w-full h-full bg-[#0F172A]/50 cursor-pointer z-[1] opacity-100 hover:opacity-0 transition-opacity duration-300">
                    <div className="absolute z-[99] opacity-100 text-white text-center h-full mx-auto left-0 right-0 uppercase font-bold text-base flex justify-center items-center">
                      <figure>
                        <img
                          width={150}
                          height={150}
                          src="https://www.allomate.com/storage/portfolios/source-code-academia_logo.png"
                          alt="Project Images"
                          className="w-full max-w-[180px] h-full scale-80 [filter:drop-shadow(2px_2px_3px_rgba(0,0,0,0.8))]"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Main Image */}
                  <figure className="w-full h-full">
                    <img
                      width={300}
                      height={300}
                      src="https://www.allomate.com/storage/portfolios/source-code-academia_thumbnail.webp"
                      alt="Source Code Academia"
                      className="w-full h-full object-cover scale-105 filter blur-sm group-hover:blur-0 transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                </div>
                {/* Content */}
                <div className="mt-2.5">
                  <div className="group portfolio-card-content">
                    <div className="portfolio-card-inner flex items-center justify-between">
                      <h3 className="m-0 text-base sm:text-lg font-primary font-medium leading-none text-white group-hover:text-[#0F172A] transition-colors duration-300">
                        Source Code Academia
                      </h3>
                      <p className="m-0 text-xs sm:text-sm font-secondary text-white/70 group-hover:text-[#0F172A] transition-colors duration-300">
                        Business Development
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* PSL Project */}
            <div>
              <Link
                href="/our-work/psl"
                className="flex flex-col justify-center items-stretch mx-auto relative overflow-hidden no-underline group"
              >
                {/* Image Container */}
                <div className="relative flex justify-center items-center overflow-hidden rounded-[12px] h-[280px] sm:h-[320px] md:h-[360px]">
                  {/* Logo Overlay */}
                  <div className="absolute w-full h-full bg-[#0F172A]/50 cursor-pointer z-[1] opacity-100 hover:opacity-0 transition-opacity duration-300">
                    <div className="absolute z-[99] opacity-100 text-white text-center h-full mx-auto left-0 right-0 uppercase font-bold text-base flex justify-center items-center">
                      <figure>
                        <img
                          width={150}
                          height={150}
                          src="https://www.allomate.com/storage/portfolios/psl_logo.png"
                          alt="Project Images"
                          className="w-full max-w-[180px] h-full scale-80 [filter:drop-shadow(2px_2px_3px_rgba(0,0,0,0.8))]"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Main Image */}
                  <figure className="w-full h-full">
                    <img
                      width={300}
                      height={300}
                      src="https://www.allomate.com/storage/portfolios/psl_thumbnail.webp"
                      alt="PSL"
                      className="w-full h-full object-cover scale-105 filter blur-sm group-hover:blur-0 transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                </div>
                {/* Content */}
                <div className="mt-2.5">
                  <div className="group portfolio-card-content">
                    <div className="portfolio-card-inner flex items-center justify-between">
                      <h3 className="m-0 text-base sm:text-lg font-primary font-medium leading-none text-white group-hover:text-[#0F172A] transition-colors duration-300">
                        PSL
                      </h3>
                      <p className="m-0 text-xs sm:text-sm font-secondary text-white/70 group-hover:text-[#0F172A] transition-colors duration-300">
                        Business Development
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-10">
            <Link
              href="/our-work"
              title="view All Work"
              className="red-arrow-btn group bg-white text-[#0F172A] rounded-[12px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-bold hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>
      {/* 11th & 12th section - Blogs */}
      <section className="py-10 md:py-16 has-latest-blogs-main">
        <div className="container mx-auto max-w-full px-[20px]">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="font-primary inline-flex items-center justify-center bg-white/10 backdrop-blur-[8px] border border-white/20 text-white/90 text-[11px] rounded-[12px] pr-4 pl-2 py-1.5 mb-6 uppercase tracking-[2px]">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="inline-flex"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                Blogs
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-primary mb-4 sm:mb-6 tracking-tight">
              Latest Insights & Articles
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed text-center px-2">
              Stay informed with our latest thoughts on technology, business strategy, and industry trends. Discover actionable insights to drive your digital transformation.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6 latest-blogs-list items-stretch">
            {/* Large Featured Blog Card - AI Voice Agents */}
            <div className="col-span-12 lg:col-span-6 h-full min-h-0">
              <BlogCard
                isLarge={true}
                href="/blogs/blog-details/ai-voice-agents-in-government-accessibility-voices-that-bridge-gaps"
                image="/Images/AI_Voice_Agents.webp"
                video="/Images/AI_Voice_Agents.webm"
                poster="/Images/AI_Voice_Agents.webp"
                category="AI & Automation"
                title="AI Voice Agents in Government & Accessibility: Voices That Bridge Gaps"
              />
            </div>

            {/* Large Featured Blog Card - AI Chat Assistants */}
            <div className="col-span-12 lg:col-span-6 h-full min-h-0">
              <BlogCard
                isLarge={true}
                href="/blogs/blog-details/ai-chat-assistants-for-compliance-knowledge-answers-you-can-trust"
                image="/Images/AI_chat.webp"
                video="/Images/AI_chat.webm"
                poster="/Images/AI_chat.webp"
                category="AI & Automation"
                title="AI Chat Assistants for Compliance & Knowledge: Answers You Can Trust"
              />
            </div>

            {/* Small Blog Cards - Row 2 */}
            <div className="col-span-12 lg:col-span-6">
              <BlogCard
                href="/blogs/blog-details/ai-voice-agents-for-smbs"
                image="/Images/AI_Voice_Agents-thumbnail-1.webp"
                category="AI & Automation"
                title="AI Voice Agents for SMBs: The 24/7 Virtual Receptionist"
                description="24/7 AI voice agents that answer calls, route inquiries, and support customers without human staffing limits."
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <BlogCard
                href="/blogs/blog-details/ai-voice-agents-in-retail-hospitality-the-conversational-concierge"
                image="/Images/AI_Voice_Agents-thumbnail-2.webp"
                category="AI & Automation"
                title="AI Chat Agents That Understand Policy, People, and Practice"
                description="Real-time, regulation-aware AI delivering accurate, cited answers you can trust. Context-aware AI built for policy, people, and real-world operations."
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
