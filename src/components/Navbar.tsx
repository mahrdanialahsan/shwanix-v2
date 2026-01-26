'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const navLinks = [
    { href: '/about-us', label: 'About Us' },
    { href: '/our-team', label: 'Our Team' },
    { href: '/the-next-horizon', label: 'The Next Horizon' },
    { href: '/blogs', label: 'Insights' },
    { href: '/career', label: 'Careers' },
  ]

  return (
    <>
      <header 
        id="top-header" 
        ref={headerRef}
        className={`header relative transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      >
        <div className="mil-frame-top container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="shrink-0 navbar-logo">
              <Image 
                src="/Images/shwanix-v6.png" 
                alt="Logo" 
                width={150} 
                height={50}
                className="object-contain"
              />
            </Link>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-6 shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-link font-primary text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Explore More Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="navbar-link font-primary text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  Explore More
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 glass-card-light rounded-[12px] py-2 z-50">
                    <div className="px-4 py-2">
                      <div className="text-[#0F172A] font-primary text-xs font-semibold uppercase tracking-wider mb-2">
                        Our Services
                      </div>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/services/enterprise-solutions"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Enterprise Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ai-and-automation"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            AI and Automation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/mvp-design-and-development"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            MVP Design & Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/web-and-mobile-development"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Web and Mobile App Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/quality-assurance"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Quality Assurance
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/dedicated-teams"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Dedicated Teams
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="border-t border-[#E5E7EB] my-2"></div>
                    <div className="px-4 py-2">
                      <div className="text-[#0F172A] font-primary text-xs font-semibold uppercase tracking-wider mb-2">
                        Our Work
                      </div>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/our-work/khan-law"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Khan Law
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-work/vape-suite"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Vape Suite
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-work/bni-inks"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Bni Inks
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-work/source-code-academia"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Source Code Academia
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-work/green-earth-recyling"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#64748B] hover:text-[#2563EB] text-sm py-1 transition-colors font-medium"
                          >
                            Green Earth Recyling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-work"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block text-[#2563EB] hover:text-[#1D4ED8] text-sm py-1 transition-colors font-semibold"
                          >
                            View All →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Hamburger Menu - Visible only on mobile */}
            <div 
              className={`mil-menu-btn flex lg:hidden ${isMenuOpen ? 'mil-active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <div className={`mil-menu-frame bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] backdrop-blur-[45px] ${isMenuOpen ? 'mil-active' : ''}`}>
        {/* Fixed Close Button */}
        <button 
          onClick={closeMenu}
          className="mil-menu-close fixed top-6 right-6 z-1000 w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-xl font-bold hover:bg-[#1D4ED8] transition-colors"
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Scrollable Content Container */}
        <div className="mil-menu-scroll-container">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mil-menu-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-20 lg:py-24">
                {/* Left Column - Main Navigation */}
                <div className="mil-menu-div flex flex-col">
                  <div className="mil-menu-logo mb-8 lg:mb-12">
                    <Image 
                      src="/Images/shwanix-v6.png" 
                      alt="Logo" 
                      width={200} 
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <nav className="mil-main-menu mb-8 lg:mb-0">
                    <ul className="space-y-4">
                      <li className="mil-has-children">
                        <Link 
                          href="/about-us" 
                          onClick={closeMenu}
                          className="text-white font-primary text-lg lg:text-xl font-medium hover:text-[#2563EB] transition-colors block"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="mil-has-children">
                        <Link 
                          href="/our-team" 
                          onClick={closeMenu}
                          className="text-white font-primary text-lg lg:text-xl font-medium hover:text-[#2563EB] transition-colors block"
                        >
                          Our Team
                        </Link>
                      </li>
                      <li className="mil-has-children">
                        <Link 
                          href="/the-next-horizon" 
                          onClick={closeMenu}
                          className="text-white font-primary text-lg lg:text-xl font-medium hover:text-[#2563EB] transition-colors block"
                        >
                          The Next Horizon
                        </Link>
                      </li>
                      <li className="mil-has-children">
                        <Link 
                          href="/blogs" 
                          onClick={closeMenu}
                          className="text-white font-primary text-lg lg:text-xl font-medium hover:text-[#2563EB] transition-colors block"
                        >
                          Insights
                        </Link>
                      </li>
                      <li className="mil-has-children">
                        <Link 
                          href="/career" 
                          onClick={closeMenu}
                          className="text-white font-primary text-lg lg:text-xl font-medium hover:text-[#2563EB] transition-colors block"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="Copyright mt-8 lg:mt-auto pt-8 border-t border-white/20">
                    <p className="text-white/60 text-sm">
                      Copyright © 2026 Shwanix Technologies.
                    </p>
                  </div>
                </div>

                {/* Right Column - Services, Work, Contact */}
                <div className="mil-menu-right-frame">
                  <div className="mil-menu-right space-y-8">
                    {/* Services & Work Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                      <div>
                        <div className="title-menu mb-4">Our Services</div>
                        <ul className="mil-menu-list space-y-3">
                          <li>
                            <Link 
                              href="/services/enterprise-solutions" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Enterprise Solutions
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/services/ai-and-automation" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              AI and Automation
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/services/mvp-design-and-development" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              MVP Design & Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/services/web-and-mobile-development" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Web and Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/services/quality-assurance" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Quality Assurance
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/services/dedicated-teams" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Dedicated Teams
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="title-menu mb-4">Our Work</div>
                        <ul className="mil-menu-list space-y-3">
                          <li>
                            <Link 
                              href="/our-work/khan-law" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Khan Law
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/our-work/vape-suite" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Vape Suite
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/our-work/bni-inks" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Bni Inks
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/our-work/source-code-academia" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Source Code Academia
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/our-work/green-earth-recyling" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-[#2563EB] text-sm lg:text-base transition-colors block"
                            >
                              Green Earth Recyling
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/our-work" 
                              onClick={closeMenu}
                              className="text-white/80 hover:text-white text-sm lg:text-base transition-colors block font-medium"
                            >
                              View All →
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mil-divider"></div>

                    {/* Locations */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <div className="title-menu mb-3">Pakistan</div>
                        <p className="text-white/70 text-sm lg:text-base">
                          1st Floor, Daftarkhwan | Downtown, Gulberg Lahore Pakistan.
                        </p>
                      </div>
                      <div>
                        <div className="title-menu mb-3">Dubai</div>
                        <p className="text-white/70 text-sm lg:text-base">
                          Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates.
                        </p>
                      </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <div className="title-menu mb-3">Say Hello</div>
                        <a 
                          href="tel:+17754417755" 
                          className="text-white/80 hover:text-white text-sm lg:text-base font-medium tracking-[1px] block mb-2 transition-colors"
                        >
                          +1 775 441 7755
                        </a>
                        <a 
                          href="mailto:connect@shwanix.com" 
                          className="text-white/80 hover:text-white text-sm lg:text-base transition-colors block"
                        >
                          connect@shwanix.com
                        </a>
                      </div>
                      <div>
                        <div className="title-menu mb-3">Our Messengers:</div>
                        <div className="social flex gap-4">
                          <a 
                            href="#" 
                            aria-label="Facebook"
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            f
                          </a>
                          <a 
                            href="#" 
                            aria-label="Twitter"
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            🐦
                          </a>
                          <a 
                            href="#" 
                            aria-label="LinkedIn"
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            in
                          </a>
                          <a 
                            href="#" 
                            aria-label="Instagram"
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            📷
                          </a>
                          <a 
                            href="#" 
                            aria-label="Behance"
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            Be
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
