'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blogContent = `
    <p>The way we build and scale software is changing faster than ever. In 2025, microservices architecture is no longer a buzzword or a luxury for big tech companies,it's becoming the foundation for how organizations of all sizes deliver fast, scalable, and reliable digital solutions.</p>

    <p>So, why are microservices such a big deal right now? And what does adopting them mean for your business? Let's break it down.</p>

    <h2>What Are Microservices, Really?</h2>

    <p><br>
    Think of a traditional monolithic application as a single giant machine. If one gear breaks, the whole system can grind to a halt.<br>
    Microservices architecture takes a different approach: instead of building one massive system, you create smaller, independent services that each handle a specific function. These services can run, scale, and evolve independently,like Lego blocks connecting to form a larger picture.</p>

    <table border="1" cellpadding="1" cellspacing="1" style="width:500px">
      <tbody>
        <tr>
          <td style="vertical-align:top; width:105px">
            <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Aspect</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:245px">
            <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Monolithic Architecture</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:247px">
            <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Microservices Architecture</strong></span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="vertical-align:top; width:105px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Structure</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:245px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Single, unified codebase</span></span></span></p>
          </td>
          <td style="vertical-align:top; width:247px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Independent services/modules</span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="vertical-align:top; width:105px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Scalability</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:245px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Scale entire app</span></span></span></p>
          </td>
          <td style="vertical-align:top; width:247px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Scale services individually</span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="vertical-align:top; width:105px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Deployment</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:245px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Slower, risky full releases</span></span></span></p>
          </td>
          <td style="vertical-align:top; width:247px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Faster, smaller updates</span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="vertical-align:top; width:105px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Resilience</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:245px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">One failure can crash the whole app</span></span></span></p>
          </td>
          <td style="vertical-align:top; width:247px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Isolated failures, system survives</span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="vertical-align:top; width:105px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Tech Choices</strong></span></span></span></p>
          </td>
          <td style="vertical-align:top; width:245px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Limited to one stack</span></span></span></p>
          </td>
          <td style="vertical-align:top; width:247px">
            <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Multiple stacks, best tool for the job</span></span></span></p>
          </td>
        </tr>
      </tbody>
    </table>

    <p><br>
    Best Practices for Adopting Microservices<br>
    Start Small&nbsp;→ Begin with one feature (like authentication or payments).</p>

    <p>Use APIs&nbsp;→ Connect services via REST, gRPC, or GraphQL.</p>

    <p>Containerize&nbsp;→ Use&nbsp;Docker&nbsp;and Kubernetes for portability and orchestration.</p>

    <p>Prioritize Security&nbsp;→ Apply zero-trust principles and robust API gateways.</p>

    <p>Monitor &amp; Automate&nbsp;→ Tools like&nbsp;Prometheus&nbsp;and&nbsp;Azure Monitor&nbsp;ensure visibility and efficient performance tracking.</p>

    <h2>Who Benefits Most from Microservices?</h2>

    <p><br>
    Microservices aren't just for Silicon Valley giants,they're transforming businesses everywhere.</p>

    <div>
      <table cellspacing="0" style="border-collapse:collapse; border:none; width:436px">
        <tbody>
          <tr>
            <td style="vertical-align:top; width:129px">
              <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Business Type</strong></span></span></span></p>
            </td>
            <td style="vertical-align:top; width:307px">
              <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Key Benefits</strong></span></span></span></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top; width:129px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Startups</strong></span></span></span></p>
            </td>
            <td style="vertical-align:top; width:307px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Launch faster, pivot quicker</span></span></span></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top; width:129px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>SMEs</strong></span></span></span></p>
            </td>
            <td style="vertical-align:top; width:307px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Scale without heavy infrastructure costs</span></span></span></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top; width:129px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Enterprises</strong></span></span></span></p>
            </td>
            <td style="vertical-align:top; width:307px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Modernize legacy systems step by step</span></span></span></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top; width:129px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><strong>Software Houses</strong></span></span></span></p>
            </td>
            <td style="vertical-align:top; width:307px">
              <p><span style="color:#ffffff"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif">Deliver modular, future-proof client solutions</span></span></span></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>&nbsp;</p>

    <h3><br>
    Real-World Examples:</h3>

    <p><br>
    Netflix:&nbsp;Runs hundreds of microservices to serve global audiences seamlessly.</p>

    <p>Amazon:&nbsp;Built its retail empire on modular, distributed services.</p>

    <p>Spotify:&nbsp;Powers music streaming and recommendations at scale with microservices.</p>

    <p>What's Next for Microservices?<br>
    Looking ahead, expect microservices to evolve even further with:</p>

    <p>AI-Ready Systems&nbsp;→ Simplified integration of generative AI and automation.</p>

    <p>Serverless Architectures&nbsp;→ Lower operational costs through event-driven systems.</p>

    <p>Global Reach&nbsp;→ Delivering services worldwide with minimal latency and downtime.</p>

    <h2>Final Thought</h2>

    <p><br>
    Microservices aren't just a tech trend,they're a smarter, faster, and more resilient way to build modern software. Whether you're a startup founder or a CTO at a large enterprise, adopting microservices unlocks new levels of agility, scalability, and innovation.</p>

    <p>👉&nbsp;Let's talk.&nbsp;Contact Shwanix Technologies&nbsp;and we'll help you design a microservices strategy</p>
  `;

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
            <div className="font-primary inline-block bg-[#0F172A] border border-[#2563EB]/30 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] backdrop-blur-[30px] text-white text-[11px] rounded-[6px] pr-4 pl-2 py-1 mb-4 lg:mb-5 uppercase tracking-[2px]">
              <p className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex text-[#2563EB]"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                </svg>
                Cloud &amp; Scalability
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#2563EB] mb-2">
              Microservices in 2025: Redefining How Modern Software Is Built
            </h1>

            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
              Microservices are no longer just for tech giants. In 2025, they&apos;re redefining how businesses of all sizes build scalable, resilient, and future-ready software.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section - Blog Content */}
      <section className="pb-5 md:pb-10">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="border border-[#2563EB]/20 shadow-[inset_0_0_50px_rgba(37,99,235,0.05)] rounded-[6px] backdrop-blur-[30px] p-[20px] sm:p-[30px] w-full relative bg-[#0F172A]">
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

            <figure className="w-full mb-6 md:mb-8 lg:mb-10">
              <img
                src="https://www.allomate.com/storage/blogs/Untitled_design_(7)_1759816875.png"
                onError={(e) => {
                  e.currentTarget.src = '/images/blogs/blog-detail-cover-img-1440x630.webp';
                }}
                alt="Blog cover image"
                className="w-full rounded-[6px] max-h-[230px] md:max-h-[630px] h-auto object-cover object-center"
              />
            </figure>

            <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 blog-content max-w-6xl m-auto">
              {/* Left Column: Social Sharing Icons */}
              <div className="col-span-12 md:col-span-2">
                <div id="blogprogresss" className="sticky top-20 flex flex-col items-center space-y-6">
                  <div className="flex flex-col space-y-8">
                    {/* Twitter/X */}
                    <a href="#" className="mx-auto transition-colors duration-300" aria-label="Share on X">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          className="fill-[#8A8A8A] hover:fill-[#2563EB] transition-colors duration-300"
                          d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                        ></path>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="#" className="mx-auto transition-colors duration-300" aria-label="Share on LinkedIn">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          className="fill-[#8A8A8A] hover:fill-[#2563EB] transition-colors duration-300"
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        ></path>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a href="#" className="mx-auto transition-colors duration-300" aria-label="Share on Facebook">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          className="fill-[#8A8A8A] hover:fill-[#2563EB] transition-colors duration-300"
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                        ></path>
                      </svg>
                    </a>

                    {/* Link Copy */}
                    <a href="#" className="group inline-flex mx-auto" aria-label="Copy link">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g className="transition-colors duration-300 fill-[#8A8A8A] group-hover:fill-[#2563EB]">
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"></path>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Blog Content */}
              <div className="col-span-12 md:col-span-10">
                <div
                  className="blog-content prose prose-invert max-w-none text-white [&_p]:mb-4 [&_p]:text-[#8A8A8A] [&_h2]:text-[#2563EB] [&_h2]:font-primary [&_h2]:font-bold [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:md:text-3xl [&_h2]:mb-4 [&_h2]:mt-8 [&_h3]:text-[#2563EB] [&_h3]:font-primary [&_h3]:font-bold [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:mb-3 [&_h3]:mt-6 [&_table]:w-full [&_table]:border [&_table]:border-[#2563EB]/20 [&_table]:rounded [&_table]:overflow-hidden [&_td]:p-3 [&_td]:border [&_td]:border-[#2563EB]/10 [&_td]:text-white [&_strong]:text-white [&_a]:text-[#2563EB] [&_a]:hover:underline"
                  dangerouslySetInnerHTML={{ __html: blogContent }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

