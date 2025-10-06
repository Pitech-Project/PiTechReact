"use client";

import JobDetail from "@/components/career-detail/job-details";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import React, { Suspense } from "react";

export default function page() {
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <Suspense fallback={<div>Loading job details...</div>}>
        <JobDetail />
      </Suspense>
    </SectionObserverProvider>
  );
}
