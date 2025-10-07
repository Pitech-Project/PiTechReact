"use client";

import { AlwaysKeepSimple } from "@/components/common/always-keep-simple";
import "@/styles/global/globals.css";
import { CaseStudies } from "@/components/case-studies/caseStudies";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Case Studies - Pi Techniques";
  }, []);
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
