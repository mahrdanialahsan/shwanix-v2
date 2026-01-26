import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
          <div className="w-full md:w-[80%] lg:w-[60%] m-auto text-center flex items-center justify-center flex-col">
            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-[#60A5FA] mb-2">
              Terms of Use
            </h1>
            <p className="font-secondary font-normal text-sm sm:text-base text-[#8A8A8A]">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
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

            <div className="prose prose-invert max-w-none text-white">
              <p>
                <strong>Effective Date: 05 July 2024</strong>
              </p>

              <p>
                Welcome to the website of Shwanix Technologies LLC (&quot;Allomate,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website at www.allomate.com (&quot;Website&quot;), you agree to comply with and be bound by the following Terms of Use. If you do not agree, please do not use this Website.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">1. Acceptance of Terms</h2>

              <p>
                These Terms govern your use of our Website and any content, features, or services made available through it. By using our Website, you confirm that you have read, understood, and accepted these Terms.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">2. Intellectual Property Rights</h2>

              <p>
                All content on this Website, including text, graphics, code, designs, logos, and software, is the property of Shwanix Technologies LLC, unless otherwise noted.<br />
                You may not reproduce, distribute, or create derivative works from any part of this Website without our prior written consent.
              </p>

              <p>
                Any third-party trademarks or names mentioned remain the property of their respective owners.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">3. Permitted Use</h2>

              <p>You may use this Website only for lawful purposes. You agree not to:</p>

              <ul className="mt-4">
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Introduce malicious code, malware, or disrupt Website functionality.
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Attempt unauthorized access to our Website or servers.
                </li>
                <li className="relative pl-7 mb-1.5 before:content-[''] before:bg-[#60A5FA] before:w-4 before:h-[1px] before:absolute before:left-0 before:top-[10px]">
                  Use Website content for commercial purposes without written approval.
                </li>
              </ul>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">4. Website Information</h2>

              <p>The content provided is for general informational purposes only.</p>

              <p>
                While we strive for accuracy, we make no guarantees regarding completeness, reliability, or timeliness.
              </p>

              <p>
                Nothing on this Website constitutes legal, financial, or professional advice. Engagements with clients are governed by separate contracts.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">5. Third-Party Links</h2>

              <p>
                This Website may include links to third-party websites. These links are provided for convenience only. We do not control or endorse such websites and are not responsible for their content or practices.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">6. Limitation of Liability</h2>

              <p>
                To the maximum extent permitted by law, Shwanix Technologies LLC will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this Website.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">7. Indemnification</h2>

              <p>
                You agree to indemnify and hold harmless Shwanix Technologies LLC, its employees, directors, and partners from any claims, damages, or expenses arising from your use of this Website or violation of these Terms.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">8. Governing Law &amp; Jurisdiction</h2>

              <p>
                These Terms are governed by the laws of the United Arab Emirates. Any disputes will be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">9. Updates to Terms</h2>

              <p>
                We may revise these Terms of Use at any time. Updates will be posted on this page with a revised &quot;Effective Date.&quot; Continued use of the Website indicates acceptance of the updated Terms.
              </p>

              <h2 className="text-[#60A5FA] font-primary font-bold text-xl sm:text-2xl mt-6 mb-3">10. Contact Us</h2>

              <p>If you have any questions about these Terms, please contact us:</p>

              <p>
                Shwanix Technologies LLC<br />
                Dubai, United Arab Emirates<br />
                📧 connect@shwanix.com<br />
                📞 +971 554 168 249
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

