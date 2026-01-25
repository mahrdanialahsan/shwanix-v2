import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Project data - can be moved to a separate file or fetched from an API
const projectData: Record<string, {
  category: string;
  title: string;
  description: string;
  websiteUrl: string;
  websiteText: string;
  scope: string;
  industry: string;
  solution: string;
  technology: string;
  image: string;
  largeImage: string;
  deliverables: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  galleryImages: string[];
  stats: Array<{
    value: string;
    unit: string;
    description: string;
  }>;
  closingImage: string;
  closingTitle: string;
  closingDescription: string;
}> = {
  "khan-law": {
    category: "LEGAL CRM & WORKFLOW AUTOMATION",
    title: "Legal CRM redefined for real-world practice",
    description: "Custom-built for Khan Law\nA complete legal CRM platform with automated client intake, sales pipeline, and document generation",
    websiteUrl: "https://www.khanllp.com",
    websiteText: "Visit Khan Law",
    scope: "Khan Law, a boutique law firm based in Canada, needed a smarter way to manage clients, cases, and documents. We designed a custom legal CRM with automated intake flows, a visual sales pipeline, and one-click document generation. The project also included a new SEO-driven website to boost visibility and capture qualified leads.",
    industry: "LegalTech",
    solution: "CRM System, Workflow Automation, SEO Website",
    technology: "Node.js, Laravel, MySQL",
    image: "https://cms.allomate.com/uploads/54051554c024e5834ca8ce860b39c17ece122ad3/Khan-Law-CRM.webp",
    largeImage: "https://cms.allomate.com/uploads/f3caab4e55c7def67fbe8cb9059786ec63f0abbd/Khan-Law-large.webp",
    galleryImages: [
      "https://cms.allomate.com/uploads/ce28bdf772b598ec888c4243fba0a1c47a1e3cd6/Khan-Law-04.webp",
      "https://cms.allomate.com/uploads/e89aaf2674ed9badb25fe9fc19e7f60c362b31f4/Khan-Law-3.webp",
    ],
    stats: [
      {
        value: "80",
        unit: "%",
        description: "Of manual tasks removed from the firm's daily workflow",
      },
      {
        value: "3",
        unit: "X",
        description: "Faster client onboarding with automated intake and tracking",
      },
      {
        value: "70",
        unit: "%",
        description: "Increase in qualified leads after launching the new website",
      },
    ],
    closingImage: "https://cms.allomate.com/uploads/266c81b3393e54da6ea3eb411ed8f7e04fab59d3/Khan-Law-7.webp",
    closingTitle: "Built for today. Ready for what's next.",
    closingDescription: "Khan Law now runs on a system designed for real legal work not workarounds. From the first intake form to the final document, everything is streamlined, automated, and measurable. This wasn't just a tech upgrade. It was a shift in how the firm operates, grows, and delivers value.",
    deliverables: [
      {
        number: "01",
        title: "Client Intake Automation",
        description: "We replaced paper forms and scattered emails with a digital intake process. It captures all client data, sends reminders, and feeds directly into the CRM with zero manual entry.",
      },
      {
        number: "02",
        title: "Custom Legal CRM",
        description: "We built a centralized CRM tailored for legal workflows. All clients, cases, documents, and notes are now organized, secure, and accessible from one place.",
      },
      {
        number: "03",
        title: "Visual Sales Pipeline",
        description: "The team can now track every potential client through a clear pipeline. Status stages, next actions, and priority flags help keep the focus where it matters.",
      },
      {
        number: "04",
        title: "Document Generation",
        description: "Common legal documents can now be created instantly. The system uses smart templates that auto-fill client data, reducing errors and saving valuable time.",
      },
      {
        number: "05",
        title: "Admin Dashboard",
        description: "Partners and managers can view case loads, track staff performance, and monitor client activity through a dedicated admin panel that surfaces the right data at the right time.",
      },
      {
        number: "06",
        title: "SEO-Driven Website",
        description: "We redesigned the website to reflect professionalism and authority. The new structure is optimized for search engines and built to convert visitors into qualified leads.",
      },
    ],
  },
  // Add more projects here as needed
};

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = projectData["khan-law"];

  // If project not found, show a 404 or redirect
  if (!project) {
    return (
      <div>
        <Navbar />
        <section className="py-5 md:py-10">
          <div className="container mx-auto px-3 sm:px-4 mt-20 sm:mt-24">
            <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center">
              <h1 className="text-[#2563EB] font-primary font-bold text-2xl mb-4">Project Not Found</h1>
              <Link
                href="/our-work"
                className="red-arrow-btn group bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold"
              >
                Back to Our Work
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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
                {project.category}
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#2563EB] mb-2">
              {project.title}
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] mb-3 sm:mb-5 md:mb-7 whitespace-pre-line">
              {project.description}
            </p>

            <a
              href={project.websiteUrl}
              title={project.websiteText}
              target="_blank"
              rel="noopener noreferrer"
              className="red-arrow-btn group bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold"
            >
              {project.websiteText}
            </a>
          </div>
        </div>
      </section>

      {/* Project Scope Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Content Card */}
            <div className="h-auto md:h-[670px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] p-5 flex flex-col justify-center relative hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#2563EB"
                viewBox="0 0 16 16"
                className="inline-flex plus-icon2 z-[10]"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
              </svg>

              <div className="flex flex-col justify-between h-full relative">
                <div className="inline-block">
                  <div className="font-primary inline-block bg-[#2563EB]/20 border border-[#2563EB]/30 backdrop-blur-[40px] text-white/70 text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-3 md:mb-5 uppercase tracking-[2px]">
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
                      Project Scope
                    </p>
                  </div>
                </div>

                <h2 className="font-primary text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
                  {project.scope}
                </h2>

                <div>
                  <div className="border-t border-white/25 flex flex-row justify-between py-2 md:py-4">
                    <p className="font-secondary font-normal text-sm text-[#8A8A8A]">Industry:</p>
                    <p className="font-secondary font-normal text-sm text-white">{project.industry}</p>
                  </div>

                  <div className="border-t border-white/25 flex flex-row justify-between py-2 md:py-4">
                    <p className="font-secondary font-normal text-sm text-[#8A8A8A]">Solution:</p>
                    <p className="font-secondary font-normal text-sm text-white">{project.solution}</p>
                  </div>

                  <div className="border-t border-white/25 flex flex-row justify-between py-2 md:py-4 pb-0">
                    <p className="font-secondary font-normal text-sm text-[#8A8A8A]">Technology:</p>
                    <p className="font-secondary font-normal text-sm text-white">{project.technology}</p>
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
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-[350px] sm:h-[570px] md:h-[670px] object-cover rounded-[6px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Full Width Image */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <figure>
            <Image
              width={800}
              height={800}
              src={project.largeImage}
              alt="Full Project Image"
              className="w-full h-[380px] md:h-full object-cover rounded-[6px]"
            />
          </figure>
        </div>
      </section>

      {/* Fourth Section - What We Delivered */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div>
            <div className="mb-4 md:mb-6">
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
                    What We Delivered
                  </p>
                </div>
                <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-2 flex">
                  Every moving part. Rebuilt and reconnected.
                </h2>
                <p className="font-secondary font-normal text-base text-[#8A8A8A] capitalize mb-3">
                  This was not a bundle of features. It was a fully connected system built to power the firm from intake to outcome.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="flex flex-col justify-center bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] p-4 md:p-7 rounded-[6px] transition duration-300 h-full hover:bg-[#1E293B] hover:border-[#2563EB]/40 group"
              >
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

                <h3 className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-[#2563EB] mb-2 md:mb-4 font-semibold font-primary transition-colors">
                  <span className="block text-lg sm:text-xl md:text-[22px] text-[#2563EB] font-semibold mb-1">
                    {deliverable.number}
                  </span>
                  {deliverable.title}
                </h3>

                <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] group-hover:text-white transition-colors">
                  {deliverable.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fifth Section - Gallery Images */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {project.galleryImages.map((image, index) => (
              <div key={index}>
                <figure>
                  <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-[350px] sm:h-[570px] md:h-[670px] object-cover rounded-[6px]"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixth Section - What Changed */}
      <section className="py-5 md:py-10 bg-[#0F172A] border border-[#2563EB]/10 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[15px] relative">
        <div className="container mx-auto px-3 sm:px-4 flex flex-col md:flex-row items-start md:items-start justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-4 sm:mb-10 md:mb-0">
            <div className="font-primary uppercase inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-3 tracking-[2px]">
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
                What Changed
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-primary text-[#2563EB]">
              Every number points to progress
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10 pt-10 lg:pt-32">
            {project.stats.map((stat, index) => (
              <div key={index} className="flex items-start">
                <div className="text-3xl font-medium mr-5 sm:mr-10 w-[75px] sm:w-[95px]">
                  <p className="text-[#2563EB]">
                    {stat.value}
                    <span className="text-[20px]">{stat.unit}</span>
                  </p>
                  <div className="text-[#2563EB] mt-2 pr-4 flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85"
                      height="16"
                      viewBox="0 0 85 16"
                      fill="currentColor"
                    >
                      <line
                        x1="0"
                        y1="8"
                        x2="75"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></line>
                      <path d="M75 4l6 4-6 4" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-white text-base">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seventh Section - Closing */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Image */}
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src={project.closingImage}
                  alt="Closing Image"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-[6px]"
                />
              </figure>
            </div>

            {/* Right Column - Content Card */}
            <div className="h-auto md:h-[600px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] p-5 flex flex-col justify-center hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="flex flex-col justify-between h-full relative">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#2563EB"
                    viewBox="0 0 16 16"
                    className="inline-flex plus-icon2 z-[10]"
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
                        Closing the Case
                      </p>
                    </div>
                  </div>

                  <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2563EB] font-primary mb-3 sm:mb-5 flex">
                    {project.closingTitle}
                  </h2>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3">
                    {project.closingDescription}
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact-us"
                    title="Let's Build Yours"
                    className="red-arrow-btn group mt-4 pr-10 bg-[#FACC15] text-[#000000] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold"
                  >
                    Let&apos;s Build Yours
                  </Link>
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

