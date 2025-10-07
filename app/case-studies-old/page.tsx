"use client";

import { AlwaysKeepSimple } from "@/components/common/always-keep-simple";
import { ShipManagement } from "@/components/case-studies/ship-management";
import { ShipManagement2 } from "@/components/case-studies/ship-management2";
import "@/styles/global/globals.css";
import { SectionObserverProvider } from "@/context/SectionObserverContext";

export default function Page() {
  return (
    <SectionObserverProvider>
      <AlwaysKeepSimple />
      <ShipManagement />
      <ShipManagement2 />
    </SectionObserverProvider>
  );
}
