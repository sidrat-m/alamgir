"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { sharedImages } from "@/data/candidateData"

/**
 * HeroSection (logo moved between text and portrait; portrait reduced)
 *
 * Layout:
 * - 3-column grid on md+:
 *    [ left text ] [ center logo box ] [ right portrait ]
 * - single column on small screens (stacked)
 *
 * Responsiveness:
 * - center logo grows on md/lg breakpoints
 * - portrait height is smaller than before and scales smoothly on tablet/desktop
 * - horizontal gap reduced for tablet via md:gap-6
 */
export default function HeroSection() {
  const { language, t, data } = useLanguageAndData()

  return (
    <section className="relative py-8 md:py-12 bg-linear-to-br from-stone-50 via-white to-green-50/30 overflow-hidden">
      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto px-4 md:px-6  w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 items-center md:items-start gap-6 md:gap-6 lg:gap-8">
          {/* Left column: Text */}
          <div className="order-3 md:order-1 md:pr-4 lg:pr-6  md:col-span-3 lg:col-span-3 sm:col-span-4">
            <div className="relative -mb-1 w-[150px] sm:w-[210px] md:w-[220px]">
              <Image
                src={sharedImages.bnpPoster}
                alt="Poster"
                width={220}
                height={220}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

          
        
            <div className="block sm:hidden  flex items-center gap-3 mb-0">
              <h1 className={`${language === "en" ? "text-4xl md:text-3xl lg:text-5xl xl:text-10xl" : "text-4xl md:text-3xl lg:text-5xl xl:text-10xl"} font-serif font-bold leading-tight tracking-tight text-stone-900`}>
                {data.firstName} {data.lastName}
                <span className="text-red-600">.</span>
              </h1>
              <div className="relative w-20 h-20 sm:w-10 sm:h-10 shrink-0">
                <Image
                  src={sharedImages.electoralSymbol}
                  alt="Electoral Symbol"
                  fill
                  className="object-contain"
                />
              </div>
            </div>





            <div className="hidden sm:block flex items-center gap-3 mt-3">
              <h1
                className={
                  (language === "en" ? "text-4xl md:text-3xl lg:text-5xl xl:text-10xl" : "text-4xl md:text-3xl lg:text-5xl xl:text-10xl") +
                  " font-serif font-bold tracking-tight text-stone-900 leading-tight"
                }
              >
                {data.firstName} {data.lastName}
                <span className="text-red-600">.</span>
              </h1>
            </div>

            {data.heroSlogan && (
              <p className="text-sm sm:text-base text-green-600/90 font-medium mt-2">
                {data.heroSlogan}
              </p>
            )}

            <p className="text-base md:text-lg text-stone-600 max-w-xl w-full mt-4">
              {data.bio.shortSegments?.length
                ? data.bio.shortSegments.map((segment: any, index: number) => (
                    <span key={`bio-seg-${index}`} className={segment.className || undefined}>
                      {segment.text}
                    </span>
                  ))
                : data.bio.short}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-[50%]">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-green-800 to-green-900 text-white h-12 px-6 text-base rounded-full w-full sm:flex-1"
              >
                <Link href="/#volunteer" className="flex items-center justify-center">
                  {t.hero.joinButton}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-800/30 text-green-950 h-12 px-6 text-base rounded-full w-full sm:flex-1"
              >
                <Link href="/manifesto" className="flex items-center justify-center">
                  {t.hero.manifestoButton}
                </Link>
              </Button>
            </div>
          </div>

          {/* Center column: Logo box between text and portrait */}
          <div className="order-3 md:order-2 flex items-center justify-center sm:justify-end md:col-span-1 lg:col-span-1 sm:col-span-1 hidden sm:block">
            <div
              className="rounded-lg flex items-center justify-center sm:justify-start 
                         w-20 h-20 sm:w-25 sm:h-25 md:w-38 md:h-38 lg:w-40 lg:h-40 lg:mt-68 md:mt-68 sm:mb-50 transition-all"
              aria-hidden
            >
              <div className="relative w-11/12 h-11/12 md:w-10/12 md:h-10/12 lg:w-[90%]">
                <Image
                  src={sharedImages.electoralSymbol}
                  alt="Symbol"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right column: Smaller portrait */}
          <div className="order-1 md:order-3 flex justify-center  md:justify-end md:col-span-2 lg:col-span-2 sm:col-span-5">
            <div className="relative w-full max-w-[360px] md:max-w-[380px] lg:max-w-[480px]">
              {/* portrait container with reduced height for tablet */}
              <div className="relative rounded-md overflow-hidden
                              h-[240px] sm:h-[320px] md:h-[320] md:mt-20 lg:mt-7 lg:h-[390px]  lg:w-[95%]">
                <Image
                  src={sharedImages.hero}
                  alt={data.firstName}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
                  className="object-contain md:object-cover object-center"
                  priority
                />
              </div>

              {/* badge under portrait */}
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="text-sm font-semibold text-cyan-950 uppercase tracking-wider">
                    {data.partySlogan}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
