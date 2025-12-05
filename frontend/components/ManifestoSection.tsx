"use client"

import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData";
import { ArrowRight, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Users,
  CheckCircle2
}

export default function ManifestoSection() {
  const { t, data } = useLanguageAndData();
  const candidateData = data;

  // Slice the manifesto items array to only show the first 3 items
  const manifestoItems = candidateData.manifesto.items.slice(0, 3);

  return (
  <section id="manifesto" className="py-12 sm:py-16 lg:py-24 text-white relative overflow-hidden bg-gradient-to-b from-stone-100/80 to-cyan-950/20">
  <div
    className="absolute inset-0 opacity-20"
    style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
  />

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6 ">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cyan-950 text-shadow-lg mb-3 sm:mb-4 lg:mb-6">
          {candidateData.manifesto.title}
        </h2>
        <p className="text-base sm:text-lg text-green-900 leading-relaxed opacity-90">
          {candidateData.manifesto.description}
        </p>
      </div>
      <Button variant="link" className="text-cyan-950 text-base sm:text-lg p-0 h-auto group hover:no-underline whitespace-nowrap hover:underline">
        <Link href="/manifesto">View Full Policy</Link>
        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
      {manifestoItems.map((item, i) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2;
        return (
          <div
            key={i}
            className="bg-green-900/80 backdrop-blur-sm border border-green-800 p-6 sm:p-8 lg:p-10 rounded-xl group shadow-lg relative overflow-hidden min-h-[300px] hover:min-h-[350px]" // Added min-h classes
          >
            {/* Card Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out group-hover:translate-y-[-20%]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-cyan-950 transition-colors">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-shadow-md group-hover:text-white-950">{item.title}</h3>
            </div>

            {/* Hidden Details */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-green-900/90 text-green-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <p className="text-sm sm:text-base leading-relaxed opacity-80">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

  )
}
