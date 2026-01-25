'use client'

import React from 'react'
import Link from 'next/link'

interface BlogCardProps {
  href: string
  image: string
  category: string
  title: string
  isLarge?: boolean
  video?: string
  poster?: string
}

const BlogCard: React.FC<BlogCardProps> = ({ href, image, category, title, isLarge = false, video, poster }) => {
  if (isLarge) {
    const useVideo = Boolean(video && poster)
    return (
      <Link href={href} className="group block h-full rounded-[14px] overflow-hidden border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
        <div className="relative w-full h-full min-h-[300px] md:min-h-[350px] lg:min-h-0">
          {/* Video/image 100% on card */}
          {useVideo ? (
            <video
              title={title}
              autoPlay
              loop
              playsInline
              preload="metadata"
              muted
              poster={poster}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              width={800}
              height={600}
              src={image}
              onError={(e) => {
                e.currentTarget.src = 'https://www.allomate.com/images/blogs/thumbnail-blog-card-744x550.webp';
              }}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              alt={title}
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent z-10" />
          {/* Text on image */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 left-4 z-20 text-[#2563EB]"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <p className="font-secondary font-medium text-xs sm:text-sm text-[#60A5FA] capitalize mb-2">
              {category}
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-primary mb-3 line-clamp-2">
              {title}
            </h2>
            <div className="bg-[#FACC15] rounded-[12px] w-[40px] h-[40px] flex items-center justify-center group-hover:w-[70px] group-hover:bg-[#EAB308] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                className="bi bi-arrow-right-short text-[#000000] transition-colors"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group block">
      <div className="relative glass-card-dark-transparent rounded-[14px] p-4 md:p-5 h-[200px] sm:h-[220px] md:h-[240px] flex flex-col justify-between border border-[#60A5FA]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-3 right-3 text-[#60A5FA]"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
        </svg>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-secondary font-medium text-xs text-[#60A5FA] capitalize mb-2">
              {category}
            </p>
            <h2 className="text-sm sm:text-base font-bold text-white font-primary line-clamp-3">
              {title}
            </h2>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <figure className="relative">
              <img
                src={image}
                onError={(e) => {
                  e.currentTarget.src = 'https://www.allomate.com/images/blogs/thumbnail-blog-card200x200.jpg';
                }}
                width={80}
                height={80}
                alt={title}
                className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[14px] object-cover border border-white/20"
              />
            </figure>
            <div className="bg-[#FACC15] rounded-[12px] w-[35px] h-[35px] flex items-center justify-center group-hover:w-[60px] group-hover:bg-[#EAB308] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="bi bi-arrow-right-short text-[#000000] transition-colors"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard

