"use client";

import { KeyIndustries } from "@/components/about/industries";
import { OurProcess } from "@/components/about/our-process";
import WhoWeAre from "@/components/common/who-we-are";
import { WhyPI } from "@/components/about/why-PI";
import "@/styles/global/globals.css";
import AboutBanner from "@/components/about/about-banner";
import OurTeam from "@/components/about/our-team";

export default function Page() {
  return (
    <>
      <AboutBanner />
      <WhoWeAre title={"ABOUT US "} buttondisplay={false} aboutus={true} />
      <KeyIndustries />
      <OurProcess />
      <WhyPI />
      <OurTeam />
    </>
  );
}
