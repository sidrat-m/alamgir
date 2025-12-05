"use client"

import HeroSection from "@/components/HeroSection"
import VideoSection from "@/components/VideoSection"
import CalendarSection from "@/components/CalendarSection"
import ManifestoSection from "@/components/ManifestoSection"
import AboutSection from "@/components/AboutSection"
import GetInvolvedSection from "@/components/GetInvolvedSection"
import PollSection from "@/components/PollSection"
import GallarySection from "@/components/GallarySection"
import SloganSection from "@/components/SleoganSection"
export default function CandidatePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <SloganSection/>
      <GallarySection/>
      <VideoSection />
      <CalendarSection />
      <GetInvolvedSection />
      <PollSection />
      
    </>
  )
}
