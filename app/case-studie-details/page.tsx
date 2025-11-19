"use client";

import "@/styles/global/globals.css";
import ProjectTopSection from "@/components/case-studie-details/projectTopSection";
import ProjectInfo from "@/components/case-studie-details/projectInfo";
import ChallengeSec from "@/components/case-studie-details/challengeSec";
import Pisolution from "@/components/case-studie-details/pisolutions";
import KeyFeatures from "@/components/case-studie-details/keyFeatures";
import LongTermImpact from "@/components/case-studie-details/longTermImpact";
import GetInTouch from "@/components/case-studie-details/getInTouch";
import { useSearchParams } from "next/navigation";
import { caseStudyData } from "@/lib/caseStudyDetailsData";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Suspense, useEffect } from "react";

// Disable prerendering and make this page dynamic
export const dynamic = "force-dynamic";

function CaseStudyContent({ projectname, doctitle }: any) {
  useEffect(() => {
    document.title = `${doctitle} - Pi Techniques`;
  }, [doctitle]);

  if (!projectname) {
    return <div>No project specified.</div>;
  }

  const project = caseStudyData[projectname as keyof typeof caseStudyData];
  if (!project) {
    return <div>Project not found: {projectname}</div>;
  }

  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <ProjectTopSection project={project} />
      <Box display={isTabletView ? "none" : "block"}>
        <ProjectInfo project={project} />
      </Box>
      <ChallengeSec project={project} />
      <Pisolution project={project} />
      <KeyFeatures project={project} />
      <LongTermImpact project={project} />
      <GetInTouch project={project} />
    </SectionObserverProvider>
  );
}

function CaseStudyWrapper() {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project");
  const doctitle =
    projectName === "chanakya"
      ? "Chanakya"
      : projectName === "ibs"
        ? "IBS Intelligence"
        : projectName === "citiusTech"
          ? "CitiusTech"
          : "Taj";

  return <CaseStudyContent projectname={projectName} doctitle={doctitle} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading case study...</div>}>
      <CaseStudyWrapper />
    </Suspense>
  );
}
