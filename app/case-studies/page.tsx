"use client";

import { AlwaysKeepSimple } from "@/components/common/always-keep-simple";
import "@/styles/global/globals.css";
import { CaseStudies } from "@/components/case-studies/caseStudies";

export default function Page() {
  return (
    <>
      <AlwaysKeepSimple />
      <CaseStudies />
      {/* <ShipManagement />
      <ShipManagement2 /> */}
    </>
  );
}
