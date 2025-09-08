"use client";

import JobDetail from "@/components/career-detail/job-details";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading job details...</div>}>
        <JobDetail />
      </Suspense>
    </>
  );
}
