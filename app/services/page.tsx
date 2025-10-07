"use client";

import "@/styles/global/globals.css";
import { CraftingSolutions } from "@/components/Services/crafting-solutions";
import { Service } from "@/components/Services/crafting-solutions/Service";
import SmoothTextSlider from "@/components/common/top-companies";
import ServicesSolution from "@/components/Services/Service-solutions";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Services - Pi Techniques";
  }, []);
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <CraftingSolutions />
      <Service />
      <SmoothTextSlider homeSlider={false} />
      <ServicesSolution />
    </SectionObserverProvider>
  );
}
