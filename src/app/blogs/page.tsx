'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4 mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
            <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[20px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-4 lg:mb-5 uppercase tracking-[2px]">
              <p className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                  className="inline-flex"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                Latest Blog
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#2563EB] mb-2">
              AI Case Studies &amp; Insights
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
              Explore real-world applications of artificial intelligence, from business automation to creative innovations, shaping the future across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section - Category Filters */}
      <section className="py-3 md:py-6 !pb-3">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col items-center pb-0 sm:pb-3">
            <div className="flex w-full b-category-list">
              <div className="mx-auto">
                <ul className="list-of-categories flex flex-wrap items-center justify-center gap-3">
                  {/* All Categories - Active */}
                  <li>
                    <button
                      title="All Categories"
                      data-id="0"
                      className="category-blog shadow-[inset_0_0_50px_rgba(37,99,235,0.1)] rounded-[6px] backdrop-blur-[30px] px-3 py-1.5 sm:px-4 sm:py-2 text-white bg-[#2563EB] border border-[#2563EB] text-[13px] sm:text-sm hover:text-white hover:border-[#2563EB] hover:bg-[#1D4ED8] transition font-primary font-semibold"
                    >
                      All Categories
                    </button>
                  </li>

                  {/* AI & Automation */}
                  <li>
                    <button
                      title="AI & Automation"
                      data-id="1"
                      className="category-blog bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm text-white hover:text-[#000000] hover:border-[#2563EB] hover:bg-[#2563EB] transition font-primary"
                    >
                      AI &amp; Automation
                    </button>
                  </li>

                  {/* Digital Transformation & Strategy */}
                  <li>
                    <button
                      title="Digital Transformation & Strategy"
                      data-id="5"
                      className="category-blog bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm text-white hover:text-[#000000] hover:border-[#2563EB] hover:bg-[#2563EB] transition font-primary"
                    >
                      Digital Transformation &amp; Strategy
                    </button>
                  </li>

                  {/* Cloud & Scalability */}
                  <li>
                    <button
                      title="Cloud & Scalability"
                      data-id="6"
                      className="category-blog bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm text-white hover:text-[#000000] hover:border-[#2563EB] hover:bg-[#2563EB] transition font-primary"
                    >
                      Cloud &amp; Scalability
                    </button>
                  </li>

                  {/* Quality Assurance & Reliability */}
                  <li>
                    <button
                      title="Quality Assurance & Reliability"
                      data-id="7"
                      className="category-blog bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm text-white hover:text-[#000000] hover:border-[#2563EB] hover:bg-[#2563EB] transition font-primary"
                    >
                      Quality Assurance &amp; Reliability
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Blog Cards Grid */}
      <section className="pb-6 blog-section">
        <div className="container mx-auto px-3 sm:px-4 has-blogs top-blog-list">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 top-blog-lists">
            {/* Blog Card 1 */}
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <Link
                href="/blogs/blog-details/beyond-the-bots-why-manual-testing-still-matters-in-an-ai-driven-world"
                className="relative blog-listing group flex overflow-hidden no-underline p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] transition duration-300 h-[280px] sm:h-[350px] lg:h-[450px] rounded-[6px] hover:bg-[#1E293B] hover:border-[#2563EB]/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon1 z-10"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <figure className="relative float-right">
                      <img
                        src="https://www.allomate.com/storage/blogs/Untitled_design_(16)_1761028800.png"
                        onError={(e) => {
                          e.currentTarget.src = '/images/blogs/thumbnail-blog-card200x200.jpg';
                        }}
                        className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[6px] object-cover"
                        alt="Blog thumbnail"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#2563EB] capitalize mb-1">
                      <span className="text-[#2563EB]/80">Category:</span> Quality Assurance &amp; Reliability
                    </p>
                    <h2 className="text-base sm:text-xl font-bold text-[#2563EB] font-primary mb-3">
                      Beyond the Bots: Why Manual Testing Still Matters in an AI-Driven World
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="#000"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 2 */}
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <Link
                href="/blogs/blog-details/microservices-in-2025-redefining-how-modern-software-is-built"
                className="relative blog-listing group flex overflow-hidden no-underline p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] transition duration-300 h-[280px] sm:h-[350px] lg:h-[450px] rounded-[6px] hover:bg-[#1E293B] hover:border-[#2563EB]/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon1 z-10"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <figure className="relative float-right">
                      <img
                        src="https://www.allomate.com/storage/blogs/1_1759755099.png"
                        onError={(e) => {
                          e.currentTarget.src = '/images/blogs/thumbnail-blog-card200x200.jpg';
                        }}
                        className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[6px] object-cover"
                        alt="Blog thumbnail"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#2563EB] capitalize mb-1">
                      <span className="text-[#2563EB]/80">Category:</span> Cloud &amp; Scalability
                    </p>
                    <h2 className="text-base sm:text-xl font-bold text-[#2563EB] font-primary mb-3">
                      Microservices in 2025: Redefining How Modern Software Is Built
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="#000"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 3 */}
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <Link
                href="/blogs/blog-details/ai-vs-industry-giants-how-startups-are-flipping-the-script"
                className="relative blog-listing group flex overflow-hidden no-underline p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] transition duration-300 h-[280px] sm:h-[350px] lg:h-[450px] rounded-[6px] hover:bg-[#1E293B] hover:border-[#2563EB]/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon1 z-10"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <figure className="relative float-right">
                      <img
                        src="https://www.allomate.com/storage/blogs/7_1759755143.png"
                        onError={(e) => {
                          e.currentTarget.src = '/images/blogs/thumbnail-blog-card200x200.jpg';
                        }}
                        className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[6px] object-cover"
                        alt="Blog thumbnail"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#2563EB] capitalize mb-1">
                      <span className="text-[#2563EB]/80">Category:</span> Cloud &amp; Scalability
                    </p>
                    <h2 className="text-base sm:text-xl font-bold text-[#2563EB] font-primary mb-3">
                      AI vs. Industry Giants: How Startups Are Flipping the Script
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="#000"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Featured Blog Card - Full Width */}
            <div className="group col-span-12">
              <Link href="/blogs/blog-details/connect-create-conquer-winning-software-for-high-impact-remote-collaboration">
                <div className="relative overflow-hidden no-underline rounded-[6px] z-10 box-shadow">
                  <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000] opacity-30 z-10"></div>
                  <figure className="w-full relative group transition overflow-hidden">
                    <time
                      dateTime="2025-10-07"
                      className="bg-black/50 border border-white/10 shadow-[inset_0_0_50px_rgba(255,255,255,0.1)] backdrop-blur-[8px] text-[11px] sm:text-[13px] text-white absolute top-2 left-2 sm:top-5 sm:left-5 z-10 rounded-[6px] px-2 py-0.5 sm:px-3 sm:py-1"
                    >
                      07 Oct, 2025
                    </time>
                    <img
                      src="https://www.allomate.com/storage/blogs/5_1759753348.png"
                      onError={(e) => {
                        e.currentTarget.src = '/images/blogs/featured-img-listing-1504x550.webp';
                      }}
                      className="w-full max-h-[300px] md:max-h-[550px] h-auto object-cover object-center scale-105 filter blur-0 hover:blur-sm transition-transform duration-500 group-hover:scale-110"
                      alt="Featured blog"
                    />
                  </figure>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex plus-icon2 z-10"
                    width="22"
                    height="22"
                    fill="#2563EB"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <div className="absolute bottom-[10px] sm:bottom-[20px] left-[10px] sm:left-[20px] z-20 group-hover">
                    <p className="font-secondary font-normal text-sm sm:text-base text-white capitalize mb-1">
                      <span className="text-white/80">Category:</span> Digital Transformation &amp; Strategy
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-primary mb-3">
                      Connect, Create, Conquer: Winning Software for High-Impact Remote Collaboration
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-white rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 4 */}
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <Link
                href="/blogs/blog-details/leveling-the-playing-field-how-smes-outspace-giants-with-digital-tools"
                className="relative blog-listing group flex overflow-hidden no-underline p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] transition duration-300 h-[280px] sm:h-[350px] lg:h-[450px] rounded-[6px] hover:bg-[#1E293B] hover:border-[#2563EB]/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon1 z-10"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <figure className="relative float-right">
                      <img
                        src="https://www.allomate.com/storage/blogs/10_1759755179.png"
                        onError={(e) => {
                          e.currentTarget.src = '/images/blogs/thumbnail-blog-card200x200.jpg';
                        }}
                        className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[6px] object-cover"
                        alt="Blog thumbnail"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#2563EB] capitalize mb-1">
                      <span className="text-[#2563EB]/80">Category:</span> Digital Transformation &amp; Strategy
                    </p>
                    <h2 className="text-base sm:text-xl font-bold text-[#2563EB] font-primary mb-3">
                      Leveling the Playing Field: How SMEs Outspace Giants with Digital Tools
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="#000"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 5 */}
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <Link
                href="/blogs/blog-details/turning-technology-into-roi-the-real-payoff-of-business-transformation"
                className="relative blog-listing group flex overflow-hidden no-underline p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] transition duration-300 h-[280px] sm:h-[350px] lg:h-[450px] rounded-[6px] hover:bg-[#1E293B] hover:border-[#2563EB]/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon1 z-10"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <figure className="relative float-right">
                      <img
                        src="https://www.allomate.com/storage/blogs/3_1759755211.png"
                        onError={(e) => {
                          e.currentTarget.src = '/images/blogs/thumbnail-blog-card200x200.jpg';
                        }}
                        className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[6px] object-cover"
                        alt="Blog thumbnail"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#2563EB] capitalize mb-1">
                      <span className="text-[#2563EB]/80">Category:</span> Digital Transformation &amp; Strategy
                    </p>
                    <h2 className="text-base sm:text-xl font-bold text-[#2563EB] font-primary mb-3">
                      Turning Technology Into ROI: The Real Payoff of Business Transformation
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="#000"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 6 */}
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <Link
                href="/blogs/blog-details/ai-voice-agents-in-government-accessibility-voices-that-bridge-gaps"
                className="relative blog-listing group flex overflow-hidden no-underline p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] transition duration-300 h-[280px] sm:h-[350px] lg:h-[450px] rounded-[6px] hover:bg-[#1E293B] hover:border-[#2563EB]/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon1 z-10"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <figure className="relative float-right">
                      <img
                        src="https://www.allomate.com/storage/blogs/3_1759816003.png"
                        onError={(e) => {
                          e.currentTarget.src = '/images/blogs/thumbnail-blog-card200x200.jpg';
                        }}
                        className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[6px] object-cover"
                        alt="Blog thumbnail"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#2563EB] capitalize mb-1">
                      <span className="text-[#2563EB]/80">Category:</span> AI &amp; Automation
                    </p>
                    <h2 className="text-base sm:text-xl font-bold text-[#2563EB] font-primary mb-3">
                      AI Voice Agents in Government &amp; Accessibility: Voices That Bridge Gaps
                    </h2>
                    <div
                      title="Read More"
                      className="group-hover:w-[70px] bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        className="bi bi-arrow-right-short text-[#000000]"
                        viewBox="0 0 16 16"
                        fill="#000"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Pagination */}
          <div className="custom-pagination flex items-center justify-center px-2 pb-3 mt-6 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] border border-[#2563EB]/10 rounded-[6px] bg-[#0F172A]">
            <div className="w-full flex items-center justify-between font-primary">
              <div className="flex items-center pt-3 text-white hover:text-[#2563EB] cursor-pointer prev-page" data-url="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-arrow-left-short text-[#2563EB]"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                  ></path>
                </svg>
                <p className="text-sm sm:text-base ml-3 font-medium leading-none">Previous</p>
              </div>
              <div className="sm:flex hidden">
                <p
                  data-url="https://www.allomate.com/get-all-blogs?page=1"
                  className="text-sm sm:text-base font-medium leading-none cursor-pointer text-white border-t border-white pt-3 mr-4 px-2"
                >
                  1
                </p>
                <p
                  data-url="https://www.allomate.com/get-all-blogs?page=2"
                  className="text-sm sm:text-base font-medium leading-none cursor-pointer text-white/60 hover:text-white border-t border-transparent hover:border-white pt-3 mr-4 px-2"
                >
                  2
                </p>
              </div>
              <div className="flex items-center pt-3 text-white hover:text-[#2563EB] cursor-pointer next-page" data-url="https://www.allomate.com/get-all-blogs?page=2">
                <p className="text-sm sm:text-base font-medium leading-none mr-3">Next</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="bi bi-arrow-right-short text-[#2563EB]"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

