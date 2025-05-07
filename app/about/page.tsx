"use client"

import { KeyIndustries } from "@/components/industries";
import { OurProcess } from "@/components/our-process";
import { OurTeam } from "@/components/our-team";
import TeamBusinessOffice from "@/components/team-business-office";
import WhoWeAre from "@/components/who-we-are";
import { WhyPI } from "@/components/why-PI";
import "../global/globals.css";
import { lightTheme } from "../styles/MUI/theme";
import { ThemeProvider } from "@mui/material";

export default function Page() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <TeamBusinessOffice title={"Always keep it "} afterbreaktitle={" simple"} subtitle={"Strong team with a passion for technology"} buttondisplay={false} />
        <WhoWeAre title={"ABOUT US "} buttondisplay={false} aboutus={true} />
        <KeyIndustries />
        <OurProcess />
        <WhyPI />
        <OurTeam />
      </ThemeProvider>
    </>
  );
}
