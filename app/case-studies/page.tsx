"use client";

import { AlwaysKeepSimple } from "@/components/common/always-keep-simple";
import "@/styles/global/globals.css";
import { CaseStudies } from "@/components/case-studies/caseStudies";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";

export default function Page() {
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <AlwaysKeepSimple />
      <CaseStudies />
      {/* <ShipManagement />
      <ShipManagement2 /> */}
    </SectionObserverProvider>
  );
}
