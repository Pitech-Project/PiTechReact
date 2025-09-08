"use client";

import { KeyIndustries } from "@/components/about/industries";
import { OurProcess } from "@/components/about/our-process";
import "@/styles/global/globals.css";
import AboutBanner from "@/components/about/about-banner";
import OurTeam from "@/components/about/our-team";
import OurStory from "@/components/about/our-story";

export default function Page() {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <KeyIndustries />
      <OurProcess />
      {/* <WhyPI /> */}
      <OurTeam />
    </>
  );
}
