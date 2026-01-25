import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";

export default function AboutUs() {
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
                ABOUT US
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#2563EB] mb-2">
              We Build What Moves Business Forward
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] mb-3 sm:mb-5 md:mb-7">
              Since 2017, we&apos;ve partnered with businesses to build platforms that unlock growth, improve efficiency, and reshape the way they work.
            </p>

            <Link
              href="/contact-us"
              title="Read More"
              className="red-arrow-btn group bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section - Our Story */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] p-[15px] md:p-10 transition-all duration-400 relative">
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
                        Our story
                      </p>
                    </div>
                    <br />

                    <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-3 sm:mb-6 lg:mb-10">
                      How Allomate Came to Life
                    </h2>

                    <div className="mb-3 md:mb-8 lg:mb-16">
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
                        Allomate was born from a simple idea. Technology should make business simpler, not more complicated. In 2017 we saw companies struggling with heavy systems, scattered processes, and missed opportunities. We knew there was a better path forward. One where digital transformation meant real impact, not just talk.
                      </p>

                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
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
                        <h3 className="uppercase text-base md:text-lg text-[#2563EB] font-primary font-semibold">
                          Belief
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
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
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="uppercase text-base md:text-lg text-[#2563EB] font-primary font-semibold">
                          Direction
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
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
                            className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-90 mr-2"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="uppercase text-base md:text-lg text-[#2563EB] font-primary font-semibold">
                          Promise
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
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
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center mb-4">
            <div className="group col-span-12 sm:col-span-6 lg:col-span-8">
              <div className="inline-block">
                <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[20px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-4 lg:mb-5 uppercase tracking-[2px]">
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
                    Core Values
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary flex">
                  Core Values
                </h2>
              </div>
            </div>

            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                What guides us isn&apos;t just code. It&apos;s the principles that shape how we work, how we build, and how we partner with every client.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
            {/* Clarity Card */}
            <div className="bg-[#0F172A] border border-[#2563EB]/20 rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#2563EB"
                viewBox="0 0 16 16"
                className="inline-flex plus-icon2"
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
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-[#2563EB] font-semibold font-primary">
                  Clarity
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                We cut through complexity. Every solution is built to make work easier, not harder.
              </p>
            </div>

            {/* Trust Card */}
            <div className="bg-[#0F172A] border border-[#2563EB]/20 rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#2563EB"
                viewBox="0 0 16 16"
                className="inline-flex plus-icon2"
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
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-[#2563EB] font-semibold font-primary">
                  Trust
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Partnerships last when they are grounded in honesty, transparency, and reliability.
              </p>
            </div>

            {/* Impact Card */}
            <div className="bg-[#0F172A] border border-[#2563EB]/20 rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#2563EB"
                viewBox="0 0 16 16"
                className="inline-flex plus-icon2"
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
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-[#2563EB] font-semibold font-primary">
                  Impact
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Technology is only as good as the results it delivers. We measure success in growth, efficiency, and lasting change.
              </p>
            </div>

            {/* Evolution Card */}
            <div className="bg-[#0F172A] border border-[#2563EB]/20 rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#2563EB"
                viewBox="0 0 16 16"
                className="inline-flex plus-icon2"
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
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-[#2563EB] font-semibold font-primary">
                  Evolution
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                We never stand still. We learn, adapt, and scale alongside our clients so their systems stay future ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Our Process */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            {/* Left Column - Sticky Content */}
            <div className="group col-span-12 sm:col-span-5">
              <div className="sticky top-20">
                <div className="inline-block">
                  <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-2 lg:mb-4 uppercase tracking-[2px]">
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
                      Our process
                    </p>
                  </div>
                  <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-2 flex">
                    From Idea To Impact
                  </h2>
                  <p className="font-secondary capitalize font-normal text-sm sm:text-base text-[#8A8A8A] mb-3">
                    Every partnership begins with clarity. Our process is built to understand your business, design the right solution, and make sure it delivers lasting results.
                  </p>
                  <Link
                    href="/contact-us"
                    title="Schedule a Consultation"
                    className="red-arrow-btn group bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold"
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
                <div className="relative stick-tab flex flex-col p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] mb-3 hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
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
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#2563EB] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      01
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] ml-2 md:ml-3 font-primary font-semibold">
                      Discover &amp; Define
                    </h3>
                  </div>
                  <p className="font-secondary font-normal text-base md:text-lg text-[#8A8A8A] capitalize">
                    We dive into your goals, challenges, and audience to uncover what truly matters.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="relative stick-tab flex flex-col p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] mb-3 hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
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
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#2563EB] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      02
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] ml-2 md:ml-3 font-primary font-semibold">
                      Design &amp; Build
                    </h3>
                  </div>
                  <p className="font-secondary font-normal text-base md:text-lg text-[#8A8A8A] capitalize">
                    Our team translates insight into technology. Clean architecture, intuitive design, and systems built to last.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="relative stick-tab flex flex-col p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] mb-3 hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
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
                  <div className="flex items-center mb-3">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#2563EB] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      03
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] ml-2 md:ml-3 font-primary font-semibold">
                      Integrate &amp; Launch
                    </h3>
                  </div>
                  <p className="font-secondary font-normal text-base md:text-lg text-[#8A8A8A] capitalize">
                    We connect solutions into your workflows and bring them live with minimal disruption.
                  </p>
                </div>

                {/* Step 04 */}
                <div className="relative stick-tab flex flex-col p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] mb-3 hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
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
                  <div className="flex items-center">
                    <div className="flex justify-center items-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#2563EB] backdrop-blur-[20px] font-semibold text-white text-lg sm:text-xl rounded-full">
                      04
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] ml-2 md:ml-3 font-primary font-semibold">
                      Support &amp; Grow
                    </h3>
                  </div>
                  <p className="font-secondary font-normal text-base md:text-lg text-[#8A8A8A] capitalize mt-3">
                    We stay with you beyond launch, monitoring, refining, and scaling as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Why Businesses Stay With Us */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-3 md:mb-5 lg:mb-7">
            Why Businesses Stay With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Execution First Card */}
            <div className="relative flex flex-col justify-between h-max rounded-[6px] p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[15px] transition duration-300 hover:bg-[#1E293B] hover:border-[#2563EB]/40">
           
              <div>
                <div className="mb-2 md:mb-5">
                  <figure>
                    <Image
                      src="https://www.allomate.com/images/service-chose-Icon01.png"
                      width={50}
                      height={50}
                      alt="Execution First Icon"
                      className="w-[36px] md:w-[50px] h-auto"
                      style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                    />
                  </figure>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] font-semibold font-primary">
                  Execution First
                </h3>
              </div>
              <div>
                <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                  Ideas are easy. Impact is hard. We focus on building systems that work the first time and keep working. No excuses, no endless fixes - just execution that delivers.
                </p>
              </div>
            </div>

            {/* Proven Impact Card */}
            <div className="relative flex flex-col justify-between h-max rounded-[6px] p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[15px] transition duration-300 hover:bg-[#1E293B] hover:border-[#2563EB]/40">
             
              <div>
                <div className="mb-2 md:mb-5">
                  <figure>
                    <Image
                      src="https://cms.allomate.com/uploads/ba21a89e47672143cb0cb62fb628747bb41a6398/target-2.svg"
                      width={50}
                      height={50}
                      alt="Proven Impact Icon"
                      className="w-[36px] md:w-[50px] h-auto"
                      style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                    />
                  </figure>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] font-semibold font-primary">
                  Proven Impact
                </h3>
              </div>
              <div>
                <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                  Growth is not a promise. It is numbers you can count. Thirty percent year over year for FMCG clients. Two thousand reps using our SaaS. A quarter million retailers already digitized.
                </p>
              </div>
            </div>

            {/* Partnership, Not Projects Card */}
            <div className="relative flex flex-col justify-between h-max rounded-[6px] p-3 md:p-6 bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[15px] transition duration-300 hover:bg-[#1E293B] hover:border-[#2563EB]/40">
            
              <div>
                <div className="mb-2 md:mb-5">
                  <figure>
                    <Image
                      src="https://cms.allomate.com/uploads/61ef441298cae606d17bb9f5905ce89f7ecdca14/handshake-3.svg"
                      width={50}
                      height={50}
                      alt="Partnership Icon"
                      className="w-[36px] md:w-[50px] h-auto"
                      style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                    />
                  </figure>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#2563EB] font-semibold font-primary">
                  Partnership, Not Projects
                </h3>
              </div>
              <div>
                <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                  We do not hand over code and walk away. We embed, support, and adapt until outcomes are real. Clients stay with us because we work like part of their team, not a vendor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* 10th section */}
       <section className="py-5 md:py-10 mainReviewsClient">
        <div className="container mx-auto px-3 sm:px-4 max-w-[100%]">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <div className="text-center">
              <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-4 uppercase tracking-[2px]">
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
                  client Reviews
                </p>
              </div>
              <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-3 md:mb-4">
                Client Testimonials
              </h2>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] max-w-3xl mx-auto">
                Hear directly from clients who&apos;ve experienced our solutions. From startups to global enterprises, discover how we&apos;ve helped businesses achieve their goals.
              </p>
            </div>
          </div>

          <div className="hasClientReviews all-reviews-section-list">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-5 pb-4" style={{ width: 'max-content' }}>
                {/* Review Cards */}
                {[
                  {
                    name: "Abbas Hayat",
                    role: "VP of Product, Al Ghurair",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/WhatsApp_Image_2025-08-27_at_13.48.17_1756383327.jpeg",
                    review: "Shwanix Technologies accelerated our dev timeline, improved quality, and made scaling easy. Their proactive ownership and solution-focused mindset made them feel like a true extension of our team."
                  },
                  {
                    name: "Faheem Akhtar",
                    role: "General Manager, Mtek Hygiene",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Faheem_1756136154.png",
                    review: "This was more than a software deployment. The team worked with us throughout the digitization journey, trained our staff, and helped refine processes. Which gave our entire sales team real insights and better decisions with real-time reporting."
                  },
                  {
                    name: "Anthony Guaimano",
                    role: "Executive, Iron Horse Resi",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Screenshot_2025-08-25_at_20.43.44_1756136680.png",
                    review: "They took our ideas and turned them into a complete platform that works for both our investors and our team. The project was delivered on time, communication was clear, and the end result felt professional and dependable."
                  },
                  {
                    name: "Lucila Brubacher",
                    role: "Project Manager, Astra Pharama",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Screenshot_2025-08-25_at_20.46.17_1756136859.png",
                    review: "Shwanix Technologies built our website under tight deadlines and delivered on time. The team communicated clearly, adapted to changes, and proved to be reliable and professional throughout the project."
                  },
                  {
                    name: "Yasear Saad",
                    role: "CEO, Savoz",
                    rating: 4,
                    image: "https://www.allomate.com/storage/reviews/Yasear_Saad_1757418173.png",
                    review: "They understood what we needed right away and got things done on time. Working with them felt easy and straightforward, and the end result turned out better than we expected."
                  },
                  {
                    name: "Terrance Howard",
                    role: "CEO, Poseidon Data",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Terrance_1757419290.png",
                    review: "They helped transform raw activity into structured insights we could act on. Seeing the data come alive in reports and maps gave us a clearer picture of the challenge and the progress being made."
                  },
                  {
                    name: "Richard Geary",
                    role: "Founder & Director Programs, Deaf Reach",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Richard_1757421728.png",
                    review: "They brought our vision for the Pakistan Sign Language platform to life. The work has made a real difference for the deaf community and we are deeply grateful for their support."
                  },
                  {
                    name: "Faraz Khan",
                    role: "Partner, Khan Law",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Faraz_Khan_1757416113.png",
                    review: "The team was knowledgeable and well organized. They offered fair pricing, delivered more than expected, and kept everything on schedule. The project was completed within budget and we found them to be a reliable partner we would gladly recommend."
                  },
                  {
                    name: "Sahil Adeem",
                    role: "Director, Source Code",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Sahil_Adeem_1757416125.png",
                    review: "Source Code Academy was designed and built by Allomate with creativity and vision. Every interaction with the team brought fresh perspective and left us excited about what was possible."
                  },
                  {
                    name: "Ehtesham Rais",
                    role: "Director, Danpak Foods",
                    rating: 5,
                    image: "https://www.allomate.com/storage/reviews/Ehtesham_Rais_1756135895.png",
                    review: "Shwanix Technologies took us from manual to digital - exactly what our sales team needed. Clear communication, responsive support, and empowering tech training made the transition seamless for our entire network."
                  }
                ].map((review, index) => (
                  <ReviewCard
                    key={index}
                    name={review.name}
                    role={review.role}
                    rating={review.rating}
                    image={review.image}
                    review={review.review}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

