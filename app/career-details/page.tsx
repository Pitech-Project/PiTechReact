"use client";

import JobDetail from "@/components/career-detail/job-details";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import React, { Suspense, useEffect } from "react";

export default function page() {
  useEffect(() => {
    document.title = "Career Details - Pi Techniques";
  }, []);
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <Suspense fallback={<div>Loading job details...</div>}>
        <JobDetail />
      </Suspense>
    </SectionObserverProvider>
  );
}
