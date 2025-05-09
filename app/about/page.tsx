"use client"

import { KeyIndustries } from "@/components/industries";
import { OurProcess } from "@/components/our-process";
import { OurTeam } from "@/components/our-team";
import WhoWeAre from "@/components/who-we-are";
import { WhyPI } from "@/components/why-PI";
import "../global/globals.css";
import { lightTheme } from "../styles/MUI/theme";
import { ThemeProvider } from "@mui/material";
import AboutBanner from "@/components/about-banner";

export default function Page() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AboutBanner />
        <WhoWeAre title={"ABOUT US "} buttondisplay={false} aboutus={true} />
        <KeyIndustries />
        <OurProcess />
        <WhyPI />
        <OurTeam />
      </ThemeProvider>
    </>
  );
}
