"use client";

import { KeyIndustries } from "@/components/about/industries";
import { OurProcess } from "@/components/about/our-process";
import "@/styles/global/globals.css";
import AboutBanner from "@/components/about/about-banner";
import OurTeam from "@/components/about/our-team";
import OurStory from "@/components/about/our-story";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "About Us - Pi Techniques";
  }, []);
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <AboutBanner />
      <OurStory />
      <KeyIndustries />
      <OurProcess />
      {/* <WhyPI /> */}
      <OurTeam />
    </SectionObserverProvider>
  );
}
