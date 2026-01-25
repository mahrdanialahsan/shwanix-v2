import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function TheNextHorizon() {
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
                The Next Horizon
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#2563EB] mb-2">
              Nothing Stays the Same
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] mb-3 sm:mb-5 md:mb-7">
              Every age believes it will last forever. Yet history has never stood still. From the first seeds planted in the ground, to the steam that powered factories, to the code that connected billions — change has always been the only constant. The future is no different. What feels permanent today will be unrecognizable tomorrow.
            </p>

            <Link
              href="#"
              title="Read More"
              className="red-arrow-btn group bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section - The Story of Progress */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Content Card */}
            <div className="h-auto md:h-[600px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] p-5 flex flex-col justify-center hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="flex flex-col justify-between h-full relative">
                <div>
                 

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
                        The Story of Progress
                      </p>
                    </div>
                  </div>

                  <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-5 flex">
                    Change never asks for permission.
                  </h2>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3">
                    From fields to factories, from circuits to code, every leap has redrawn the map of business and society. The winners were those who adapted. The rest were left behind. Today, a new revolution is unfolding.
                    <br />
                    <br />
                  </p>

                  <ul className="list-none space-y-2 text-[#8A8A8A] mb-3 md:mb-5">
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      Farming increased food supply by more than <strong className="text-white">300%</strong>, giving rise to cities and economies
                    </li>
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      Steam and steel cut production costs by over <strong className="text-white">90%</strong>, creating mass markets and industries
                    </li>
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      The internet connected <strong className="text-white">7 billion+</strong> people in only three decades, shrinking the world overnight
                    </li>
                    <li className="relative pl-[28px] font-medium text-base before:content-[''] before:w-4 before:h-0.5 before:bg-[#2563EB] before:absolute before:left-0 before:top-2.5">
                      AI is expected to add <strong className="text-white">$15.7 trillion to global GDP by 2030</strong>, making intelligence the new resource
                    </li>
                  </ul>
                </div>

                <div></div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="https://cms.allomate.com/uploads/74575b4ecc173e7e32a92c79046d648e5c0f6a90/The-future-2.webp"
                  alt="The Future"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-[6px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Our Contention */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] p-[15px] md:p-10 transition-all duration-400 relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
           

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
                        Our Contention
                      </p>
                    </div>
                    <br />

                    <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-3 sm:mb-6 lg:mb-10">
                      The future won&apos;t be divided by tools, but by how we use them.
                    </h2>

                    <div className="mb-3 md:mb-8 lg:mb-16">
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
                        Every revolution creates more than tools. It creates a new way of living. What we believe is simple. <strong className="text-white">AI will not just replace jobs. It will rewrite the very idea of work itself.</strong> Businesses will no longer be measured by how many people they employ. They will be measured by how intelligently they can act, how quickly they can adapt, and how responsibly they can scale. Studies suggest that <strong className="text-white">375 million workers worldwide may need to shift occupations by 2030 because of automation.</strong>
                      </p>

                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6">
                        In this shift, <strong className="text-white">humans will matter more, not less.</strong> Not as operators but as orchestrators. Not as doers of routine but as designers of meaning. Machines will process, but humans will interpret. Algorithms will optimize, but humans will decide what is worth optimizing. The future will belong to those who bring wisdom into intelligence, who can see connections where others see fragments, and who can give technology its soul. Already, <strong className="text-white">nine out of ten executives believe AI will create more value than the internet itself.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 md:gap-10 mt-5">
                    {/* Business Redefined */}
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/9d8fa38afde8c0ed00941707848cf780daa4e96d/cooperation.svg"
                            width={20}
                            height={20}
                            alt="Business Redefined Icon"
                            className="w-[28px] h-[28px] opacity-90 mr-2.5"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] md:text-lg text-[#2563EB] font-primary font-semibold">
                          Business Redefined
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
                        A single person with AI can achieve what once took a thousand. By 2030, <strong className="text-white">70% of new businesses may be born digital-first.</strong>
                      </p>
                    </div>

                    {/* Work Transformed */}
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/c0ab4ee21f05aa90db4db419789aff7f1816e0c3/idea-2.svg"
                            width={20}
                            height={20}
                            alt="Work Transformed Icon"
                            className="w-[28px] h-[28px] opacity-90 mr-2.5"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] md:text-lg text-[#2563EB] font-primary font-semibold">
                          Work Transformed
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
                        Roles dissolve. Humans move from tasks to vision. Today, <strong className="text-white">60% of workers already use AI tools in daily tasks.</strong>
                      </p>
                    </div>

                    {/* Trust Matters */}
                    <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
                      <div className="flex items-center mb-2 md:mb-3">
                        <figure>
                          <Image
                            src="https://cms.allomate.com/uploads/1dc18bf5a3bb7738220f2389b085696a69979acf/collaboration.svg"
                            width={20}
                            height={20}
                            alt="Trust Matters Icon"
                            className="w-[28px] h-[28px] opacity-90 mr-2.5"
                            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                          />
                        </figure>
                        <h3 className="text-[18px] md:text-lg text-[#2563EB] font-primary font-semibold">
                          Trust Matters
                        </h3>
                      </div>
                      <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize">
                        Machines can decide. Only humans can make it meaningful. <strong className="text-white">Over 80% of consumers say trust is the deciding factor in choosing a brand.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Future Technologies */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="space-y-5">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-5">
              {/* Quantum Power Card - 7/12 width */}
              <div className="w-full sm:w-full md:w-7/12">
                <div className="bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[40px] rounded-[6px] p-4 md:p-7 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
                  

                  <div className="mb-2 md:mb-4">
                    <figure>
                      <Image
                        width={350}
                        height={350}
                        src="https://cms.allomate.com/uploads/09c173a635039afd8fa780793122b98696b622cf/quantum-computing.svg"
                        alt="Quantum Power Icon"
                        className="w-[38px] md:w-[46px] h-[38px] md:h-[46px] opacity-90"
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                      />
                    </figure>
                  </div>

                  <h2 className="font-primary text-xl md:text-2xl font-semibold text-[#2563EB] mb-2">
                    Quantum Power
                  </h2>

                  <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                    By the early 2030s, quantum computing could break today&apos;s encryption in seconds, forcing entire industries to rebuild trust and security from the ground up. Financial systems, healthcare records, and national security will all be exposed in ways we have never faced before. At the same time, quantum will unlock solutions once thought impossible, from curing diseases to simulating climate change. It will be both the greatest risk and the greatest breakthrough of our age.
                  </p>
                </div>
              </div>

              {/* Edge Acceleration Card - 5/12 width */}
              <div className="w-full sm:w-full md:w-5/12">
                <div className="bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[40px] rounded-[6px] p-4 md:p-7 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
                  <div className="mb-2 md:mb-4">
                    
                    <figure>
                      <Image
                        width={350}
                        height={350}
                        src="https://cms.allomate.com/uploads/8ce76f570091d159a6d86c3710b262d42d84a7ad/local-area.svg"
                        alt="Edge Acceleration Icon"
                        className="w-[38px] md:w-[46px] h-[38px] md:h-[46px] opacity-90"
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                      />
                    </figure>
                  </div>

                  <h2 className="font-primary text-xl md:text-2xl font-semibold text-[#2563EB] mb-2">
                    Edge Acceleration
                  </h2>

                  <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                    With 75 billion connected devices expected by 2025, data will move closer to the source. Decisions will be made in real time, whether in factories, hospitals, or autonomous vehicles. Speed will not just be an advantage. It will become the foundation of survival.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-5">
              {/* Energy Demands Card - 5/12 width */}
              <div className="w-full sm:w-full md:w-5/12">
                <div className="bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[40px] rounded-[6px] p-4 md:p-7 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
                  

                  <div className="mb-2 md:mb-4">
                    <figure>
                      <Image
                        width={350}
                        height={350}
                        src="https://cms.allomate.com/uploads/f8cd562252d19d9ec1eebf365b96e5c155825d84/demand.svg"
                        alt="Energy Demands Icon"
                        className="w-[38px] md:w-[46px] h-[38px] md:h-[46px] opacity-90"
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                      />
                    </figure>
                  </div>

                  <h2 className="font-primary text-xl md:text-2xl font-semibold text-[#2563EB] mb-2">
                    Energy Demands
                  </h2>

                  <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                    Data centers already consume two percent of global electricity. As intelligence and connectivity expand, this number will climb. The future of business will not be measured only in growth. It will be measured in how responsibly that growth consumes resources. Sustainability will no longer be optional.
                  </p>
                </div>
              </div>

              {/* Cyber Resilience Card - 7/12 width */}
              <div className="w-full sm:w-full md:w-7/12">
                <div className="bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[40px] rounded-[6px] p-4 md:p-7 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:bg-[#1E293B] hover:border-[#2563EB]/40">
                  

                  <div className="mb-2 md:mb-4">
                    <figure>
                      <Image
                        width={350}
                        height={350}
                        src="https://cms.allomate.com/uploads/a80c513f8f4a3ec4b2e17e32d0a4fa216938e0f0/cyber-resilience.svg"
                        alt="Cyber Resilience Icon"
                        className="w-[38px] md:w-[46px] h-[38px] md:h-[46px] opacity-90"
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                      />
                    </figure>
                  </div>

                  <h2 className="font-primary text-xl md:text-2xl font-semibold text-[#2563EB] mb-2">
                    Cyber Resilience
                  </h2>

                  <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                    Cybercrime is projected to cost the world 10.5 trillion dollars annually by 2025. In a machine-driven age, every organization is only as strong as its defenses. The question is not if systems will be tested. It is how resilient they will be when the test arrives. Trust will decide who survives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Where We Stand */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Image */}
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="https://cms.allomate.com/uploads/deac49927ee496144fc80de450b80475ba42c1ac/The-future-3.webp"
                  alt="The Future"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-[6px]"
                />
              </figure>
            </div>

            {/* Right Column - Content Card */}
            <div className="h-auto md:h-[600px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] p-5 flex flex-col justify-center hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="flex flex-col justify-between h-full relative">
                <div>
                 

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
                        Where We Stand
                      </p>
                    </div>
                  </div>

                  <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-5 flex">
                    We cannot predict every turn, but we can prepare with clarity.
                  </h2>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3">
                    At Allomate, we do not claim to shape the future. We claim to see it with open eyes. Our mission is not to hype technology. It is to translate it into meaning for businesses, leaders, and societies. To us, being future ready is not about tools. It is about mindset.
                    <br />
                    <br />
                    We stand as interpreters between complexity and clarity. As builders of systems that serve people, not the other way around. Our role is not to control what comes next. Our role is to help others step into it with confidence and responsibility.
                    <br />
                    <br />
                    Nothing stays the same. Every revolution tests us. The future will belong to those who adapt with wisdom and integrity. That is the work we choose. That is where we stand.
                  </p>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

