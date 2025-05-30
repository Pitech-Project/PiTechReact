"use client";

import "@/styles/global/globals.css";
import { CraftingSolutions } from "@/components/Services/crafting-solutions";
import { Service } from "@/components/home/Service";
import SmoothTextSlider from "@/components/common/top-companies";
import ServicesSolution from "@/components/Services/Service-solutions";

export default function Page() {
  return (
    <>
      <CraftingSolutions />
      <Service />
      <SmoothTextSlider homeSlider={false} />
      <ServicesSolution />
    </>
  );
}
