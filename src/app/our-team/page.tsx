import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function OurTeam() {
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
                OUR TEAM
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-white mb-4 sm:mb-6">
              Meet the people behind our success
            </h1>

            <p className="font-secondary font-medium text-sm sm:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Every project we ship is powered by the minds you see here. Together we turn risk into resilience and complexity into clarity.
            </p>

            <Link
              href="/contact-us"
              title="Work with us"
              className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section - At a Glance */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div>
            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center relative">
              <div className="group col-span-12">
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
                      At a Glance
                    </p>
                  </div>
                  <h2 className="leading-none capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary mb-3">
                    Strength in Experience
                  </h2>
                  <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                    Behind every project is a team that blends years of expertise with fresh ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Stats Cards */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Years of Expertise Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-7 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/d3bcccd45780d49e4cf4f6f3997626136c647f93/experience.svg"
                    width={50}
                    height={50}
                    alt="Experience Icon"
                    className="w-[30px] h-[30px] mr-2 opacity-90 brightness-0 invert"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Years of Expertise
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                Over 50+ years of combined domain knowledge in tech and business.
              </p>
            </div>

            {/* Projects Delivered Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-7 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/1f04acde11d777cc51c20059895a40f7c9ff7bca/completed-task.svg"
                    width={50}
                    height={50}
                    alt="Projects Icon"
                    className="w-[30px] h-[30px] mr-2 opacity-90 brightness-0 invert"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Projects Delivered
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                More than 100 successful launches across SaaS, eCommerce, and enterprise apps.
              </p>
            </div>

            {/* Industries Served Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-7 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/33f6886e46d689e953e8335081843db1c9466924/industry.svg"
                    width={50}
                    height={50}
                    alt="Industry Icon"
                    className="w-[30px] h-[30px] mr-2 opacity-90 brightness-0 invert"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  Industries Served
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                Proven impact in 10+ verticals, from FMCG to property management.
              </p>
            </div>

            {/* People Power Card */}
            <div className="glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px] p-4 md:p-7 transition-all duration-300 flex flex-col flex-wrap content-baseline h-full relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div className="flex mb-3">
                <figure>
                  <Image
                    src="https://cms.allomate.com/uploads/3bf498d27e3069cb4830404c976223146e852960/empowerment.svg"
                    width={50}
                    height={50}
                    alt="People Power Icon"
                    className="w-[30px] h-[30px] mr-2 opacity-90 brightness-0 invert"
                  />
                </figure>
                <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold font-primary">
                  People Power
                </h3>
              </div>
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                A growing team of 20+ engineers, designers, and product thinkers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Our People */}
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
                    Our People
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary">
                  The Minds Behind the Work
                </h2>
              </div>
            </div>
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
                Meet the builders, designers, and thinkers who turn complex business challenges into simple, digital outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
            {/* Team Member 1 - Wakas Bajwa */}
            <div className="rounded-[14px] overflow-hidden relative p-3 sm:p-4 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60A5FA] absolute right-0 top-0 z-10"
                width="22"
                height="22"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="bg-white rounded-[6px] overflow-hidden relative">
                <Image
                  src="https://www.allomate.com/storage/teams/wakas_bajwa_1756377027.png"
                  width={415}
                  height={415}
                  alt="Wakas Bajwa"
                  className="w-full h-auto sm:h-[350px] md:h-[390px] 2xl:h-[415px] object-cover object-center"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-[6px] shadow-md p-3 max-w-[300px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#60A5FA] absolute right-[2px] top-[2px] z-10"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <h3 className="text-base md:text-lg font-semibold text-[#000000] font-primary">
                    Wakas <span className="font-normal text-[#666666]">Bajwa</span>
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#666666]">Founder &amp; CEO</p>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Malik Ihsan Ali */}
            <div className="rounded-[14px] overflow-hidden relative p-3 sm:p-4 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60A5FA] absolute right-0 top-0 z-10"
                width="22"
                height="22"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="bg-white rounded-[6px] overflow-hidden relative">
                <Image
                  src="https://www.allomate.com/storage/teams/malik_ihsan_1756369733.webp"
                  width={415}
                  height={415}
                  alt="Malik Ihsan Ali"
                  className="w-full h-auto sm:h-[350px] md:h-[390px] 2xl:h-[415px] object-cover object-center"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-[6px] shadow-md p-3 max-w-[300px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#60A5FA] absolute right-[2px] top-[2px] z-10"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <h3 className="text-base md:text-lg font-semibold text-[#000000] font-primary">
                    Malik <span className="font-normal text-[#666666]">Ihsan Ali</span>
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#666666]">Non-Executive Director</p>
                </div>
              </div>
            </div>

            {/* Team Member 3 - Irfan Nabi */}
            <div className="rounded-[14px] overflow-hidden relative p-3 sm:p-4 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60A5FA] absolute right-0 top-0 z-10"
                width="22"
                height="22"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="bg-white rounded-[6px] overflow-hidden relative">
                <Image
                  src="https://www.allomate.com/storage/teams/irfan_nabi_1756375984.png"
                  width={415}
                  height={415}
                  alt="Irfan Nabi"
                  className="w-full h-auto sm:h-[350px] md:h-[390px] 2xl:h-[415px] object-cover object-center"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-[6px] shadow-md p-3 max-w-[300px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#60A5FA] absolute right-[2px] top-[2px] z-10"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <h3 className="text-base md:text-lg font-semibold text-[#000000] font-primary">
                    Irfan <span className="font-normal text-[#666666]">Nabi</span>
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#666666]">Senior Creative Designer</p>
                </div>
              </div>
            </div>

            {/* Team Member 4 - Faisal Farooq */}
            <div className="rounded-[14px] overflow-hidden relative p-3 sm:p-4 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60A5FA] absolute right-0 top-0 z-10"
                width="22"
                height="22"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="bg-white rounded-[6px] overflow-hidden relative">
                <Image
                  src="https://www.allomate.com/storage/teams/faisal_farooq_1756369662.webp"
                  width={415}
                  height={415}
                  alt="Faisal Farooq"
                  className="w-full h-auto sm:h-[350px] md:h-[390px] 2xl:h-[415px] object-cover object-center"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-[6px] shadow-md p-3 max-w-[300px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#60A5FA] absolute right-[2px] top-[2px] z-10"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <h3 className="text-base md:text-lg font-semibold text-[#000000] font-primary">
                    Faisal <span className="font-normal text-[#666666]">Farooq</span>
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#666666]">Team Lead Quality Assurance</p>
                </div>
              </div>
            </div>

            {/* Team Member 5 - Qammar Raza */}
            <div className="rounded-[14px] overflow-hidden relative p-3 sm:p-4 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60A5FA] absolute right-0 top-0 z-10"
                width="22"
                height="22"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="bg-white rounded-[6px] overflow-hidden relative">
                <Image
                  src="https://www.allomate.com/storage/teams/qammar_raza_1756301614.jpg"
                  width={415}
                  height={415}
                  alt="Qammar Raza"
                  className="w-full h-auto sm:h-[350px] md:h-[390px] 2xl:h-[415px] object-cover object-center"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-[6px] shadow-md p-3 max-w-[300px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#60A5FA] absolute right-[2px] top-[2px] z-10"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <h3 className="text-base md:text-lg font-semibold text-[#000000] font-primary">
                    Qammar <span className="font-normal text-[#666666]">Raza</span>
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#666666]">Full Stack Engineer</p>
                </div>
              </div>
            </div>

            {/* Team Member 6 - Ahsan Hameed */}
            <div className="rounded-[14px] overflow-hidden relative p-3 sm:p-4 glass-card-dark-transparent border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#60A5FA] absolute right-0 top-0 z-10"
                width="22"
                height="22"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>
              <div className="bg-white rounded-[6px] overflow-hidden relative">
                <Image
                  src="https://www.allomate.com/storage/teams/ahsan_hameed_1756369700.webp"
                  width={415}
                  height={415}
                  alt="Ahsan Hameed"
                  className="w-full h-auto sm:h-[350px] md:h-[390px] 2xl:h-[415px] object-cover object-center"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-[6px] shadow-md p-3 max-w-[300px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#60A5FA] absolute right-[2px] top-[2px] z-10"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>
                  <h3 className="text-base md:text-lg font-semibold text-[#000000] font-primary">
                    Ahsan <span className="font-normal text-[#666666]">Hameed</span>
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#666666]">Full Stack Engineer</p>
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

