'use client'

import { useLanguageAndData } from "@/hooks/useLanguageAndData";

export default function SloganSection() {
  const { t, data } = useLanguageAndData();
  const candidateData = data;

  return (
    <section id="slogans" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white-900 to-stone-200/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cyan-950 text-shadow-lg">
            {candidateData.sloganSection.title} {/* Candidate Data for Title */}
          </h2>
          <p className="text-base sm:text-lg text-green-900 leading-relaxed opacity-90 mt-4">
            {candidateData.sloganSection.subtitle} {/* Candidate Data for Subtitle */}
          </p>
        </div>

        {/* Slogans Grid (Stacked) */}
        <div className="flex flex-col gap-6 max-w-3/4 mx-auto items-center"> {/* Centered and 3/4 width */}
          {candidateData.sloganSection.slogans.map((slogan, index) => (
            <div
              key={index}
              className="bg-white text-stone-900 p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full "            >
              <p className="text-lg sm:text-xl font-semibold text-teal-900 mb-2 text-center">
                {slogan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
