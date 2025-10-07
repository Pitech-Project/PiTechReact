"use client";

import Culture from "@/components/careers/calture";
import { CareersBanner } from "@/components/careers/careers-banner";
import JobOpenings from "@/components/careers/job-openings";
import { JobOpportunity } from "@/components/careers/job-opportunity";
import Teams from "@/components/careers/teams";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    document.title = "Career - Pi Techniques";
  }, []);
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <CareersBanner />
      <Culture />
      <Teams />
      <JobOpenings />
      <JobOpportunity />
    </SectionObserverProvider>
  );
}
