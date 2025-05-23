"use client";

import { AlwaysKeepSimple } from "@/components/common/always-keep-simple";
import { ShipManagement } from "@/components/case-studies/ship-management";
import { ShipManagement2 } from "@/components/case-studies/ship-management2";
import "@/styles/global/globals.css";

export default function Page() {
  return (
    <>
        <AlwaysKeepSimple />
        <ShipManagement />
        <ShipManagement2 />
    </>
  );
}
