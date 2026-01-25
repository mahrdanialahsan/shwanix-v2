'use client'

import React from 'react'

interface ReviewCardProps {
  name: string
  role: string
  rating: number
  image: string
  review: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, rating, image, review }) => {
  return (
    <div className="shrink-0 w-[337px] relative flex flex-col justify-between min-h-[260px] sm:min-h-[350px] md:min-h-[470px] rounded-[14px] p-4 md:p-6 glass-card-light transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-flex plus-icon4"
        width="22"
        height="22"
        fill="#2563EB"
        viewBox="0 0 16 16"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
      </svg>
      <div className="flex items-center justify-between">
        <div className="mb-3">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FACC15] font-primary flex items-end">
              {rating}
              <span className="text-xl text-[#64748B]"> /5</span>
            </p>
          </div>
          <div className="flex mt-1 sm:mt-3 gap-1 text-lg">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <svg
                  className="w-4 h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.311 20.917"
                >
                  <path
                    fill={i < rating ? "#FACC15" : "#E5E7EB"}
                    d="M5.036,21.337A.74.74,0,0,1,4,20.512l1.157-6.6L.241,9.236A.776.776,0,0,1,.635,7.912l6.83-.971L10.511.907a.716.716,0,0,1,1.293,0l3.045,6.034,6.83.971a.775.775,0,0,1,.393,1.325l-4.911,4.68 1.157 6.6a.74.74,0,0,1-1.04.825l-6.123-3.146-6.12,3.146Z"
                  ></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div>
          <figure className="relative">
            <img
              src={image}
              onError={(e) => {
                e.currentTarget.src = 'https://www.allomate.com/images/client-img01.webp';
              }}
              width={100}
              height={100}
              alt={`${name} Image`}
              className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] rounded-[14px] object-cover border border-[#E5E7EB]"
            />
          </figure>
        </div>
      </div>
      <div className="my-3">
        <h3 className="text-base sm:text-xl font-bold text-[#0F172A] font-primary flex items-end leading-relaxed">
          ❝ {review} ❞
        </h3>
      </div>
      <div>
        <h3 className="font-primary text-[#0F172A] text-base sm:text-xl font-semibold">
          {name}
          <span className="font-secondary font-medium text-sm sm:text-base text-[#64748B] block">
            {role}
          </span>
        </h3>
      </div>
    </div>
  )
}

export default ReviewCard

