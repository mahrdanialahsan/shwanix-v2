import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Career() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
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
                Join Our Journey
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-white mb-4 sm:mb-6">
              Are You a Thinker, a Tinker, or a Builder?
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
              At Allomate, we bring together people who are curious enough to question, bold enough to try, and proud enough to finish well. If that sounds like you, you&apos;ll fit right in.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section - Life at Allomate */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="relative">
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

            <figure>
              <Image
                width={1000}
                height={1000}
                src="https://cms.allomate.com/uploads/cdfaf6b7ec569cf0859f2a1476d8ddf4b72dbac2/Team.webp"
                alt="Team at Allomate"
                className="w-full h-[380px] sm:h-[450px] md:h-[600px] lg:h-[800px] object-cover rounded-[6px]"
              />
            </figure>

            <div className="absolute bottom-[30px] left-0 sm:left-[10px] md:left-[30px] w-full sm:w-[50%] lg:w-[35%] p-3 md:p-6 bg-[#0F172A]/50 sm:bg-[#0F172A]/80 backdrop-blur-[15px] sm:backdrop-blur-[40px] rounded-[6px]">
              <div className="min-h-[250px] md:min-h-[300px] flex flex-col justify-between items-start">
                <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-3 md:mb-5 uppercase tracking-[2px]">
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
                    Life at Allomate
                  </p>
                </div>

                <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-5 flex">
                  Work That Shapes You
                </h2>

                <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
                  Joining Allomate means more than writing code or shipping features. It&apos;s about being part of a team that experiments, questions, and builds with intention. We care about the work we do and the people we do it with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - The Values We Stand On */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
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
                    What Guides Us
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary">
                  The Values We Stand On
                </h2>
              </div>
            </div>
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                These aren&apos;t just words on a page. They are the standards we hold ourselves to and the culture we protect. If they resonate with you, you&apos;ll feel at home here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
            {/* Build with Pride */}
            <div className="bg-white rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:shadow-lg">
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
                    src="https://cms.allomate.com/uploads/47e7fd8ac946c38dda7fface8759c15314a8de22/determined.svg"
                    width={50}
                    height={50}
                    alt="Build with Pride Icon"
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Build with Pride
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#000000]/80">
                We take ownership of our work and deliver it with care.
              </p>
            </div>

            {/* Commit with Heart */}
            <div className="bg-white rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:shadow-lg">
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
                    src="https://cms.allomate.com/uploads/d3ba7c79e2c41098c455ead51749b15529edd2bd/relationship.svg"
                    width={50}
                    height={50}
                    alt="Commit with Heart Icon"
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Commit with Heart
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#000000]/80">
                When we give our word, we stand by it fully.
              </p>
            </div>

            {/* Treat All Equal */}
            <div className="bg-white rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:shadow-lg">
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
                    src="https://cms.allomate.com/uploads/f5759f6303a6938c3554eea6aabee1780c5a99d2/human-rights-2.svg"
                    width={50}
                    height={50}
                    alt="Treat All Equal Icon"
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Treat All Equal
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#000000]/80">
                Every person deserves respect, trust, and fairness.
              </p>
            </div>

            {/* Grow Every Day */}
            <div className="bg-white rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:shadow-lg">
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
                    src="https://cms.allomate.com/uploads/d1ffb0951da9c3bf70578daa4b459770f145518e/career.svg"
                    width={50}
                    height={50}
                    alt="Grow Every Day Icon"
                    className="w-[28px] h-[28px] mr-2.5"
                    style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Grow Every Day
                </h3>
              </div>
              <p className="font-secondary font-normal text-sm sm:text-base text-[#000000]/80">
                We stay curious, keep learning, and push forward together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Open Roles */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div>
            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center relative">
              <div className="group col-span-12 mb-4 sm:mb-6 lg:mb-8">
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
                      Open Roles
                    </p>
                  </div>
                  <br />
                  <h2 className="leading-none capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary">
                    Step Into What&apos;s Next
                  </h2>
                  <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                    Explore our open positions and find your place in a team that builds with purpose and looks ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 sm:gap-5 all-open-positions-div">
            {/* Full Stack Developer Job Card */}
            <div className="group col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
              <div className="h-[150px] md:h-[200px] p-[15px] md:p-[20px] bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] flex flex-col justify-between rounded-[6px] relative hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex plus-icon2"
                  width="22"
                  height="22"
                  fill="#2563EB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>

                <h3 className="font-primary text-lg md:text-xl font-semibold text-white uppercase">
                  Full Stack Developer
                </h3>

                <div className="flex flex-row items-center justify-between">
                  <p className="font-normal text-xs sm:text-sm text-[#8A8A8A]">Lahore, Pakistan</p>

                  <div>
                    <Link
                      href="/career/full-stack-developer"
                      title="Read More"
                      className="group bg-[#2563EB] rounded-[6px] w-[40px] h-[40px] flex items-center justify-center hover:w-[70px] focus:w-[70px] transition-all duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="bi bi-arrow-right-short text-[#000000]"
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
      </section>

      <Footer />
    </div>
  );
}

