import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
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
                ABOUT US
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-white mb-4 sm:mb-6">
              We Build What Moves Business Forward
            </h1>

            <p className="font-secondary font-medium text-sm sm:text-base text-white/80 mb-6 sm:mb-8 md:mb-10">
              Since 2017, we&apos;ve partnered with businesses to build platforms that unlock growth, improve efficiency, and reshape the way they work.
            </p>

            <Link
              href="/contact-us"
              title="Read More"
              className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section - Our Story */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-6 md:p-10 transition-all duration-400 relative">
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
                        Our story
                      </p>
                    </div>

                    <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary mb-4 sm:mb-6 lg:mb-10">
                      How Allomate Came to Life
                    </h2>

                    <div className="mb-3 md:mb-8 lg:mb-16">
                      <p className="font-secondary font-medium text-sm md:text-base text-white/80 capitalize mb-3 md:mb-6 leading-relaxed">
                        Allomate was born from a simple idea. Technology should make business simpler, not more complicated. In 2017 we saw companies struggling with heavy systems, scattered processes, and missed opportunities. We knew there was a better path forward. One where digital transformation meant real impact, not just talk.
                      </p>

                      <p className="font-secondary font-medium text-sm md:text-base text-white/80 capitalize mb-3 md:mb-6 leading-relaxed">
                        From the start our focus has been on building platforms that remove friction, unlock growth, and give businesses clarity. Every product we deliver is shaped by that belief and backed by the promise that we will stay to support, improve, and scale. That is how we continue to help businesses move forward with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 md:gap-10 mt-5">
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/47e76bcc3794138640d885728c34990e5d06b69e/great-idea.svg"
                            width={20}
                            height={20}
                            alt="Belief Icon"
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="uppercase text-base md:text-lg text-white font-primary font-semibold">
                          Belief
                        </h3>
                      </div>
                      <p className="font-secondary font-medium text-sm md:text-base text-white/80 capitalize">
                        We believe technology should serve people and make work feel effortless.
                      </p>
                    </div>

                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/728e88d2465535e42d25468615e83e399cf050e2/target-(1).svg"
                            width={20}
                            height={20}
                            alt="Direction Icon"
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2 brightness-0 invert"
                          />
                        </figure>
                        <h3 className="uppercase text-base md:text-lg text-white font-primary font-semibold">
                          Direction
                        </h3>
                      </div>
                      <p className="font-secondary font-medium text-sm md:text-base text-white/80 capitalize">
                        We design and build systems that deliver measurable results in growth, efficiency, and decision making.
                      </p>
                    </div>

                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/451a241562ce0583acbc6961737d280265a27e1e/partnership-handshake.svg"
                            width={20}
                            height={20}
                            alt="Promise Icon"
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2 brightness-0 invert"
                          />
                        </figure>
                        <h3 className="uppercase text-base md:text-lg text-white font-primary font-semibold">
                          Promise
                        </h3>
                      </div>
                      <p className="font-secondary font-medium text-sm md:text-base text-white/80 capitalize">
                        We remain partners long after launch, ensuring your technology keeps creating value as your business evolves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Core Values */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center mb-6 md:mb-8">
            <div className="group col-span-12 sm:col-span-6 lg:col-span-8">
              <div className="inline-block">
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
                    Core Values
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary">
                  Core Values
                </h2>
              </div>
            </div>

            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                What guides us isn&apos;t just code. It&apos;s the principles that shape how we work, how we build, and how we partner with every client.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {/* Clarity Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-6 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#60A5FA"
                viewBox="0 0 16 16"
                className="inline-flex mb-3"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/60530ab46fdb6959ecf07aa8778a1201579f7a6e/magic.svg"
                    width={50}
                    height={50}
                    alt="Clarity Icon"
                    className="w-[28px] h-[28px] mr-2.5 brightness-0 invert opacity-90"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Clarity
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                We cut through complexity. Every solution is built to make work easier, not harder.
              </p>
            </div>

            {/* Trust Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-6 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#60A5FA"
                viewBox="0 0 16 16"
                className="inline-flex mb-3"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/43a92a814547fb60b29fe301bd94c1e8f7302757/protection-(1).svg"
                    width={50}
                    height={50}
                    alt="Trust Icon"
                    className="w-[28px] h-[28px] mr-2.5 brightness-0 invert opacity-90"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Trust
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                Partnerships last when they are grounded in honesty, transparency, and reliability.
              </p>
            </div>

            {/* Impact Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-6 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#60A5FA"
                viewBox="0 0 16 16"
                className="inline-flex mb-3"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/ebf906a4a27643ae60e03cf3bf8cb86200fbfd59/line-chart.svg"
                    width={50}
                    height={50}
                    alt="Impact Icon"
                    className="w-[28px] h-[28px] mr-2.5 brightness-0 invert opacity-90"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Impact
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                Technology is only as good as the results it delivers. We measure success in growth, efficiency, and lasting change.
              </p>
            </div>

            {/* Evolution Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-6 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#60A5FA"
                viewBox="0 0 16 16"
                className="inline-flex mb-3"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/25198f4fc413e36379b256627c34aeca15f998b1/sync.svg"
                    width={50}
                    height={50}
                    alt="Evolution Icon"
                    className="w-[28px] h-[28px] mr-2.5 brightness-0 invert opacity-90"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Evolution
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                We never stand still. We learn, adapt, and scale alongside our clients so their systems stay future ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Our Process */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            {/* Left Column - Sticky Content */}
            <div className="group col-span-12 sm:col-span-5">
              <div className="sticky top-20">
                <div className="inline-block">
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
                      Our process
                    </p>
                  </div>
                  <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary mb-4">
                    From Idea To Impact
                  </h2>
                  <p className="font-secondary capitalize font-medium text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                    Every partnership begins with clarity. Our process is built to understand your business, design the right solution, and make sure it delivers lasting results.
                  </p>
                  <Link
                    href="/contact-us"
                    title="Schedule a Consultation"
                    className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
                  >
                    Book a Strategy Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Process Steps */}
            <div className="group col-span-12 sm:col-span-7">
              <div>
                {/* Step 01 */}
                <div className="relative stick-tab flex flex-col p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] mb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="inline-flex mb-3"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#60A5FA] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      01
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white ml-2 md:ml-3 font-primary font-semibold">
                      Discover &amp; Define
                    </h3>
                  </div>
                  <p className="font-secondary font-medium text-base md:text-lg text-white/80 capitalize leading-relaxed">
                    We dive into your goals, challenges, and audience to uncover what truly matters.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="relative stick-tab flex flex-col p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] mb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="inline-flex mb-3"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#60A5FA] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      02
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white ml-2 md:ml-3 font-primary font-semibold">
                      Design &amp; Build
                    </h3>
                  </div>
                  <p className="font-secondary font-medium text-base md:text-lg text-white/80 capitalize leading-relaxed">
                    Our team translates insight into technology. Clean architecture, intuitive design, and systems built to last.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="relative stick-tab flex flex-col p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] mb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="inline-flex mb-3"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#60A5FA] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      03
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white ml-2 md:ml-3 font-primary font-semibold">
                      Integrate &amp; Launch
                    </h3>
                  </div>
                  <p className="font-secondary font-medium text-base md:text-lg text-white/80 capitalize leading-relaxed">
                    We connect solutions into your workflows and bring them live with minimal disruption.
                  </p>
                </div>

                {/* Step 04 */}
                <div className="relative stick-tab flex flex-col p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] mb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="inline-flex mb-3"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#60A5FA] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      04
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white ml-2 md:ml-3 font-primary font-semibold">
                      Support &amp; Grow
                    </h3>
                  </div>
                  <p className="font-secondary font-medium text-base md:text-lg text-white/80 capitalize leading-relaxed">
                    We stay with you beyond launch, monitoring, refining, and scaling as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Why Businesses Stay With Us */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary mb-6 md:mb-8 lg:mb-10">
            Why Businesses Stay With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Execution First Card */}
            <div className="relative flex flex-col justify-between h-max rounded-[14px] p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div>
                <div className="mb-3 md:mb-5">
                  <figure>
                    <Image
                      src="https://www.allomate.com/images/service-chose-Icon01.png"
                      width={50}
                      height={50}
                      alt="Execution First Icon"
                      className="w-[36px] md:w-[50px] h-auto brightness-0 invert opacity-90"
                    />
                  </figure>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold font-primary mb-3">
                  Execution First
                </h3>
              </div>
              <div>
                <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                  Ideas are easy. Impact is hard. We focus on building systems that work the first time and keep working. No excuses, no endless fixes - just execution that delivers.
                </p>
              </div>
            </div>

            {/* Proven Impact Card */}
            <div className="relative flex flex-col justify-between h-max rounded-[14px] p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div>
                <div className="mb-3 md:mb-5">
                  <figure>
                    <Image
                      src="https://cms.allomate.com/uploads/ba21a89e47672143cb0cb62fb628747bb41a6398/target-2.svg"
                      width={50}
                      height={50}
                      alt="Proven Impact Icon"
                      className="w-[36px] md:w-[50px] h-auto brightness-0 invert opacity-90"
                    />
                  </figure>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold font-primary mb-3">
                  Proven Impact
                </h3>
              </div>
              <div>
                <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                  Growth is not a promise. It is numbers you can count. Thirty percent year over year for FMCG clients. Two thousand reps using our SaaS. A quarter million retailers already digitized.
                </p>
              </div>
            </div>

            {/* Partnership, Not Projects Card */}
            <div className="relative flex flex-col justify-between h-max rounded-[14px] p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div>
                <div className="mb-3 md:mb-5">
                  <figure>
                    <Image
                      src="https://cms.allomate.com/uploads/61ef441298cae606d17bb9f5905ce89f7ecdca14/handshake-3.svg"
                      width={50}
                      height={50}
                      alt="Partnership Icon"
                      className="w-[36px] md:w-[50px] h-auto brightness-0 invert opacity-90"
                    />
                  </figure>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold font-primary mb-3">
                  Partnership, Not Projects
                </h3>
              </div>
              <div>
                <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                  We do not hand over code and walk away. We embed, support, and adapt until outcomes are real. Clients stay with us because we work like part of their team, not a vendor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

