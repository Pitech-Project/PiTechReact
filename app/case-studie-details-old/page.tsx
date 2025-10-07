"use client";

import "@/styles/global/globals.css";
import { AccessPlateforms } from "@/components/case-studie-details/access-plateforms";
import { Challenges } from "@/components/case-studie-details/challenges";
import { AlwaysKeepSimple } from "@/components/common/always-keep-simple";
import { FeaturesOfProject } from "@/components/case-studie-details/Features-of-project";

export default function Page() {
  return (
    <>
      <AlwaysKeepSimple />
      <AccessPlateforms />
      <Challenges />
      <FeaturesOfProject />
    </>
  );
}
