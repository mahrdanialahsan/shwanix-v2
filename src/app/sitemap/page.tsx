import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Sitemap() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
            <div className="font-primary inline-block bg-[#0F172A] border border-[#60A5FA]/30 backdrop-blur-[20px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-4 lg:mb-5 uppercase tracking-[2px]">
              <p className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex"
                  width="22"
                  height="22"
                  fill="#60A5FA"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                Site Map
              </p>
            </div>

            <h1 className="!leading-[1.2] text-2xl md:text-3xl lg:text-[40px] font-bold text-white font-primary mb-1.5 md:mb-4">
              Explore Our Website
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
              Our sitemap is designed to help you quickly navigate and find the information you&apos;re looking for.
              Browse through the main sections, services, and resources available on our website to easily
              access the content that matters most to you.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-area m-auto list-none [&_ul]:mt-4 [&_li]:relative [&_li]:pl-7 [&_li]:mb-1.5 [&_li::before]:content-[''] [&_li::before]:bg-[#60A5FA] [&_li::before]:w-4 [&_li::before]:h-[1px] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-[10px] [&_li::before]:text-2xl pb-3 md:pb-6">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="bg-[#0F172A] border border-[#60A5FA]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] rounded-[6px] backdrop-blur-[30px] p-[20px] sm:p-[30px] w-full relative">
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

            <div className="grid grid-cols-12 gap-3 sm:gap-5">
              {/* General Pages */}
              <div className="group col-span-12 lg:col-span-3">
                <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mb-4">
                  General Pages
                </h2>
                <ul className="mt-4">
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/terms-of-use" title="Terms of Use" className="text-white hover:text-[#60A5FA] transition-colors">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/privacy-policy" title="Privacy Policy" className="text-white hover:text-[#60A5FA] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/" title="Home" className="text-white hover:text-[#60A5FA] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/career" title="Career" className="text-white hover:text-[#60A5FA] transition-colors">
                      Career
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/about-us" title="About Us" className="text-white hover:text-[#60A5FA] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-team" title="Our Team" className="text-white hover:text-[#60A5FA] transition-colors">
                      Our Team
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/the-next-horizon" title="The Next Horizon" className="text-white hover:text-[#60A5FA] transition-colors">
                      The Next Horizon
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/sell360-sales-platform" title="SELL360 Sales Platform" className="text-white hover:text-[#60A5FA] transition-colors">
                      SELL360 Sales Platform
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Our Services */}
              <div className="group col-span-12 lg:col-span-3">
                <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mb-4">
                  Our Services
                </h2>
                <ul className="mt-4">
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/services/web-and-mobile-development" title="Web And Mobile Development" className="text-white hover:text-[#60A5FA] transition-colors">
                      Web And Mobile Development
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/services/enterprise-solutions" title="Enterprise Solutions" className="text-white hover:text-[#60A5FA] transition-colors">
                      Enterprise Solutions
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/services/mvp-design-and-development" title="MVP Design & Development" className="text-white hover:text-[#60A5FA] transition-colors">
                      MVP Design &amp; Development
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/services/quality-assurance" title="Quality Assurance" className="text-white hover:text-[#60A5FA] transition-colors">
                      Quality Assurance
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/services/ai-and-automation" title="AI and Automation" className="text-white hover:text-[#60A5FA] transition-colors">
                      AI and Automation
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/services/dedicated-teams" title="Dedicated Team" className="text-white hover:text-[#60A5FA] transition-colors">
                      Dedicated Team
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Our Work */}
              <div className="group col-span-12 lg:col-span-3">
                <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mb-4">
                  Our Work
                </h2>
                <ul className="mt-4">
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/khan-law" title="Khan Law" className="text-white hover:text-[#60A5FA] transition-colors">
                      Khan Law
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/smoknic" title="Smoknic" className="text-white hover:text-[#60A5FA] transition-colors">
                      Smoknic
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/bni-inks" title="Bni Inks" className="text-white hover:text-[#60A5FA] transition-colors">
                      Bni Inks
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/disposable-vaping" title="Disposable Vaping" className="text-white hover:text-[#60A5FA] transition-colors">
                      Disposable Vaping
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/psl" title="Pakistan Sign Langugae" className="text-white hover:text-[#60A5FA] transition-colors">
                      Pakistan Sign Langugae
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/vape-suite" title="Vape Suite" className="text-white hover:text-[#60A5FA] transition-colors">
                      Vape Suite
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/source-code-academia" title="Source Code Academia" className="text-white hover:text-[#60A5FA] transition-colors">
                      Source Code Academia
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/danpak" title="Danpak" className="text-white hover:text-[#60A5FA] transition-colors">
                      Danpak
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/iron-horse-residential" title="Iron Horse Residential" className="text-white hover:text-[#60A5FA] transition-colors">
                      Iron Horse Residential
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/al-khair-distribution" title="Al Khair Distribution" className="text-white hover:text-[#60A5FA] transition-colors">
                      Al Khair Distribution
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/green-earth-recyling" title="Green Earth Recyling" className="text-white hover:text-[#60A5FA] transition-colors">
                      Green Earth Recyling
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/astorion" title="Astorion" className="text-white hover:text-[#60A5FA] transition-colors">
                      Astorion
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/masaj" title="Masaj" className="text-white hover:text-[#60A5FA] transition-colors">
                      Masaj
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/picpax" title="PicPax" className="text-white hover:text-[#60A5FA] transition-colors">
                      PicPax
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/h-shippers" title="H Shippers" className="text-white hover:text-[#60A5FA] transition-colors">
                      H Shippers
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/our-work/pocket-help" title="Pocket Help" className="text-white hover:text-[#60A5FA] transition-colors">
                      Pocket Help
                    </Link>
                  </li>
                </ul>
              </div>

              {/* BLOGS */}
              <div className="group col-span-12 lg:col-span-3">
                <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mb-4">
                  <Link href="/blogs" title="BLOGS" className="text-[#60A5FA] hover:text-[#60A5FA] transition-colors">
                    BLOGS
                  </Link>
                </h2>
                <ul className="mt-4">
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/blogs/blog-details/ai-voice-agents-the-475-billion-revolution-in-customer-experience" title="Ai voice agents: the $47.5 billion revolution in customer experience" className="text-white hover:text-[#60A5FA] transition-colors">
                      Ai voice agents: the $47.5 billion revolution in customer experience
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/blogs/blog-details/ai-voice-agents-in-retail-hospitality-the-conversational-concierge" title="Ai voice agents in retail & hospitality: the conversational concierge" className="text-white hover:text-[#60A5FA] transition-colors">
                      Ai voice agents in retail &amp; hospitality: the conversational concierge
                    </Link>
                  </li>
                  <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                    <Link href="/blogs/blog-details/ai-voice-agents-for-smbs" title="Ai voice agents for smbs: the 24/7 virtual receptionist" className="text-white hover:text-[#60A5FA] transition-colors">
                      Ai voice agents for smbs: the 24/7 virtual receptionist
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

