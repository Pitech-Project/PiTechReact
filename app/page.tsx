"use client"

import { Box, ThemeProvider } from "@mui/material";
import { lightTheme } from "./styles/MUI/theme";
import "./global/globals.css";
import TeamBusinessOffice from "@/components/team-business-office";
import Count from "@/components/count";
import { Services } from "@/components/services";
import Testimonial from "@/components/testimonials";
import SmoothTextSlider from "@/components/top-companies";
import WhoWeAre from "@/components/who-we-are";
import OurWorkCarousel from "@/components/our-work-carousel";

export default function Home() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box bgcolor={'custom.bgcolor'}>
        <TeamBusinessOffice title={"Commitment"} afterbreaktitle={"to customised solutions"} subtitle={"Inside of every problem lies an opportunity"} buttondisplay={true} />
        <Count />
        <WhoWeAre title={"who we are "} buttondisplay={true} aboutus={false}/>
        <Services />
        <OurWorkCarousel />
        <SmoothTextSlider />
        <Testimonial />
      </Box>
    </ThemeProvider>
  );
}
