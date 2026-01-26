'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-full px-[20px] mt-20 sm:mt-24">
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
                Contact Us
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-white mb-4 sm:mb-6">
              <b>We&apos;re ready to assist you</b>
            </h1>

            <p className="font-secondary font-medium text-sm sm:text-base text-white/80 leading-relaxed">
              Have questions? We&apos;re ready to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="relative flex flex-col justify-between h-full rounded-[14px] p-4 md:p-6 glass-card-dark-transparent border border-[#60A5FA]/20 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#60A5FA"
              viewBox="0 0 16 16"
              className="inline-flex mb-3"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>

            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Column - Contact Information */}
              <div className="w-full lg:w-6/12 relative flex flex-col justify-between">
                <div className="w-full md:w-9/12">
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
                        Get In Touch
                      </p>
                    </div>

                    <h2 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary mb-4">
                      Share the details of your project with us
                    </h2>

                    <p className="font-secondary font-medium text-sm text-white/80 mb-6 leading-relaxed">
                      Planning a digital project? We&apos;d love to hear what you&apos;ve got in mind.
                    </p>
                  </div>
                </div>

                <div className="mil-menu-right-frame text-white contact-page-div">
                  <div className="mil-menu-right">
                    {/* Locations */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 text-white all-locations-company mb-6">
                      <div>
                        <div className="title-menu text-[#60A5FA] font-primary text-sm font-semibold uppercase tracking-wider mb-2">
                          Pakistan
                        </div>
                        <p className="font-secondary font-medium text-sm text-white/80 mb-3 leading-relaxed">
                          1st Floor, Daftarkhwan | Downtown, Gulberg Lahore Pakistan.
                        </p>
                      </div>

                      <div>
                        <div className="title-menu text-[#60A5FA] font-primary text-sm font-semibold uppercase tracking-wider mb-2">
                          Dubai
                        </div>
                        <p className="font-secondary font-medium text-sm text-white/80 mb-3 leading-relaxed">
                          Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates.
                        </p>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6">
                      <div>
                        <div className="title-menu text-[#60A5FA] font-primary text-sm font-semibold uppercase tracking-wider mb-2">
                          Say Hello
                        </div>
                        <a
                          href="tel:+17754417755"
                          className="mb-0 text-base font-medium tracking-[1px] text-white hover:text-[#60A5FA] transition-colors block mb-2"
                        >
                          +1 775 441 7755
                        </a>
                        <a
                          href="mailto:connect@shwanix.com"
                          className="text-white hover:text-[#60A5FA] transition-colors block"
                        >
                          connect@shwanix.com
                        </a>
                      </div>

                      <div>
                        <div className="title-menu text-[#60A5FA] font-primary text-sm font-semibold uppercase tracking-wider mb-2">
                          Our Messengers:
                        </div>
                        <div className="social organization-social flex gap-4 mt-4">
                          <a
                            href="https://www.facebook.com/allomatesolutions/"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1E293B] hover:bg-[#2563EB] text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                            </svg>
                          </a>

                          <a
                            target="_blank"
                            href="https://www.twitter.com/allomatesol/"
                            aria-label="Twitter"
                            rel="noopener noreferrer"
                            className="bg-[#1E293B] hover:bg-[#2563EB] text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                            </svg>
                          </a>

                          <a
                            target="_blank"
                            href="https://www.linkedin.com/company/allomatesolutions/"
                            aria-label="Linkedin"
                            rel="noopener noreferrer"
                            className="bg-[#1E293B] hover:bg-[#2563EB] text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-linkedin"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                            </svg>
                          </a>

                          <a
                            target="_blank"
                            href="https://www.instagram.com/allomatesol"
                            aria-label="Instagram"
                            rel="noopener noreferrer"
                            className="bg-[#1E293B] hover:bg-[#2563EB] text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                            </svg>
                          </a>

                          <a
                            target="_blank"
                            href="https://www.behance.net/allomatesol"
                            aria-label="Behance"
                            rel="noopener noreferrer"
                            className="bg-[#1E293B] hover:bg-[#2563EB] text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-behance"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"></path>
                            </svg>
                          </a>

                          <a
                            target="_blank"
                            href="https://www.clutch.co/profile/allomate-solutions"
                            aria-label="Clutch"
                            rel="noopener noreferrer"
                            className="bg-[#1E293B] hover:bg-[#2563EB] text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 59.8 60"
                              xmlSpace="preserve"
                              className="w-4 h-4"
                            >
                              <path
                                fill="#FFFFFF"
                                d="M41,42.3c-3.1,2.7-7.1,4.2-11.2,4.1c-9.5,0-16.5-7-16.5-16.5S20,13.6,29.8,13.6c4.1-0.1,8.1,1.4,11.2,4.1
                                        l2.1,1.8l9.2-9.2L50,8.2c-5.5-4.9-12.7-7.6-20.1-7.5C12.8,0.6,0.4,12.9,0.4,29.8s12.7,29.6,29.5,29.6c7.5,0.1,14.8-2.7,20.4-7.7
                                        l2.3-2.1l-9.4-9.2L41,42.3z"
                              ></path>
                              <circle fill="#FFFFFF" cx="29.4" cy="30" r="9.9"></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="w-full lg:w-6/12 relative">
                <div className="bg-[#2563EB]/60 backdrop-blur-[10px] text-white p-3 md:p-6 relative z-[111] rounded-[6px]">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000] mb-2">
                    Send us a message.
                  </h2>
                  <form id="contact-form">
                    <div className="grid grid-cols-12 gap-3 sm:gap-5">
                      {/* First Name */}
                      <div className="group col-span-12 sm:col-span-6">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-[#000000]/70"
                          >
                            First name*
                          </label>
                          <input
                            type="text"
                            name="contact_first_name"
                            placeholder="Enter First Name"
                            className="only_alphabets inquiry-required contact_first_name w-full px-3 sm:px-4 md:px-5 py-[10px] h-[40px] text-sm rounded-[6px] bg-transparent border text-[#000000] border-[#000000]/30 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="group col-span-12 sm:col-span-6">
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-[#000000]/70"
                          >
                            Last name*
                          </label>
                          <input
                            type="text"
                            name="contact_last_name"
                            placeholder="Enter Last name"
                            className="only_alphabets inquiry-required contact_last_name w-full px-3 sm:px-4 md:px-5 py-[10px] h-[40px] text-sm rounded-[6px] bg-transparent border text-[#000000] border-[#000000]/30 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="group col-span-12 sm:col-span-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-[#000000]/70"
                          >
                            Email Address*
                          </label>
                          <input
                            type="email"
                            name="contact_email"
                            placeholder="Example@gmail.com"
                            className="inquiry-required contact_email w-full px-3 sm:px-4 md:px-5 py-[10px] h-[40px] text-sm rounded-[6px] bg-transparent border text-[#000000] border-[#000000]/30 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="group col-span-12 sm:col-span-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-[#000000]/70"
                          >
                            Phone number
                          </label>
                          <input
                            type="tel"
                            name="contact_phone"
                            placeholder="Enter phone number"
                            className="only_numerics contact_phone w-full px-3 sm:px-4 md:px-5 py-[10px] h-[40px] text-sm rounded-[6px] bg-transparent border text-[#000000] border-[#000000]/30 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="group col-span-12">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-[#000000]/70">
                            Message*
                          </label>
                          <textarea
                            name="contact_message"
                            placeholder="Enter Description"
                            rows={5}
                            className="inquiry-required contact_message w-full h-[90px] sm:h-[110px] md:h-[130px] px-5 py-4 text-sm rounded-[6px] bg-transparent border text-[#000000] border-[#000000]/30 focus:ring-2 focus:ring-[#2563EB] focus:outline-none resize-none"
                          ></textarea>
                        </div>
                      </div>

                      {/* Checkbox */}
                      <div className="group col-span-12">
                        <div className="md:col-span-2">
                          <label className="inline-flex items-start space-x-2">
                            <input
                              type="checkbox"
                              id="contact-accept-agreement"
                              className="mt-1"
                            />
                            <span className="text-sm text-[#000000]/80">
                              By submitting this form, you agree to receive electronic
                              communications from us, such as marketing emails. You can opt out
                              at any time.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="button"
                        className="save-contact flex items-center flex-wrap justify-center px-8 h-[36px] sm:h-[38px] bg-transparent border border-[#000000] hover:bg-[#000000] text-[#000000] hover:text-[#2563EB] font-primary rounded-[6px] font-semibold text-xs sm:text-sm transition"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
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

