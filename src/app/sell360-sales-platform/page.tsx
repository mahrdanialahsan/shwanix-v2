import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Sell360SalesPlatform() {
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
                SELL 360
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#2563EB] mb-2">
              From Visibility to Growth
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] mb-3 sm:mb-5 md:mb-7">
              For leaders who need clarity, SELL 360 turns every sale, every outlet, and every distributor into a single view of performance. Growth stops being a guess and starts becoming predictable.
            </p>

            <a
              href="https://sell360.app/"
              title="Visit Website"
              target="_blank"
              rel="noopener noreferrer"
              className="red-arrow-btn group bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* Second Section - Growth Engine */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] p-[15px] md:p-10 transition-all duration-400 relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#2563EB"
              viewBox="0 0 16 16"
              className="inline-flex plus-icon2 z-10"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>

            <div>
              <div className="grid grid-cols-12 gap-3 sm:gap-5 justify-center">
                <div className="group col-span-12">
                  <div className="mb-6 md:mb-10">
                    <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white text-[10px] rounded-[6px] pr-4 pl-2 py-1 mb-3 md:mb-5 uppercase tracking-[2px]">
                      <p className="flex items-center gap-2">
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
                        Growth Engine
                      </p>
                    </div>
                    <br />

                    <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-3 sm:mb-6 lg:mb-10">
                      From Insight To Impact
                    </h2>

                    <div className="mb-3 md:mb-8 lg:mb-16">
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
                        What slows growth isn&apos;t a lack of effort. It&apos;s the lack of visibility. Leaders set ambitious targets but often steer without a clear picture of what&apos;s really happening in the market. Without clarity, decisions become guesswork and growth becomes uncertain.
                      </p>

                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
                        SELL 360 was built to give leaders that clarity. It transforms scattered sales data into a single source of truth. Performance is no longer debated, it is measured. Strategies are no longer assumptions, they are data-driven. That&apos;s how growth becomes intentional, repeatable, and sustainable.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 md:gap-10 mt-5">
                    {/* Visibility Card */}
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/933b61d80df00782c47fc7dbaf042748094458e6/recognition.svg"
                            width={20}
                            height={20}
                            alt="Visibility Icon"
                            className="w-[28px] h-[28px] opacity-90 mr-2.5"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] md:text-lg text-[#2563EB] font-primary font-semibold">
                          Visibility
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
                        Clarity across the entire business, from revenue flow to retail impact.
                      </p>
                    </div>

                    {/* Performance Card */}
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/1a2a6c1ec1dc634ec9ddfb6c4ec17d92fd5c7cfb/good-feedback.svg"
                            width={20}
                            height={20}
                            alt="Performance Icon"
                            className="w-[28px] h-[28px] opacity-90 mr-2.5"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] md:text-lg text-[#2563EB] font-primary font-semibold">
                          Performance
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
                        A measurable view of how teams, distributors, and markets are delivering.
                      </p>
                    </div>

                    {/* Growth Card */}
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/914e81b1bacb86ee5f79b979ea034fb6b9c39159/statistical.svg"
                            width={20}
                            height={20}
                            alt="Growth Icon"
                            className="w-[28px] h-[28px] opacity-90 mr-2.5"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] md:text-lg text-[#2563EB] font-primary font-semibold">
                          Growth
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
                        Boardroom-level insights that guide strategy and unlock sustainable results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Clear Perspective */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Content Card */}
            <div className="h-auto md:h-[670px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] p-5 flex flex-col justify-center hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="flex flex-col justify-between h-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                  className="inline-flex plus-icon2 z-10"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>

                <div className="inline-block">
                  <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-5 md:mb-7 uppercase tracking-[2px]">
                    <p className="flex items-center gap-2">
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
                      Clear Perspective
                    </p>
                  </div>
                </div>

                <h2 className="font-primary text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
                  Dashboards are not about pretty charts. They are about truth.
                  <br />
                  <br />
                  SELL 360 turns data into a single lens where leaders see performance as it is, not as it&apos;s reported.
                </h2>

                <div>
                  <div className="grid grid-cols-12 gap-3 sm:gap-4">
                    {/* Evaluate Performance */}
                    <div className="group col-span-12 sm:col-span-6">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://www.allomate.com/images/lasting-impact.webp"
                            width={20}
                            height={20}
                            alt="Evaluate Performance Icon"
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] sm:text-lg text-[#2563EB] font-primary font-semibold">
                          Evaluate Performance
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-[16px] text-[#8A8A8A] mb-3 md:mb-5">
                        Sales, teams, and territories are measured with accuracy, turning opinions into facts.
                      </p>
                    </div>

                    {/* Actionable Insights */}
                    <div className="group col-span-12 sm:col-span-6">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://www.allomate.com/images/purposeful-icon.webp"
                            width={20}
                            height={20}
                            alt="Actionable Insights Icon"
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] sm:text-lg text-[#2563EB] font-primary font-semibold">
                          Actionable Insights
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-[16px] text-[#8A8A8A] mb-3 md:mb-5">
                        Sales officers, distributors, and retailers all aligned on one digital platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  alt="SELL 360 Dashboard"
                  src="/Images/dashboard.png"
                  className="w-full h-auto sm:h-[570px] md:h-[670px] object-cover object-center rounded-[6px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Full Image */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <figure>
            <Image
              width={800}
              height={800}
              src="/Images/d1.png"
              alt="SELL 360 Platform"
              className="w-full h-[380px] md:h-full object-cover rounded-[6px]"
            />
          </figure>
        </div>
      </section>

      {/* Fifth Section - Executive View */}
      <section className="py-5 md:py-10 bg-[#0F172A]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="mb-4 md:mb-6 lg:mb-10">
            <div className="inline-block">
              <div className="font-primary inline-block bg-[#2563EB] backdrop-blur-[40px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-2 lg:mb-4 uppercase tracking-[2px]">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#000000"
                    viewBox="0 0 16 16"
                    className="inline-flex"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  Executive View
                </p>
              </div>
              <br />

              <h2 className="leading-none text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2563EB] font-primary mb-3 flex">
                The Whole Business, Visible
              </h2>

              <p className="font-secondary font-normal text-base text-[#8A8A8A]">
                For CEOs and Directors, the question isn&apos;t just &quot;how much did we sell.&quot; It&apos;s whether the business is growing in the right places, whether teams are performing, and whether data is telling the truth. SELL 360 brings these answers together in one view, giving leaders the confidence to act decisively.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 xl:gap-10">
            {/* Revenue Flow */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/ed1505a2f60219b247f22b87a4cec2b04059661a/modelling.svg"
                    alt="Revenue Flow Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Revenue Flow
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Follow the movement of sales from company to distributor to retail with complete clarity.
              </p>
            </div>

            {/* Market Coverage */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/548496afed328847755f77eda65619380614f13a/market-positioning.svg"
                    alt="Market Coverage Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Market Coverage
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                See where your brand is present, where it&apos;s absent, and how coverage changes over time.
              </p>
            </div>

            {/* Team Performance */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/59fab880c8d0bdfe801a3b9e0ef721c169555905/performance.svg"
                    alt="Team Performance Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Team Performance
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Evaluate productivity and accountability across every sales officer, distributor, and territory.
              </p>
            </div>

            {/* Customer Insights */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/cdbe58541f46aea68730ec4ca7355f652276dd62/creativity.svg"
                    alt="Customer Insights Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Customer Insights
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Understand retailer buying patterns, preferences, and engagement for stronger relationships.
              </p>
            </div>

            {/* Operational Efficiency */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/383296900e807816a39fe579194ee5e1a8e2fced/efficiency.svg"
                    alt="Operational Efficiency Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Operational Efficiency
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Spot inefficiencies in stock movement, route planning, and fulfillment before they impact growth.
              </p>
            </div>

            {/* Growth Forecast */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/815ad0e1cf76636654a0efae70892b9ee287b41c/forecast-analytics.svg"
                    alt="Growth Forecast Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Growth Forecast
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Turn today&apos;s data into tomorrow&apos;s strategy with forward-looking, predictive insights.
              </p>
            </div>

            {/* KPI Discipline */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/4f9183fb34630f7b87bf812348da3a6a04dffb80/kpi-2.svg"
                    alt="KPI Discipline Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                KPI Discipline
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Track the right performance indicators consistently, ensuring every number tells a reliable story.
              </p>
            </div>

            {/* Staying Updated */}
            <div>
              <div className="mb-2 md:mb-4">
                <figure className="w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#2563EB] rounded-[6px] flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="https://cms.allomate.com/uploads/1193f9a097094e503f2409ec66b426d060ffbfec/informative.svg"
                    alt="Staying Updated Icon"
                    className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]"
                    style={{ filter: 'brightness(0)' }}
                  />
                </figure>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-[#2563EB] font-primary mb-1">
                Staying Updated
              </h3>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Push reports delivered straight to email keep the entire management aligned in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - Two Images */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="https://cms.allomate.com/uploads/a998f0c57138680a239064e3a986acc6fec5bd42/sell360-95.webp"
                  alt="SELL 360 Platform"
                  className="w-full h-[350px] sm:h-[570px] md:h-[670px] object-cover rounded-[6px]"
                />
              </figure>
            </div>

            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="https://cms.allomate.com/uploads/34ca09adf153f1c48f10a0df68f11b1ada07a0a5/sell360-86.webp"
                  alt="SELL 360 Platform"
                  className="w-full h-[350px] sm:h-[570px] md:h-[670px] object-cover rounded-[6px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - Future Ready */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Content Card */}
            <div className="h-auto md:h-[600px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] p-5 flex flex-col justify-center hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="flex flex-col justify-between h-full relative">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#2563EB"
                    viewBox="0 0 16 16"
                    className="inline-flex plus-icon2 z-10"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>

                  <div className="inline-block">
                    <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white/70 text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-3 md:mb-5 uppercase tracking-[2px]">
                      <p className="flex items-center gap-2">
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
                        Future Ready
                      </p>
                    </div>
                  </div>

                  <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-5 flex">
                    From Data to Decisions, From Decisions to Growth
                  </h2>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3">
                    SELL 360 doesn&apos;t replace your sales team. It empowers them. It doesn&apos;t create data for the sake of it. It creates clarity that drives the business forward. For CEOs and Directors, it means running the company with visibility, evaluating performance with confidence, and turning insight into predictable growth.
                  </p>

                  <ul className="list-none space-y-2 text-[#8A8A8A] mb-3 md:mb-5">
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      Complete visibility across markets and distribution
                    </li>
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      Real-time evaluation of team and sales performance
                    </li>
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      Smarter, faster decision-making based on facts
                    </li>
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      Sustainable growth backed by data-driven strategy
                    </li>
                  </ul>
                </div>

                <div>
                  <Link
                    href="/contact-us"
                    title="See the Whole Picture"
                    className="red-arrow-btn group mt-4 pr-10 bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold"
                  >
                    See the Whole Picture
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="/Images/c.png"
                  alt="SELL 360 Platform"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-[6px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

