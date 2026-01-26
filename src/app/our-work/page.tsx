import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function OurWork() {
  const projects = [
    {
      slug: "khan-law",
      name: "Khan Law",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/khan-law_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/khan-law_thumbnail.webp",
    },
    {
      slug: "picpax",
      name: "PicPax",
      category: "Web Development",
      logo: "https://www.allomate.com/storage/portfolios/picpax_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/picpax_thumbnail.webp",
    },
    {
      slug: "source-code-academia",
      name: "Source Code Academia",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/source-code-academia_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/source-code-academia_thumbnail.png",
    },
    {
      slug: "psl",
      name: "PSL",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/psl_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/psl_thumbnail.webp",
    },
    {
      slug: "bni-inks",
      name: "Bni Inks",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/bni-inks_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/bni-inks_thumbnail.webp",
    },
    {
      slug: "smoknic",
      name: "Smoknic",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/smoknic_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/smoknic_thumbnail.webp",
    },
    {
      slug: "danpak",
      name: "Danpak",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/danpak_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/danpak_thumbnail.webp",
    },
    {
      slug: "vape-suite",
      name: "Vape Suite",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/vape-suite_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/vape-suite_thumbnail.webp",
    },
    {
      slug: "disposable-vaping",
      name: "Disposable Vaping",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/disposable-vaping_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/disposable-vaping_thumbnail.webp",
    },
    {
      slug: "pocket-help",
      name: "Pocket Help",
      category: "Web Development",
      logo: "https://www.allomate.com/storage/portfolios/pocket-help_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/pocket-help_thumbnail.webp",
    },
    {
      slug: "iron-horse-residential",
      name: "Iron Horse Residential",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/iron-horse-residential_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/iron-horse-residential_thumbnail.webp",
    },
    {
      slug: "al-khair-distribution",
      name: "Al Khair Distribution",
      category: "Buisness Development",
      logo: "https://www.allomate.com/storage/portfolios/al-khair-distribution_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/al-khair-distribution_thumbnail.webp",
    },
    {
      slug: "green-earth-recyling",
      name: "Green Earth Recyling",
      category: "Web Development",
      logo: "https://www.allomate.com/storage/portfolios/green-earth-recyling_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/green-earth-recyling_thumbnail.webp",
    },
    {
      slug: "astorion",
      name: "Astorion",
      category: "Web Development",
      logo: "https://www.allomate.com/storage/portfolios/astorion_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/astorion_thumbnail.webp",
    },
    {
      slug: "masaj",
      name: "Masaj",
      category: "Web Development",
      logo: "https://www.allomate.com/storage/portfolios/masaj_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/masaj_thumbnail.webp",
    },
    {
      slug: "h-shippers",
      name: "H Shippers",
      category: "Web Development",
      logo: "https://www.allomate.com/storage/portfolios/h-shippers_shwanix-v6.png",
      thumbnail: "https://www.allomate.com/storage/portfolios/h-shippers_thumbnail.webp",
    },
  ];

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
                Our Work
              </p>
            </div>

            <h1 className="!leading-[1.2] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] font-primary font-bold text-white mb-4 sm:mb-6">
              Transformations That Matter
            </h1>

            <p className="font-secondary font-medium text-sm sm:text-base text-white/80 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              We&apos;ve partnered with businesses across industries to build digital platforms that don&apos;t just look good but create measurable impact. From corporate websites to SaaS platforms, eCommerce stores, CRMs, and mobile apps, every project tells a story of growth, efficiency, and transformation.
            </p>

            <Link
              href="/contact-us"
              title="Lets Build Yours"
              className="red-arrow-btn group bg-white text-[#0F172A] rounded-[6px] h-[40px] px-6 inline-flex items-center justify-center hover:px-8 focus:px-8 transition-all duration-300 ease-in-out font-semibold hover:bg-white/90"
            >
              Lets Build Yours
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-full px-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {projects.map((project) => (
              <div key={project.slug}>
                <Link
                  href={`/our-work/${project.slug}`}
                  className="flex flex-col justify-center items-stretch mx-auto relative overflow-hidden no-underline group"
                >
                  {/* Image Container */}
                  <div className="relative flex justify-center items-center overflow-hidden rounded-[6px]">
                    {/* Logo Overlay */}
                    <div className="absolute w-full h-full bg-[#000000]/60 cursor-pointer z-[1] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <div className="absolute z-[99] opacity-100 text-white text-center h-full mx-auto left-0 right-0 uppercase font-medium text-base flex justify-center items-center">
                        <figure>
                          <Image
                            width={150}
                            height={150}
                            src={project.logo}
                            alt={`${project.name} Logo`}
                            className="w-full max-w-[180px] h-full scale-80 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.8)]"
                          />
                        </figure>
                      </div>
                    </div>

                    {/* Main Image */}
                    <figure>
                      <Image
                        width={300}
                        height={300}
                        src={project.thumbnail}
                        alt={`${project.name} Thumbnail`}
                        className="w-full min-h-full object-cover scale-105 filter blur-sm group-hover:blur-0 transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                  </div>

                  {/* Content */}
                  <div className="mt-2.5">
                    <div className="group backdrop-blur-[40px] rounded-[6px] p-4 bg-gradient-slide">
                      <div className="relative flex items-center justify-between z-10">
                        <h3 className="m-0 text-lg font-primary font-medium leading-none text-white group-hover:text-[#60A5FA] transition-colors">
                          {project.name}
                        </h3>
                        <p className="m-0 text-sm font-secondary text-white/80 group-hover:text-[#60A5FA] transition-colors">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

