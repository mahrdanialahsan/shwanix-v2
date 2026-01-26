'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Service data - can be moved to a separate file or fetched from an API
const serviceData: Record<string, {
  category: string;
  title: string;
  description: string;
  problemTitle: string;
  problemDescription: string;
  promiseTitle: string;
  promiseDescription: string;
  heroImage: string;
  promiseImage: string;
  methods: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  industries: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  securityTitle: string;
  securityDescription: string;
  securityFeatures: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  securityImage: string;
  engagementModels: Array<{
    title: string;
    description: string;
    icon: string;
    marginTop: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}> = {
  "enterprise-solutions": {
    category: "Enterprise Solutions",
    title: "Enterprise Solutions for Digital Transformation",
    description: "From Complexity to Clarity.\n\nEnterprises run on fractured systems. We unify them into secure, scalable platforms that bring clarity, speed, and measurable ROI. Decisions in minutes, not days.",
    problemTitle: "Complexity Creates Blind Spots",
    problemDescription: "In high-stakes missions, what you cannot see becomes the greatest risk.\n\nEnterprises face the same challenge. Systems multiply. Data scatters. Truth gets lost in translation. Leaders are left making decisions with half the picture. Complexity does not just slow you down. It makes every move riskier, every opportunity harder to grasp, and every step forward more uncertain.",
    promiseTitle: "Clarity Feels Like This",
    promiseDescription: "When systems connect and truth is visible, leadership becomes simple and growth feels inevitable.\n\nWe replace complexity with clarity. One source of truth. One view of your business. One system that scales as you grow. Every build is first-time-right, secure by design, and measured by business outcomes. That means leaders make decisions with confidence, teams work with focus, and enterprises move forward without hesitation.",
    heroImage: "https://cms.allomate.com/uploads/e66c97ac9b3835de3d4f25a3d7add988bdc5ebc3/wakaaz_Midnight_Blue_color_with_Vermilion_color_as_a_secondar_e4befa9c-62e3-4ec3-a029-f75df0831525_2.webp",
    promiseImage: "https://cms.allomate.com/uploads/92afda5172a17ebbeb3c9db48cfd58c8addb8fe6/Our-Promise.webp",
    methods: [
      {
        title: "Design",
        description: "Architecture with foresight. We map systems, users, and growth from the start so every decision builds toward scale.",
        icon: "https://cms.allomate.com/uploads/0cbfde6a8dfeb060463205899275cd2214a76fae/structure.svg",
      },
      {
        title: "Build",
        description: "Custom applications and integrations that fit your enterprise. Delivered without disruption so teams keep moving forward.",
        icon: "https://cms.allomate.com/uploads/299aae9428061c43a94336357d60c3d02a5207fc/creativity.svg",
      },
      {
        title: "Secure",
        description: "Protection from day one. Encryption, access control, and governance baked in to safeguard reputation and trust.",
        icon: "https://cms.allomate.com/uploads/59b15a3b430499e26f7eb3ca026ec22532863999/protection.svg",
      },
      {
        title: "Improve",
        description: "Post-launch is just the beginning. We monitor, refine, and optimize continuously so your systems keep pace with your growth.",
        icon: "https://cms.allomate.com/uploads/9cd5c6eb0999e14f2ca1a4ac032af94363617b1b/improve.svg",
      },
    ],
    industries: [
      {
        title: "FMCG & Distribution",
        description: "30%+ YoY sales growth delivered. We digitize sales and distribution networks so leaders gain daily visibility, field teams move faster, and decisions shift from guesswork to facts.",
        icon: "https://cms.allomate.com/uploads/f3339662476fec39b666d65806de8eaa31e35b52/resource-allocation.svg",
      },
      {
        title: "Retail & eCommerce",
        description: "70% increase in online order efficiency. We build platforms that merge payments, logistics, and customer experience, helping stores scale subscriptions and keep customers loyal.",
        icon: "https://cms.allomate.com/uploads/bff9a0521debe6d2337eabd5c337fecd004e4af5/retailer.svg",
      },
      {
        title: "Real Estate & PropTech",
        description: "40% faster property onboarding. Our multi-tenant platforms simplify compliance and financial workflows so investors get transparency, managers gain control, and growth becomes predictable.",
        icon: "https://cms.allomate.com/uploads/cd23a56b81256350930a3a8671a239f9ba034785/proptech.svg",
      },
      {
        title: "Legal & Professional Services",
        description: "70% faster lead-to-case conversion. Case management CRMs that automate intake and streamline workflows, giving firms back their time so lawyers can focus on clients, not admin.",
        icon: "https://cms.allomate.com/uploads/0842435680d5069cb3be5dad293f55d6eb8a1e01/planning-(1).svg",
      },
      {
        title: "Healthcare & Pharma",
        description: "50% reduction in patient order errors. From chronic medication to on-demand delivery, our platforms balance compliance with care, ensuring secure and accurate patient services.",
        icon: "https://cms.allomate.com/uploads/46003e3fe7d032fbe54695de2a524aed0ae743ff/dash.svg",
      },
      {
        title: "Education & eLearning",
        description: "3x improvement in engagement tracking. We design platforms that connect teachers, students, and parents, making enrollments, progress, and outcomes visible in one place.",
        icon: "https://cms.allomate.com/uploads/1e3275d6cf97c5a59dd339c71a514884f705c98f/training.svg",
      },
      {
        title: "Logistics & Last Mile",
        description: "60% faster delivery reconciliation. Courier and delivery platforms that manage first mile to last mile in real time so businesses deliver faster and get paid sooner.",
        icon: "https://cms.allomate.com/uploads/52c30558dbe49d2c1fb265502ae7c1395ece13b4/delivery.svg",
      },
      {
        title: "Manufacturing & Export",
        description: "25% savings in container optimization. Export tools that calculate volume, manage inventory, and streamline shipments so factories move products efficiently from floor to port.",
        icon: "https://cms.allomate.com/uploads/89343035d7b524444a60752a0b363c3e6e488614/industry-40.svg",
      },
      {
        title: "Hospitality & Services",
        description: "40% reduction in booking errors. Booking and billing systems that make service effortless, give enterprises operational control, and create smoother customer experiences.",
        icon: "https://cms.allomate.com/uploads/eebc2369e293d54684522449b8e1e64eecfa7860/hospital-building.svg",
      },
    ],
    securityTitle: "Security By Design, Always",
    securityDescription: "In the enterprise world, trust is non-negotiable. That is why we embed security at every stage - from architecture to launch. Encryption, access control, and full audit trails are not add-ons. They are the foundation of every system we build.",
    securityFeatures: [
      {
        title: "Lasting Protection",
        description: "Security that endures beyond launch. From encryption to governance, your systems are built to protect reputation and trust.",
        icon: "https://cms.allomate.com/uploads/f52669f81bfe327679f28b0e19cbe36ede354957/security.svg",
      },
      {
        title: "Purposeful Compliance",
        description: "Regulatory needs are met without slowing your business. Access control and audit trails keep every operation accountable.",
        icon: "https://cms.allomate.com/uploads/385e562322fe3eaae734febcd662047128a253dd/insurance.svg",
      },
    ],
    securityImage: "https://cms.allomate.com/uploads/69ee84e7ab06e3634c401ac58e140839a040849a/Data-Security.webp",
    engagementModels: [
      {
        title: "Build Together",
        description: "We lead the project with clear direction while working side by side with your team. Knowledge transfer is built into every step so your people gain capability, not just a finished system. This model is ideal if you want to grow internal strength while delivering outcomes fast.",
        icon: "https://cms.allomate.com/uploads/1a38a9b9df7288b20b6ba7501068aa0d9f8e8930/together.svg",
        marginTop: "mt-0 md:mt-20 lg:mt-[100px]",
      },
      {
        title: "Build With Us",
        description: "Our experts embed directly into your IT teams. You gain immediate capacity, specialized skills, and enterprise delivery experience without the delays of long recruitment cycles. We blend into your workflow, accelerate delivery, and strengthen your existing team.",
        icon: "https://cms.allomate.com/uploads/1b646eddf2a5b93b2a4e36e5a00898d9b89c4971/problem-solving.svg",
        marginTop: "mt-0 md:mt-10 lg:mt-[50px]",
      },
      {
        title: "We Build For You",
        description: "We take full ownership of scope, delivery, and results. This model gives you defined outcomes, clear acceptance criteria, and measurable business impact. You get predictability and accountability while we manage the complexity behind the scenes.",
        icon: "https://cms.allomate.com/uploads/cc03e6f970bef01b57c23114a2a0f75a6c9d9251/team.svg",
        marginTop: "mt-0 md:mt-0",
      },
    ],
    faqs: [
      {
        question: "How do you ensure enterprise projects are delivered first-time-right?",
        answer: "We start with deep discovery and align builds to business metrics, not just technical requirements. Each sprint ends with a demo and test report. This way, issues are caught early and projects stay on track without costly rework.",
      },
      {
        question: "Can you integrate with our existing ERP, CRM, or legacy systems?",
        answer: "Yes. Integration is a core part of our approach. We use API contracts, sandbox environments, and phased rollouts so existing systems remain stable. Our goal is zero disruption while new capabilities come online.",
      },
      {
        question: "How do you measure ROI on enterprise solutions?",
        answer: "Every project is linked to clear KPIs such as faster reporting, reduced costs, increased sales, or stronger compliance. For example, we've delivered 30%+ year-over-year growth for FMCG distribution networks and 70% faster lead-to-case conversion for legal firms.",
      },
      {
        question: "What steps do you take to protect enterprise data and compliance?",
        answer: "Security is built in from day one. All solutions include encryption at rest and in transit, role-based access, audit trails, and stress testing. This ensures operations remain compliant without slowing down the business.",
      },
      {
        question: "What engagement options do you offer for enterprises with different needs?",
        answer: "You can choose how you want to work with us. Build Together for shared ownership, Build With Us to extend your IT teams, or We Build For You for defined outcomes. All models include SLAs, governance, and measurable results.",
      },
    ],
  },
  // Add more services here as needed
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // If service not found, show a 404 or redirect
  if (!service) {
    return (
      <div>
        <Navbar />
        <section className="py-5 md:py-10">
          <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
            <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center">
              <h1 className="text-white font-primary font-bold text-2xl mb-4">Service Not Found</h1>
              <Link
                href="/"
                className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
              >
                Back to Home
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
        <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
            <div className="font-primary inline-flex items-center justify-center glass-card-dark text-[#60A5FA] text-[11px] rounded-[12px] pr-4 pl-2 py-1.5 mb-6 uppercase tracking-[2px]">
              <p className="flex items-center justify-center gap-2">
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
                {service.category}
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-white mb-4 sm:mb-6">
              {service.title}
            </h1>

            <p className="font-secondary font-medium text-sm sm:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 whitespace-pre-line leading-relaxed">
              <span className="text-[20px] text-white font-bold">
                {service.description.split('\n\n')[0]}
              </span>
              <br />
              <br />
              {service.description.split('\n\n').slice(1).join('\n\n')}
            </p>

            <Link
              href="/contact-us"
              title="Start the Conversation"
              className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section - The Problem */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#2563EB"
              viewBox="0 0 16 16"
              className="inline-flex plus-icon1 z-[10]"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>

            <figure>
              <Image
                width={1000}
                height={1000}
                src={service.heroImage}
                alt="Service Hero Image"
                className="w-full h-[380px] sm:h-[450px] md:h-[600px] lg:h-[800px] object-cover rounded-[6px]"
              />
            </figure>

            <div className="absolute bottom-[30px] left-0 sm:left-[10px] md:left-[30px] w-full sm:w-[50%] lg:w-[35%] p-3 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 rounded-[14px]">
              <div className="min-h-[250px] md:min-h-[300px] flex flex-col justify-between items-start">
                <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-3 md:mb-5 uppercase tracking-[2px]">
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
                    THE PROBLEM
                  </p>
                </div>

                <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-5 flex">
                  {service.problemTitle}
                </h2>

                <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 md:mb-6 whitespace-pre-line">
                  <span className="text-white font-bold">
                    {service.problemDescription.split('\n\n')[0]}
                  </span>
                  <br />
                  <br />
                  {service.problemDescription.split('\n\n').slice(1).join('\n\n')}
                </p>

                <Link
                  href="/contact-us"
                  title="Fix Complexity"
                  className="red-arrow-btn group mt-4 pr-10 bg-white text-[#0F172A] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
                >
                  Fix Complexity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Our Promise */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Image */}
            <div>
              <figure>
                <Image
                  width={500}
                  height={500}
                  src={service.promiseImage}
                  alt="Our Promise Image"
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
                    fill="#60A5FA"
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
                          fill="#60A5FA"
                          viewBox="0 0 16 16"
                          className="inline-flex"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                        Our Promise
                      </p>
                    </div>
                  </div>

                  <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2563EB] font-primary mb-3 sm:mb-5 flex">
                    {service.promiseTitle}
                  </h2>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3 whitespace-pre-line">
                    <span className="text-white">
                      {service.promiseDescription.split('\n\n')[0]}
                    </span>
                    <br />
                    <br />
                    {service.promiseDescription.split('\n\n').slice(1).join('\n\n')}
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact-us"
                    title="Let's Talk"
                    className="red-arrow-btn group mt-4 pr-10 bg-white text-[#0F172A] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Our Method */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center mb-4">
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
                    Our Method
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary flex">
                  How We Deliver Clarity
                </h2>
              </div>
            </div>
            <div className="group col-span-12 sm:col-span-6 lg:col-span-4">
              <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                Every enterprise build rests on four principles. Together they turn risk into resilience and complexity into clarity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
            {service.methods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-[6px] p-4 md:p-6 transition-all duration-400 flex flex-col flex-wrap content-baseline h-full relative hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#60A5FA"
                  viewBox="0 0 16 16"
                  className="inline-flex plus-icon2"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>

                <div className="flex mb-3">
                  <figure>
                    <Image
                      src={method.icon}
                      width={50}
                      height={50}
                      alt={`${method.title} Icon`}
                      className="w-[28px] h-[28px] mr-2.5"
                      style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                    />
                  </figure>
                  <h3 className="text-lg sm:text-xl md:text-[22px] text-[#2563EB] font-semibold font-primary">
                    {method.title}
                  </h3>
                </div>

                <p className="font-secondary font-normal text-sm sm:text-base text-[#000000]/80">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fifth Section - Industries Served */}
      <section className="py-5 md:py-10 flex items-center">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="flex flex-col justify-center m-auto w-full">
            <div className="flex items-center justify-center text-center w-full md:w-[70%] xl:w-[50%] m-auto mb-4 md:mb-6 lg:mb-10">
              <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center relative">
                <div className="group col-span-12">
                  <div className="inline-block">
                    <div className="font-primary inline-flex items-center justify-center glass-card-dark text-[#60A5FA] text-[11px] rounded-[12px] pr-4 pl-2 py-1.5 mb-6 uppercase tracking-[2px]">
                      <p className="flex items-center justify-center gap-2">
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
                        Industries Served
                      </p>
                    </div>
                    <br />
                    <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] leading-none font-primary font-bold text-[#2563EB] mb-2">
                      Where We Make Impact
                    </h2>
                    <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                      Every industry has its own complexity. We bring clarity and measurable outcomes to each one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {service.industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] p-[20px] md:p-[30px] mb-0 transition-all duration-300 ease-in-out flex flex-col content-baseline h-full hover:-mt-[10px] hover:shadow-[0px_12px_20px_0px_rgba(37,99,235,0.1)] hover:bg-[#1E293B] hover:border-[#2563EB]/40 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="inline-flex plus-icon2"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>

                  <div className="mb-6 flex">
                    <figure>
                      <Image
                        width={30}
                        height={30}
                        src={industry.icon}
                        alt={`${industry.title} Icon`}
                        className="w-[30px] h-[30px]"
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                      />
                    </figure>
                  </div>

                  <h3 className="text-base sm:text-xl font-semibold text-white font-primary mb-1">
                    {industry.title}
                  </h3>

                  <p className="font-secondary font-normal text-sm sm:text-base text-white">
                    {industry.description.includes('.') ? (
                      <>
                        <strong>{industry.description.split('.')[0]}.</strong>{' '}
                        {industry.description.split('.').slice(1).join('.').trim()}
                      </>
                    ) : (
                      industry.description
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - Trust First */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Left Column - Content Card */}
            <div className="h-auto md:h-[600px] min-h-[450px] bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] rounded-[6px] p-5 flex flex-col justify-center hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="flex flex-col justify-between h-full relative">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
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
                          fill="#60A5FA"
                          viewBox="0 0 16 16"
                          className="inline-flex"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                        Trust First
                      </p>
                    </div>
                  </div>

                  <h2 className="leading-none capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-primary mb-3 sm:mb-5 flex">
                    {service.securityTitle}
                  </h2>

                  <p className="font-secondary font-normal text-sm md:text-base text-[#8A8A8A] capitalize mb-3">
                    {service.securityDescription}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-12 gap-3 sm:gap-4">
                    {service.securityFeatures.map((feature, index) => (
                      <div key={index} className="group col-span-12 sm:col-span-6">
                        <div className="flex items-center mb-2 md:mb-3">
                          <figure>
                            <Image
                              src={feature.icon}
                              width={20}
                              height={20}
                              alt={`${feature.title} Icon`}
                              className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] opacity-50 mr-2"
                              style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                            />
                          </figure>
                          <h3 className="text-lg text-white font-primary">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="font-secondary font-normal text-sm text-[#8A8A8A] mb-3 md:mb-5">
                          {feature.description}
                        </p>
                      </div>
                    ))}
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
                  src={service.securityImage}
                  alt="Data Security Image"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-[6px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - How We Engage With You */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="mb-4 w-full sm:w-3/5 xl:w-[30%]">
            <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary mb-1 md:mb-2 lg:mb-3">
              How We Engage With You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {service.engagementModels.map((model, index) => (
              <div key={index} className={model.marginTop}>
                <div className="bg-[#0F172A] border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] hover:bg-[#1E293B] hover:border-[#2563EB]/40 transition rounded-[6px] p-4 md:p-8 flex flex-col relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#60A5FA"
                    viewBox="0 0 16 16"
                    className="inline-flex plus-icon2"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                  </svg>

                  <div className="mb-2 sm:mb-[15px]">
                    <figure>
                      <Image
                        width={50}
                        height={50}
                        src={model.icon}
                        alt={`${model.title} Icon`}
                        className="w-[38px] md:w-[50px] h-[38px] md:h-[50px]"
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(0deg)' }}
                      />
                    </figure>
                  </div>

                  <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-2 md:mb-4 font-semibold font-primary">
                    {model.title}
                  </h3>

                  <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eighth Section - FAQ */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            {/* Left Column - Header */}
            <div className="group col-span-12 sm:col-span-5">
              <div>
                <div className="inline-block">
                  <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 backdrop-blur-[40px] text-white/70 text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-3 md:mb-5 uppercase tracking-[2px]">
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
                      FAQ
                    </p>
                  </div>

                  <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] font-primary mb-2 flex">
                    Frequently Asked Question
                  </h2>

                  <p className="font-secondary capitalize font-normal text-sm sm:text-base text-[#8A8A8A] mb-3">
                    Got questions? We&apos;ve got answers. Here&apos;s everything you need to know about working with us
                  </p>

                  <Link
                    href="/contact-us"
                    title="Get In Touch"
                    className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] w-max px-4 flex items-center justify-center hover:px-6 focus:px-7 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ List */}
            <div className="group col-span-12 sm:col-span-7">
              <div className="space-y-2 faqs-list">
                {service.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="faq-item text-left bg-[#0F172A] border border-[#2563EB]/20 backdrop-blur-[40px] rounded-[6px] transition hover:bg-[#1E293B] hover:border-[#2563EB]/40"
                  >
                    <button
                      className="rounded-[6px] faq-question flex items-center justify-between w-full px-4 py-3 text-sm sm:text-base text-left focus:outline-none"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      <h2 className="font-primary text-lg sm:text-xl text-white">
                        {faq.question}
                      </h2>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 text-white ${
                          openFaqIndex === index ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`faq-content font-secondary font-normal text-sm sm:text-base text-[#8A8A8A] overflow-hidden transition-all duration-300 ${
                        openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 pb-3">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
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

