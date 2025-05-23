"use client";

import Culture from "@/components/careers/calture";
import { CareersBanner } from "@/components/careers/careers-banner";
import JobOpenings from "@/components/careers/job-openings";
import { JobOpportunity } from "@/components/careers/job-opportunity";
import Teams from "@/components/careers/teams";
import React from "react";

export default function page() {
  return (
    <>
      <CareersBanner />
      <Culture />
      <Teams />
      <JobOpenings />
      <JobOpportunity />
    </>
  );
}
