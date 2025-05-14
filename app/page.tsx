"use client";

import { Box, ThemeProvider } from "@mui/material";
import { lightTheme } from "./styles/MUI/theme";
import "./global/globals.css";
import Count from "@/components/count";
import { Services } from "@/components/services";
import Testimonial from "@/components/testimonials";
import SmoothTextSlider from "@/components/top-companies";
import WhoWeAre from "@/components/who-we-are";
import OurWorkCarousel from "@/components/our-work-carousel";
import HomeBanner from "@/components/home-banner";

export default function Home() {
  const transformup = true;
  return (
    <ThemeProvider theme={lightTheme}>
      <Box bgcolor={"custom.bgcolor"}>
        <HomeBanner transformup={transformup} />
        <Count />
        <WhoWeAre
          title={"who we are "}
          buttondisplay={true}
          aboutus={false}
          transformup={transformup}
        />
        <Services transformup={transformup} />
        <OurWorkCarousel />
        <SmoothTextSlider homeSlider={true} />
        <Testimonial />
      </Box>
    </ThemeProvider>
  );
}
