import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-3 sm:px-4 mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#60A5FA] mb-2">
              Privacy Policy
            </h1>
            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-area m-auto list-none [&_ul]:mt-4 [&_li]:relative [&_li]:pl-7 [&_li]:mb-1.5 [&_li::before]:content-[''] [&_li::before]:bg-[#60A5FA] [&_li::before]:w-4 [&_li::before]:h-[1px] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-[10px] [&_li::before]:text-2xl pb-3 md:pb-6">
        <div className="container mx-auto px-3 sm:px-4">
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

            <div className="prose prose-invert max-w-none text-white">
              <p>
                <strong>Last updated: 21-August-2025</strong>
              </p>

              <p>
                <br />
                At Shwanix Technologies (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), your privacy matters. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you interact with our website, digital platforms, and services.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">1. Information We Collect</h2>

              <p>
                We may collect the following types of information:<br />
                Personal Information: Name, email address, phone number, company name, job title, billing details, and other identifiers you provide when contacting us, requesting services, or signing up for updates.
              </p>

              <ul className="mt-4">
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  <strong>Usage Data:</strong> Information on how you interact with our website and platforms, such as IP address, browser type, device information, pages visited, and time spent.
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies, pixels, and analytics tools to improve user experience, monitor site performance, and understand visitor behavior.
                </li>
              </ul>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">2. How We Use Your Information</h2>

              <p>We process your information for purposes including:</p>

              <ul className="mt-4">
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Delivering and improving our services
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Personalizing your digital experience
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Responding to inquiries and providing customer support
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Processing payments and invoicing
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Sending relevant updates, insights, and marketing communications (you may opt out anytime)
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Ensuring compliance with legal, contractual, and security obligations
                </li>
              </ul>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">3. How We Share Your Information</h2>

              <p>We do not sell your personal data. We may share information only in these cases:</p>

              <ul className="mt-4">
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  <strong>With Service Providers:</strong> Trusted vendors who assist with hosting, analytics, payment processing, and communication.
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  <strong>For Legal Reasons:</strong> If required by law, regulation, or legal process.
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.
                </li>
              </ul>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">4. Data Security</h2>

              <p>
                We implement appropriate technical and organizational safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">5. Data Retention</h2>

              <p>
                We retain personal information only as long as necessary to fulfill the purposes outlined in this Policy or as required by law.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">6. Your Rights</h2>

              <p>Depending on your jurisdiction, you may have rights to:</p>

              <ul className="mt-4">
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Access the personal information we hold about you
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Request correction or deletion of your data
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Object to certain data uses
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Withdraw consent for marketing communications
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Request portability of your data
                </li>
              </ul>

              <p>
                To exercise these rights, contact us at <strong>connect@shwanix.com.</strong>
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">7. International Data Transfers</h2>

              <p>
                As a company operating globally, your data may be transferred and processed outside your country of residence, including in regions with different data protection laws. We take steps to ensure such transfers are safeguarded.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">8. Third-Party Links</h2>

              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">9. Updates to This Policy</h2>

              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this Policy periodically.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">10. Contact Us</h2>

              <p>If you have questions, concerns, or requests related to this Privacy Policy, please contact us:</p>

              <p>
                Shwanix Technologies LLC<br />
                Sharaja media center, Shams, Sharjah, UAE.<br />
                Email: connect@shwanix.com<br />
                Phone: +97 554 168 2407
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

